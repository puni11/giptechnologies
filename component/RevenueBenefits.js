"use client";

import React, { useState } from "react";
import { TrendingUp, Target, PieChart, Zap } from "lucide-react";

const benefits = [
  {
    id: 0,
    letter: "P",
    title: "Predictable Scalability",
    description:
      "Engineered campaigns aligned directly with your target sales velocity, turning growth into a repeatable, measurable system.",
    icon: TrendingUp,
    angle: -90, // Top quadrant
  },
  {
    id: 1,
    letter: "F",
    title: "Full-Funnel Attribution",
    description:
      "Complete visibility from initial ad click to final closed deal, eliminating guesswork and identifying top-performing channels.",
    icon: Target,
    angle: 0, // Right quadrant
  },
  {
    id: 2,
    letter: "D",
    title: "Data-Backed Agility",
    description:
      "Continuous real-time optimization to rapidly allocate budget toward high-yield campaigns and maximize acquisition velocity.",
    icon: Zap,
    angle: 90, // Bottom quadrant
  },
  {
    id: 3,
    letter: "R",
    title: "Bottom-Line ROI Focus",
    description:
      "Say goodbye to vanity metrics like clicks and impressions. We measure success solely on pipeline value and generated cash flow.",
    icon: PieChart,
    angle: 180, // Left quadrant
  },
];

export default function RevenueBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = benefits[activeIndex];

  // Helper to generate circular SVG arc path
  const getArcPath = (startAngleDeg, endAngleDeg, outerR = 190, innerR = 85) => {
    const cx = 200;
    const cy = 200;

    const toRad = (deg) => (deg * Math.PI) / 180;

    const startRad = toRad(startAngleDeg);
    const endRad = toRad(endAngleDeg);

    const x1_out = cx + outerR * Math.cos(startRad);
    const y1_out = cy + outerR * Math.sin(startRad);
    const x2_out = cx + outerR * Math.cos(endRad);
    const y2_out = cy + outerR * Math.sin(endRad);

    const x1_in = cx + innerR * Math.cos(startRad);
    const y1_in = cy + innerR * Math.sin(startRad);
    const x2_in = cx + innerR * Math.cos(endRad);
    const y2_in = cy + innerR * Math.sin(endRad);

    const largeArc = endAngleDeg - startAngleDeg > 180 ? 1 : 0;

    return `
      M ${x1_out} ${y1_out}
      A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2_out} ${y2_out}
      L ${x2_in} ${y2_in}
      A ${innerR} ${innerR} 0 ${largeArc} 0 ${x1_in} ${y1_in}
      Z
    `;
  };

  // 4 Quadrants: Top (-135 to -45), Right (-45 to 45), Bottom (45 to 135), Left (135 to 225)
  const quadrants = [
    { id: 0, start: -135, end: -45, iconX: 200, iconY: 62.5 },
    { id: 1, start: -45, end: 45, iconX: 337.5, iconY: 200 },
    { id: 2, start: 45, end: 135, iconX: 200, iconY: 337.5 },
    { id: 3, start: 135, end: 225, iconX: 62.5, iconY: 200 },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-600 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100 inline-block mb-3">
            GIP Technologies Framework
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            Benefits of Revenue-Driven Marketing
          </h2>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            How our performance methodology transforms digital strategy into actual business capital.
          </p>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-blue-100 shadow-md shadow-blue-500/5"
                      : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  {/* Icon Badge */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-sky-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <h3
                      className={`text-base font-bold tracking-tight uppercase transition-colors duration-200 ${
                        isActive ? "text-sky-600" : "text-gray-400 group-hover:text-gray-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-gray-600 font-normal" : "text-gray-400 font-light"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Radial SVG Diagram */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Radial SVG Wheel */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-xl"
              >
                {quadrants.map((quad) => {
                  const isActive = activeIndex === quad.id;
                  const item = benefits[quad.id];
                  const Icon = item.icon;

                  return (
                    <g
                      key={quad.id}
                      onClick={() => setActiveIndex(quad.id)}
                      className="cursor-pointer group"
                    >
                      {/* Arc Segment */}
                      <path
                        d={getArcPath(quad.start, quad.end, 190, 85)}
                        className={`transition-all duration-500 ${
                          isActive
                            ? "fill-sky-600"
                            : "fill-gray-100 hover:fill-gray-200"
                        }`}
                        stroke="#FFFFFF"
                        strokeWidth="3"
                      />

                      {/* Icon inside Quadrant */}
                      <foreignObject
                        x={quad.iconX - 16}
                        y={quad.iconY - 16}
                        width="32"
                        height="32"
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? "text-white" : "text-gray-600"
                            }`}
                          />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* Outer Shadow Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              </svg>

              {/* Center White Hub Card */}
              <div className="absolute w-[165px] h-[165px] bg-white rounded-full shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center p-4 transition-all duration-500">
                
                {/* Dynamic Arrow Indicator Pointing Outward */}
                <div
                  className="absolute w-full h-full inset-0 transition-transform duration-500 ease-out pointer-events-none"
                  style={{ transform: `rotate(${activeItem.angle + 90}deg)` }}
                >
                  <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white filter drop-shadow-md" />
                </div>

                {/* Faded Watermark Letter */}
                <span className="absolute inset-0 flex items-center justify-center text-8xl font-black text-gray-100/70 select-none pointer-events-none">
                  {activeItem.letter}
                </span>

                {/* Active Title Text in Center */}
                <span className="relative z-10 text-sm font-bold text-sky-600 tracking-tight leading-tight px-2">
                  {activeItem.title}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}