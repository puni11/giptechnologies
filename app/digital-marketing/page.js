import StatsSection from "@/component/AnimatedCounter";
import CardMarquee from "@/component/CardMarquee";
import CaseStudies from "@/component/CaseStudies";
import MarketingBenefits from "@/component/MarketingBenefits";
import ServicesBento from "@/component/ServicesBento";
import ServiceStack from "@/component/ServiceStack";
import TestimonialSection from "@/component/TestimonialSection";
import WhyUsSection from "@/component/WhyUsSection";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Digital Marketing Services | SEO, PPC, Social Media & Lead Generation",

  description:
    "Grow your business with GIP Technologies' Digital Marketing Services. We provide SEO, PPC Advertising, Social Media Marketing, Content Marketing, Local SEO, Online Reputation Management, and Lead Generation solutions that drive measurable results.",

  keywords: [
    "Digital Marketing Services",
    "SEO Services",
    "Search Engine Optimization",
    "PPC Management",
    "Google Ads Services",
    "Social Media Marketing",
    "Facebook Ads",
    "Instagram Marketing",
    "LinkedIn Marketing",
    "Content Marketing",
    "Local SEO Services",
    "Lead Generation Services",
    "Online Reputation Management",
    "Digital Marketing Agency",
    "Performance Marketing",
    "Business Growth Solutions",
    "Digital Advertising",
    "Internet Marketing Services"
  ],

  alternates: {
    canonical: "/digital-marketing",
  },

  openGraph: {
    title:
      "Digital Marketing Services | Drive Traffic, Leads & Sales",
    description:
      "Boost your online presence with expert SEO, PPC, Social Media Marketing, Content Marketing, and Lead Generation services from GIP Technologies.",
    url: "https://giptechnologies.com/digital-marketing",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/digital-marketing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Services | SEO, PPC & Social Media Marketing",
    description:
      "Generate more traffic, leads, and revenue with professional Digital Marketing solutions.",
    images: ["/digital-marketing-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Digital Marketing",
};
export default function Page() {
  return (
    <>
      <div className=" mt-21 px-0 sm:px-8 font-sans ">
        <div className="relative h-[110vh] sm:h-[90vh] w-full flex flex-col justify-end pb-8 overflow-hidden rounded-3xl">
          
          {/* --- Background Image Layer --- */}
          <Image
            src="https://images.unsplash.com/photo-1661160094555-a798a7df499f" // IMPORTANT: Replace with your actual image path
            alt="Background descriptive text"
            fill
            className="object-cover z-0"
            priority 
          />
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/70 to-transparent z-0"></div>

          {/* --- Text Content & Button Layer --- */}
          {/* 'relative z-10' brings this to the front. 'mb-8' gives it breathing room above the Marquee. */}
          <div className="relative z-10 max-w-7xl px-4 sm:px-36 mb-20 ">
            
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
              Amplify Reach with<br className="hidden md:block" />
Data-Driven Growth
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl font-medium leading-relaxed">
              Transform clicks into customers. We blend creative storytelling with technical SEO, precision targeting, and advanced analytics to deliver measurable ROI and sustainable brand growth.
            </p>
             <Link href={'/contact'} className="group relative flex items-center w-[200px] h-[56px] bg-gradient-to-b from-gray-800 to-gray-950  hover:bg-gradient-to-b from-sky-300 to-sky-500  text-white  rounded-[8px] overflow-hidden transition-colors duration-500 mt-auto">
      
      {/* Inner White Icon Block */}
      <div className="absolute left-1.5 bg-white group-hover:bg-black text-black group-hover:text-white p-3 flex items-center justify-center rounded-lg transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:left-[calc(100%-50px)]">
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
        Contact Support
      </span>

    </Link>
          </div>

          {/* --- Marquee Layer --- */}
         

        </div>
      </div>
      <StatsSection />
      <MarketingBenefits />
      <ServiceStack />
      <WhyUsSection />
      <CaseStudies/>
    </>
  );
}