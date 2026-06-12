'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Home, Lock } from 'lucide-react';
import Link from 'next/link';
// Injecting the global CSS constraints directly so the component is fully self-contained.
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');

  @font-face {
    font-family: 'Dirtyline';
    src: url('https://fonts.cdnfonts.com/s/15011/Dirtyline36DaysofType.woff') format('woff');
    font-weight: normal; 
    font-style: normal; 
    font-display: swap;
  }

  .liquid-glass {
    background: rgba(255,255,255,0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: "";
    position: absolute; inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.45) 0%,
      rgba(255,255,255,0.15) 20%,
      rgba(255,255,255,0) 40%,
      rgba(255,255,255,0) 60%,
      rgba(255,255,255,0.15) 80%,
      rgba(255,255,255,0.45) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export default function NotFound() {
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle GSAP Parallax and mounting state
  useEffect(() => {
    setIsMounted(true);

    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      
      // Calculate target based on mouse position from center
      targetX = ((e.clientX - cx) / cx) * 20;
      targetY = ((e.clientY - cy) / cy) * 20;
    };

    const animate = () => {
      // Lerp for smooth interpolation
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      
      if (videoWrapperRef.current) {
        videoWrapperRef.current.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.08)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleVideoMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  };

  return (
    <div 
      className="relative min-h-screen bg-[#000] text-white overflow-hidden select-none"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Video Background with Parallax Wrapper */}
      <div 
        ref={videoWrapperRef}
        className="absolute inset-0 z-0 origin-center pointer-events-none"
        style={{ transform: 'scale(1.08)' }}
      >
        {/* Added a subtle overlay gradient to ensure text readability against bright video spots */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={handleVideoMetadata}
          className="object-cover w-full h-full"
        />
      </div>


      {/* Hero Headline */}
      <div 
        className={`fixed top-[140px] left-0 right-0 flex flex-col items-center z-20 pointer-events-none transition-all duration-1000 ease-out ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h1 
          className="font-normal text-center flex flex-col items-center justify-center w-full"
          style={{ 
            fontSize: 'clamp(40px, 5.4vw, 72px)', 
            lineHeight: 1.1, 
            letterSpacing: '-0.02em' 
          }}
        >
          <span className="text-white text-3xl">404 Not Found</span>
          <span className="text-white/55">Looks You are Lost</span>
        </h1>
      </div>

      {/* Bottom Block */}
      <div 
        className={`fixed bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-6 w-full px-6 transition-all duration-1000 delay-300 ease-out ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <p className="max-w-[620px] text-[15px] leading-relaxed text-center font-normal">
          <span className="text-white">
            The page you are looking for doesn't exist. But don't worry, your next adventure awaits.
          </span> <br/>
          <span className="text-white/55">
            Explore our services or head back home to start your journey with us.
          </span>
        </p>

        <Link href="/" className="bg-white/30 backdrop-blur-2xl flex items-center gap-2 text-white border border-white/20 text-[15px] font-medium rounded-lg px-8 py-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]">
         <Home size={16}/> Go Back Home
        </Link>

      </div>
    </div>
  );
}