"use client"; // Required in Next.js App Router for Framer Motion

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, TrendingUp, Star, Cloud, Code, Megaphone, Server, Activity } from 'lucide-react';



const Card1 = (
  <div className="w-full h-full bg-white rounded-xl p-6 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-gray-900 font-bold text-lg mb-1">Performance</h3>
        <p className="text-gray-400 text-xs">Engagement level</p>
      </div>
      <div className="bg-gray-100 p-2 rounded-full">
        <TrendingUp size={16} className="text-gray-900" />
      </div>
    </div>
    <div className="flex flex-col">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-1">49%</h2>
      <div className="w-full h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
         <div className="h-full bg-green-500 w-[49%] rounded-full"></div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-4">
      <span className="text-[10px] bg-gray-100 text-gray-600 py-1.5 px-2 rounded-full text-center font-medium">Strategic</span>
      <span className="text-[10px] bg-gray-100 text-gray-600 py-1.5 px-2 rounded-full text-center font-medium">AI-Focused</span>
    </div>
  </div>
);

const Card2 = (
  <div className="w-full h-full bg-[#f4f5f6] rounded-xl p-6 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-white/50">
    <div className="flex flex-wrap gap-2">
       <span className="text-xs bg-white text-gray-700 py-1.5 px-3 rounded-full font-medium shadow-sm">Smarter</span>
       <span className="text-xs bg-white text-gray-700 py-1.5 px-3 rounded-full font-medium shadow-sm">Grow Faster</span>
    </div>
    <div>
      <p className="text-gray-500 text-sm mb-1 font-medium">Data Points</p>
      <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">520k<span className="text-blue-500">+</span></h2>
    </div>
  </div>
);

const Card3 = (
  <div className="w-full h-full bg-gradient-to-br from-[#4fa6ff] to-[#0066ff] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_40px_rgba(0,102,255,0.3)] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 z-10 border border-white/30">
      <Plus size={24} className="text-white" />
    </div>
    <h3 className="text-white font-bold text-2xl mb-2 z-10 tracking-tight">Data training</h3>
    <p className="text-blue-100 text-sm z-10 font-medium">Upload your content</p>
  </div>
);

const Card4 = (
  <div className="w-full h-full bg-purple-900 rounded-xl p-6 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] relative border border-purple-800 text-center">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl"></div>
    <div className="z-10 flex flex-col items-center">
      <div className="bg-white/10 p-3 rounded-full mb-4">
        <Megaphone className="text-purple-300" size={28} />
      </div>
      <h3 className="text-white text-xl font-bold mb-2">Digital Marketing</h3>
      <p className="text-purple-200 text-sm">Scale your reach and boost conversion rates effortlessly.</p>
    </div>
  </div>
);

const Card5 = (
  <div className="w-full h-full bg-[#111111] rounded-xl p-6 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] relative border border-gray-800">
    <div className="absolute top-6 left-6 flex items-center gap-2">
       <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
    </div>
    <h3 className="text-white text-xl font-semibold leading-snug mt-6">
      Expertise <span className="text-[#d4ff00]">that</span> Combines Strategy, Data, and Artificial Intelligence
    </h3>
  </div>
);

const Card6 = (
  <div className="w-full h-full bg-white rounded-xl p-6 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 justify-between">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-gray-900 font-bold text-lg mb-1">Web Dev</h3>
        <p className="text-gray-400 text-xs">Full-Stack Solutions</p>
      </div>
      <div className="bg-blue-50 p-2 rounded-lg">
        <Code size={18} className="text-blue-600" />
      </div>
    </div>
    <div className="space-y-3 mt-4">
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="w-[85%] bg-blue-500 h-full rounded-full"></div>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="w-[60%] bg-indigo-500 h-full rounded-full"></div>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div className="w-[90%] bg-purple-500 h-full rounded-full"></div>
      </div>
    </div>
    <p className="text-xs text-gray-500 font-medium mt-4 text-center">React, Next.js, Node</p>
  </div>
);

const Card7 = (
  <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
    <div className="flex items-center gap-3 relative z-10">
      <Cloud className="text-sky-400" size={24} />
      <h3 className="text-white font-bold">Cloud Infra</h3>
    </div>
    <div className="relative z-10 flex flex-col gap-1">
      <div className="flex items-end gap-2">
        <h2 className="text-4xl font-extrabold text-white">99.9<span className="text-sky-400 text-2xl">%</span></h2>
      </div>
      <p className="text-slate-400 text-sm">Guaranteed Uptime</p>
    </div>
    <div className="flex items-center justify-between mt-4 p-3 bg-white/5 rounded-xl border border-white/10 z-10">
      <div className="flex items-center gap-2 text-slate-300 text-xs">
        <Server size={14} /> Global Servers
      </div>
      <Activity size={14} className="text-green-400" />
    </div>
  </div>
);

const Card8 = (
  <div className="w-full h-full bg-white rounded-xl p-6 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100">
    <div className="mb-4">
      <h3 className="text-gray-900 font-bold text-base leading-tight mb-1">Intelligence in<br/>Every Decision</h3>
    </div>
    <div className="flex-1 flex items-end justify-between gap-2 mt-auto">
      <div className="w-full bg-blue-100 rounded-t-sm h-[30%]"></div>
      <div className="w-full bg-blue-200 rounded-t-sm h-[45%]"></div>
      <div className="w-full bg-blue-400 rounded-t-sm h-[70%]"></div>
      <div className="w-full bg-blue-500 rounded-t-sm h-[85%] relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
      </div>
      <div className="w-full bg-blue-300 rounded-t-sm h-[60%]"></div>
      <div className="w-full bg-blue-200 rounded-t-sm h-[40%]"></div>
    </div>
    <div className="w-full h-[1px] bg-gray-200 mt-2"></div>
  </div>
);

const cardsData = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8];

export default function CardMarquee() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background overlay */}
     

    

      {/* Cards Marquee Container */}
      <div className="relative z-10 flex w-full overflow-hidden">
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-80%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50, // Adjust speed here
          }}
        >
          {/* Duplicate array mapping ensures smooth looping transition */}
          {[...cardsData, ...cardsData].map((card, index) => (
            <div 
              key={index} 
              // Set strict width and height to force cards out of a stacked layout into a row
              className="w-[240px] h-[200px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              {card}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}