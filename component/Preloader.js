"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { REVENUE_TARGET, formatRevenue } from "./RevenueCounter";

const LOGO_TEXT = "GIP.TECHNOLOGIES";               // must match the navbar logo
const LABEL_TEXT = "REVENUE DRIVEN FOR OUR CLIENTS"; // must match the navbar label

// Timing (seconds)
const LABEL_TIMING = { stagger: 0.02, duration: 0.8, delay: 0 };
const LOGO_TIMING = { stagger: 0.05, duration: 0.9, delay: 0.35 };
const ROW_DELAY = 0.3;     // icon + counter row reveal
const ROW_DURATION = 0.9;
const HOLD = 0.7;          // pause before everything flies to the navbar
const FLY_DURATION = 1.1;  // preloader -> navbar

const easeOut = [0.22, 1, 0.36, 1];
const flyEase = [0.76, 0, 0.24, 1];

const introEnd = (t, len) => t.delay + (len - 1) * t.stagger + t.duration;
const INTRO_END = Math.max(
  introEnd(LABEL_TIMING, LABEL_TEXT.length),
  introEnd(LOGO_TIMING, LOGO_TEXT.length),
  ROW_DELAY + ROW_DURATION
);
// The counter runs for the whole journey so it hits the final value as the stat lands
const COUNT_MS = (INTRO_END + HOLD + FLY_DURATION) * 1000;

const charVariants = {
  hidden: { y: "110%", rotateX: -90, opacity: 0, filter: "blur(14px)" },
  show: ({ i, stagger, duration, delay }) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration, ease: easeOut, delay: delay + i * stagger },
  }),
};

function RollText({ text, timing, instant }) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      aria-hidden="true"
      style={{
        display: "inline-block",
        overflow: "hidden",
        paddingBottom: "0.15em", // keeps descenders from being clipped
        marginBottom: "-0.15em",
      }}
    >
      <motion.span
        custom={{ i, ...timing }}
        variants={charVariants}
        initial={instant ? "show" : "hidden"}
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
  ));
}

