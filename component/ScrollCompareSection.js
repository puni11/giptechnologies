'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, X, Orbit } from 'lucide-react';

export default function SmoothCompareSection() {
  const containerRef = useRef(null);

  // Track the scroll progress within the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* 
    SMOOTH ANIMATION TIMELINE (0 to 1):
    0.00 - 0.15: Hold initial perfectly centered text.
    0.15 - 0.30: Split text left and right.
    0.25 - 0.40: Subheading fades in and rises from the bottom.
    0.40 - 0.60: Card rises from below the screen (100vh) to the exact center (0vh).
    0.55 - 0.65: As the card arrives, the split text and subheading smoothly fade to 0 opacity.
    0.70 - 0.85: Card expands to reveal the competitor side.
    0.85 - 1.00: Hold final state before scrolling past the section.
  */

  // 1. Center Text Split & Fade
  const leftTextX = useTransform(scrollYProgress, [0.15, 0.3], ['0vw', '-28vw']);
  const rightTextX = useTransform(scrollYProgress, [0.15, 0.3], ['0vw', '28vw']);
  const splitTextOpacity = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);

  // 2. Subheading Rise & Fade (Fades in, then fades out later)
  const subheadY = useTransform(scrollYProgress, [0.25, 0.4], [100, 0]);
  const subheadOpacity = useTransform(
    scrollYProgress, 
    [0.25, 0.4, 0.55, 0.65], // Timing checkpoints
    [0, 1, 1, 0]             // Opacity values at those checkpoints
  );

  // 3. Card Vertical Slide
  const cardY = useTransform(scrollYProgress, [0.4, 0.6], ['100vh', '0vh']);
  
  // 4. Card Width Expansion
  const cardWidth = useTransform(scrollYProgress, [0.7, 0.85], ['340px', '768px']);

  const ourFeatures = [
  'Revenue-focused growth strategies',
  'Performance-based campaign optimization',
  'Real-time analytics & ROI tracking',
  'AI-powered marketing automation',
  'Dedicated growth specialists',
];

const theirFeatures = [
  'Vanity metrics over business growth',
  'Set-and-forget campaign management',
  'Limited reporting with little insight',
  'Manual processes and slow execution',
  'General account managers',
];

  return (
    // Increased height to 400vh for an even smoother, less rushed scroll experience
    <section ref={containerRef} className="relative w-full h-[350vh] bg-sky-100  font-sans text-gray-900">
       <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
 <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

      {/* Sticky viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* INITIAL CENTERED TEXT */}
        <motion.div 
          style={{ opacity: splitTextOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
          <div className="flex justify-center items-center gap-2">
            {/* Left Text */}
            <motion.div style={{ x: leftTextX }} className="flex items-center text-xl md:text-5xl">
              <span>What sets us </span>
              <span className="bg-[#5ca9f6] text-white italic pr-1 ml-3 px-1">apart</span>
            </motion.div>
            
            {/* Right Text */}
            <motion.div style={{ x: rightTextX }} className="text-xl md:text-5xl text-gray-600">
              From others
            </motion.div>
          </div>
        </motion.div>

        {/* SUBHEADING (Bottom to Top Reveal) */}
        <motion.div
          style={{ opacity: subheadOpacity, y: subheadY }}
          className="absolute top-[20%] md:top-[25%] left-0 right-0 text-center px-4 z-10"
        >
          <h3 className="text-xl md:text-2xl  text-gray-900">
            We don&apos;t settle for average, and neither should you.
          </h3>
        </motion.div>

        {/* EXPANDING COMPARISON CARD */}
        {/* Positioned relatively so y: '0vh' anchors perfectly to the dead center of the screen */}
        <motion.div
          style={{ 
            y: cardY, 
            width: cardWidth 
          }}
          className="relative flex bg-white rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-20"
        >
          {/* Dark Half (Mandala) - Fixed Width */}
          <div className="w-[400px] shrink-0 bg-gradient-to-b from-sky-400 to-sky-600 text-white p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-6">
              <Orbit className="w-6 h-6 text-white" />
              <span className="text-xl  tracking-wide">GIP Technologies</span>
            </div>
            
            <ul className="space-y-6">
              {ourFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FFE55C] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium tracking-wide text-white">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Light Half (Other Agencies) */}
          <div className="flex-1 min-w-[428px] p-8 md:p-10 bg-white flex flex-col justify-center border-l border-gray-100">
             <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-6">
              <span className="text-xl  tracking-wide text-gray-800">Other Agencies</span>
            </div>
            
            <ul className="space-y-6">
              {theirFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium tracking-wide text-gray-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}