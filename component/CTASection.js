import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="p-4 md:p-8 w-full flex items-center justify-center font-sans">
      {/* Main Container - Rounded with hidden overflow to contain the video */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[500px] rounded-xl overflow-hidden flex items-center shadow-lg">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 "
        >
          {/* Replace this src with your actual video path in the public folder */}
          <source src="https://framerusercontent.com/assets/t247SfNjAnKGGOfumRH8njZw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional: Subtle dark/gradient overlay to ensure white text stays readable over any video */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-black/40 to-transparent z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 p-8 md:p-16 max-w-3xl text-white">
          
          {/* Top: Trusted Badges */}
          <div className="flex items-center gap-4 mb-8">
             <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/100?img=11"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-transparent object-cover"
              />
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-transparent object-cover"
              />
              <img
                src="https://i.pravatar.cc/100?img=13"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-transparent object-cover"
              />
            </div>
            <span className="text-sm font-medium opacity-90 tracking-wide">
              Trusted Globally
            </span>
            {/* Overlapping Avatars */}
           
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-semibold leading-[1.1] tracking-tight mb-6">
            We combine human insight <br className="hidden md:block" /> with artificial intelligence
          </h1>

          {/* Paragraph */}
          <p className="text-md opacity-95 mb-10 max-w-xl leading-relaxed">
            Our consulting team bridges strategic thinking and advanced AI
            technologies to help companies streamline processes, improve
            decision-making, and create intelligent digital experiences.
          </p>

          {/* CTA Button */}
          <Link href={'/contact'} className="group w-fit flex items-center justify-between gap-3  bg-gradient-to-b from-sky-300 to-sky-500 text-white text-xs md:text-sm  py-2.5 pl-6 pr-4.5 rounded-lg hover:bg-[#c4ec59] transition-all duration-300">
            Get Started
            {/* Black Circular Icon Wrapper */}
            <span className="bg-white/20 text-white p-2 rounded-full flex items-center justify-center">
              {/* Arrow Up-Right SVG */}
              <svg
                className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="17" x2="17" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="7 7 17 7 17 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}