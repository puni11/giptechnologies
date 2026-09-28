import { tool } from "ai";
import { z } from "zod";

export const searchFlights = tool({
  description:
    "Search available flights between two cities on a given date.",

  inputSchema: z.object({
    from: z.string(),
    to: z.string(),
    date: z.string(),
  }),

  execute: async ({ from, to, date }) => {
    // Imagine this data comes from Amadeus, Skyscanner, etc.
    console.log("running", from, to, date)
    return [
      {
        id: "AI101",
        airline: "Air India",
        from,
        to,
        date,
        departure: "09:30",
        arrival: "13:15",
        price: 18500,
      },
      {
        id: "EK203",
        airline: "Emirates",
        from,
        to,
        date,
        departure: "11:45",
        arrival: "15:10",
        price: 22800,
      },
    ];
  },
});