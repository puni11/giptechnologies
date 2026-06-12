
import BlogSection from "@/component/BlogSection";
import GlobePulse from "@/component/GlobePulse";
import Image from "next/image";
export const metadata = {
  title:
    "Technology Blog | Digital Marketing, Web Development, DevOps & Cloud Insights",

  description:
    "Explore the GIP Technologies blog for expert insights, tutorials, industry trends, and best practices in Digital Marketing, SEO, Web Development, Cloud Hosting, DevOps, Server Management, and emerging technologies.",

  keywords: [
    "Technology Blog",
    "Digital Marketing Blog",
    "SEO Blog",
    "Web Development Blog",
    "Next.js Blog",
    "Cloud Hosting Blog",
    "DevOps Blog",
    "Server Management Blog",
    "Technology News",
    "IT Industry Insights",
    "Website Development Tips",
    "Cloud Computing Articles",
    "Digital Growth Strategies",
    "Business Technology Blog",
    "Software Development Articles",
    "Cybersecurity Tips",
    "Infrastructure Management",
    "GIP Technologies Blog"
  ],

  alternates: {
    canonical: "/blogs",
  },

  openGraph: {
    title:
      "Technology Blog & Industry Insights | GIP Technologies",
    description:
      "Stay updated with the latest trends, tutorials, and expert insights on Digital Marketing, Web Development, DevOps, Cloud Hosting, and IT Infrastructure.",
    url: "https://giptechnologies.com/blogs",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "GIP Technologies Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Technology Blog | GIP Technologies",
    description:
      "Read expert articles, guides, and industry insights on Digital Marketing, Web Development, DevOps, Cloud Hosting, and more.",
    images: ["/blog-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology Blog",
};
export default function Page(){
    return(
        <div className="min-h-screen mt-24 px-8 font-sans">
           <div className="relative h-[85vh] w-full flex items-end justify-start p-8 md:p-16 lg:p-24 overflow-hidden rounded-3xl">
      
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
    <GlobePulse />
        
        {/* Optional but recommended: A dark gradient overlay so your white text is always readable regardless of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* --- Text Content Layer --- */}
      {/* 'relative z-10' ensures the text sits on top of the absolute background image */}
      <div className="relative z-10 text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
        Insights, Trending Technology News & Blogs
        </h1>
        <p className="text-lg text-gray-50">
          We are a team of industry experts who share their frontline experience, actionable insights, and technical know-how to drive your digital transformation. 
        </p>
      </div>
      
    </div>
    <BlogSection />
        </div>
    )
}