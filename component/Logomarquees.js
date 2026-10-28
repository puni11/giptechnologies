"use client";

import { motion } from "framer-motion";

const logos = [
  <span
    key="s"
    className="font-display text-[17px] font-bold tracking-[0.3px] text-[#b4b4b4]"
  >
    Clik.ai
  </span>,

  <span
    key="a"
    className="flex items-center gap-1 text-[18px] font-medium tracking-[-0.3px] text-[#999]"
  >
    <svg viewBox="0 0 20 12" className="h-3 w-5" aria-hidden="true">
      <rect width="20" height="12" rx="6" fill="currentColor" />
      <circle cx="6" cy="6" r="3.2" fill="#fff" />
    </svg>
    Kayapalat
  </span>,

  <span
    key="t"
    className="font-serif text-[26px] italic leading-none text-[#a8a8a8]"
  >
    Toothique
  </span>,

  <span
    key="n"
    className="font-display text-[17px] font-bold tracking-[0.3px] text-[#b4b4b4]"
  >
    Aurette
  </span>,

  <span
    key="p"
    className="font-display text-[17px] font-bold tracking-[0.3px] text-[#b4b4b4]"
  >
    Purple Club
  </span>,
];

export default function LogoMarquee() {
  return (
    <div
      className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]"
      aria-label="Brands we have worked with"
    >
      <motion.ul
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[0, 1].map((copy) => (
          <li
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 items-center"
          >
            <ul className="flex shrink-0 items-center">
              {logos.map((logo, i) => (
                <li
                  key={`${copy}-${i}`}
                  className="flex shrink-0 items-center px-[26px]"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}