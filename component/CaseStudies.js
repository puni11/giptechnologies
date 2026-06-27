import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

// Updated data - Replaced 'image' with 'websiteUrl'
const caseStudies = [
  {
    id: 1,
    brand: " ",
    logoText: "Aurette",
    description: "Repositioned a brand to attract higher-value clients and improve conversion performance.",
    websiteUrl: "https://aurette.com", // Add the actual URL here
    images : "/kap.png",
    stats: [
      { label: "Organic Traffic", value: "+312%" },
      { label: "Conversion Rate", value: "4.2x" }
    ]
  },
  {
    id: 2,
    brand: "",
    logoText: "Kayapalat",
    description: "Redesigned the product experience and built a scalable acquisition funnel.",
    images : "/gr.png",
    websiteUrl: "https://kayapalat.com", // Add the actual URL here
    stats: [
      { label: "Qualified Leads", value: "+185%" },
      { label: "Demo Bookings", value: "+78%" }
    ]
  },
  {
    id: 3,
    brand: "Grras",
    logoText: "Grras Solutions",
    description: "Optimized the customer journey to increase purchase intent and retention.",
    images : "/aurd.png",
    websiteUrl: "https://grras.com", // Add the actual URL here
    stats: [
      { label: "Revenue Growth", value: "+120%" },
      { label: "ROAS", value: "+65%" }
    ]
  }
];

export default function CaseStudies({ isLight = false }) {
  return (
    <section className={`p-8 md:p-16 lg:p-24 font-sans ${isLight ? 'text-gray-950 bg-white' : 'text-white bg-gray-950'}`}>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#97c0ff]"></span>
          <span className={`text-sm font-semibold tracking-wide ${isLight ? "text-gray-950" : "text-white"}`}>Portfolio 26</span>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between mt-6">
          <h2 className={`text-5xl md:text-6xl font-semibold tracking-tight mb-6 ${isLight ? "text-gray-950" : "text-white"}`}>Case Studies</h2>
          <p className={`${isLight ? "text-gray-950" : "text-white"} text-lg md:text-xl max-w-md`}>
            A selection of brands we've helped transform, scale, and position for long-term success.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {caseStudies.map((study) => (
          <div 
            key={study.id} 
            className="group bg-white rounded-lg p-4 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            {/* Image fetched dynamically from Thum.io */}
            <div className="relative w-full h-48 md:h-56 mb-6 rounded-md overflow-hidden bg-gray-200">
              <Image 
                src={`${study.images}`}
                alt={`${study.logoText} website screenshot`}
                fill
                unoptimized // Required so Next.js doesn't block the external domain without config updates
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Logo & Description */}
            <div className="flex-grow px-2">
              <h3 className="font-bold text-lg text-gray-900 mb-4">{study.logoText}</h3>
              <p className="text-gray-900 text-md mb-8 leading-relaxed">
                {study.description}
              </p>
            </div>

            {/* Stats Area */}
            <div className="relative flex gap-2 w-full overflow-hidden rounded-md">
              {study.stats.map((stat, index) => (
                <div key={index} className="flex-1 bg-gray-50 p-4 rounded-md">
                  <p className="text-xl font-bold mb-1 text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-900 font-medium">{stat.label}</p>
                </div>
              ))}

              {/* Orange Arrow Overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-b from-sky-400 to-sky-500 rounded-md flex items-center justify-center translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
                <ArrowUpRight className="text-white w-6 h-6" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
