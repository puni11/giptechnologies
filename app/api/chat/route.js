import { searchFlights } from "@/lib/travel";
import { google } from "@ai-sdk/google";
import {
  streamText,
  createUIMessageStreamResponse,
  toUIMessageStream
} from "ai";

const SYSTEM_PROMPT = `
You are a helpful travel assistant.

When a user asks to search for flights, use the searchFlights tool.

Extract:
- departure city
- destination city
- travel date

If any required information is missing, ask the user for it before calling the tool.

Once the tool returns results, summarize the available flights in a clear and friendly way, including:
- Airline
- Flight number
- Departure time
- Arrival time
- Price
`

export async function POST(req) {
  const { messages } = await req.json();

  // Manually clean up the UI messages for the AI model
  const coreMessages = messages.map((msg) => {
    // If the message has a 'parts' array (new streaming format)
    if (msg.parts) {
      // Extract only the actual text strings, ignoring internal streaming states
      const textContent = msg.parts
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("");

      return {
        role: msg.role,
        content: textContent,
      };
    }

    // Standard fallback for older message formats
    return {
      role: msg.role,
      content: msg.content,
    };
  });

  const result = streamText({
    model: google("gemini-3.5-flash"),
    system: SYSTEM_PROMPT, 
    messages: coreMessages, // <-- Use the manually mapped messages
    tools: {
      searchFlights
    },
    maxSteps: 5,
  });
console.log(result)
  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
      originalMessages: messages,
    }),
  });
}