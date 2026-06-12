import StatsSection from "@/component/AnimatedCounter";
import CardMarquee from "@/component/CardMarquee";
import MarketingBenefits from "@/component/MarketingBenefits";
import ServicesBento from "@/component/ServicesBento";
import ServiceStack from "@/component/ServiceStack";
import TestimonialSection from "@/component/TestimonialSection";
import WhyUsSection from "@/component/WhyUsSection";
import { Workflow, Cloud, Layers, Terminal, Activity, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "DevOps Services & Consulting | CI/CD, Kubernetes, AWS & Cloud Automation",

  description:
    "Accelerate software delivery with GIP Technologies' DevOps Services. We specialize in CI/CD pipeline implementation, Kubernetes, Docker, AWS, Infrastructure as Code, Cloud Automation, Monitoring, and DevOps Consulting for scalable and reliable infrastructure.",

  keywords: [
    "DevOps Services",
    "DevOps Consulting",
    "CI CD Pipeline",
    "Continuous Integration",
    "Continuous Deployment",
    "Kubernetes Services",
    "Docker Consulting",
    "AWS DevOps",
    "Cloud Automation",
    "Infrastructure as Code",
    "Terraform Services",
    "DevOps Engineer",
    "Cloud Infrastructure",
    "Monitoring Solutions",
    "Infrastructure Automation",
    "DevSecOps",
    "Managed DevOps Services",
    "Cloud Migration",
    "Server Automation",
    "Container Orchestration"
  ],

  alternates: {
    canonical: "/devops",
  },

  openGraph: {
    title:
      "DevOps Services & Cloud Automation Solutions",
    description:
      "Transform your infrastructure with CI/CD, Kubernetes, Docker, AWS, Terraform, Monitoring, and DevOps automation services from GIP Technologies.",
    url: "https://giptechnologies.com/devops",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/devops-og.jpg",
        width: 1200,
        height: 630,
        alt: "DevOps Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DevOps Consulting | CI/CD, Kubernetes & Cloud Infrastructure",
    description:
      "Build scalable, secure, and automated infrastructure with expert DevOps services.",
    images: ["/devops-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "DevOps Services",
};
const webDevBenefitsData = {
  sectionLabel: "Capabilities",
  badgeLabel: "DevOps & Cloud",
  heading: "Resilient Infrastructure & Automation",
  description:
    "We streamline your development lifecycle with robust CI/CD pipelines, scalable cloud architectures, and proactive monitoring, ensuring your team ships faster and safer.",
  cards: [
    {
      id: 1,
      title: "Automated \nCI/CD Pipelines",
      description:
        "Eliminate manual errors and accelerate your time-to-market with continuous integration and seamless deployment workflows.",
    },
    {
      id: 2,
      title: "High Availability \n& Auto-Scaling",
      description:
        "Ensure zero downtime and handle sudden traffic spikes effortlessly with dynamically scalable cloud infrastructure.",
    },
    {
      id: 3,
      title: "Infrastructure \nAs Code",
      description:
        "Version-control your environments using tools like Terraform for consistent, reproducible, and secure cloud provisioning.",
    },
    {
      id: 4,
      title: "Advanced \nObservability",
      description:
        "Gain deep insights into system health with centralized logging, distributed tracing, and proactive alerting mechanisms.",
    },
  ],
  imageCard: {
    // High-quality image of server racks / data center
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    alt: "Illuminated server racks in a modern data center",
  },
  testimonialCard: {
    quote:
      "Our deployment times went from hours to minutes. Their infrastructure overhaul gave us the stability we needed to scale globally without breaking a sweat.",
    name: "David Chen",
    role: "VP of Engineering, CloudScale",
    // Professional male avatar
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
};
const webDevStats = [
  { 
    id: 1, 
    end: 99, 
    suffix: "%", 
    duration: 1500, 
    label: "System Uptime" 
  },
  { 
    id: 2, 
    end: 10, 
    suffix: "x", 
    duration: 1500, 
    label: "Faster Deployments" 
  },
  { 
    id: 3, 
    end: 40, 
    suffix: "%", 
    duration: 2000, 
    label: "Cloud Costs Saved" 
  },
];
const webDevServices = [
  {
    index: "01",
    title: "CI/CD Pipelines",
    tagline: "Automate to Accelerate",
    description:
      "We design and implement robust continuous integration and deployment pipelines to automate testing and releases, enabling your team to ship code faster with zero downtime.",
    features: ["GitHub Actions & GitLab", "Automated Testing", "Blue-Green Deployments"],
    icon: <Workflow />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "02",
    title: "Cloud Architecture",
    tagline: "Scalable & Resilient Environments",
    description:
      "We architect secure, highly available cloud infrastructures on AWS, GCP, and Azure, precisely tailored to handle your application's specific performance and scaling needs.",
    features: ["AWS, GCP & Azure", "Auto-Scaling Groups", "Cost Optimization"],
    icon: <Cloud />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "03",
    title: "Containerization",
    tagline: "Run Anywhere at Scale",
    description:
      "We package your applications into lightweight containers and orchestrate them using Kubernetes, ensuring seamless horizontal scaling, fault tolerance, and resource efficiency.",
    features: ["Docker & Kubernetes", "Microservices", "Cluster Management"],
    icon: <Layers />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "04",
    title: "Infrastructure as Code",
    tagline: "Infrastructure as Software",
    description:
      "We automate infrastructure provisioning using Terraform and Ansible, eliminating manual server configuration and ensuring reproducible, version-controlled environments.",
    features: ["Terraform & Ansible", "State Management", "Disaster Recovery"],
    icon: <Terminal />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "05",
    title: "Monitoring & Observability",
    tagline: "Proactive System Health",
    description:
      "We implement comprehensive monitoring, distributed tracing, and alerting systems to resolve bottlenecks and prevent incidents before they impact your end users.",
    features: ["Prometheus & Grafana", "Datadog Integration", "Centralized Logging"],
    icon: <Activity />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    index: "06",
    title: "DevSecOps",
    tagline: "Security at the Core",
    description:
      "We shift left on security by integrating automated vulnerability scanning, strict access management, and compliance audits directly into your daily deployment pipeline.",
    features: ["Vulnerability Scanning", "IAM Policies", "Compliance Auditing"],
    icon: <ShieldCheck />,
    accent: "#000000",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=900&auto=format&fit=crop",
  },
];
const webDevDescription = 
  "We streamline your infrastructure with robust CI/CD pipelines, automated provisioning, and proactive monitoring. Our mission is to eliminate bottlenecks so you can ship code faster, scale securely, and optimize your cloud spend.";
export default function Page() {
  return (
    <>
      <div className=" mt-21 px-0 sm:px-8 font-sans ">
        <div className="relative h-[110vh] sm:h-[90vh] w-full flex flex-col justify-end pb-8 overflow-hidden rounded-3xl">
          
          {/* --- Background Image Layer --- */}
          <Image
            src="https://images.unsplash.com/photo-1729433272889-254303bd21a2" // IMPORTANT: Replace with your actual image path
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
              Accelerate Delivery with
<br className="hidden md:block" />
Intelligent CI/CD
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl font-medium leading-relaxed">
              Bridge the gap between development and operations. We implement robust CI/CD pipelines, Infrastructure as Code (IaC), and automated testing frameworks to reduce release costs and significantly accelerate your time-to-market.</p>
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
      badge="DevOps Capabilities"
      title="Cloud & DevOps"
      highlightedTitle="Scalable systems."
      description="We provide a range of cloud engineering and infrastructure services to modernize your deployment cycles. By automating the heavy lifting, we eliminate bottlenecks so your team can focus on building great products while we handle the scale."
      tableHeaders={["No.", "Expertise", "Tech Stack", ""]}
      services={webDevServices}
    />
      <WhyUsSection />
      <TestimonialSection/>
    </>
  );
}