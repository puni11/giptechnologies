'use client'
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

// --- HELPER COMPONENTS FOR STYLING THE CHAT ---

// component to render user avatar
function UserAvatar() {
  return (
    <div className="flex-shrink-0 size-8 rounded-full flex items-center justify-center font-bold text-lg bg-blue-100 text-blue-600">
      👤
    </div>
  );
}

// component to render AI avatar
function AIAvatar() {
  return (
    <div className="flex-shrink-0 size-8 rounded-full flex items-center justify-center font-bold text-lg bg-gray-100 text-gray-600">
      🤖
    </div>
  );
}

// component to render a single flight result beautifully
function FlightCard({ flight }) {
  // Format price with INR currency
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(flight.price);

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-4">
        {/* Airline Info with logo */}
        <div className="flex items-center gap-3">
          <img 
            src={`https://logo.clearbit.com/${flight.airline.toLowerCase().replace(' ', '')}.com`} 
            alt={flight.airline} 
            className="size-10 rounded-full border border-gray-100" 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/40"; }} 
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-900">{flight.airline}</span>
            <span className="text-sm text-gray-500">{flight.id}</span>
          </div>
        </div>

        {/* Flight Time & Route */}
        <div className="flex items-center gap-4 text-center">
          <div className="flex flex-col">
            <span className="font-bold text-3xl text-gray-900">{flight.departure}</span>
            <span className="text-sm font-medium text-gray-600">{flight.from}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 flex-grow">
            <div className="text-2xl text-gray-400">✈️</div>
            <div className="w-full h-0.5 bg-gray-200 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-3xl text-gray-900">{flight.arrival}</span>
            <span className="text-sm font-medium text-gray-600">{flight.to}</span>
          </div>
        </div>
      </div>

      {/* Price & Date */}
      <div className="flex flex-col items-end gap-3.5">
        <div className="flex flex-col items-end">
          <span className="font-bold text-3xl text-blue-600">{formattedPrice}</span>
          <span className="text-sm text-gray-500">per person</span>
        </div>
        <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
          {flight.date}
        </div>
      </div>
    </div>
  );
}

// component to render different parts of a tool message
function renderToolPart(part, toolName, index) {
  // Check if it's the specific searchFlights tool with a successful output
  if (toolName === 'searchFlights' && part.state === 'output-available') {
    return (
      <div key={index} className="w-full mt-4 space-y-4">
        {part.output.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    );
  }

  // Generic handling for other tools or tool states (loading, error, other tool names)
  return (
    <div key={index} className="bg-gray-200/50 p-4 rounded-xl text-sm text-gray-700 my-4 border border-gray-200">
      <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
        🛠️ 
        <span className="font-mono text-xs px-1.5 py-0.5 bg-gray-300/50 rounded-md">
          {toolName}
        </span> 
        {part.state === 'output-available' ? 'completed' : 'calling tool...'}
      </p>
      
      {/* Tool Input: display as JSON for debugging */}
      <pre className="text-xs overflow-x-auto bg-gray-50 p-3 rounded-lg border border-gray-200 mb-2">
        {JSON.stringify(part.input, null, 2)}
      </pre>

      {/* Tool Output (generic) */}
      {part.state === 'output-available' && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="font-semibold text-green-700 mb-2">Result:</p>
          <pre className="text-xs overflow-x-auto bg-green-50 p-3 rounded-lg border border-green-200">
            {JSON.stringify(part.output, null, 2)}
          </pre>
        </div>
      )}

      {/* Tool Error */}
      {part.state === 'output-error' && (
        <div className="mt-4 pt-4 border-t border-red-200">
          <p className="font-semibold text-red-700 mb-2">Error:</p>
          <div className="text-sm p-3 bg-red-50 rounded-lg border border-red-200 text-red-800">
            {part.errorText}
          </div>
        </div>
      )}
    </div>
  );
}


// --- MAIN CHAT COMPONENT ---

export default function Chat() {
  const [input, setInput] = useState('');
  // Use transport property with a custom DefaultChatTransport that specifies the API route.
  // By default, transport is auto-configured to use fetch on '/api/chat'.
  // We can customize the fetch call if needed.
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50">
      
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto pt-10 pb-20 px-4 md:px-8 space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map((message) => {
            const isUser = message.role === 'user';
            return (
              <div key={message.id} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${isUser ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  {isUser ? <UserAvatar /> : <AIAvatar />}

                  {/* Message Content & Label */}
                  <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                    <div className="text-sm font-semibold text-gray-500 mb-1.5 px-1">
                      {isUser ? 'You' : 'AI Travel Bot'}
                    </div>
                    
                    {/* Message content or tool block */}
                    <div className={`whitespace-pre-wrap p-4 rounded-3xl ${isUser ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-100 text-gray-900 rounded-tl-none'}`}>
                      {message.parts?.map((part, index) => {
                        if (part.type === 'text') {
                          return <span key={index}>{part.text}</span>;
                        }

                        if (part.type.startsWith('tool-')) {
                          const toolName = part.type.replace('tool-', '');
                          return renderToolPart(part, toolName, index);
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Status Indicator */}
          {status === 'streaming' && (
            <div className="flex gap-2.5 items-center pl-10 text-gray-500">
              <AIAvatar />
              <div className="font-semibold text-sm">AI Bot is typing...</div>
              <div className="flex gap-1">
                <span className="size-1.5 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                <span className="size-1.5 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                <span className="size-1.5 bg-gray-400 rounded-full animate-pulse delay-200"></span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Input Form at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
        <div className="max-w-4xl mx-auto p-4 flex gap-3">
          <form onSubmit={handleSubmit} className="flex-1 flex gap-3">
            <input
              className="flex-1 p-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black transition-all"
              value={input}
              placeholder="Ask for flights (e.g. from Delhi to Jaipur on 31 August)..."
              onChange={(e) => setInput(e.target.value)}
              disabled={status === 'streaming'}
            />
            {status === 'streaming' ? (
              <button 
                type="button" 
                onClick={stop} 
                className="p-3.5 px-7 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
              >
                Stop
              </button>
            ) : (
              <button 
                type="submit" 
                className="p-3.5 px-7 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}