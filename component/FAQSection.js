"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "What does your agency specialize in?",
    answer: "We specialize in helping startups design, build, and scale AI-powered products. Our expertise includes AI strategy, UX/UI design, automation tools, and product development for SaaS, tech, and data-driven businesses."
  },
  {
    id: 2,
    question: "Do you work with early-stage startups?",
    answer: "Yes, we frequently partner with early-stage startups to help define their MVP, establish robust digital architectures, and scale their initial offerings rapidly."
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on scope and complexity, but a standard application typically takes roughly 4 to 8 weeks from initial design to final deployment."
  },
  {
    id: 4,
    question: "Can you integrate AI into my existing product?",
    answer: "Absolutely. We can seamlessly integrate modern AI capabilities, custom workflows, or intelligent chatbots directly into your existing infrastructure."
  },
  {
    id: 5,
    question: "What do you need from me to get started?",
    answer: "We begin with a strategic discovery phase. We just need an understanding of your core goals, target audience, and any existing brand assets or technical documentation you have."
  },
  {
    id: 6,
    question: "How do you ensure quality?",
    answer: "We employ rigorous technical audits, automated performance testing, and continuous feedback loops throughout the entire development and deployment cycle."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1); // Default first item to open

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 flex items-center font-sans">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Header & Booking Card */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#b7f365]"></span>
            <span className="text-sm font-medium text-gray-800 tracking-wide">FAQs</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1a2b3c] leading-tight mb-12">
            Frequently Asked <br /> Questions
          </h2>

          {/* Booking Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm bg-white rounded-lg border border-gray-300 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Subtle glow effect behind the avatar */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#b7f365]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" 
                  alt="Consultant"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-medium text-[#1a2b3c] mb-3">
                Book a 15 min call
              </h3>
              
              <p className="text-gray-800 text-sm leading-relaxed mb-8">
                If you have any questions, just book a 15-minute call with us before subscribing
              </p>

              <Link href={'/contact'} className="w-full py-4 px-6  bg-gradient-to-b from-sky-300 to-sky-500 cursor-pointer text-white rounded-lg font-medium transition-colors duration-300 shadow-lg ">
                Book a Free Call
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 flex flex-col ">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div 
                key={faq.id}
                layout
                className={`bg-white overflow-hidden transition-shadow duration-300 border-b-1 border-gray-300 border-dashed `}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[17px] font-medium text-[#1a2b3c] pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Cross Icon */}
                  <div className="flex-shrink-0 text-gray-400">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}