import React from "react";
import { Megaphone, Code, Server, Cloud, Repeat, ShieldCheck, TrendingUp, Activity, Lock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    description: "Scale your reach and boost conversion rates effortlessly with data-driven campaigns.",
    icon: <Megaphone size={20} className="text-black" />,
    link:"/digital-marketing",
    colSpan: "lg:col-span-1",
    // Custom pure-CSS graphic for the background
    graphic: (
      <div className="absolute -bottom-6 -right-6 flex flex-col gap-3 transform rotate-[-5deg] opacity-90 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-0">
        <div className="bg-[#1a1a1a] rounded-xl p-4 w-48 shadow-2xl border border-gray-800">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white text-xs font-semibold">Conversion</span>
            <TrendingUp size={14} className="text-[#d4ff00]" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">+48%</div>
          <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div className="w-[75%] bg-[#d4ff00] h-full rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Web Development",
    description: "Full-stack modern web applications built for speed, scale, and seamless user experiences.",
    icon: <Code size={20} className="text-black" />,
    link:"/web-developement",
    colSpan: "lg:col-span-2",
    graphic: (
      <div className="absolute -bottom-12 -right-8 w-72 h-48 bg-white rounded-t-xl border border-gray-200 shadow-[0_0_40px_rgba(0,0,0,0.1)] flex flex-col transform rotate-[2deg] transition-transform duration-500 group-hover:-translate-y-2">
        <div className="h-8 border-b border-gray-100 flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="p-4 space-y-3 flex-1 bg-gray-50">
          <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
          <div className="w-full h-3 bg-gray-200 rounded-full"></div>
          <div className="w-5/6 h-3 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    title: "Server Management",
    description: "Reliable, secure, and optimized server infrastructure to keep your business running 24/7.",
    icon: <Server size={20} className="text-black" />,
    link:"/server-management",
    colSpan: "lg:col-span-2",
    graphic: (
      <div className="absolute top-3 sm:top-1/2 sm:-translate-y-1/2 right-4 flex gap-4 opacity-80 transform rotate-[4deg] transition-transform duration-500 group-hover:-translate-x-2 group-hover:rotate-0">
         <div className="bg-[#1a1a1a] rounded-xl p-4 w-40 shadow-2xl border border-gray-800 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#d4ff00]">
              <Activity size={16} /> <span className="text-xs font-mono">NODE_01</span>
            </div>
            <div className="w-full h-1 bg-gray-700 overflow-hidden"><div className="w-full h-full bg-[#d4ff00]"></div></div>
            <div className="w-full h-1 bg-gray-700 overflow-hidden"><div className="w-[80%] h-full bg-[#d4ff00]"></div></div>
            <div className="w-full h-1 bg-gray-700 overflow-hidden"><div className="w-[90%] h-full bg-[#d4ff00]"></div></div>
         </div>
      </div>
    )
  },
  {
    title: "Cloud Infrastructure",
    description: "Flexible and scalable cloud computing solutions tailored for your growing operational needs.",
    icon: <Cloud size={20} className="text-black" />,
    link:"/cloud-hosting",
    colSpan: "lg:col-span-1",
    graphic: (
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-50 rounded-full blur-[40px] opacity-60 transition-transform duration-700 group-hover:scale-150"></div>
    )
  },
  {
    title: "DevOps",
    description: "Streamline your development pipeline with continuous integration and rapid delivery models.",
    icon: <Repeat size={20} className="text-black" />,
    link:"/devops",
    colSpan: "lg:col-span-1",
    graphic: (
       <div className="absolute -bottom-10 -right-4 w-48 h-48 border-[12px] border-gray-100 rounded-full opacity-50 transform transition-transform duration-[2000ms] group-hover:rotate-180 flex items-center justify-center">
         <div className="w-24 h-24 border-[8px] border-gray-200 rounded-full"></div>
       </div>
    )
  },
  {
    title: "DevSecOps",
    description: "Bake robust security protocols into every single stage of your software deployment lifecycle.",
    icon: <ShieldCheck size={20} className="text-black" />,
    colSpan: "lg:col-span-2",
    link:"#",
    graphic: (
      <div className="absolute -right-2 -bottom-4 transform rotate-[-8deg] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[0deg]">
        <div className="bg-white rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center gap-4 w-60">
          <div className="bg-green-100 p-3 rounded-full text-green-600">
             <Lock size={20} />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">System Secure</div>
            <div className="text-xs text-gray-500">Zero vulnerabilities</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function ServicesBento() {
  return (
    <section className="w-full py-0 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-lg p-8 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col justify-between ${service.colSpan}`}
            >
              {/* Graphic Layer (Background) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {service.graphic}
              </div>

              {/* Content Layer (Foreground) */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 text-white bg-gradient-to-b from-sky-300 to-sky-500  rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {service.icon}
                </div>

                {/* Text Content */}
                <div className="mb-8 max-w-[280px]">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Button pushed to bottom */}
                <div className="mt-auto">
                   <Link href={service.link} className="group relative flex items-center w-[160px] h-[36px] bg-[#18181b] hover:bg-gradient-to-b from-sky-300 to-sky-500  text-white hover:text-white rounded-[8px] overflow-hidden transition-colors duration-500 mt-auto">
      
      {/* Inner White Icon Block */}
      <div className="absolute left-1.5 bg-white group-hover:bg-black text-black group-hover:text-white p-1 flex items-center justify-center rounded-md transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:left-[calc(100%-50px)]">
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
       Learn More
      </span>

    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}