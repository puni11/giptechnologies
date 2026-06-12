import React from 'react';
import FadeIn from './FadeIn';

export default function OurStorySection() {
  return (
    <section className="w-full py-12 px-6 md:px-12 font-sans text-[#111111]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Divider & Label Row */}
        <div className="flex items-center w-full mb-20">
          {/* Logo Icon (Oval shape matching the reference) */}
          <div className="w-8 h-[14px] border-2 border-black rounded-full flex-shrink-0 mr-6"></div>
          
          {/* Horizontal Line */}
          <div className="flex-grow h-px bg-gray-300"></div>
          
          {/* Label */}
          <div className="ml-6 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase whitespace-nowrap">
            Our Story
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Title and Button */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-12">
              The Evolution of<br /> Infrastructure at GIP Technology
            </h2>

            {/* Styled Contact Button */}
          <button className="group relative flex items-center w-[200px] h-[56px] bg-[#18181b] hover:bg-gradient-to-b from-sky-300 to-sky-500  text-white rounded-[8px] overflow-hidden transition-colors duration-500 mt-auto">
      
      {/* Inner White Icon Block */}
      <div className="absolute left-1.5 bg-white group-hover:bg-black text-black group-hover:text-white p-3 flex items-center justify-center rounded-lg transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:left-[calc(100%-50px)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8H12V10H14V8Z" fill="currentColor"/>
          <path d="M16 10H14V12H16V10Z" fill="currentColor"/>
          <path d="M18 12H16V14H18V12Z" fill="currentColor"/>
          <path d="M16 14H14V16H16V14Z" fill="currentColor"/>
          <path d="M14 16H12V18H14V16Z" fill="currentColor"/>
          <path d="M10 12H4V14H10V12Z" fill="currentColor"/>
          <path d="M8 10H6V12H8V10Z" fill="currentColor"/>
          <path d="M8 14H6V16H8V14Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Text */}
      <span className="absolute right-5 font-medium text-sm md:text-[15px] transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:right-[60px]">
        Contact Support
      </span>

    </button>
          </div>

          {/* Right Column: Paragraphs */}
          
          <div className="lg:col-span-7 flex flex-col gap-8 text-[#111111] text-base md:text-[17px] leading-[1.7] ">
            <FadeIn  delay = "0" duration = "1000">
            <p>
              GIP Technology was founded on a singular, disruptive premise: that the future of global enterprise belongs to those who can master their own digital sovereignty. We began as a lean collective of engineers, driven by the challenge of bridging the gap between legacy systems and the frontier of modern cloud architecture. Over the years, we have evolved into a premier agency that treats technology not as a mere tool, but as the foundational DNA of the modern firm.
            </p>
            <p className='mt-4'>
              Our journey has been defined by a relentless pursuit of technical excellence across the entire stack. From crafting high-performance <strong className="font-medium text-gray-800">Web Development</strong> solutions and driving growth through targeted <strong className="font-medium text-gray-800">Digital Marketing</strong>, to architecting resilient <strong className="font-medium text-gray-800">Cloud</strong> environments and reliable <strong className="font-medium text-gray-800">Server Management</strong>. Today, GIP Technology stands as a beacon for firms ready to lead. By integrating automated <strong className="font-medium text-gray-800">DevOps</strong> pipelines and rigorous <strong className="font-medium text-gray-800">DevSecOps</strong> protocols, we ensure that agility, scale, and uncompromising security can seamlessly coexist.
            </p>
            </FadeIn>
          </div>
        
        </div>
      </div>
    </section>
  );
}