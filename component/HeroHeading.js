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
  <div className="text-[#a2161d] animate-spin" style={{ animationDuration: '6s' }}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
               <path d="M12 2v20m10-10H2m17.07-7.07l-14.14 14.14M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
</span>
    </h1>
  );
}