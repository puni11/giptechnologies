import React from "react";
import Image from "next/image";
import { Sparkles, Quote } from "lucide-react";

// Default fallback data
const defaultMarketingData = {
  sectionLabel: "Benefits",
  badgeLabel: "Benefits",
  heading: "The Benefits of a Solid Marketing Strategy",
  description:
    "A well-defined digital marketing strategy gives your brand clarity, direction, and measurable impact on your audience growth and ROI.",
  cards: [
    {
      id: 1,
      title: "Clear Direction \nfor Campaigns",
      description:
        "Gain a structured, step-by-step roadmap that removes uncertainty and helps you launch campaigns with confidence and purpose.",
    },
    {
      id: 2,
      title: "Reduced \nAcquisition Costs",
      description:
        "Identify and optimize high-performing channels, freeing up budget and maximizing efficiency across all digital touchpoints.",
    },
    {
      id: 3,
      title: "Sustainable \nCompetitive Edge",
      description:
        "Move beyond basic ads to implement scalable marketing funnels that differentiate your brand and boost conversion rates.",
    },
    {
      id: 4,
      title: "Enhanced Data \nGovernance",
      description:
        "Establish reliable tracking frameworks to ensure your audience data is accurate, compliant, and actionable from day one.",
    },
  ],
  imageCard: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    alt: "Marketing team collaborating",
  },
  testimonialCard: {
    quote:
      "They brought clarity to complex marketing funnels, breaking down barriers and delivering innovative campaigns that scaled our reach.",
    name: "Ajay Sethi",
    role: "CEO, Kayapalat",
    avatarSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
  },
};

export default function MarketingBenefits({ data = defaultMarketingData }) {
  // Destructure for cleaner code
  const {
    sectionLabel,
    badgeLabel,
    heading,
    description,
    cards,
    imageCard,
    testimonialCard,
  } = data;

  return (
    <section className="w-full bg-white py-10 px-4 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Border Label --- */}
        <div className="flex items-center w-full mb-20">
          <div className="w-8 h-[14px] border-2 border-black rounded-full flex-shrink-0 mr-6"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="ml-6 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase whitespace-nowrap">
            {sectionLabel}
          </div>
        </div>

        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-[#60bfff]"></div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900">
                  {badgeLabel}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 max-w-2xl">
                {heading}
              </h2>
            </div>
            <p className="max-w-md text-base md:text-lg text-left md:text-right text-gray-800 leading-relaxed ml-auto">
              {description}
            </p>
          </div>
        </div>

        {/* --- Bento Grid Section --- */}
        <div className="bg-[#f4f5f6] p-4 md:p-3 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[auto]">
            
            {/* Top Row: Card 1 */}
            <div className="bg-white p-8 rounded-md lg:col-span-1 flex flex-col h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 bg-gradient-to-b from-sky-300 to-sky-500  rounded-lg flex items-center justify-center mb-auto shadow-sm">
                <Sparkles size={20} className="text-white" fill="white" />
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight whitespace-pre-line">
                  {cards[0].title}
                </h3>
                <p className="text-sm text-gray-950 leading-relaxed">
                  {cards[0].description}
                </p>
              </div>
            </div>

            {/* Top Row: Card 2 */}
            <div className="bg-white p-8 rounded-md lg:col-span-1 flex flex-col h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg flex items-center justify-center mb-auto shadow-sm">
                <Sparkles size={20} className="text-white" fill="white" />
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight whitespace-pre-line">
                  {cards[1].title}
                </h3>
                <p className="text-sm text-gray-950 leading-relaxed">
                  {cards[1].description}
                </p>
              </div>
            </div>

            {/* Top Row: Image Card */}
            <div className="relative lg:col-span-2 rounded-md overflow-hidden min-h-[250px] md:min-h-[300px]">
              <Image
                src={imageCard.src}
                alt={imageCard.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Bottom Row: Testimonial Card */}
            <div className="bg-gradient-to-b from-sky-300 to-sky-500 p-8 md:p-10 rounded-md lg:col-span-2 flex flex-col justify-between">
              <Quote size={28} className="text-white mb-6" fill="white" />
              <h3 className="text-xl md:text-2xl font-medium text-white leading-snug mb-10">
                "{testimonialCard.quote}"
              </h3>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonialCard.avatarSrc}
                    alt={testimonialCard.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {testimonialCard.name}
                  </span>
                  <span className="text-sm text-black/95">
                    {testimonialCard.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Card 3 */}
            <div className="bg-white p-8 rounded-md lg:col-span-1 flex flex-col h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg flex items-center justify-center mb-auto shadow-sm">
                <Sparkles size={20} className="text-white" fill="white" />
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight whitespace-pre-line">
                  {cards[2].title}
                </h3>
                <p className="text-sm text-gray-950 leading-relaxed">
                  {cards[2].description}
                </p>
              </div>
            </div>

            {/* Bottom Row: Card 4 */}
            <div className="bg-white p-8 rounded-md lg:col-span-1 flex flex-col h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="w-10 h-10 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg flex items-center justify-center mb-auto shadow-sm">
                <Sparkles size={20} className="text-white" fill="white" />
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight whitespace-pre-line">
                  {cards[3].title}
                </h3>
                <p className="text-sm text-gray-950 leading-relaxed">
                  {cards[3].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}