import React from 'react';

export default function RevenueBentoGrid() {
  return (
    <section className="relative bg-sky-100 w-full py-24 px-4 md:px-8 font-sans flex items-center justify-center">
      {/* Fixed width container with increased height properties */}
 <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
 <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 mt-12">
          <h2 className="text-4xl md:text-[42px] font-bold text-gray-900 tracking-tight mb-4">
            Predictable Revenue Growth
          </h2>
          <p className="text-gray-700 text-lg">
            Forget vanity metrics. We engineer full-funnel marketing systems designed strictly to scale your bottom-line profitability and outpace the competition.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)] lg:auto-rows-[280px]">
          
          {/* Card 1: Tall Vertical Card (Spans 2 rows) */}
          <div className="lg:col-span-1 lg:row-span-2 rounded-lg bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative group">
            {/* Image Placeholder with Gradient Fade */}
            <div className="h-[55%] w-full bg-gradient-to-b from-orange-100 to-pink-50 relative">
              {/* Simulated Abstract Image Graphic */}
              <div className="absolute inset-0 opacity-100 bg-[url('https://images.pexels.com/photos/4872018/pexels-photo-4872018.jpeg')] "></div>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-end z-10 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                $50M+ Ad Spend<br/>Managed
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Driving hyper-targeted traffic and high-intent leads across 40+ industries, complemented by automated conversion tracking.
              </p>
            </div>
          </div>

          {/* Card 2: Small Square (Top Row, Middle-Left) */}
          <div className="lg:col-span-1 lg:row-span-1 rounded-lg bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] p-8 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-7xl text-black drop-shadow-md mb-2">
              3.5<span className="text-5xl">x</span>
            </h3>
            <p className="text-[#3b82f6] font-medium text-sm leading-relaxed z-10">
              Average ROAS Achieved,<br/>scaling faster and more profitably.
            </p>
            {/* Soft background glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>

          {/* Card 3: Wide Horizontal Card (Top Row, Right) */}
          <div className="lg:col-span-2 lg:row-span-1 rounded-lg bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 text-center sm:text-left">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-4">
               
              </div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-1">$12M+</h3>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">New Pipeline Generated</p>
            </div>
            <div className="flex-1 border-t sm:border-t-0 sm:border-l border-gray-100 pt-6 sm:pt-0 sm:pl-8">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Precision</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Your campaigns are continuously optimized using proprietary AI attribution models, stripping away wasted spend.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                View case studies 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          {/* Card 4: Wide Horizontal Card with bottom gradient (Bottom Row, Middle) */}
          <div className="lg:col-span-2 lg:row-span-1 rounded-lg bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Background Gradient Mesh at bottom */}
            <div className="absolute -bottom-24 -left-10 w-[120%] h-64 bg-gradient-to-tr from-cyan-100 via-indigo-50 to-purple-100 opacity-60 filter blur-2xl z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maximize Lifetime Value</h3>
              <p className="text-gray-500 text-sm max-w-md">
                We keep your acquisition costs low while maximizing retention through personalized email, SMS, and high-converting retargeting funnels.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-6">
              {/* Chip 1 */}
              <div className="bg-white/80 backdrop-blur-md rounded-md p-4 flex gap-3 flex-1 border border-white/40 shadow-sm">
                <div className="bg-gradient-to-b from-sky-300 to-sky-500 rounded-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Attribution</h4>
                  <p className="text-xs text-gray-500">Turn clicks into hard data.</p>
                </div>
              </div>
              {/* Chip 2 */}
              <div className="bg-white/80 backdrop-blur-md rounded-md p-4 flex gap-3 flex-1 border border-white/40 shadow-sm">
                <div className="bg-gradient-to-b from-sky-300 to-sky-500 rounded-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Automation</h4>
                  <p className="text-xs text-gray-500">Smart funnels & scoring.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Small Square (Bottom Row, Right) */}
          <div className="lg:col-span-1 lg:row-span-1 rounded-lg bg-[#ecfdf5] shadow-sm p-8 flex flex-col justify-center items-center text-center">
            
             <h3 className="text-6xl font-semibold text-gray-900 mb-2 tracking-tighter">45%</h3>
             <p className="text-gray-500 text-xs font-medium px-4 leading-relaxed">
               Decrease in Cost Per Acquisition (CPA) within the first 90 days.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}