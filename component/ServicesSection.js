"use client";

import React, { useState } from 'react';
import { 
  Megaphone, 
  RefreshCw, 
  Cloud, 
  Server, 
  ShieldCheck, 
  Code,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Digital Marketing",
      description: "We help you expand your online presence and reach your target audience through data-driven campaigns.",
      icon: Megaphone,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      link: '/digital-marketing'
    },
    {
      title: "DevOps",
      description: "Streamline your development lifecycle with automated CI/CD pipelines and infrastructure as code.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop",
      link: '/devops'
    },
    {
      title: "Cloud Native",
      description: "Build and run scalable applications in modern, dynamic environments like public, private, and hybrid clouds.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      link: '/cloud-hosting'
    },
    {
      title: "Server Management",
      description: "Keep your infrastructure secure, updated, and running at peak performance with our 24/7 monitoring.",
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
      link: '/server-management'
    },
    {
      title: "DevSecOps",
      description: "Integrate rigorous security practices directly into your agile development and deployment processes.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
      link: '#'
    },
    {
      title: "Web Development",
      description: "Create stunning, lightning-fast user experiences using the latest modern web technologies.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      link: '/web-development'
    }
  ];

  const rows = [
    services.slice(0, 3),
    services.slice(3, 6)
  ];

  return (
    <section className="py-12 px-6 font-sans max-w-7xl mx-auto bg-white overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-semibold tracking-wider text-gray-800 uppercase">
          <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
          Services
        </div>
        
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6 leading-tight">
          Comprehensive consulting and <br className="hidden md:block" />
            intelligent innovation
        </h2>
        
        <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
          Whether you're optimizing today or building for tomorrow we help you move faster with confidence.
        </p>
        
      </div>

      {/* Services Rows */}
      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[300px]">
            
            {row.map((service, colIndex) => {
              const globalIndex = rowIndex * 3 + colIndex;
              const isHovered = hoveredIndex === globalIndex;
              const Icon = service.icon;
              
              return (
                <Link
                  href={service.link} // Fixed: Was row.link
                  key={globalIndex}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative overflow-hidden rounded-[0.5rem] bg-[#fdfdfd] border border-gray-100 p-8 flex shadow-sm hover:shadow-md transition-all duration-500 ease-in-out cursor-pointer w-full md:w-auto ${
                    isHovered ? 'md:flex-[2]' : 'md:flex-1'
                  }`}
                >
                  
                  {/* Left Side: Icon & Text */}
                  <div className={`flex flex-col h-full w-full transition-all duration-500 ease-in-out relative z-10 ${
                    isHovered ? 'md:max-w-[55%]' : 'max-w-full'
                  }`}>
                    <div className=" bg-gradient-to-b from-sky-300 to-sky-500 w-10 h-10 flex items-center justify-center rounded-lg mb-auto text-white shrink-0">
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-[24px] font-medium mb-3 text-gray-900 whitespace-nowrap">
                        {service.title}
                      </h3>
                      <p className="text-gray-800 text-md leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* Fixed: Swapped <Link> for <span> to prevent nested <a> tags */}
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                        Learn More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Image Container */}
                  <div className={`hidden md:block absolute top-4 bottom-4 right-4 w-[40%] transition-all duration-500 ease-out rounded-lg overflow-hidden shadow-inner ${
                    isHovered ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'
                  }`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isHovered ? 'scale-105' : 'scale-100'
                      }`} 
                    />
                  </div>

                </Link>
              );
            })}
            
          </div>
        ))}
      </div>
      
    </section>
  );
}