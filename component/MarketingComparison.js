"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MarketingComparison() {
  // Desktop Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Mobile Tab State
  const [activeTab, setActiveTab] = useState('traditional'); // 'traditional' or 'revenue'

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <section className="flex flex-col items-center w-full bg-white py-16 px-4 font-sans">
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
          Marketing Built to Grow Revenue, Not Just Traffic.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Traditional marketing optimizes for channel metrics. Revenue marketing optimizes for business impact. Connected revenue marketing through RevenueCloudFX leads to <strong className="text-gray-900">1.8X faster lead growth than industry average.</strong>
        </p>
      </div>

      {/* MOBILE VIEW: Tabs (Hidden on medium screens and up) */}
      <div className="block md:hidden w-full max-w-[600px] mx-auto">
        {/* Tab Buttons */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6 shadow-inner">
          <button
            onClick={() => setActiveTab('traditional')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${
              activeTab === 'traditional'
                ? 'bg-white shadow text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Traditional Marketing
          </button>
          <button
            onClick={() => setActiveTab('revenue')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all duration-300 ${
              activeTab === 'revenue'
                ? 'bg-white shadow text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Revenue Marketing
          </button>
        </div>

        {/* Tab Content (Image) */}
        <div className="relative h-[400px] sm:h-[500px]  rounded-xl overflow-hidden ">
          <Image
            // Swap these paths with your actual mobile-optimized images
            src={activeTab === 'revenue' ? "/mf.png" : "/mh.png"}
            alt={activeTab === 'revenue' ? "Revenue Marketing Funnel" : "Traditional Digital Marketing Funnel"}
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </div>

      {/* DESKTOP VIEW: Interactive Slider (Hidden on small screens) */}
      <div 
        ref={containerRef}
        className="hidden md:block relative w-full max-w-[1200px] h-[430px] select-none cursor-ew-resize overflow-hidden mx-auto"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
      >
        {/* Right Side ("After" State - Revenue Marketing) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/1.png"
            alt="Revenue Marketing Funnel"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Left Side ("Before" State - Traditional Marketing) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-slate-400"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-[100vw] max-w-[1200px] h-full">
            <Image
              src="/2.png"
              alt="Traditional Digital Marketing Funnel"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Custom Slider Handle */}
        <div
          className="absolute top-0 bottom-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-[2px] h-full bg-slate-700 relative shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-slate-700 flex items-center justify-center shadow-lg pointer-events-auto cursor-ew-resize hover:bg-slate-50 transition-colors">
              {/* Left/Right Arrow Icons */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                <path d="M15 18l-6-6 6-6" />
                <path d="M9 18l6-6-6-6" className="rotate-180 origin-center" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}