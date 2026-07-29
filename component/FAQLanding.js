"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    title: "STRATEGY",
    items: [
      {
        id: "01",
        question: "How is your approach different from traditional agencies?",
        answer:
          "We focus on bottom-line revenue, not just vanity metrics like clicks and impressions. Every campaign is reverse-engineered from your specific sales targets.",
      },
      {
        id: "02",
        question: "What metrics do you prioritize for campaigns?",
        answer:
          "We track Customer Acquisition Cost (CAC), Lifetime Value (LTV), and Return on Ad Spend (ROAS) to ensure every marketing dollar drives profitable growth.",
      },
      {
        id: "03",
        question: "How long does it take to see tangible revenue growth?",
        answer:
          "While initial traction and quick wins often happen in the first 30 days, sustainable, scaled revenue growth typically compounds between months 3 to 6.",
      },
    ],
  },
  {
    title: "PARTNERSHIP",
    items: [
      {
        id: "04",
        question: "Do you require long-term contracts?",
        answer:
          "No. We believe in earning your business every month through performance, though we recommend a 90-day initial runway to fully optimize the sales funnel.",
      },
      {
        id: "05",
        question: "Will I get a dedicated growth strategist?",
        answer:
          "Yes, you are paired with a senior growth strategist who acts as your fractional CMO, overseeing execution and communicating results.",
      },
    ],
  },
  {
    title: "ROI & PRICING",
    items: [
      {
        id: "06",
        question: "How do you structure your pricing?",
        answer:
          "We offer a hybrid model combining a baseline retainer to cover essential execution, paired with performance-based incentives tied directly to your revenue goals.",
      },
    ],
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      {/* Header Section */}
      <div className="mb-12">
        <span className="inline-block px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-lg text-sm font-medium mb-6 shadow-sm">
          FAQ guide
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
          Get quick answers to common questions
        </h2>
        <p className="text-lg text-gray-500">
          Find solutions, explore resources, and resolve issues faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        {/* Left Column: Advisor Card */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[4/5] max-w-sm rounded-lg overflow-hidden mb-6 shadow-sm">
            {/* Online Indicator */}
            <div className="absolute top-4 left-4 w-7 h-7 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center z-10">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            
            {/* Background Image */}
            <Image
              src="/tans.png"
              fill
              alt="Tanveer Singh - Growth Strategist"
              className="object-cover w-full h-full"
            />
            
            {/* Gradient Overlay & Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-medium text-lg">Tanveer Singh</h3>
              <p className="text-gray-300 text-sm">Growth Strategist</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-500 text-lg">Need guidance?</p>
            <p className="text-gray-900 font-medium text-lg">
              Tanveer's ready when you are.
            </p>
          </div>

          <div>
            <a href='tel:+919024197072' className="inline-flex items-center gap-2 cursor-pointer px-6 py-3 border border-gray-200 rounded-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors shadow-sm">
              Book a meeting
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Accordions */}
        <div>
          {faqData.map((category, idx) => (
            <div key={idx} className={idx > 0 ? "mt-10" : ""}>
              <h4 className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mb-4 ml-1">
                {category.title}
              </h4>
              <div className="flex flex-col space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-gray-400 font-medium text-lg">
                          {item.id}
                        </span>
                        <span className="font-medium text-gray-700 text-[15px]">
                          {item.question}
                        </span>
                      </div>
                      <div className="text-gray-400 flex-shrink-0 ml-4">
                        {openId === item.id ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                    {/* Expanding Answer Section */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        openId === item.id
                          ? "grid-rows-[1fr] opacity-100 pb-5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-[3.25rem] pr-5 text-gray-600 leading-relaxed text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}