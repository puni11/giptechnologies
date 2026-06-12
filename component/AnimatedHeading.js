"use client";
import { useState, useEffect } from 'react';

export default function AnimatedHeading({ text }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Fire animation immediately after mount
  }, []);

  const lines = text.split('\n');
  const charDelay = 30;
  const initialDelay = 200;

  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 text-white"
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        // Calculate the total number of characters in previous lines to maintain sequence
        const previousCharsCount = lines.slice(0, lineIndex).reduce((acc, curr) => acc + curr.length, 0);

        return (
          <div key={lineIndex} className="block overflow-hidden">
            {line.split('').map((char, charIndex) => {
              const totalDelay = initialDelay + (previousCharsCount * charDelay) + (charIndex * charDelay);
              const isSpace = char === ' ';

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    opacity: isMounted ? 1 : 0,
                    transform: isMounted ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: '500ms',
                    transitionDelay: `${totalDelay}ms`
                  }}
                >
                  {isSpace ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}