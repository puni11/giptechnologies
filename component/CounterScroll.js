"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export default function RevenueCounter({
  value = 122.65,
  prefix = "₹",
  suffix = "Cr",
  label = "Revenue Generated and Counting",
  duration = 2.4,
  decimals = 2,
  locale = "en-IN", // Indian grouping (1,23,456). Use "en-US" for 123,456
  once = true, // false = replay every time it re-enters the viewport
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // true while the section is visible (at least 40% of it)
  const inView = useInView(ref, { once, amount: 0.4 });

  const count = useMotionValue(0);

  const display = useTransform(count, (latest) =>
    latest.toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (!inView) {
      // reset so it can replay when `once` is false
      if (!once) count.set(0);
      return;
    }

    if (reduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // fast start, soft landing
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion, once, count]);

  return (
    <main
      ref={ref}
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        fontFamily:
          "var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "baseline",
          fontSize: "clamp(3rem, 9vw, 7.5rem)",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
          color: "#0E1116",
        }}
      >
        <span style={{ color: "#6A1BF2" }}>{prefix}</span>

        <motion.span>{display}</motion.span>

        <span
          style={{ position: "relative", color: "#0A74F0", marginLeft: "0.1em" }}
        >
          {suffix}
          {/* "+" pops in once the count lands */}
          <motion.span
            aria-hidden
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              delay: inView && !reduceMotion ? duration * 0.85 : 0,
              type: "spring",
              stiffness: 420,
              damping: 14,
            }}
            style={{
              position: "absolute",
              top: "-0.35em",
              left: "-0.08em",
              fontSize: "0.32em",
              fontWeight: 600,
              color: "#3FAE00",
            }}
          >
            +
          </motion.span>
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: inView && !reduceMotion ? 0.3 : 0, duration: 0.8 }}
        style={{
          margin: 0,
          fontSize: "clamp(1rem, 2vw, 1.75rem)",
          color: "#5B6270",
        }}
      >
        {label}
      </motion.p>
    </main>
  );
}