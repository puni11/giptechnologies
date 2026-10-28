"use client";

import { useEffect, useRef } from "react";

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));

/**
 * Letters start faded (#EEE) and turn black one by one as the heading
 * scrolls up through the viewport.
 */
export default function ScrollRevealText({ text, as: Tag = "h2", className = "" }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll("[data-c]");
    const n = chars.length;
    const SPAN = 10; // how many letters sit in the gradient at once

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach((c) => (c.style.color = "#000"));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const start = vh * 0.9;
      const end = vh * 0.35;
      const p = clamp((start - top) / (start - end));
      for (let i = 0; i < n; i++) {
        const v = clamp((p * (n + SPAN) - i) / SPAN);
        const c = Math.round(238 * (1 - v));
        chars[i].style.color = `rgb(${c},${c},${c})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {words.map((word, w) => (
        <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
          {word.split("").map((ch, i) => (
            <span key={i} data-c className="text-[#eee]">
              {ch}
            </span>
          ))}
          {w < words.length - 1 && <span className="inline-block w-[0.28em]" />}
        </span>
      ))}
    </Tag>
  );
}