// Counts from 1 up to the final revenue. Width is reserved for the final value
// so the layout never shifts while the digits grow.
function LiveCounter({ instant }) {
  const [count, setCount] = useState(instant ? REVENUE_TARGET : 1);

  useEffect(() => {
    if (instant) return setCount(REVENUE_TARGET);
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / COUNT_MS, 1);
      // Grow by orders of magnitude at a steady pace: 1 → 10 → 100 → 1,000 → …
      // TARGET^p goes from 1 (p = 0) to TARGET (p = 1)
      setCount(p >= 1 ? REVENUE_TARGET : Math.max(1, Math.floor(Math.pow(REVENUE_TARGET, p))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [instant]);

  return (
    <span
      className="text-white"
      style={{
        display: "inline-grid",
        fontSize: "0.636em",        // 14px / 22px
        fontWeight: 800,
        letterSpacing: "-0.0286em", // -0.4px / 14px
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
        whiteSpace: "nowrap",
      }}
    >
      <span aria-hidden="true" style={{ gridArea: "1 / 1", visibility: "hidden" }}>
        {formatRevenue(REVENUE_TARGET)}
      </span>
      {/* Anchored to the right edge, so new digits push the number leftward */}
      <span style={{ gridArea: "1 / 1", justifySelf: "end" }}>
        {formatRevenue(count)}
      </span>
    </span>
  );
}

// Offset + scale needed to move `src` exactly onto `dst`
function measure(src, dst) {
  const s = src.getBoundingClientRect();
  const d = dst.getBoundingClientRect();
  return {
    x: d.left + d.width / 2 - (s.left + s.width / 2),
    y: d.top + d.height / 2 - (s.top + s.height / 2),
    scale: d.width / s.width,
  };
}

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fly, setFly] = useState(null); // { logo, stat } once the flight starts
  const logoRef = useRef(null);
  const statRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const instant = !!reduceMotion;

  // 1) After the intro, measure both navbar targets and fly to them
  useEffect(() => {
    const wait = instant ? 0.4 : INTRO_END + HOLD;

    const timer = setTimeout(() => {
      const logoTarget = document.querySelector("[data-brand-logo]");
      const statTarget = document.querySelector("[data-brand-stat]");
      if (!logoTarget || !logoRef.current) return setLoading(false);

      setFly({
        logo: measure(logoRef.current, logoTarget),
        stat:
          statTarget && statRef.current
            ? measure(statRef.current, statTarget)
            : null,
      });
    }, wait * 1000);

    return () => clearTimeout(timer);
  }, [instant]);

  // 2) Lock scroll while the preloader is on screen
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (!loading) return null;

  const flyTransition = {
    duration: instant ? 0.01 : FLY_DURATION,
    ease: flyEase,
  };
  const rest = { x: 0, y: 0, scale: 1, opacity: 1 };

  return (
    <>
      {/* Hide the real navbar stat block + logo until the preloader lands on them */}
      <style>{`[data-brand-logo],[data-brand-stat]{opacity:0}`}</style>

      <div
        role="status"
        aria-label="Loading"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: fly ? "none" : "auto",
        }}
      >
        {/* Black backdrop – fades away while everything travels */}
        <motion.div
          initial={false}
          animate={{ opacity: fly ? 0 : 1 }}
          transition={{
            duration: instant ? 0.01 : 0.9,
            delay: fly && !instant ? 0.2 : 0,
            ease: "easeInOut",
          }}
          style={{ position: "absolute", inset: 0, background: "#000" }}
        />

        {/* Stack: stat block above logo. 1em = logo font size (navbar: 22px) */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.3em",
            fontSize: "clamp(1.6rem, 6vw, 4.5rem)",
          }}
        >
          {/* Stat block: label + icon + counter + info badge, scaled like the navbar */}
          <motion.div
            aria-hidden="true"
            animate={
              fly
                ? fly.stat
                  ? { ...fly.stat, opacity: 1 }
                  : { ...rest, opacity: 0 }
                : rest
            }
            transition={flyTransition}
          >
            <div
              ref={statRef}
              style={{ display: "flex", flexDirection: "column", gap: "0.091em" }}
            >
              {/* Label */}
              <div
                style={{
                  display: "flex",
                  fontSize: "0.409em",        // 9px / 22px
                  fontWeight: 700,
                  letterSpacing: "0.1222em",  // 1.1px / 9px
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.65)",
                  whiteSpace: "nowrap",
                  perspective: "500px",
                }}
              >
                <RollText text={LABEL_TEXT} timing={LABEL_TIMING} instant={instant} />
              </div>

              {/* Icon + counter + info badge */}
              <motion.div
                initial={instant ? false : { opacity: 0, y: "60%", filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: ROW_DURATION, delay: ROW_DELAY, ease: easeOut }}
                style={{ display: "flex", alignItems: "center", gap: "0.227em" }}
              >
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-sky-50"
                  style={{ width: "0.591em", height: "0.591em", flexShrink: 0 }}
                >
                  <rect x="2" y="9" width="3" height="7" rx="1" fill="currentColor" />
                  <rect x="7.5" y="5" width="3" height="11" rx="1" fill="currentColor" />
                  <rect x="13" y="2" width="3" height="14" rx="1" fill="currentColor" />
                </svg>

                <LiveCounter instant={instant} />

              
              </motion.div>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            animate={fly ? { ...fly.logo, opacity: 1 } : rest}
            transition={flyTransition}
            onAnimationComplete={() => {
              if (fly) setLoading(false); // navbar takes over instantly
            }}
          >
            <h1
              ref={logoRef}
              aria-label={LOGO_TEXT}
              className="font-display font-bold"
              style={{
                margin: 0,
                color: "#fff",
                letterSpacing: "-0.0227em", // -0.5px / 22px
                lineHeight: 1,
                whiteSpace: "nowrap",
                display: "flex",
                perspective: "700px",
              }}
            >
              <RollText text={LOGO_TEXT} timing={LOGO_TIMING} instant={instant} />
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}