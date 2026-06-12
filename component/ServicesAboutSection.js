'use client'
import React, { useEffect, useState, useRef } from 'react';

export default function ServicesAboutSection() {
  // 1. Setup state and ref for the Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 2. When the element comes into view, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 3. Unobserve immediately so it only animates the *first* time
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15, // Triggers when 15% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto py-6 font-sans text-slate-900 relative">
      
     
      <style>{`
        @keyframes customFadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-custom-fade-up {
          opacity: 0;
          animation: customFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* --- Heading Section --- */}
      {/* 4. Conditionally apply the animation class, otherwise keep it hidden (opacity-0) */}
      <div className={`flex flex-col items-center mb-16 text-center ${isVisible ? 'animate-custom-fade-up' : 'opacity-0'}`}>
        <p className="text-xs tracking-[0.2em] font-bold uppercase mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-sm"></span>
          Our Expertise
        </p>
        
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] max-w-5xl">
          A full-stack digital partner <br />
          dedicated to engineering{' '}
          {/* Cloud/Server Icon */}
          <span className="inline-flex items-center justify-center w-12 h-12  bg-gradient-to-b from-sky-300 to-sky-600 rounded-full align-middle mx-1 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.9A7 7 0 0 0 4.1 12 5 5 0 0 0 5 21h12.5z"/></svg>
          </span>{' '}
          robust {' '}
          <span className="text-gray-400">and</span>{' '}
          {/* Web/Marketing Icon */}
          <span className="inline-flex items-center justify-center w-12 h-12  bg-gradient-to-b from-lime-300 to-lime-600 rounded-full align-middle mx-1 text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
          </span>{' '}
          <span className="text-gray-400">scalable systems</span>
        </h2>
      </div>

      {/* --- Bento Grid Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr px-4">
        
        {/* Card 1: Web Dev & DevOps (Blue) */}
        <div 
          className={`relative col-span-1 rounded-[1rem] overflow-hidden  bg-gradient-to-b from-sky-300 to-sky-600 min-h-[400px] flex flex-col justify-end p-4 ${isVisible ? 'animate-custom-fade-up' : 'opacity-0'}`} 
          style={{ animationDelay: '100ms' }}
        >
          {/* Abstract Tech Background Graphic */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          {/* Top Bar */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <span className="text-white font-bold text-xl tracking-wide">WEB & DEVOPS</span>
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
            </div>
          </div>

          {/* Bottom Info Box */}
          <div className="relative bg-white rounded-2xl p-6 w-full shadow-lg">
            <h3 className="text-6xl font-light mb-2">250+</h3>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              High-performance web applications and automated CI/CD pipelines deployed.
            </p>
          </div>
        </div>

        {/* Card 2: Cloud & Server Management (Light Gray) */}
        <div 
          className={`col-span-1 rounded-[1rem] bg-[#F4F4F4] p-10 flex flex-col justify-between ${isVisible ? 'animate-custom-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Infrastructure uptime guarantee</p>
            <h3 className="text-6xl font-normal">99.9%</h3>
          </div>
          
          <div className="mt-12">
            {/* Server Nodes / Tech Avatars */}
            <div className="flex -space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#F4F4F4]  bg-gradient-to-b from-gray-800 to-gray-950 flex items-center justify-center text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
              <div className="w-12 h-12 rounded-full border-2 border-[#F4F4F4]  bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <div className="w-12 h-12 rounded-full border-2 border-[#F4F4F4]  bg-gradient-to-b from-sky-300 to-sky-500 flex items-center justify-center text-black"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg></div>
            </div>
            <p className="text-gray-800 font-medium leading-relaxed">
              "Their server management and scalable cloud architecture completely stabilized our high-traffic digital ecosystem."
            </p>
          </div>
        </div>

        {/* Column 3: Stacked Cards (Green & Black) */}
        <div className="col-span-1 flex flex-col gap-6">
          
          {/* Green Card: Digital Marketing */}
          <div 
            className={`flex-1 rounded-[1rem]  bg-gradient-to-b from-lime-300 to-lime-500 p-8 flex flex-col justify-between ${isVisible ? 'animate-custom-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '300ms' }}
          >
            <div>
              <p className="text-sm font-medium text-gray-800 mb-2">Marketing Reach</p>
              <h3 className="text-5xl font-normal">2M+</h3>
            </div>
            <p className="text-gray-800 font-medium leading-relaxed mt-12">
              Targeted leads generated monthly through data-driven digital marketing campaigns.
            </p>
          </div>

          {/* Black Card: Server Management / Scale */}
          <div 
            className={`rounded-[1rem]  bg-gradient-to-b from-gray-700 to-gray-950 p-8 flex items-center justify-between ${isVisible ? 'animate-custom-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '400ms' }}
          >
            <span className="text-white font-medium text-sm">Active Server Nodes</span>
            <span className="text-white text-5xl font-normal">850+</span>
          </div>

        </div>
      </div>
    </section>
  );
}