"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAAndFooter() {
  return (
    <section className="min-h-screen w-full font-sans bg-gradient-to-b from-[#ffffff] to-[#86cdff] flex flex-col items-center pt-32 pb-12 px-6 md:px-12">
      
      {/* ========================================= */}
      {/* 1. HERO / CTA SECTION                     */}
      {/* ========================================= */}
      <div className="flex flex-col items-start sm:items-center text-left sm:text-center mb-24 max-w-4xl mx-auto">
        
        {/* 'Launch Faster' Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-8 bg-white/30 backdrop-blur-sm"
        >
          Launch Faster
        </motion.div>
        
        {/* Main Heading */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-[72px] font-medium text-[#111] tracking-tight leading-[1.05] mb-10"
        >
          Ready to build something<br className="hidden sm:block" /> remarkable?
        </motion.h3>
        
        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <Link
            href={'/contact'}
            className="px-8 py-3.5  bg-gradient-to-b from-sky-400 to-sky-500 text-white rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            Connect Now
          </Link>
          <Link 
            href={'/services'}
            className="px-8 py-3.5  bg-gradient-to-b from-gray-700 to-gray-950 cursor-pointer border-gray-200 text-gray-50 rounded-lg font-medium text-sm transition-colors hover:bg-black/5"
          >
            Browse Services
          </Link>
        </motion.div>

      </div>


      {/* ========================================= */}
      {/* 2. FOOTER CARD SECTION                    */}
      {/* ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-[1400px] bg-white rounded-[0.5rem] p-8 md:p-12 lg:p-16 flex flex-col gap-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        
        {/* Top Header & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111] tracking-tight leading-[1.1] max-w-sm">
              GIP Technology
            </h2>
          </div>
          
          {/* Bold Asterisk Logo */}
          <div className="text-[#111] animate-spin">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
               <path d="M12 2v20m10-10H2m17.07-7.07l-14.14 14.14M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Thin Divider */}
        <hr className="border-gray-200" />

        {/* Middle: Newsletter & Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Newsletter (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="text-[12px] font-bold tracking-widest text-gray-800 uppercase">
              Subscribe for our newsletter
            </p>
            <div className="relative w-full max-w-md">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#f4f4f4] text-gray-900 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-900 hover:opacity-70 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            <p className="text-[12px] text-gray-800 mt-1">
              Your information is never disclosed to third parties.
            </p>
          </div>

          {/* Links (Right) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2">
            
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-2">Main Pages</p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-2">Useful Links</p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blogs</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Contact & Other</p>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">404</a>
            </div>

          </div>
        </div>

        {/* Thin Divider */}
        <hr className="border-gray-200 mt-4" />

        {/* Bottom: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#111]">
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((social, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -2 }} 
                  href="#" 
                  aria-label={social}
                  className="hover:opacity-70 transition-opacity"
                >
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                    {/* Placeholder for actual social SVG, using a simple dot to mimic the image's small black icons */}
                    <div className="w-2.5 h-2.5 border border-white rounded-sm"></div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <p className="text-[12px] text-gray-800">
              © GIP Technology™ 2026, All Rights Reserved
            </p>
          </div>

        </div>
        
      </motion.div>
    </section>
  );
}