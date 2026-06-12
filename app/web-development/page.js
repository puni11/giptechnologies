import StatsSection from "@/component/AnimatedCounter";
import CardMarquee from "@/component/CardMarquee";
import MarketingBenefits from "@/component/MarketingBenefits";
import ServicesBento from "@/component/ServicesBento";
import ServiceStack from "@/component/ServiceStack";
import TestimonialSection from "@/component/TestimonialSection";
import WhyUsSection from "@/component/WhyUsSection";
import { Database, Layout, Monitor, Server, ShoppingBag, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Web Development Services | Custom Websites, Web Apps & eCommerce Solutions",

  description:
    "GIP Technologies offers professional Web Development Services including custom website development, web application development, eCommerce solutions, CMS development, React, Next.js, and scalable business websites designed for performance and growth.",

  keywords: [
    "Web Development Services",
    "Website Development Company",
    "Custom Website Development",
    "Web Application Development",
    "Business Website Development",
    "Next.js Development",
    "React Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "eCommerce Website Development",
    "CMS Development",
    "WordPress Development",
    "Corporate Website Development",
    "Custom Web Solutions",
    "Responsive Website Design",
    "Website Maintenance",
    "Enterprise Web Development",
    "Software Development Services",
    "UI UX Development"
  ],

  alternates: {
    canonical: "/web-development",
  },

  openGraph: {
    title:
      "Web Development Services | Modern Websites & Web Applications",
    description:
      "Build high-performance websites and web applications with GIP Technologies. Experts in React, Next.js, eCommerce, CMS, and custom web solutions.",
    url: "https://giptechnologies.com/web-development",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/web-development-og.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Custom Web Development Services | React, Next.js & eCommerce",
    description:
      "Professional website and web application development services tailored for startups, enterprises, and growing businesses.",
    images: ["/web-development-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Web Development Services",
};

const webDevBenefitsData = {
  sectionLabel: "Capabilities",
  badgeLabel: "Web Development",
  heading: "High-Performance Web Solutions",
  description:
    "We design and build ultra-fast, responsive web experiences optimized for modern SEO, seamless user journeys, and effortless scalability.",
  cards: [
    {
      id: 1,
      title: "Lightning-Fast \nLoad Times",
      description:
        "Optimized code splitting and edge delivery keep your bounce rates low and user retention incredibly high.",
    },
    {
      id: 2,
      title: "Built-In \nSEO Optimization",
      description:
        "Semantic markup and server-side rendering ensure your platform ranks higher and drives sustainable organic traffic.",
    },
    {
      id: 3,
      title: "Scalable \nArchitecture",
      description:
        "Future-proof your business with robust, composable frameworks designed to handle traffic spikes without breaking a sweat.",
    },
    {
      id: 4,
      title: "Enterprise-Grade \nSecurity",
      description:
        "Protect your users and your brand with modern authentication and strict security protocols baked in from day one.",
    },
  ],
  imageCard: {
    // High-quality image of a clean coding workspace/laptop
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    alt: "Developer workspace with code on screen",
  },
  testimonialCard: {
    quote:
      "They completely overhauled our platform. Load times dropped by 60%, and our conversion rate doubled within the first three months.",
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    // Professional female avatar
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
};
const webDevStats = [
  { 
    id: 1, 
    end: 150, 
    suffix: "+", 
    duration: 1500, 
    label: "Websites launched" 
  },
  { 
    id: 2, 
    end: 98, 
    suffix: "%", 
    duration: 1500, 
    label: "Performance score" 
  },
  { 
    id: 3, 
    end: 40, 
    suffix: "%", 
    duration: 2000, 
    label: "Conversion increase" 
  },
];
const webDevServices = [
  {
    index: "01",
    title: "Frontend Development",
    tagline: "Interactive & Responsive",
    description:
      "We build highly optimized, blazing-fast interfaces using React, Next.js, and modern CSS frameworks to deliver pixel-perfect, engaging user experiences.",
    features: ["React & Next.js", "Tailwind CSS", "Framer Motion"],
    icon: <Monitor/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "02",
    title: "Backend Engineering",
    tagline: "Robust & Scalable Systems",
    description:
      "We design secure, scalable server-side architectures and RESTful/GraphQL APIs using Node.js and Python to power your complex business logic.",
    features: ["Node.js & Python", "Database Architecture", "Cloud Deployment"],
    icon: <Server/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "03",
    title: "E-Commerce Solutions",
    tagline: "Stores That Convert",
    description:
      "From headless Shopify builds to robust custom commerce platforms, we engineer scalable online storefronts optimized for seamless shopping and high conversions.",
    features: ["Shopify Plus", "Custom Cart Flows", "Payment Integrations"],
    icon: <ShoppingBag/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "04",
    title: "UI/UX Design",
    tagline: "Form Meets Function",
    description:
      "We bridge the gap between aesthetics and usability, creating intuitive wireframes, design systems, and interactive prototypes that delight users.",
    features: ["Figma Prototyping", "Design Systems", "User Journey Mapping"],
    icon: <Layout/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "05",
    title: "Performance Optimization",
    tagline: "Speed That Ranks",
    description:
      "We audit and refactor your existing web infrastructure to drastically improve Core Web Vitals, reduce load times, and ensure technical SEO compliance.",
    features: ["Core Web Vitals", "Lighthouse Audits", "Asset Caching"],
    icon: <Zap/>,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "06",
    title: "Headless CMS",
    tagline: "Omnichannel Content",
    description:
      "We decouple your frontend from the backend using modern headless platforms like Sanity and Contentful, giving your marketing team ultimate flexibility.",
    features: ["Sanity & Contentful", "Data Modeling", "Jamstack Architecture"],
    icon: <Database />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=900&auto=format&fit=crop",
  },
];
const webDevDescription = 
  "We design and build ultra-fast, responsive web experiences optimized for modern SEO and seamless user journeys. From custom platforms to high-converting landing pages, we write production-ready code that drives revenue and scales effortlessly.";
export default function Page() {
  return (
    <>
      <div className=" mt-21 px-0 sm:px-8 font-sans ">
        <div className="relative h-[110vh] sm:h-[90vh] w-full flex flex-col justify-end pb-8 overflow-hidden rounded-3xl">
          
          {/* --- Background Image Layer --- */}
          <Image
            src="https://images.unsplash.com/photo-1677078610152-8a627d8ced8d" // IMPORTANT: Replace with your actual image path
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
              Crafting Digital
<br className="hidden md:block" />
Experiences That Convert
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl font-medium leading-relaxed">
              From custom web development to SEO-driven marketing strategies. We build scalable, mobile-first digital ecosystems that amplify your brand.</p>
             <Link href={'/contact'} className="group relative flex items-center w-[200px] h-[56px] bg-gradient-to-b from-gray-800 to-gray-950  hover:bg-gradient-to-b from-sky-300 to-sky-500  text-white rounded-[8px] overflow-hidden transition-colors duration-500 mt-auto">
      
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
      <StatsSection stats={webDevStats} 
      description={webDevDescription} />
      <MarketingBenefits data={webDevBenefitsData}  />
      <ServiceStack 
      badge="Engineering Capabilities"
      title="Clean code."
      highlightedTitle="Scalable systems."
      description="We engineer modern web applications that prioritize performance, security, and exceptional user experiences."
      tableHeaders={["No.", "Expertise", "Tech Stack", ""]}
      services={webDevServices}
    />
      <WhyUsSection />
      <TestimonialSection/>
    </>
  );
}