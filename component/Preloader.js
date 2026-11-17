"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const TEXT = "GIP Technologies";
const STAGGER = 0.06;      // delay between characters (s)
const CHAR_DURATION = 0.9; // each character's roll + focus time (s)
const HOLD = 0.8;          // pause after the last character settles (s)

const easeOut = [0.22, 1, 0.36, 1];

const charVariants = {
  hidden: {
    y: "110%",
    rotateX: -90,
    opacity: 0,
    filter: "blur(14px)",
  },
  show: (i) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: CHAR_DURATION, ease: easeOut, delay: i * STAGGER },
  }),
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  // Hide the screen after the text has fully played
  useEffect(() => {
    const total = (TEXT.length - 1) * STAGGER + CHAR_DURATION + HOLD;
    const t = setTimeout(() => setLoading(false), total * 1000);
    return () => clearTimeout(t);
  }, []);

  // Lock page scroll while the preloader is visible
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          aria-label="Loading"
          role="status"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            aria-label={TEXT}
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "clamp(2rem, 7vw, 5.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              display: "flex",
              perspective: "700px",
            }}
          >
            {TEXT.split("").map((char, i) => (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  // keeps descenders (g, y) from being clipped by the mask
                  paddingBottom: "0.15em",
                  marginBottom: "-0.15em",
                }}
              >
                <motion.span
                  custom={i}
                  variants={charVariants}
                  initial={reduceMotion ? "show" : "hidden"}
                  animate="show"
                  style={{
                    display: "inline-block",
                    transformOrigin: "50% 100%",
                    willChange: "transform, filter, opacity",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}