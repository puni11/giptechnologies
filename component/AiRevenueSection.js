'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiRevenueSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [revenue, setRevenue] = useState(24738412);
  const tickRef = useRef(null);

  // Rebuilt stages to include exact SVG paths for the "droplet/tail" shapes
  // The y-coordinates (tipY) guarantee the text boxes can never overlap.
  const stages = [
    {
      id: 0,
      stage: 'TITLE 01',
      title: 'Demand Generation',
      desc: 'Predictive targeting and content built for buyer intent, engineered to fill pipeline with sales-ready leads — not impressions.',
      color: '#CBE4FB', // Lightest
      r: 160,
      tipY: 70, // Y coordinate for the line and text
      taperPath: 'M 200 190 Q 320 190, 390 70 Q 380 220, 360 350 Z',
      numY: 490,
    },
    {
      id: 1,
      stage: 'TITLE 02',
      title: 'Sales Velocity',
      desc: 'Lead scoring, routing, and outreach automation that shorten the sales cycle and lift close rates, deal by deal.',
      color: '#9DCDF8',
      r: 120,
      tipY: 170,
      taperPath: 'M 200 230 Q 300 230, 390 170 Q 360 260, 320 350 Z',
      numY: 450,
    },
    {
      id: 2,
      stage: 'TITLE 03',
      title: 'Revenue Optimization',
      desc: 'Live attribution reallocates spend toward the channels producing the most revenue — automatically, every week.',
      color: '#70B6F6',
      r: 80,
      tipY: 270,
      taperPath: 'M 200 270 Q 280 270, 390 270 Q 340 310, 280 350 Z',
      numY: 410,
    },
    {
      id: 3,
      stage: 'TITLE 04',
      title: 'Lifetime Value',
      desc: 'Churn prediction and expansion plays that turn every closed deal into a longer, larger customer relationship.',
      color: '#5CA9F6', // Darkest
      r: 40,
      tipY: 370,
      taperPath: 'M 200 310 Q 290 310, 390 370 Q 290 390, 200 390 Z',
      numY: 355, // Center point for the inner circle
    },
  ];

  // Auto-loop through the stages
  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % stages.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isHovering, stages.length]);

  // Ledger ticker: revenue compounding
  useEffect(() => {
    tickRef.current = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(120 + Math.random() * 640));
    }, 1400);
    return () => clearInterval(tickRef.current);
  }, []);

  const formattedRevenue = revenue.toLocaleString('en-US');

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-24 px-6 font-sans bg-white">
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 items-center">

        {/* Left Column: Text Content */}
        <div className="md:col-span-5 flex flex-col justify-center text-left">
          <span className="font-mono-ledger text-xs tracking-[0.2em] text-[#5ca9f6] mb-4 uppercase">
            Revenue Operations, Automated
          </span>
<div className='relative'>
          <h2 className="font-display text-5xl md:text-[4.25rem] font-semibold text-[#0E1B2C] tracking-tight leading-[1.0] mb-6">
            <span className='absolute bottom-13'>Marketing </span><span className='absolute text-xl sm:text-3xl right-16 sm:right-18 bottom-16 sm:bottom-16'>That</span><br />
            <span className="text-[#5ca9f6]"><span className='text-xl sm:text-3xl'>Compounds Your</span> <span className='absolute top-16 sm:top-24'>Revenue.</span></span>
          </h2>
