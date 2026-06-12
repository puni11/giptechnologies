"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Target, ThumbsUp, PenTool, Mail, PieChart, ChevronRight } from "lucide-react";

// Default Data Fallback
const defaultServices = [
  {
    index: "01",
    title: "SEO Optimization",
    tagline: "Visibility That Compounds",
    description:
      "We combine technical SEO, high-quality backlinking, and content architecture to improve organic visibility and drive sustainable traffic that grows over time.",
    features: ["Keyword Research", "Technical Audits", "Link Acquisition"],
    icon: <Search/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "02",
    title: "PPC & Paid Ads",
    tagline: "Precision at Scale",
    description:
      "We manage Google Ads, Display, and Retargeting campaigns — optimizing bidding strategies to lower Cost Per Acquisition while maximizing your return on ad spend.",
    features: ["Google Search & Display", "Conversion Tracking", "Bid Automation"],
    icon: <Target/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "03",
    title: "Social Media Marketing",
    tagline: "Community at Velocity",
    description:
      "We create engaging content and manage paid campaigns on Meta, LinkedIn, and X to amplify your brand voice and build audiences that convert.",
    features: ["Content Calendar", "Community Management", "Paid Social"],
    icon: <ThumbsUp/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "04",
    title: "Content & Branding",
    tagline: "Storytelling That Sells",
    description:
      "From blog posts and whitepapers to video scripts, we craft content that educates your audience and positions your brand as the definitive authority.",
    features: ["Brand Voice", "Multimedia Content", "Editorial Strategy"],
    icon: <PenTool/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "05",
    title: "Email Automation",
    tagline: "Nurture at Every Stage",
    description:
      "We design personalized drip campaigns and newsletters that keep your brand top-of-mind and drive repeat business throughout the entire customer lifecycle.",
    features: ["Drip Campaigns", "List Segmentation", "A/B Testing"],
    icon: <Mail/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "06",
    title: "Analytics & CRO",
    tagline: "Data as Competitive Edge",
    description:
      "We analyze user behavior using GA4 and heatmaps to optimize conversion funnels, surface high-impact opportunities, and maximize site performance.",
    features: ["Behavior Flow", "Heatmap Analysis", "Funnel Optimization"],
    icon: <PieChart/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
];

export default function ServiceStack({
  badge = "Digital Marketing Services",
  title = "Every channel.",
  highlightedTitle = "One strategy.",
  description = "We align traffic, content, and conversion into a single growth engine — designed for the long term.",
  tableHeaders = ["#", "Service", "Capabilities", ""],
  services = defaultServices,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="min-h-screen p-0 text-black bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ── Header Band ─────────────────────────────────────── */}
        <div className="border-b border-black/10 px-4 pt-12 pb-10 flex items-end justify-between gap-8 flex-wrap">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-7 h-px bg-black block" />
              <span className="text-[11px] tracking-tight uppercase text-black font-medium">
                {badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl tracking-[-0.03em] font-semibold leading-[1.05] text-black m-0 font-sans">
              {title}
              <br />
              <span className="text-black">{highlightedTitle}</span>
            </h1>
          </div>

          <div className="max-w-[420px]">
            <p className="text-black text-[15px] leading-[1.75] mb-7 mt-0 font-sans">
              {description}
            </p>
          </div>
        </div>

        {/* ── Service Grid ─────────────────────────────────────── */}
        <div className="px-2 pb-20">
          {/* Column headers */}
          <div className="grid grid-cols-[80px_1fr_1fr_auto] gap-6 py-4 border-b border-black/10">
            {tableHeaders.map((h, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.15em] uppercase text-black/40 font-medium"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {services.map((service, i) => (
            <ServiceRow
              key={i}
              service={service}
              isActive={activeIndex === i}
              onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, isActive, onToggle }) {
  const Icon = service.icon;

  return (
    <div>
      <motion.div
        onClick={onToggle}
        className="grid grid-cols-[80px_1fr_1fr_auto] gap-6 py-7 font-sans border-b border-black/10 cursor-pointer items-center relative overflow-hidden group"
        whileHover="hover"
        animate={isActive ? "active" : "idle"}
      >
        {/* Hover tint */}
        <motion.div
          variants={{
            idle: { opacity: 0 },
            hover: { opacity: 1 },
            active: { opacity: 0 },
          }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/5 pointer-events-none"
        />

        {/* Index + Icon */}
        <div className="flex items-center gap-[14px]">
          <span className="text-xs font-medium text-black tracking-[0.05em] tabular-nums">
            {service.index}
          </span>
          <div
            className="w-[38px] h-[38px] rounded-[5px] flex items-center justify-center bg-gradient-to-b from-sky-300 to-sky-500 text-white text-md transition duration-300"
          >
           {service.icon}
          </div>
        </div>

        {/* Title + tagline */}
        <div>
          <motion.h3
            transition={{ duration: 0.2 }}
            style={{ color: "#000" }}
            className="text-[18px] font-medium text-black tracking-[-0.02em] m-0 mb-1 font-sans"
          >
            {service.title}
          </motion.h3>
          <p className="text-xs opacity-70 m-0 tracking-[0.05em] font-medium uppercase text-black">
            {service.tagline}
          </p>
        </div>

        {/* Features pills */}
        <div className="flex gap-2 flex-wrap">
          {service.features.map((f, fi) => (
            <span
              key={fi}
              className="text-[11px] px-2.5 py-1.5 rounded bg-[#89c4ff]/20 border border-[#89c4ff] text-black/80 font-medium tracking-[0.03em] whitespace-nowrap"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-black/40 justify-self-end"
        >
          <ChevronRight size={18} />
        </motion.div>
      </motion.div>

      {/* Expanded Panel */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-[1fr_1.1fr] gap-12 py-10 pl-[104px] border-b border-black/10 font-sans">
              {/* Left: description + CTA */}
              <div>
                <div className="w-8 h-0.5 mb-6 rounded-sm bg-black" />
                <p className="text-[16px] text-black/70 leading-[1.8] m-0 mb-9 max-w-[420px]">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3 mb-9">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-black" />
                      <span className="text-sm text-black/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: image */}
              {/* <div className="rounded-xl overflow-hidden border border-black/10 aspect-video relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover block"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: service.accent || "#000" }}
                />
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}