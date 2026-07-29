"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp } from "lucide-react";

// Reusable component for the animated number counter
const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = null;
          const duration = 2000;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // easeOutExpo easing function
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(ease * target));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [target, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

export default function ClientGrowth() {
  const [isRevealed, setIsRevealed] = useState(false);

  // Trigger the headline reveal animation shortly after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-[#A1A1AA] font-sans min-h-screen flex flex-col p-4 sm:p-6 md:p-4 max-w-7xl mx-auto">
      <main className="flex-grow w-full py-20 md:py-12 flex flex-col items-center justify-start relative z-10">
        {/* Header Section */}
        <header className="text-center mb-16 md:mb-20 flex flex-col items-center w-full relative">
          <div className="inline-flex items-center justify-center border border-gray-200 bg-gray-100 text-gray-600 text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-lg mb-8 gap-2">
            <TrendingUp className="w-4 h-4" strokeWidth={1.5} />
            Performance Telemetry
          </div>

          {/* Masked Reveal Headline Container */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 max-w-[980px] mx-auto leading-[1.05] overflow-hidden pb-2 -mb-2">
            Vanity metrics are dead.<br className="hidden sm:block" /> Proven Results Businesses Growth
          </h1>
        </header>

        {/* Grid Section */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-4 relative">
          
          {/* Column 1 (Left) - AURETTE (Luxury Real Estate) */}
          <div className="flex flex-col gap-6 lg:gap-4 w-full lg:w-[28%]">
            {/* Stats Panel */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 flex flex-col shadow-inner border border-gray-100 min-h-[240px] relative overflow-hidden group">
              <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#0e9ddf] rounded-full shadow-[0_0_8px_rgba(14,157,223,0.6)]"></div>

              <div className="flex-grow mt-2 relative z-10">
                <div className="text-6xl md:text-7xl font-medium tracking-tight text-gray-900 mb-4 leading-none">
                  <AnimatedNumber target={315} />%
                </div>
                <p className="text-base text-[#494949] leading-relaxed font-light">
                  increase in high-net-worth buyer acquisitions in the first quarter.
                </p>
                
                {/* CSS Bar Chart Design */}
                <div className="flex items-end gap-2 mt-6 h-16 opacity-80">
                  <div className="w-1/4 bg-[#0e9ddf]/30 h-[25%] rounded-t-sm transition-all duration-700 group-hover:h-[30%]"></div>
                  <div className="w-1/4 bg-[#0e9ddf]/50 h-[45%] rounded-t-sm transition-all duration-700 group-hover:h-[55%]"></div>
                  <div className="w-1/4 bg-[#0e9ddf]/70 h-[70%] rounded-t-sm transition-all duration-700 group-hover:h-[85%]"></div>
                  <div className="w-1/4 bg-[#0e9ddf] h-full rounded-t-sm"></div>
                </div>
              </div>
              <div className="mt-6 text-xs font-mono text-[#71717A] uppercase tracking-wider relative z-10">
                Client: Aurette
              </div>
            </div>

            {/* Quote Panel */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-6 flex flex-col border border-gray-100 flex-grow relative">
              <div className="mb-8 aspect-square rounded-md overflow-hidden bg-[#27272A] border border-[#3F3F46]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Aurette Managing Partner"
                  className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-md text-gray-800 leading-relaxed mb-10 flex-grow font-light">
  "They completely transformed our marketing approach. Instead of chasing clicks, every campaign was built to generate qualified property inquiries. We've seen a significant increase in serious buyers and site visits."
</p>
              <div className="mt-auto border-t border-gray-200 pt-4">
                <div className="font-normal text-gray-900 text-base">Managing Partner</div>
                <div className="text-sm text-[#71717A] mb-3 font-light">Aurette</div>
                <div className="text-xs font-mono text-[#52525B] uppercase tracking-widest">
                  Sector: Luxury Real Estate
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 (Middle) - KAYAPALAT (Health & Wellness) */}
          <div className="flex flex-col gap-6 lg:gap-4 w-full lg:w-[28%]">
            {/* Quote Panel */}
            <div className="bg-gray-50 rounded-xl p-8 md:p-6 flex flex-col border border-gray-100 relative">
              <div className="mb-8 aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden bg-[#27272A] border border-[#3F3F46]">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
                  alt="Kayapalat Wellness Director"
                  className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-500"
                  style={{ objectPosition: "top" }}
                />
              </div>
            <p className="text-md text-gray-800 leading-relaxed mb-10 font-light">
  "Our appointment bookings have grown consistently since partnering with them. They focus on attracting the right patients, improving retention, and delivering measurable business growth."
</p>
              <div className="mt-auto border-t border-gray-200 pt-4">
                <div className="font-normal text-gray-900 text-base">Wellness Director</div>
                <div className="text-sm text-[#71717A] mb-3 font-light">Kayapalat</div>
                <div className="text-xs font-mono text-[#52525B] uppercase tracking-widest">
                  Sector: Health & Wellness
                </div>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 flex flex-col border border-gray-100 flex-grow min-h-[240px] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-sky-600"></div>

              <div className="flex-grow mt-2 relative z-10">
                <div className="text-6xl md:text-7xl font-medium tracking-tight text-gray-900 mb-4 leading-none">
                  <AnimatedNumber target={280} />%
                </div>
                <p className="text-base text-gray-800 leading-relaxed font-light">
                  growth in high-ticket wellness retreat bookings YoY.
                </p>

                {/* SVG Area Chart Design */}
                <div className="mt-6 w-full h-16">
                  <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,30 Q25,28 40,20 T70,10 T100,0" fill="none" stroke="#0284c7" strokeWidth="1.5" />
                    <path d="M0,30 Q25,28 40,20 T70,10 T100,0 L100,30 L0,30 Z" fill="url(#gradKayapalat)" opacity="0.2"/>
                    <defs>
                      <linearGradient id="gradKayapalat" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#0284c7', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#0284c7', stopOpacity:0}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mt-6 text-xs font-mono text-gray-600 uppercase tracking-wider relative z-10">
                Client: Kayapalat
              </div>
            </div>
          </div>

          {/* Column 3 & 4 Combined (Right) - GRRAS (Education & IT) */}
          <div className="flex flex-col gap-6 lg:gap-4 w-full lg:w-[44%]">
            {/* Top Row: Split Stats */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-4">
              
              {/* Stat 1: CAC Reduction */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col border border-gray-100 w-full sm:w-1/2 min-h-[240px] relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-sky-400"></div>

                <div className="flex-grow mt-2 relative z-10">
                  <div className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4 leading-none">
                    <AnimatedNumber target={65} />%
                  </div>
                  <p className="text-base text-[#1c1c1c] leading-relaxed font-light">
                    reduction in Customer Acquisition Cost (CAC) across programs.
                  </p>
                  
                  {/* Downward trend graph */}
                  <div className="flex items-end gap-1.5 mt-6 h-12 opacity-80">
                    <div className="w-1/4 bg-gray-300 h-full rounded-t-sm"></div>
                    <div className="w-1/4 bg-gray-300 h-[75%] rounded-t-sm"></div>
                    <div className="w-1/4 bg-gray-300 h-[45%] rounded-t-sm"></div>
                    <div className="w-1/4 bg-green-500 h-[20%] rounded-t-sm"></div>
                  </div>
                </div>
                <div className="mt-6 text-xs font-mono text-gray-600 uppercase tracking-wider relative z-10">
                  Client: Grras
                </div>
              </div>

              {/* Stat 2: Surge in leads */}
              <div className="bg-gray-50 rounded-lg p-8 flex flex-col shadow-inner border border-gray-100 w-full sm:w-1/2 min-h-[240px] relative">
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#52525B] rounded-full"></div>

                <div className="flex-grow mt-2">
                  <div className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4 leading-none">
                    <AnimatedNumber target={412} />%
                  </div>
                  <p className="text-base text-gray-800 leading-relaxed font-light">
                    surge in qualified lead-to-enrollment conversion rates.
                  </p>
                  
                  {/* Upward scatter/line graph representation */}
                  <div className="mt-6 w-full h-12 flex items-end justify-between px-1">
                    <div className="w-2 h-2 rounded-full bg-sky-300 mb-1"></div>
                    <div className="w-2 h-2 rounded-full bg-sky-400 mb-3"></div>
                    <div className="w-2 h-2 rounded-full bg-sky-500 mb-4"></div>
                    <div className="w-2 h-2 rounded-full bg-sky-600 mb-7"></div>
                    <div className="w-2 h-2 rounded-full bg-sky-700 mb-10"></div>
                    {/* Connecting line illusion */}
                    <svg className="absolute w-[80%] h-12 left-[10%] bottom-8 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <polyline points="0,90 25,75 50,65 75,40 100,10" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 2"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-xs font-mono text-[#71717A] uppercase tracking-wider">
                  Client: Grras
                </div>
              </div>
            </div>

            {/* Wide Quote Panel */}
            <div className="bg-gray-50 rounded-xl p-8 md:p-6 border border-gray-100 flex-grow flex flex-col sm:flex-col gap-8 lg:gap-10 items-center sm:items-stretch relative">
              <div className="w-full flex justify-center rounded-md overflow-hidden bg-[#27272A] border border-[#3F3F46]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Grras Operations Head"
                  className="w-full h-48 object-cover rounded-lg grayscale opacity-50 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex flex-col justify-center w-full py-2">
                <p className="text-lg md:text-md text-gray-800 leading-relaxed mb-8 flex-grow font-light">
                  "Our student acquisition cost dropped by half while enrollment numbers skyrocketed. Their shift from traditional lead gen to a pure revenue-focused architecture changed our trajectory entirely."
                </p>
                <div className="mt-auto border-t border-gray-200 pt-4">
                  <div className="font-normal text-gray-900 text-base">
                    Operations Head
                  </div>
                  <div className="text-sm text-[#71717A] mb-3 font-light">
                    Grras Solutions
                  </div>
                  <div className="text-xs font-mono text-[#52525B] uppercase tracking-widest">
                    Sector: Education & IT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}