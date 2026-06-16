import StatsSection from "@/component/AnimatedCounter";
import CaseStudies from "@/component/CaseStudies";
import MarketingBenefits from "@/component/MarketingBenefits";
import ServiceStack from "@/component/ServiceStack";
import TestimonialSection from "@/component/TestimonialSection";
import WhyUsSection from "@/component/WhyUsSection";
import { ServerCog, Activity, ShieldCheck, Gauge, DatabaseBackup, RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Server Management Services | Linux, Cloud, AWS & Managed Server Support",

  description:
    "GIP Technologies provides professional Server Management Services including Linux Server Administration, Cloud Server Management, AWS Support, Security Hardening, Performance Optimization, Monitoring, Backup Management, and 24/7 Technical Support.",

  keywords: [
    "Server Management Services",
    "Managed Server Services",
    "Linux Server Management",
    "Cloud Server Management",
    "AWS Server Management",
    "Server Monitoring",
    "Server Administration",
    "Managed Hosting Support",
    "Dedicated Server Management",
    "VPS Management",
    "cPanel Management",
    "Plesk Management",
    "Server Security",
    "Server Optimization",
    "Infrastructure Management",
    "Database Management",
    "Website Server Support",
    "24x7 Server Monitoring",
    "Managed Cloud Infrastructure",
    "Technical Support Services"
  ],

  alternates: {
    canonical: "/server-management",
  },

  openGraph: {
    title:
      "Server Management Services | Reliable, Secure & Scalable Infrastructure",
    description:
      "Ensure maximum uptime and performance with expert server administration, monitoring, security, backup, and cloud infrastructure management services.",
    url: "https://giptechnologies.com/server-management",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/server-management-og.jpg",
        width: 1200,
        height: 630,
        alt: "Server Management Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Managed Server Services | Linux, Cloud & AWS Support",
    description:
      "Professional server management, monitoring, optimization, security, and cloud infrastructure support for businesses.",
    images: ["/server-management-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Server Management Services",
};

const webDevBenefitsData = {
  sectionLabel: "Capabilities",
  badgeLabel: "Server Management",
  heading: "Effortless Operations & Proactive Care",
  description:
    "We take the burden of server maintenance completely off your shoulders. With round-the-clock monitoring, routine security patching, and rapid incident response, our expert system administrators ensure your infrastructure remains secure and fully operational.",
  cards: [
    {
      id: 1,
      title: "24/7 Proactive \nMonitoring",
      description:
        "We constantly track server health, uptime, and performance metrics, catching and resolving potential bottlenecks before they impact your users.",
    },
    {
      id: 2,
      title: "Routine Security \n& Patching",
      description:
        "Stay ahead of vulnerabilities with automated OS updates, custom firewall configurations, and continuous malware and intrusion scanning.",
    },
    {
      id: 3,
      title: "Performance \nTuning",
      description:
        "We optimize your entire server stack—from database query caching to Nginx/Apache configurations—ensuring maximum speed and resource efficiency.",
    },
    {
      id: 4,
      title: "Disaster Recovery \n& Migrations",
      description:
        "Ensure business continuity with redundant off-site backups, and enjoy seamless, zero-downtime server migrations handled entirely by our experts.",
    },
  ],
  imageCard: {
    // High-quality image of system monitoring/dashboards
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "System administrator monitoring server dashboards",
  },
  testimonialCard: {
    quote:
      "Handing over our server management was the best operational decision we made. We no longer wake up to 3 AM alerts, and our application performance has never been more stable.",
    name: "Marcus Thorne",
    role: "CTO, FinServe Network",
    // Professional male avatar
    avatarSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  },
};
const webDevStats = [
  { 
    id: 1, 
    end: 15, 
    suffix: " min", 
    duration: 1500, 
    label: "Avg. Response Time" 
  },
  { 
    id: 2, 
    end: 99, 
    suffix: "%", 
    duration: 1500, 
    label: "Proactive Resolution" 
  },
  { 
    id: 3, 
    end: 24, 
    suffix: "/7", 
    duration: 2000, 
    label: "Expert Monitoring" 
  },
];
const webDevDescription = 
  "We take the burden of server maintenance completely off your shoulders. With round-the-clock monitoring, routine security patching, and rapid incident response, our expert system administrators ensure your infrastructure remains secure, optimized, and fully operational.";
const webDevServices = [
  {
    index: "01",
    title: "Server Setup & Provisioning",
    tagline: "Foundation for Scale",
    description:
      "We configure and deploy your server environments from scratch, ensuring the OS, web servers, and databases are properly installed and hardened for production.",
    features: ["OS Installation", "Web Server Tuning", "Database Setup"],
    icon: <ServerCog />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "02",
    title: "24/7 Proactive Monitoring",
    tagline: "Eyes on Your Infrastructure",
    description:
      "We continuously track your server's CPU, memory, disk usage, and application uptime. If a metric spikes, our team is alerted and acts before it affects your users.",
    features: ["Uptime Tracking", "Resource Alerts", "Log Analysis"],
    icon: <Activity />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "03",
    title: "Security & Patching",
    tagline: "Hardened Environments",
    description:
      "Stay protected against the latest vulnerabilities. We handle routine OS updates, kernel patching, custom firewall rules, and continuous intrusion detection.",
    features: ["Vulnerability Scans", "Firewall Config", "Malware Removal"],
    icon: <ShieldCheck />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "04",
    title: "Performance Optimization",
    tagline: "Maximum Throughput",
    description:
      "We fine-tune your entire stack to eliminate bottlenecks. From optimizing Nginx/Apache configs to database query caching, we ensure maximum speed and efficiency.",
    features: ["Query Optimization", "Caching Setup", "Load Testing"],
    icon: <Gauge />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "05",
    title: "Backup & Disaster Recovery",
    tagline: "Business Continuity",
    description:
      "We implement and test automated, off-site backup routines. In the event of catastrophic failure, our rapid restoration protocols get your business back online fast.",
    features: ["Automated Snapshots", "Integrity Checks", "Failover Planning"],
    icon: <DatabaseBackup />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "06",
    title: "Seamless Migrations",
    tagline: "Zero-Downtime Transfers",
    description:
      "Moving to a new host or upgrading hardware? We handle complex server and application migrations safely, with meticulous DNS management and zero downtime.",
    features: ["Data Migration", "DNS Management", "Post-Migration Testing"],
    icon: <RefreshCcw />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <>
      <div className=" mt-21 px-0 sm:px-8 font-sans ">
        <div className="relative h-[110vh] sm:h-[90vh] w-full flex flex-col justify-end pb-8 overflow-hidden rounded-3xl">
          
          {/* --- Background Image Layer --- */}
          <Image
            src="https://images.unsplash.com/photo-1543593450-4faaab9a0f6e" // IMPORTANT: Replace with your actual image path
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
              Unmatched Stability for
<br className="hidden md:block" />
Critical Servers
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl font-medium leading-relaxed">
              Comprehensive, 24/7 server management. From Linux kernel patching to Windows AD management, we ensure your infrastructure is secure and always online.</p>
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
  badge="Operations & Support"
  title="Maximum uptime."
  highlightedTitle="Zero headaches."
  description="We handle the complex, day-to-day administration of your servers so your team can focus entirely on building your core product."
  tableHeaders={["No.", "Service Area", "Key Actions", ""]}
  services={webDevServices}
/>
      <WhyUsSection />
      <CaseStudies />
    </>
  );
}