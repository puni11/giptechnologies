import React from 'react';

export default function RevenueSection() {
  return (
    <div className='relative bg-sky-100'>
         <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
 <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
    <section className="max-w-7xl mx-auto px-4 py-0 sm:py-12 mt-12 font-sans">
      {/* Top Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
        
        {/* Left Column: Heading & Trustpilot */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
            What True Revenue <br className="hidden md:block" /> Growth Looks Like
          </h2>
          
          {/* Reviews Row */}
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-800">
            <span className="font-semibold">4.9/5</span>
            {/* Trustpilot Star SVG */}
            <svg
              className="w-6 h-6 text-[#00b67a]"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            <span className="font-bold text-gray-900">Trustpilot</span>
            <span className="text-gray-600">Based on 450+ client reviews</span>
          </div>
        </div>

        {/* Right Column: Text & Buttons */}
        <div className="flex flex-col justify-center pt-2">
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            Get an inside look at the data-driven strategies and frameworks 
            we use to scale businesses. We ignore vanity metrics and focus entirely 
            on measurable ROI and pipeline generation.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href='tel:+919024197072' className="bg-[#111111] hover:bg-black text-white px-6 py-3 rounded text-sm font-medium transition-colors">
              Book a Growth Call
            </a>
            <button className="border trigger-contact-modal border-gray-300 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded text-sm font-medium flex items-center gap-2 transition-colors">
              Get Free Consultation
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.pexels.com/photos/6878199/pexels-photo-6878199.jpeg" // Optional: Add a fallback image
        >
          {/* Replace with your actual video path */}
          <source src="https://www.pexels.com/download/video/30445099/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    </div>
  );
}