import StatsSection from "@/component/AnimatedCounter";
import CaseStudies from "@/component/CaseStudies";
import MarketingBenefits from "@/component/MarketingBenefits";
import ServiceStack from "@/component/ServiceStack";
import TestimonialSection from "@/component/TestimonialSection";
import WhyUsSection from "@/component/WhyUsSection";
import { Server, Globe, Network, HardDrive, Shield, LifeBuoy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Cloud Hosting Services | Secure, Scalable & Managed Cloud Solutions",

  description:
    "GIP Technologies provides enterprise-grade Cloud Hosting Services with high performance, scalability, security, automated backups, 24/7 monitoring, and managed cloud infrastructure on AWS, Google Cloud, and Microsoft Azure.",

  keywords: [
    "Cloud Hosting Services",
    "Managed Cloud Hosting",
    "Business Cloud Hosting",
    "Cloud Infrastructure",
    "AWS Hosting",
    "Google Cloud Hosting",
    "Azure Hosting",
    "Cloud Server Hosting",
    "Managed Hosting Services",
    "Scalable Cloud Solutions",
    "Enterprise Cloud Hosting",
    "Secure Cloud Hosting",
    "Cloud Migration Services",
    "Cloud Infrastructure Management",
    "High Availability Hosting",
    "Website Cloud Hosting",
    "Cloud Backup Solutions",
    "Cloud Disaster Recovery",
    "Cloud Computing Services",
    "Managed Cloud Services"
  ],

  alternates: {
    canonical: "/cloud-hosting",
  },

  openGraph: {
    title:
      "Cloud Hosting Services | Reliable, Secure & Scalable Infrastructure",
    description:
      "Power your business with managed cloud hosting solutions featuring high availability, enterprise security, automated backups, and 24/7 support.",
    url: "https://giptechnologies.com/cloud-hosting",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/cloud-hosting-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Hosting Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Managed Cloud Hosting & Infrastructure Solutions",
    description:
      "Secure, scalable cloud hosting solutions with expert management, monitoring, and support.",
    images: ["/cloud-hosting-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Cloud Hosting Services",
};

const webDevBenefitsData = {
  sectionLabel: "Capabilities",
  badgeLabel: "Cloud Hosting",
  heading: "Global Scale & Unmatched Uptime",
  description:
    "We provide lightning-fast, highly secure cloud hosting solutions built for global scale. With enterprise-grade infrastructure, automated backups, and 24/7 expert support, we ensure your applications stay online.",
  cards: [
    {
      id: 1,
      title: "99.9% Uptime \nGuarantee",
      description:
        "Rest easy knowing your applications are hosted on redundant, enterprise-grade infrastructure designed specifically for zero downtime.",
    },
    {
      id: 2,
      title: "Global Edge \nNetwork",
      description:
        "Deliver content lightning-fast to users anywhere in the world with our strategically located global data centers and CDN integration.",
    },
    {
      id: 3,
      title: "Automated \nDaily Backups",
      description:
        "Protect your critical business data with automated, secure backups and instant disaster recovery protocols baked in.",
    },
    {
      id: 4,
      title: "Managed Security \n& DDoS Protection",
      description:
        "Defend against modern threats with enterprise-level firewalls, proactive malware scanning, and built-in DDoS mitigation.",
    },
  ],
  imageCard: {
    // High-quality image of abstract cloud data/network
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    alt: "Network cables and illuminated data infrastructure",
  },
  testimonialCard: {
    quote:
      "Migrating to their cloud hosting was completely seamless. Our site speeds doubled overnight, and we haven't experienced a single minute of downtime since the switch.",
    name: "Elena Rodriguez",
    role: "Director of IT, NexaCorp",
    // Professional female avatar
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
  },
};
const webDevStats = [
  { 
    id: 1, 
    end: 99, 
    suffix: ".9%", 
    duration: 1500, 
    label: "Network Uptime" 
  },
  { 
    id: 2, 
    end: 35, 
    suffix: "+", 
    duration: 1500, 
    label: "Global Data Centers" 
  },
  { 
    id: 3, 
    end: 50, 
    suffix: "ms", 
    duration: 2000, 
    label: "Average Latency" 
  },
];
const webDevDescription = 
  "We provide lightning-fast, highly secure cloud hosting solutions built for global scale. With enterprise-grade infrastructure, automated backups, and 24/7 expert support, we ensure your applications stay online and perform flawlessly under any load.";
const webDevServices = [
  {
    index: "01",
    title: "Managed Cloud Servers",
    tagline: "High-Performance Infrastructure",
    description:
      "We provide fully managed, high-performance virtual private servers (VPS) and dedicated cloud instances powered by lightning-fast NVMe storage and premium tier-1 bandwidth.",
    features: ["Dedicated Resources", "NVMe SSD Storage", "Root Access"],
    icon: <Server />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "02",
    title: "Global CDN Integration",
    tagline: "Lightning Fast Worldwide",
    description:
      "Deliver your assets instantly to users anywhere on the globe. Our integrated Content Delivery Network caches your site at the edge to guarantee minimal latency.",
    features: ["Edge Caching", "Global PoPs", "Bandwidth Optimization"],
    icon: <Globe />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "03",
    title: "Elastic Auto-Scaling",
    tagline: "Traffic-Proof Architecture",
    description:
      "Never worry about viral traffic spikes again. Our elastic load balancers automatically distribute traffic and scale your server resources up or down in real-time.",
    features: ["Horizontal Scaling", "Load Balancing", "Traffic Routing"],
    icon: <Network />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "04",
    title: "Automated Backups",
    tagline: "Zero Data Loss Guarantee",
    description:
      "Your data is safe with our automated daily snapshots. We maintain redundant, off-site backups so you can perform a complete system restore with a single click.",
    features: ["Daily Snapshots", "1-Click Restore", "Offsite Retention"],
    icon: <HardDrive />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "05",
    title: "Enterprise Security",
    tagline: "Ironclad Protection",
    description:
      "We secure your hosting environment at the network level with AI-driven DDoS mitigation, Web Application Firewalls (WAF), and automated SSL certificate management.",
    features: ["DDoS Mitigation", "Custom WAF Rules", "Free Auto-SSL"],
    icon: <Shield />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "06",
    title: "24/7 Expert Support",
    tagline: "Always Here to Help",
    description:
      "Our team of Tier 3 system administrators is available around the clock to handle proactive server patching, free site migrations, and instant troubleshooting.",
    features: ["Priority Ticketing", "Free Migrations", "Proactive Patching"],
    icon: <LifeBuoy />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <>
      <div className=" mt-21 px-0 sm:px-8 font-sans ">
        <div className="relative h-[110vh] sm:h-[90vh] w-full flex flex-col justify-end pb-8 overflow-hidden rounded-3xl">
          
          {/* --- Background Image Layer --- */}
          <Image
            src="https://images.unsplash.com/photo-1752742111841-f490c48aa668" // IMPORTANT: Replace with your actual image path
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
              High-Performance
<br className="hidden md:block" />
Hosting Solutions
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl font-medium leading-relaxed">
              Experience speed, security, and scalability with our enterprise-grade hosting. From dedicated bare metal to auto-scaling cloud clusters, we provide the foundation for your digital success.</p>
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
  badge="Cloud Infrastructure"
  title="Global scale."
  highlightedTitle="Unmatched uptime."
  description="We provide lightning-fast, highly secure cloud hosting solutions built for modern applications that demand absolute reliability."
  tableHeaders={["No.", "Service", "Features", ""]}
  services={webDevServices}
/>
      <WhyUsSection />
      <CaseStudies/>
    </>
  );
}