</div>
<p className='text-lg font-semibold mt-3 mb-4'> Agencies Work Like Vendors, We Work Like Partners</p>
          <p className="font-body text-lg text-[#3A4550] leading-relaxed mb-10 max-w-md">
            We connect demand generation, sales velocity, and retention into one
            AI-guided system — tracing spend to pipeline and lifetime value, aiming to reinvest where it might return the most.
          </p>

          {/* Ledger ticker */}
          <div className="">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-mono-ledger text-[11px] tracking-[0.15em] text-[#3A4550]/70 uppercase">
                Targeted revenue trend
              </span>
              <span className="font-mono-ledger text-[11px] text-[#5ca9f6]">Potential ▲ 18% QoQ</span>
            </div>
            <span className="font-mono-ledger text-2xl md:text-3xl font-semibold text-[#0E1B2C] tabular-nums">
              ₹{formattedRevenue}
            </span>
            <p className="font-body text-xs text-[#3A4550]/60 mt-1">
              Projected across active engagements
            </p>
          </div>
        </div>

        {/* Right Column: "Same to Same" Visual Graphic */}
        <div className="md:col-span-7 flex flex-col md:flex-row items-center justify-center relative w-full border-b-2 border-[#0E1B2C]/5 pb-8 md:border-none md:pb-0">
          
          {/* Desktop/Tablet View: Fully Integrated SVG Graphic */}
          <div className="flex flex-col md:flex-row w-full h-auto max-w-[750px] items-center justify-center gap-5">
            <svg 
              viewBox="0 0 800 550" 
              className="w-full h-auto overflow-visible" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#5ca9f6" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Draw Layers from back to front */}
              {stages.map((stage, i) => {
                const isActive = activeIndex === i;
                
                return (
                  <motion.g 
                    key={`stage-${i}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => { setActiveIndex(i); setIsHovering(true); }}
                    onMouseLeave={() => setIsHovering(false)}
                    initial={{ opacity: 0.9 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.6,
                      filter: isActive ? 'url(#glow)' : 'none',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* The Circle Base */}
                    <circle cx="200" cy="350" r={stage.r} fill={stage.color} />
                    
                    {/* The Stretched Taper (Droplet Tail) */}
                    <path d={stage.taperPath} fill={stage.color} />
                    
                    {/* The Connecting Line */}
                    <motion.path 
                      d={`M 390 ${stage.tipY} L 470 ${stage.tipY}`} 
                      stroke={stage.color}
                      strokeWidth={isActive ? "2" : "1"}
                      fill="none"
                    />
                    
                    {/* The End Dot / Ring */}
                    <circle 
                      cx="470" cy={stage.tipY} r="4" 
                      fill="white" 
                      stroke={stage.color} 
                      strokeWidth={isActive ? "2" : "1.5"} 
                    />

                    {/* The Vertical Numbers inside the rings */}
                    <text 
                      x="200" y={stage.numY} 
                      fill="white" 
                      fontSize="14" 
                      fontWeight="bold" 
                      fontFamily="sans-serif"
                      textAnchor="middle" 
                      dominantBaseline="middle"
                    >
                      0{i + 1}
                    </text>

                    {/* The Text Blocks strictly positioned via ForeignObject (Fixes Overlapping!) */}
                    <foreignObject x="525" y={stage.tipY - 40} width="400" height="320">
                      <div className={`hidden md:flex flex-col items-start pt-2 pb-5 mb-4 transition-all duration-300 ${isActive ? 'opacity-100 scale-100 translate-x-0' : 'opacity-50 scale-95 -translate-x-2'}`}>
                       
                        <h4 className="font-display font-semibold text-[#0E1B2C] text-[18px] mt-4 mb-1.5 leading-tight">
                          {stage.title}
                        </h4>
                        <p className="font-body text-[16px] text-[#3A4550] leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    </foreignObject>
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* Mobile View: Vertical Accordion (Since horizontal SVG text is unreadable on tiny screens) */}
          <div className="md:hidden w-full flex flex-col gap-3 relative z-20">
           

             {stages.map((stage, i) => (
                <div 
                    key={`mobile-content-${i}`}
                    className={`flex flex-col items-start p-5 rounded-xl transition-all duration-300  ${
                      activeIndex === i ? 'bg-white shadow-[0_8px_24px_rgba(14,27,44,0.08)] border border-[#0E1B2C]/10' : 'bg-gray-50/50 opacity-70 border border-transparent'
                    }`}
                    onClick={() => setActiveIndex(i)}
                >
                  <div className="flex items-center gap-3 w-full ">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full" style={{ backgroundColor: stage.color }}>
                       <span className="text-[10px] font-bold text-white">0{i+1}</span>
                    </div>
                    <span className="font-mono-ledger text-[10px] tracking-[0.1em] uppercase font-semibold" style={{ color: stage.color }}>
                      {stage.stage}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-semibold text-[#0E1B2C] text-sm mt-3">
                    {stage.title}
                  </h4>
                  
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-xs text-[#3A4550] leading-relaxed mt-2 mb-5">
                          {stage.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}