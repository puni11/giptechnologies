import CardMarquee from "@/component/CardMarquee";
import FadeIn from "@/component/FadeIn";
import LogoMarquee from "@/component/LogoMarquee";
import ServicesBento from "@/component/ServicesBento";
import ServicesSection from "@/component/ServicesSection";
import TestimonialSection from "@/component/TestimonialSection";
import WhyUsSection from "@/component/WhyUsSection";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "IT Services | Digital Marketing, Web Development, DevOps & Cloud Hosting - GIP Technologies",

  description:
    "Explore GIP Technologies' comprehensive IT services including Digital Marketing, SEO, PPC, Web Development, Cloud Hosting, DevOps Consulting, Server Management, Infrastructure Monitoring, and Business Technology Solutions.",

  keywords: [
    "IT Services",
    "Digital Marketing Services",
    "SEO Services",
    "PPC Management",
    "Social Media Marketing",
    "Website Development Services",
    "Web Application Development",
    "Next.js Development",
    "Cloud Hosting Services",
    "Managed Cloud Hosting",
    "AWS Services",
    "DevOps Consulting",
    "DevOps Services",
    "Server Management",
    "Linux Server Management",
    "Infrastructure Management",
    "Website Maintenance",
    "Managed IT Services",
    "Business Automation Solutions",
    "Technology Consulting"
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Professional IT Services for Modern Businesses | GIP Technologies",
    description:
      "From Digital Marketing and Website Development to Cloud Hosting, DevOps, and Server Management, GIP Technologies delivers end-to-end technology solutions.",
    url: "https://giptechnologies.com/services",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "GIP Technologies Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing, Web Development & Cloud Services",
    description:
      "Discover expert Digital Marketing, Web Development, DevOps, Cloud Hosting, and Server Management services from GIP Technologies.",
    images: ["/services-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology Services",
};
export default function Page() {
  return (
    <>
      <div className="min-h-screen mt-21 px-0 sm:px-8 font-sans pb-12">
        <div className="relative h-[110vh] sm:h-[90vh] w-full flex flex-col justify-end pb-8 overflow-hidden rounded-3xl">
          
          {/* --- Background Image Layer --- */}
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" // IMPORTANT: Replace with your actual image path
            alt="Background descriptive text"
            fill
            className="object-cover z-0"
            priority 
          />
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/80 to-transparent z-0"></div>

          {/* --- Text Content & Button Layer --- */}
          {/* 'relative z-10' brings this to the front. 'mb-8' gives it breathing room above the Marquee. */}
          <div className="relative z-10 max-w-7xl px-4 sm:px-36 mb-20 ">
            
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
              Scale Faster With <br className="hidden md:block" /> Our Services.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl font-medium leading-relaxed">
              We build scalable cloud infrastructure, modern web applications, and data-driven marketing strategies to accelerate your growth.
            </p>
             <Link href={'/contact'} className="group relative flex items-center w-[200px] h-[56px] bg-gradient-to-b from-sky-300 to-sky-500  text-white hover:text-black rounded-[8px] overflow-hidden transition-colors duration-500 mt-auto">
      
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
          <div className="relative z-10 w-full">
            <CardMarquee />
          </div>

        </div>
      </div>
      
      <ServicesBento />
      <WhyUsSection />
      <TestimonialSection/>
    </>
  );
}