import React from 'react';

export default function MarketingSection() {
  return (
    <section className="py-20 px-4 md:px-8 w-full font-sans min-h-screen flex items-center">
      {/* Fixed layout width to prevent structural collapse */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-[1.15]">
            Search Has Evolved <br />
            Marketing Strategies Must Adapt
          </h2>
          <p className="text-gray-700 text-lg md:text-[17px] mb-6 leading-relaxed max-w-5xl mx-auto">
            As users embrace AI search experiences, most agencies are scrambling to adapt. Our tailored SEO services have leveraged an omnipresent optimization framework for years. Between our future-proof methodology and purpose-built visibility tracking, our solutions are unmatched for teams who need to prove measurable impact in 2026.
          </p>
          <a href="#" className="inline-flex items-center text-sky-600 font-semibold hover:underline text-base">
            Discover Our Omni-Growth Approach 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100 w-full min-h-[400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 h-full">
            
            {/* Left Column (Text & CTA) */}
            <div className="flex flex-col justify-center h-full">
              <p className="text-gray-500 font-bold text-xs tracking-[0.15em] uppercase mb-2">
                Featured Case Study
              </p>
              <h3 className="text-3xl md:text-[32px] font-semibold text-gray-900 mb-6 tracking-tight">
                Winning Back Visibility in an AI Era
              </h3>
              
              <ul className="space-y-4 mb-8 text-gray-700 text-[15px] leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                  <span>Buyers shifted to AI assistants like ChatGPT and Copilot.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                  <span>We helped our partners earn prominent citations in AI Overviews and generative answers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                  <span>The result: triple-digit growth in AI-driven traffic, leads, and non-branded visibility—cementing their authority.</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                
                <button className="trigger-contact-modal px-6 py-3 bg-gradient-to-b from-sky-300 to-sky-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                  Know More
                </button>
              </div>
            </div>

            {/* Right Column (2x2 Stats Grid) */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 h-full">
              
              {/* Dashed Cross Borders (Desktop/Tablet) */}
              <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-px border-l border-dashed border-gray-200 -ml-[0.5px]"></div>
              <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-px border-t border-dashed border-gray-200 -mt-[0.5px]"></div>

              {/* Stat 1 */}
              <div className="p-6 md:p-8 flex flex-col justify-center border-b sm:border-b-0 border-dashed border-gray-200">
                <p className="text-[3.25rem] font-semibold text-sky-600 leading-none mb-3">586%</p>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                  Increase in traffic from<br/>generative AI sources
                </p>
              </div>

              {/* Logo / Graphic Box */}
              <div className="p-6 md:p-8 flex items-center justify-center border-b sm:border-b-0 border-dashed border-gray-200">
                <div className="bg-[#facc15] text-black font-extrabold text-2xl px-5 py-3 flex items-center shadow-sm w-full max-w-[200px] justify-center">
                  Kayapalat
                </div>
              </div>

              {/* Stat 2 (Chart) */}
              <div className="p-6 md:p-8 flex flex-col justify-center border-b sm:border-b-0 border-dashed border-gray-200 sm:border-none">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Keyword Rankings Growth
                </p>
                <div className="w-full h-16 relative">
                  <svg className="w-full h-full text-sky-600" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                    {/* Shaded Area */}
                    <path d="M0 35 L10 32 L20 37 L35 25 L45 32 L55 20 L65 10 L80 15 L100 8 L100 40 L0 40 Z" fill="currentColor" fillOpacity="0.15"/>
                    {/* Line */}
                    <path d="M0 35 L10 32 L20 37 L35 25 L45 32 L55 20 L65 10 L80 15 L100 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Stat 3 (Highlight Box) */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-[3.25rem] font-semibold text-sky-600 leading-none mb-3">116%</p>
                <div>
                  <span className="bg-sky-600 text-white font-bold text-[11px] uppercase tracking-wider px-1.5 py-0.5 leading-[1.8] box-decoration-clone">
                    Higher visibility in LLMs<br/>than closest competitor
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}