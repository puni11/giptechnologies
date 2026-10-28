"use client";

import { useEffect, useState } from "react";

const words = ["Creative", "Marketing", "Branding"];

export default function HeroHeading() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="relative z-[2] font-display text-[48px] leading-none font-semibold tracking-[0.03px] uppercase md:text-[60px] lg:absolute lg:bottom-20 lg:left-14 xl:text-[80px]">
      <span className="block">Your</span>

      {/* Letter-by-letter wave rollover */}
      <span
        className="flex overflow-hidden whitespace-nowrap"
        aria-label={words[activeWord]}
      >
        {words[activeWord].split("").map((letter, index) => (
          <span
            key={`${activeWord}-${index}`}
            aria-hidden="true"
            className="inline-block animate-letter-wave"
            style={{
              animationDelay: `${index * 0.055}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>

      <span className="flex items-center gap-[0.12em]">
        Agency
        <svg
          viewBox="0 0 76 76"
          aria-hidden="true"
          className="ml-[0.04em] size-[0.76em] -translate-y-[0.02em] text-accent"
        >
          <g fill="currentColor">
            <rect x="30" y="0" width="16" height="76" rx="2" />
            <rect
              x="30"
              y="0"
              width="16"
              height="76"
              rx="2"
              transform="rotate(60 38 38)"
            />
            <rect
              x="30"
              y="0"
              width="16"
              height="76"
              rx="2"
              transform="rotate(120 38 38)"
            />
          </g>
        </svg>
      </span>
    </h1>
  );
}