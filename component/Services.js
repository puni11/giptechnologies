"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    n: "01",
    title: ["Brand &", "Identity"],
    text: "Logos, systems, and guidelines that define how your brand looks, feels, and shows up everywhere.",
    items: [
      "Brand identity design",
      "Logo design",
      "Visual Identity Systems",
      "Brand Guidelines",
      "Rebranding",
      "Brand positioning",
    ],
    image: "/brands.png",
    alt: "Model in a navy hoodie against an orange, motion-blurred background",
  },
  {
    n: "02",
    title: ["Website", "Design"],
    text: "Custom, conversion-focused websites designed to look beautiful and perform even better.",
    items: [
      "Website Design",
      "Webflow / Framer Development",
      "Landing Page Design",
      "UX/UI Design",
      "Design Systems",
      "CMS Integration",
    ],
     type: "video",
  video: "/showr.mp4",
  alt: "Creative video showcasing brand content",
  },
  {
    n: "03",
    title: ["UX/UI", "Design"],
    text: "Clean, considered interfaces that make products feel simple, intuitive, and a pleasure to use.",
    items: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Interface design",
      "Usability testing",
      "Product design",
    ],
    image: "/ui.png",
    alt: "Hand holding a phone with a pink and violet gradient screen",
  },
  {
  n: "04",
  title: ["Content &", "Creative"],
  text: "Creative content and visual storytelling that bring your brand to life across every platform.",
  items: [
    "Social media content",
    "Video production",
    "Reels and short-form videos",
    "Creative direction",
    "Campaign design",
    "Content strategy",
  ],
   image: "/work.jpg",
    alt: "Hand holding a phone with a pink and violet gradient screen",
},
  {
  n: "05",
  title: ["Be Found By", "The Right People"],
  text: "(SEO, AEO, and GEO) that helps your brand get discovered by the right audience at the right time.",
  items: [
    "Searxh engine optimization (SEO)",
    "Content marketing",
    "Outreach and link building",
    "Answer Engine Optimization (AEO)",
  ],
   type: "video",
  video: "/seo.mp4",
    alt: "Hand holding a phone with a pink and violet gradient screen",
}
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.55"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <article
      ref={ref}
      style={{ "--stack": `${70 + index * 15}px` }}
      className="sticky top-(--stack) grid h-[min(560px,calc(100svh-var(--stack)-24px))] grid-rows-[auto_minmax(0,1fr)] border border-[#262626] bg-[#0b0b0b] font-sans lg:h-[532px] lg:grid-cols-2 lg:grid-rows-1"
    >
      {/* Text cell */}
      <motion.div
        style={{ opacity, y }}
        className="flex flex-col justify-between gap-5 p-5 lg:gap-0 lg:p-[30px]"
      >
        <div>
          <h3 className="font-display text-[22px] leading-[24px] font-semibold tracking-[0.28px] text-white uppercase lg:text-[28px] lg:leading-[30px]">
            {service.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="mt-4 max-w-[280px] text-[13px] leading-[18px] font-medium tracking-[-0.1px] text-[#a6a6a6] lg:mt-[31px] lg:max-w-[200px]">
            {service.text}
          </p>
        </div>

        <ul className="text-[12px] leading-5 font-medium tracking-[-0.1px] text-[#b8b8b8] lg:text-[13px] lg:leading-6">
          {service.items.map((item, i) => (
            <li key={item} className="grid grid-cols-[38px_1fr]">
              <span>{i === 0 ? `(${service.n})` : ""}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Image / Video cell */}
      <div className="min-h-0 border-t border-[#262626] p-4 lg:border-t-0 lg:border-l lg:p-[30px]">
        <div className="relative h-full w-full overflow-hidden bg-[#161616]">
          {service.type === "video" ? (
            <video
              src={service.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={service.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(min-width: 1024px) 442px, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-clip bg-black px-4 pt-[120px] pb-[160px]">
      {/* Drop the dark metallic backdrop at /public/services-bg.jpg */}
      <Image
        src="https://images.unsplash.com/photo-1770795263297-9289a582a68d"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-70"
      />

      <div className="relative mx-auto w-full max-w-[1035px]">
        <p className="font-mono text-[11px] leading-none font-medium tracking-[0.6px] text-[#b0b0b0] uppercase">
          {"{Services}"}
        </p>
        <h2 className="mt-[14px] font-display text-[32px] leading-none font-semibold tracking-[0.4px] uppercase md:text-[44px]">
          <span className="block text-white">Everything your</span>
          <span className="block text-[#8b8b8b]">brand needs</span>
        </h2>

        <div className="mt-[62px] flex flex-col gap-[31px]">
          {services.map((service, i) => (
            <ServiceCard key={service.n} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}