'use client';

import { useRef, useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

// Custom component to handle the number counting animation
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract numbers and non-numbers (e.g., "50+" -> target: 50, suffix: "+")
  const match = String(value).match(/(\d+)(.*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [displayValue, setDisplayValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (inView && match) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          setDisplayValue(`${Math.floor(val)}${suffix}`);
        },
      });
      return () => controls.stop();
    } else if (!match) {
      // Fallback if the value isn't a number
      setDisplayValue(value);
    }
  }, [inView, target, suffix, value]); // removed match from dependencies to prevent infinite loops

  return <span ref={ref}>{displayValue}</span>;
}

export default function WhatWeDoSection() {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '12', label: 'Years of Experience' },
  ];

  return (
    <section className="relative w-full pb-24 flex flex-col items-center justify-center bg-sky-100 overflow-hidden font-sans">
      
      {/* Optional subtle background gradients to match the reference's soft aesthetic */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto px-6">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50 backdrop-blur-sm mb-8 shadow-sm"
        >
          <Star className="w-3.5 h-3.5 text-gray-500 fill-gray-500" />
          <span className="text-[11px] font-medium tracking-[0.08em] text-gray-600 uppercase mt-px">
           See How We Work
          </span>
        </motion.div>

        {/* Main Quote */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[2.25rem] leading-[1.35] text-gray-800 font-medium mb-16 max-w-7xl"
        >
          &quot;From <span className="text-gray-400 font-normal">strategy</span> to <span className="text-gray-400 font-normal">execution</span>, we help your brand
           strategically stand out, attract the right customers, and
           grow sustainably with <span className="text-gray-400 font-normal">clarity</span> and <span className="text-gray-400 font-normal">confidence</span>.&quot;
        </motion.h2>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center pr-6 p-1.5 rounded-full border border-gray-100 bg-[#fafafa]/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-transform hover:scale-105 duration-300"
            >
              {/* Stat Value Circle with subtle teal/glow effect */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-b from-sky-300 to-sky-500 border border-gray-200/60 shadow-[0_0_20px_rgba(20,184,166,0.12)] relative">
                 {/* Inner ring for extra depth */}
                <div className="absolute inset-0 rounded-full border border-teal-600/5 m-0.5"></div>
                <span className="text-sm md:text-base font-semibold text-gray-50 relative z-10 flex items-center justify-center">
                  <AnimatedCounter value={stat.value} />
                </span>
              </div>
              
              {/* Stat Label */}
              <span className="ml-4 text-[13px] md:text-sm text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}