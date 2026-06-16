"use client"; // Required in Next.js App Router for Framer Motion

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

// Replace these with your actual image paths
const LOGOS = [
  { name: "Aurette", src: "/logos/united.svg" },
  { name: "Kayapalat", src: "/logos/aetna.svg" },
  { name: "AP2V", src: "/logos/cigna.svg" },
  { name: "Grras Solutions", src: "/logos/anthem.svg" },
  { name: "Aavas", src: "/logos/cvs.svg" },
];

export default function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-0">
      {/* Background overlay (optional, to mimic the blurred green/orange lights in your image) */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-green-900 blur-[100px]"></div>
        <div className="absolute -bottom-20 left-40 h-64 w-64 rounded-full bg-orange-900 blur-[100px]"></div>
      </div>

      {/* Top Left Text */}
      <div className="flex flex-col sm:flex-row justify-between z-10 px-8 pb-8 sm:px-12">
        <p className="max-w-lg text-sm text-center sm:text-left font-medium leading-relaxed text-black md:text-base">
  Helping businesses scale with innovative Digital Marketing, <br className="hidden sm:block" />
  Cloud Infrastructure and Modern Web Development solutions.
</p>
          <div className=" flex flex-col items-center gap-2 text-black mt-4 sm:mt-0">
                  <p className="text-sm font-medium text-right">Rated 4.9/5 by 4,900+ clients</p>
                  <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#8ad6ff] text-[#8ad6ff]" />
                  ))}
                </div>
        
              </div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 flex w-full">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed by changing duration (lower = faster)
          }}
        >
          {/* First Set of Logos */}
          <div className="flex gap-16 px-8 md:gap-24 md:px-12">
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                {/* Fallback text if you don't have images yet */}
                <h3 className="text-2xl font-bold text-black">{logo.name}</h3>
                
                {/* Uncomment this when you have your actual SVG assets ready:
                  <Image src={logo.src} alt={logo.name} width={120} height={40} className="object-contain" /> 
                */}
              </div>
            ))}
          </div>

          {/* Second Set (Duplicated for Seamless Loop) */}
          <div className="flex gap-16 px-8 md:gap-24 md:px-12">
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <h3 className="text-2xl font-bold text-black">{logo.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}