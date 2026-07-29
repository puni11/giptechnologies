'use client';

import { motion } from 'framer-motion';
import { FileTextIcon, PaperclipIcon, PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';
import TypingText from './TypingText';

export default function LandingHeroSection() {
  // Replace these with your actual client logo paths in the public folder
  const clientLogos = [
    'https://www.kayapalat.in/_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2FmsjGzrRn1eu9rQWQOuvoSNpE2yE.png%3Fscale-down-to%3D512%26width%3D644%26height%3D164&w=256&q=75',
    'https://www.aurette.in/_next/image?url=%2Fwhite.png&w=1920&q=75',
    'https://openshift.grras.com/frontassets/img/logo.png',
  ];

  // Duplicating the array creates the seamless continuous loop effect
  const loopingLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Background Video Layer */}
      {/* Ensure your video file is placed in the 'public' directory */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/landing.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay to ensure text readability against the video */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[6px] z-[-1]"></div>

      {/* Bottom Fade to White Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto mt-20">
        
        {/* Top Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300/50 bg-white/40 backdrop-blur-md shadow-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
          <span className="text-xs font-semibold tracking-wider text-gray-700 uppercase">
            Grow Smarter in the AI Era
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-6">
          Dont Just Market Your Business <br className="hidden md:block" />
          With Us Build{' '}
         <span className="inline-flex items-center px-8 py-3 rounded-full
                bg-white/20 border border-white/60
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(255,255,255,0.15)]
               ">
  <span
    className="text-2xl md:text-6xl font-light tracking-tight 
                drop-shadow-[0_2px_10px_rgba(255,255,255,0.45)]"
  >
                Revenue Growth Engines
            </span>
          </span>
        </h1>

        {/* Subheading */}
     <TypingText />
        <p className="text-gray-800 text-md md:text-xl max-w-3xl mb-10 leading-relaxed mt-4">
Grow your business with performance-focused digital marketing that transforms traffic into loyal customers. Every campaign is optimized with AI, data, and continuous testing to deliver measurable revenue growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
          <button className="group trigger-contact-modal flex items-center gap-2 px-8 cursor-pointer inline-flex items-center px-8 py-4 rounded-lg
                bg-white/60 border border-white/80
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(255,255,255,0.45)]">
            Get Free Purposal
            <FileTextIcon size={16} className='group-hover:animate-spin' />
          </button>
          
          <a href='tel:+919024197072' className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gray-900 text-white shadow-xl hover:bg-gray-800 hover:shadow-2xl transition-all font-medium border border-gray-700">
            Book A Clarity Call
             <PhoneCallIcon size={16}  className='group-hover:animate-ping' />
          </a>
        </div>
      </div>

      {/* Infinite Logo Ticker */}
      <div className="absolute bottom-10 w-full overflow-hidden flex flex-col items-center z-10">
        {/* Optional fade masks for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/50 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/50 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>

        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here (lower is faster)
          }}
        >
          {loopingLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              {/* Replace with next/image if you have actual dimensions, using img for fluid demo */}
              <img
  src={logo}
  alt="Client Logo"
  className="h-8 md:h-10 w-auto object-contain grayscale contrast-200 brightness-0"
  loading="lazy"
/>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}