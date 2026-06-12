import StatsSection from '@/component/AnimatedCounter';
import AnimatedHeading from '@/component/AnimatedHeading';
import FadeIn from '@/component/FadeIn';
import OurStorySection from '@/component/OurStorySection';
import StateAbout from '@/component/StateAbout';
import TeamSection from '@/component/TeamSection';
import TimelineSection from '@/component/TimelineSection';
import VideoHeroSection from '@/component/VideoHeroSection';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export const metadata = {
  title:
    "About GIP Technologies | Digital Marketing, Web Development & Cloud Solutions",

  description:
    "Learn about GIP Technologies, a trusted technology partner specializing in Digital Marketing, Web Development, DevOps, Cloud Hosting, Server Management, and IT Infrastructure solutions. Discover our mission, expertise, and commitment to helping businesses grow online.",

  keywords: [
    "About GIP Technologies",
    "IT Company Jaipur",
    "Digital Marketing Agency",
    "Web Development Company",
    "DevOps Company",
    "Cloud Hosting Provider",
    "Server Management Services",
    "IT Infrastructure Management",
    "Website Development Experts",
    "SEO Company",
    "Technology Solutions Company",
    "Cloud Solutions Provider",
    "Managed Hosting Services",
    "Business Technology Partner",
    "Software Development Company"
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About GIP Technologies | Your Trusted Technology Partner",
    description:
      "Discover GIP Technologies' journey, mission, expertise, and commitment to delivering world-class Digital Marketing, Web Development, DevOps, Server Management, and Cloud Hosting solutions.",
    url: "https://giptechnologies.com/about",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About GIP Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About GIP Technologies | Technology & Digital Growth Experts",
    description:
      "Learn how GIP Technologies helps businesses succeed through innovative digital marketing, web development, cloud hosting, and DevOps solutions.",
    images: ["/about-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology",
};
export default function Hero() {
  return (
    <>
    <div className=" w-full h-screen overflow-hidden text-white font-sans">
      {/* Raw Background Video - No overlays */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
     

        {/* Hero Content Bottom */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 w-full">
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
            
            {/* Left Column - Main Content */}
            <div className="w-full">
              <AnimatedHeading text={"Shaping tomorrow\nwith vision and action."} />

              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-50">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                 <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href={'/services'} className="px-8 py-2.5 w-full md:w-fit rounded-lg bg-gradient-to-b from-gray-800 to-gray-950  hover:bg-white/30 backdrop-blur-md text-white font-medium transition-all duration-300 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
            View Services
          </Link>
          
          <Link href={'/contact'} className="px-4 py-2.5 w-full md:w-fit text-center pl-6 rounded-lg bg-gradient-to-b from-sky-300 to-sky-500 text-white font-semibold transition-all duration-300 flex items-center gap-4 shadow-[0_4px_24px_rgba(212,255,0,0.3)]">
            Connect
            <div className="bg-white/20 text-[#ffffff] p-1 rounded-full flex items-center justify-center">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
              </FadeIn>
            </div>

      
            
          </div>
        </div>
      </div>
    </div>
    <StatsSection/>
    <OurStorySection />
    <StateAbout />
    <VideoHeroSection/>
    <TeamSection/>
    <TimelineSection />
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About GIP Technologies",
      url: "https://giptechnologies.com/about",
      description:
        "Learn about GIP Technologies, a technology company providing Digital Marketing, Web Development, DevOps, Cloud Hosting, and Server Management services.",
      mainEntity: {
        "@type": "Organization",
        name: "GIP Technologies",
        url: "https://giptechnologies.com",
        logo: "https://giptechnologies.com/logo.png",
        foundingLocation: "Jaipur, Rajasthan, India",
        knowsAbout: [
          "Digital Marketing",
          "Search Engine Optimization",
          "Web Development",
          "Cloud Hosting",
          "Server Management",
          "DevOps",
          "Infrastructure Management"
        ]
      }
    }),
  }}
/>
    </>
  );
}