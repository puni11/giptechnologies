import Hero from "@/component/Hero";
import ScrollTextSection from "@/component/ScrollText";
import ServicesAboutSection from "@/component/ServicesAboutSection";
import ServicesSection from "@/component/ServicesSection";
import ProcessSection from "@/component/ProcessSection";
import CTASection from "@/component/CTASection";
import CaseStudies from "@/component/CaseStudies";
import TeamSection from "@/component/TeamSection";
import TestimonialSection from "@/component/TestimonialSection";
import ArticleGrid from "@/component/ArticleGrid";
import FAQSection from "@/component/FAQSection";

export const metadata = {
  title:
    "GIP Technologies | Digital Marketing, Web Development, DevOps & Cloud Hosting Company",
    
  description:
    "GIP Technologies is a leading IT solutions company offering Digital Marketing, Website Development, Server Management, DevOps Consulting, Cloud Hosting, Infrastructure Management, SEO, PPC, and custom web solutions for businesses worldwide.",

  keywords: [
    "Digital Marketing Company",
    "SEO Services",
    "PPC Services",
    "Website Development Company",
    "Web Development",
    "Next.js Development",
    "Cloud Hosting",
    "Managed Cloud Hosting",
    "Server Management",
    "Linux Server Management",
    "DevOps Services",
    "AWS Consulting",
    "Cloud Infrastructure",
    "Infrastructure Management",
    "Website Maintenance",
    "Managed IT Services",
    "GIP Technologies",
    "Jaipur IT Company",
    "Cloud Solutions",
    "Business Automation"
  ],

  metadataBase: new URL("https://giptechnologies.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "GIP Technologies | Digital Marketing, Web Development & Cloud Solutions",
    description:
      "Grow your business with expert Digital Marketing, Website Development, DevOps, Server Management and Cloud Hosting services from GIP Technologies.",
    url: "https://giptechnologies.com",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GIP Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "GIP Technologies | Digital Marketing, Web Development & Cloud Hosting",
    description:
      "Professional Digital Marketing, Web Development, Server Management, DevOps and Cloud Hosting services.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Technology",
};
export default function Home() {
  return (
  <>
  <Hero/>
  <ScrollTextSection />
  <ServicesAboutSection />
  <ServicesSection />
  <ProcessSection />
  <CaseStudies />
  <TeamSection />
  <TestimonialSection />
  <CTASection />
  <ArticleGrid />
  <FAQSection />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GIP Technologies",
      url: "https://giptechnologies.com",
      logo: "https://giptechnologies.com/logo.png",
      description:
        "Digital Marketing, Website Development, Server Management, DevOps and Cloud Hosting Company.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN"
      },
      services: [
        "Digital Marketing",
        "SEO",
        "PPC Advertising",
        "Web Development",
        "Website Design",
        "Cloud Hosting",
        "Server Management",
        "DevOps Consulting",
        "Infrastructure Management"
      ]
    }),
  }}
/>
  </>
  );
}
