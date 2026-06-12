'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

// ─── Change this to match your actual navbar height ───
const NAVBAR_HEIGHT = 64; // px

const stepsData = [
  {
    id: '01',
    title: 'Understand the Challenge',
    description:
      'We create tailor-made design and development solutions that align with your business goals and user needs, from intuitive UI/UX design to robust, scalable development.',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '02',
    title: 'Strategic Planning',
    description:
      'We map out a comprehensive strategy, defining milestones, technical requirements, and project architecture to ensure a smooth execution phase.',
    images: [
      'https://images.unsplash.com/photo-1512758684051-ce17ebc569ea?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '03',
    title: 'Custom Design & Development',
    description:
      'Our team crafts pixel-perfect designs and writes clean, scalable code to bring your vision to life, ensuring optimal performance across all devices.',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    ],
  },
  {
    id: '04',
    title: 'Testing & Optimization',
    description:
      'Rigorous testing is conducted to identify and resolve any issues. We optimize for speed, security, and user experience before the final launch.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    ],
  },
];

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const containerRef = useRef(null);
  const isClickScrolling = useRef(false);
  const clickScrollTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // How far the user has scrolled INTO the sticky section
      const scrolledIn = -rect.top;

      // Total scrollable distance = section height minus the visible panel height
      // Panel height = viewport minus navbar, so we subtract NAVBAR_HEIGHT
      const totalTravel =
        containerRef.current.offsetHeight - (window.innerHeight - NAVBAR_HEIGHT);

      if (scrolledIn <= 0) {
        setActiveStepIndex(0);
        return;
      }
      if (scrolledIn >= totalTravel) {
        setActiveStepIndex(stepsData.length - 1);
        return;
      }

      const progress = scrolledIn / totalTravel; // 0 → 1
      const step = Math.round(progress * (stepsData.length - 1));
      setActiveStepIndex(Math.max(0, Math.min(stepsData.length - 1, step)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set correct initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (index) => {
    isClickScrolling.current = true;
    setActiveStepIndex(index);

    if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);

    if (containerRef.current) {
      const sectionTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;

      // Same formula as the scroll handler — must stay in sync
      const totalTravel =
        containerRef.current.offsetHeight - (window.innerHeight - NAVBAR_HEIGHT);

      const targetY =
        sectionTop + (index / (stepsData.length - 1)) * totalTravel;

      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    // Release lock after smooth scroll finishes (~800 ms)
    clickScrollTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  return (
    <div className="bg-white w-full text-black font-sans selection:bg-[#B7F365] selection:text-black">

      {/* ── Intro header ── */}
      <div className="text-left max-w-7xl mx-auto mb-4 px-4">
        <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-wider text-gray-800 uppercase">
          <div className="w-1.5 h-1.5 bg-[#B7F365] rounded-sm" />
          Work Process
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-6">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6 leading-tight">
          Transforms Ideas Into {' '}
          <br className="hidden md:block" />
          Impactful Digital Solutions
        </h2>
        <p className="text-gray-800 text-md mb-8 max-w-lg text-left sm:text-right">
          Whether you're optimizing today or building for tomorrow — we help
          you move faster with confidence.
        </p>
        </div>
      </div>

   
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${stepsData.length * 90}vh` }}
      >
      
        <div
          className="sticky left-0 w-full overflow-hidden bg-white flex items-center"
          style={{
            top: NAVBAR_HEIGHT,
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          }}
        >
          <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="flex flex-col gap-0">
              {stepsData.map((step, index) => {
                const isActive = activeStepIndex === index;

                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(index)}
                    className={`
                      group cursor-pointer overflow-hidden
                      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${isActive
                        ? 'bg-black text-white rounded-[0.5rem] px-6 md:px-10 py-5 md:py-7 my-2 border-none'
                        : 'bg-transparent border-b border-gray-200 px-1 py-4 md:py-5 hover:border-gray-400'
                      }
                    `}
                  >
                    {/* ── Header row ── */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center flex-1">
                        <span
                          className={`
                            w-28 md:w-44 flex-shrink-0
                            text-xs md:text-sm tracking-[0.2em] font-medium
                            transition-colors duration-500
                            ${isActive ? 'text-white/40' : 'text-gray-400'}
                          `}
                        >
                          STEP — {step.id}
                        </span>
                        <h2
                          className={`
                            text-xl md:text-[2rem] lg:text-[2.25rem]
                            font-medium tracking-tight leading-none
                            transition-colors duration-500
                            ${isActive ? 'text-white' : 'text-gray-800 group-hover:text-black'}
                          `}
                        >
                          {step.title}
                        </h2>
                      </div>

                      {/* Icon */}
                      <div className="flex-shrink-0">
                        {isActive ? (
                          <div className="bg-gradient-to-b from-sky-300 to-sky-500  rounded-full p-2 md:p-2.5">
                            <ArrowDown
                              size={20}
                              className="text-white"
                              strokeWidth={2.5}
                            />
                          </div>
                        ) : (
                          <div className="border border-gray-200 rounded-full p-2 md:p-2.5 group-hover:border-gray-400 transition-colors duration-300">
                            <ArrowRight
                              size={20}
                              className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                              strokeWidth={1.5}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ── Expandable body (CSS grid trick) ── */}
                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col lg:flex-row mt-8 md:mt-14 pb-2 gap-8 lg:gap-12">
                          {/* Desktop spacer to align under title */}
                          <div className="hidden lg:block w-44 flex-shrink-0" />

                          <div className="flex flex-col lg:flex-row flex-1 justify-between gap-8 lg:gap-12">
                            {/* Description */}
                            <div className="flex items-end max-w-sm lg:max-w-md">
                              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                                {step.description}
                              </p>
                            </div>

                            {/* Images — staggered fade-up via inline transition-delay */}
                            <div className="flex gap-3 md:gap-4 w-full lg:w-auto">
                              {step.images.map((src, imgIdx) => (
                                <img
                                  key={imgIdx}
                                  src={src}
                                  alt={`${step.title} visual ${imgIdx + 1}`}
                                  className={`
                                    w-1/2 lg:w-44 xl:w-56
                                    h-36 md:h-56 xl:h-64
                                    object-cover rounded-2xl
                                    transition-all duration-500
                                    ${isActive
                                      ? 'opacity-100 translate-y-0'
                                      : 'opacity-0 translate-y-3'
                                    }
                                  `}
                                  style={{
                                    transitionDelay: isActive
                                      ? `${imgIdx * 80 + 60}ms`
                                      : '0ms',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}