"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// The updated text reflecting your company's services
const paragraph = 
  "Everything we build is engineered to scale your digital presence — securely and efficiently. We provide comprehensive solutions across digital marketing, custom web development, and robust DevOps. From seamless server management to advanced DevSecOps and cloud architecture, it's your technology stack — fully optimized, without the operational headaches.";

export default function ScrollTextSection() {
  const containerRef = useRef(null);
  
  // Track the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation starts when top of container hits 80% of viewport, 
    // and ends when bottom of container hits 50% of viewport.
    offset: ["start 80%", "end 50%"],
  });

  const words = paragraph.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="relative  w-full bg-[#ffffff] flex items-start pt-24 pb-24 overflow-hidden"
    >
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        
        {/* Left Column: Badge */}
        <div className="lg:col-span-3">
          <div className="sticky top-5 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-200 bg-transparent text-[11px] font-bold uppercase text-gray-800 shadow-sm">
            Engineered for Scale
          </div>
        </div>

        {/* Right Column: Scroll Reveal Text */}
        <div className="lg:col-span-9 max-w-5xl">
          <p className="flex flex-wrap text-2xl md:text-5xl lg:text-3xl text-center font-medium tracking-tight leading-[0.95] text-gray-900">
            {words.map((word, i) => {
              // Calculate the scroll range for each individual word
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word 
                  key={i} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}



const Word = ({ children, progress, range }) => {
  // Map the word's specific scroll range to an opacity value (from 0.15 to 1)
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative mr-2 md:mr-3 lg:mr-4 mt-2 md:mt-3">
      {/* The faded background version of the word */}
      <span className="absolute opacity-20">{children}</span>
      {/* The highlighted version that fades in on scroll */}
      <motion.span style={{ opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};