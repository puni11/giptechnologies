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

const BARS = [8, 12, 18, 26, 36, 50, 66, 84, 100, 118, 142];

/* shared class strings (kept as full literals so Tailwind can detect them) */
const cardBase =
  "relative flex min-h-[440px] flex-col overflow-hidden rounded-lg border border-[#262626] bg-[#161616] p-[22px]";
const cardTitle =
  "mb-2 text-[17px] font-bold uppercase tracking-[-0.005em] text-white";
const cardText = "text-[13px] leading-[1.55] text-[#fff]";
const headingText =
  "m-0 text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em]";
const monoTag =
  "font-mono text-[11px] tracking-[0.04em] text-[#8C8C8C]";
const fadeMask =
  "[mask-image:linear-gradient(to_bottom,transparent_0%,#000_28%,#000_72%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_28%,#000_72%,transparent_100%)]";

/* ---------- animated number, starts when scrolled into view ---------- */
function Counter({ to, decimals = 0, locale = "en-US", duration = 2 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(0);
  const text = useTransform(value, (v) =>
    v.toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

/* ---------- heading with tag on the left ---------- */
function SectionHeading({ tag, top, bottom }) {
  return (
    <div className="flex flex-wrap items-start gap-x-16 gap-y-4">
      <span className={`${monoTag} min-w-[140px] pt-2`}>{tag}</span>
      <h2 className={headingText}>
        {top}
        <br />
        <span className="text-[#7A7A7A]">{bottom}</span>
      </h2>
    </div>
  );
}

/* ---------- main component ---------- */
export default function GoalsImpactSection({
  handImage ="/connect.jpg", // e.g. "/images/hands.png"
  dancerImage="/creativity.png", // e.g. "/images/dancer.jpg"
  textureImage, // e.g. "/images/rocks.jpg"
}) {
  const reduce = useReducedMotion();
  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, amount: 0.5 });

  const stats = [
    { to: 150, suffix: "+", label: "Brands launched worldwide" },
    { to: 98, suffix: "%", label: "Client satisfaction rate" },
    { to: 12, suffix: "+", label: "Years of creative craft" },
  ];

  return (
    <div className="overflow-hidden bg-[#050505] font-sans text-white">
      {/* =============== SECTION 1 — why choose us =============== */}
      <section className="px-[clamp(1.25rem,5vw,4rem)] py-[clamp(4rem,9vw,4rem)]">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-[clamp(2.5rem,6vw,4.5rem)]">
            <SectionHeading
              tag="{WHY CHOOSE US}"
              top="Your goals,"
              bottom="our priority"
            />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
            {/* card 1 — priority care */}
            <article className={cardBase}>
              <div
                className={`absolute inset-x-0 top-0 bottom-[0%] ${
                  handImage
                    ? "bg-contain bg-right-top bg-no-repeat"
                    : "bg-[radial-gradient(90%_80%_at_80%_20%,#3A3A3A_0%,#161616_70%)]"
                }`}
                style={
                  handImage ? { backgroundImage: `url(${handImage})` } : undefined
                }
              />
              <div className="relative mt-auto">
                <h3 className={cardTitle}>24/7 Priority care</h3>
                <p className={cardText}>
                  Get fast-tracked attention on urgent design needs, with an
                  average response time of 24 hours for active project clients.
                </p>
              </div>
            </article>

            {/* card 2 — creativity */}
            <article
              className={`${cardBase} border-transparent ${
                dancerImage
                  ? "bg-cover bg-center bg-no-repeat"
                  : "bg-gradient-to-b from-[#5A5F6B] to-[#23262D]"
              }`}
              style={
                dancerImage
                  ? { backgroundImage: `url(${dancerImage})` }
                  : undefined
              }
            >
              <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-black/45 to-transparent" />
              <h3 className={`${cardTitle} relative m-0`}>
                Cutting edge creativity
              </h3>
            </article>

            {/* card 3 — revenue + bars */}
            <article className={cardBase}>
              
<div className="text-[clamp(2.5rem,4.5vw,3.5rem)] font-medium leading-none tracking-[-0.02em] tabular-nums">
  <span className="text-[#8A3CFF]">
    <Counter to={10} />
  </span>
  <span className="text-[#1A86FF]">M</span>
  <span className="text-[#7CFF2B]">+</span>
</div>

<p className={`${cardText} mt-2.5`}>
  Leads managed through our CRM
</p>


              <div
                ref={barsRef}
                className="mt-auto flex h-[220px] items-end gap-1.5"
              >
                {BARS.map((h, i) => {
                  const shade = Math.round(42 + (i / 10) * 213); // dark grey → white
                  return (
                    <motion.div
                      key={i}
                      className="flex-1 origin-bottom rounded"
                      initial={{ scaleY: reduce ? 1 : 0 }}
                      animate={{ scaleY: barsInView || reduce ? 1 : 0 }}
                      transition={{
                        delay: reduce ? 0 : i * 0.07,
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        height: `${(h / 142) * 100}%`,
                        background: `rgb(${shade},${shade},${shade})`,
                      }}
                    />
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =============== SECTION 2 — impact =============== */}
      <section className="relative isolate mt-[clamp(2rem,6vw,6rem)] flex min-h-screen flex-col px-[clamp(1.25rem,5vw,4rem)] py-[clamp(4rem,9vw,8rem)]">
        {/* backdrop: fades in from the page colour at the top, out at the bottom */}
        <div
          aria-hidden
          className={`absolute inset-0 -z-20 ${fadeMask} ${
            textureImage
              ? "bg-cover bg-center bg-no-repeat"
              : "bg-[radial-gradient(60%_45%_at_78%_72%,rgba(255,255,255,0.14)_0%,transparent_70%),radial-gradient(45%_40%_at_18%_55%,rgba(255,255,255,0.10)_0%,transparent_70%),radial-gradient(50%_40%_at_40%_90%,rgba(255,255,255,0.08)_0%,transparent_70%)]"
          }`}
          style={
            textureImage ? { backgroundImage: `url(${textureImage})` } : undefined
          }
        />
        {/* page-colour wash at both edges + darker text side */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#050505_0%,rgba(5,5,5,0)_22%,rgba(5,5,5,0)_78%,#050505_100%),linear-gradient(to_right,rgba(5,5,5,0.7)_0%,rgba(5,5,5,0)_55%)]"
        />

        <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col">
          <div>
            <span className={`${monoTag} mb-3.5 block`}>{"{IMPACT}"}</span>
            <h2 className={headingText}>
              Our impact
              <br />
              <span className="text-[#7A7A7A]">in numbers</span>
            </h2>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-10 pt-12">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-12">
                  <div className="text-center">
                    <div className="text-[clamp(2.75rem,5.5vw,4rem)] font-medium leading-none tracking-[-0.01em] tabular-nums">
                      <Counter to={s.to} />
                      {s.suffix}
                    </div>
                    <p className={`${cardText} mt-3`}>{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <span className="hidden h-2 w-2 rounded-full bg-[#6B6B6B] md:block" />
                  )}
                </div>
              ))}
            </div>

            <p className={`${cardText} max-w-[340px] text-center !text-sm`}>
              From startups to established brands, we design identities and
              websites that drive real growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}