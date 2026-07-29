import AiRevenueSection from "@/component/AiRevenueSection";
import ContactModal from "@/component/ContactModal";
import EdgeArchitecture from "@/component/EdgeArchitecture";
import FaqSection from "@/component/FAQLanding";
import LandingHeroSection from "@/component/LandingDigitalHero";
import MarketingComparison from "@/component/MarketingComparison";
import MarketingIntegrations from "@/component/MarketingIntegrations";
import RevenueBenefits from "@/component/RevenueBenefits";
import RevenueBentoGrid from "@/component/RevenueBentoGrid";
import RevenueCta from "@/component/RevenueCta";
import RevenueSection from "@/component/RevenueSection";
import ScrollCompareSection from "@/component/ScrollCompareSection";
import WhatWeDoSection from "@/component/WhatWeDoSection";

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
    canonical: "/digital-marketing-services-services",
  },

  openGraph: {
    title:
      "Digital Marketing Services | Drive Traffic, Leads & Sales",
    description:
      "Boost your online presence with expert SEO, PPC, Social Media Marketing, Content Marketing, and Lead Generation services from GIP Technologies.",
    url: "https://giptechnologies.com/digital-marketing-services",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/digital-marketing-services-og.jpg",
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
    images: ["/digital-marketing-services-og.jpg"],
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
     <LandingHeroSection />
     <AiRevenueSection />
     <WhatWeDoSection />
     <MarketingComparison />
      
      <RevenueSection />
      <RevenueBenefits />
      <RevenueCta />
      <MarketingIntegrations />
      <RevenueBentoGrid />
      <EdgeArchitecture />
     <ScrollCompareSection/>
      <FaqSection />
      <ContactModal />
    </>
  );
}