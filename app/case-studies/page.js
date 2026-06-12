
import CaseStudies from "@/component/CaseStudies";
import FadeIn from "@/component/FadeIn";
import Image from "next/image";
export const metadata = {
  title:
    "Case Studies | Success Stories in Digital Marketing, Web Development & Cloud Solutions",

  description:
    "Explore GIP Technologies case studies showcasing successful Digital Marketing campaigns, Website Development projects, Cloud Hosting implementations, DevOps transformations, and Server Management solutions that helped businesses grow.",

  keywords: [
    "Case Studies",
    "Client Success Stories",
    "Digital Marketing Case Studies",
    "SEO Success Stories",
    "Web Development Portfolio",
    "Website Development Projects",
    "Cloud Hosting Case Studies",
    "DevOps Success Stories",
    "Server Management Projects",
    "IT Solutions Portfolio",
    "Business Growth Case Studies",
    "Technology Consulting Projects",
    "Infrastructure Management Success",
    "GIP Technologies Portfolio",
    "Client Results"
  ],

  alternates: {
    canonical: "/case-studies",
  },

  openGraph: {
    title:
      "Case Studies & Client Success Stories | GIP Technologies",
    description:
      "See how GIP Technologies has helped businesses achieve measurable results through Digital Marketing, Web Development, Cloud Hosting, DevOps, and Server Management solutions.",
    url: "https://giptechnologies.com/case-studies",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/case-studies-og.jpg",
        width: 1200,
        height: 630,
        alt: "GIP Technologies Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Client Success Stories & Case Studies | GIP Technologies",
    description:
      "Discover real-world results from our Digital Marketing, Web Development, DevOps, Cloud Hosting, and Server Management projects.",
    images: ["/case-studies-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Case Studies",
};
export default function Page(){
    return(
        <div className="min-h-screen mt-21 px-8 font-sans">
           <div className="relative h-[85vh] w-full flex items-end justify-start p-8 md:p-16 lg:p-18 overflow-hidden rounded-3xl">
      <Image
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740" // IMPORTANT: Replace with your actual image path from the 'public' folder
          alt="Background descriptive text"
          fill
          className="object-cover grayscale"
          priority // Add this if it's the first thing loaded on the page (above the fold)
        />
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
   
        
        {/* Optional but recommended: A dark gradient overlay so your white text is always readable regardless of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/30 to-transparent"></div>
      </div>

      {/* --- Text Content Layer --- */}
      {/* 'relative z-10' ensures the text sits on top of the absolute background image */}
      <div className="relative z-10 text-white max-w-3xl">
        <FadeIn duration={1200} wait={0}>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
       Case Studies of <span className="text-[#49ceff]"> GIP Technologies</span>
        </h1>
        </FadeIn>
        <FadeIn duration={1200} wait={0}>
        <p className="">
          We are a team of industry experts who share their frontline experience, actionable insights, and technical know-how to drive your digital transformation. 
        </p>
        </FadeIn>
      </div>
      
    </div>
    <CaseStudies isLight={true} />
        </div>
    )
}