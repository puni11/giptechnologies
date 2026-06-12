import ContactSection from "@/component/ContactSection"
export const metadata = {
  title:
    "Contact GIP Technologies | Get a Free Consultation for Digital & IT Solutions",

  description:
    "Contact GIP Technologies for Digital Marketing, Web Development, DevOps, Cloud Hosting, Server Management, and IT Infrastructure services. Get expert guidance and a customized solution for your business.",

  keywords: [
    "Contact GIP Technologies",
    "Digital Marketing Consultation",
    "Web Development Company Contact",
    "Cloud Hosting Support",
    "DevOps Consulting",
    "Server Management Services",
    "IT Infrastructure Solutions",
    "SEO Services Contact",
    "Website Development Enquiry",
    "Managed Hosting Support",
    "Technology Consulting",
    "Business IT Solutions",
    "Jaipur IT Company Contact"
  ],

  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    title:
      "Contact GIP Technologies | Let's Build Your Digital Success",
    description:
      "Reach out to GIP Technologies for expert Digital Marketing, Web Development, Cloud Hosting, DevOps, and Server Management solutions.",
    url: "https://giptechnologies.com/contact-us",
    siteName: "GIP Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact GIP Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact GIP Technologies | Digital Marketing & IT Experts",
    description:
      "Get in touch with our team for Digital Marketing, Web Development, DevOps, Cloud Hosting, and Server Management services.",
    images: ["/contact-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology",
};
export default function ContactPage(){
    return(
        <ContactSection />
    )
}