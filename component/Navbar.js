"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { ChevronDown, Home, MessageCircle, Phone, Menu as MenuIcon, X, GlobeIcon, MicVocal, CloudBackup, Server, InfinityIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Premium Rollover Link Component
const RolloverLink = ({ href, children, className = "" }) => {
  return (
    <Link href={href} className={`group relative flex overflow-hidden font-medium text-sm hover:opacity-100 ${className}`}>
      <span className="transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
        {children}
      </span>
    </Link>
  );
};

// Stagger config for mega menu columns (Desktop)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
  exit: {
    opacity: 0,
    y: 6,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

export default function Navbar() {
  const pathname = usePathname(); // 2. Initialize the pathname hook

  const [isOpen, setIsOpen] = useState(false); // Desktop hover state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile click state
  const [isScrolled, setIsScrolled] = useState(false); // Scroll state
  const timeoutRef = useRef(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth spring progress value: 0 = closed, 1 = open
  const openProgress = useMotionValue(0);
  const springProgress = useSpring(openProgress, {
    stiffness: 280,
    damping: 30,
    mass: 0.8,
  });

  // Interpolate border-radius from pill → rounded panel
  const borderRadius = useTransform(springProgress, [0, 1], ["16px", "24px"]);

  // 3. Define the routes where the navbar text should be black
  const exactBlackTextRoutes = ["/services", "/case-studies", "/faq","/digital-marketing", "/web-development", "/devops" , "/cloud-hosting" , "/server-management"]; 

const isBlackTextRoute = 
  pathname.startsWith("/blogs") || exactBlackTextRoutes.includes(pathname);

  // 4. Update isLightMode to factor in our specific routes
  const isLightMode = isScrolled || isOpen || isMobileMenuOpen || isBlackTextRoute;
  
  const targetBgColor = isOpen || isMobileMenuOpen 
    ? "#ffffff" 
    : isScrolled 
      ? "rgba(255, 255, 255, 0.95)" 
      : ""; // Will stay transparent if at the top of a blackTextRoute
      
  const targetTextColor = isLightMode ? "#000000" : "#ffffff";

  // --- Desktop Hover Handlers ---
  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return; 
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
    openProgress.set(1);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      openProgress.set(0);
    }, 120);
  };

  // --- Mobile Click Handler ---
  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    openProgress.set(nextState ? 1 : 0);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none font-sans">
      <motion.nav
        layout
        transition={{
          layout: { type: "spring", stiffness: 250, damping: 25 },
          backgroundColor: { duration: 0.3, ease: "easeInOut" },
          color: { duration: 0.3, ease: "easeInOut" },
        }}
        animate={{
          backgroundColor: targetBgColor,
          color: targetTextColor,
        }}
        style={{
          borderRadius,
          transformOrigin: "top center",
        }}
        className={`pointer-events-auto w-full ${isScrolled || isOpen ? 'shadow-lg' : ''
        } backdrop-blur-md overflow-hidden`}
      >
        {/* Top Navbar Section */}
        <motion.div layout className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight whitespace-nowrap shrink-0 relative overflow-hidden group">
            GIP Technology ™
          </Link>

          {/* DESKTOP Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors cursor-pointer text-sm font-medium ${
                isOpen 
                  ? "bg-gray-100" 
                  : isLightMode 
                    ? "hover:bg-black/5" 
                    : "hover:bg-white/10"
              }`}
            >
              <span>Solutions</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </div>
            
            {/* Rollover Links applied here */}
            <div className="flex items-center space-x-8 opacity-90">
              <RolloverLink href="/about">About</RolloverLink>
              <RolloverLink href="/case-studies">Case Studies</RolloverLink>
              <RolloverLink href="/blogs">Blogs</RolloverLink>
              <RolloverLink href="/contact">Contact</RolloverLink>
              
            </div>
          </div>

          {/* DESKTOP Button */}
          <Link href={'/contact'} className={`hidden md:block bg-gradient-to-b from-sky-300 to-sky-600 text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-sm hover:from-sky-400 hover:to-sky-700 cursor-pointer transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1`}>
            Connect With Us
          </Link>

          {/* MOBILE Hamburger Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-1 hover:opacity-70 transition-opacity"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </motion.div>

        {/* --- MOBILE Menu Dropdown Section --- */}
        <AnimatePresence mode="popLayout">
          {isMobileMenuOpen && (
            <motion.div
              key="mobilemenu"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 w-full overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-6">
                <div className="flex flex-col space-y-4 font-medium text-lg text-gray-900">
                  <Link href="/" onClick={toggleMobileMenu}>Home</Link>
                  <Link href="/about" onClick={toggleMobileMenu}>About</Link>
                  <Link href="/pricing" onClick={toggleMobileMenu}>Pricing</Link>
                  <Link href="/stories" onClick={toggleMobileMenu}>Stories</Link>
                  <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                  <Link href="/faq" onClick={toggleMobileMenu}>FAQ</Link>
                </div>
                
                <Link href={'/contact'} className="bg-gradient-to-b from-sky-300 to-sky-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#bbf03c] transition-colors w-full text-center">
                  Connect With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- DESKTOP Mega Menu Dropdown Section --- */}
        <AnimatePresence mode="popLayout">
          {isOpen && !isMobileMenuOpen && (
            <motion.div
              key="megamenu"
              layout
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.2, ease: "easeOut" },
              }}
              className="hidden md:block border-t border-gray-100 w-full overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-5 gap-8 px-8 pb-8 pt-6"
              >
                {/* Column 1: Main Pages */}
                <motion.div variants={columnVariants}>
                  <h4 className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-3 py-1 inline-block mb-6 tracking-wider">
                    Digital Solutions
                  </h4>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/digital-marketing" className="flex items-center space-x-3 hover:text-gray-600 font-medium group">
                        <MicVocal className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                        <span>Digital Marketing</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development" className="flex items-center space-x-3 hover:text-gray-600 font-medium group">
                        <GlobeIcon className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                        <span>Web Development</span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Column 2: Company */}
                <motion.div variants={columnVariants}>
                  <h4 className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-3 py-1 inline-block mb-6 tracking-wider">
                    Cloud Solutions
                  </h4>
                  <ul className="space-y-4 font-medium text-gray-800">
                    <li>
                      <Link href="/cloud-hosting" className="flex items-center space-x-3 hover:text-gray-600 font-medium group">
                        <CloudBackup className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                        <span>Cloud Hosting</span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Column 3: Other */}
                <motion.div variants={columnVariants}>
                  <h4 className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-3 py-1 inline-block mb-6 tracking-wider">
                    Server Solutions
                  </h4>
                  <ul className="space-y-4 font-medium text-gray-800">
                    <li>
                      <Link href="/server-management" className="flex items-center space-x-3 hover:text-gray-600 font-medium group">
                        <Server className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                        <span>Server Management</span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Column 4: Template */}
                <motion.div variants={columnVariants}>
                  <h4 className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-3 py-1 inline-block mb-6 tracking-wider">
                    DevOps Solutions
                  </h4>
                  <ul className="space-y-4 font-medium text-gray-800">
                    <li>
                      <Link href="/devops" className="flex items-center space-x-3 hover:text-gray-600 font-medium group">
                        <InfinityIcon className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                        <span>DevOps</span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                {/* Column 5: Featured Card */}
                <motion.div variants={columnVariants} className="col-span-1 flex flex-col space-y-3">
                  <div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-100 group">
                    <Image
                      src="https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85"
                      alt="Featured Template"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <Link href="/contact-us" className="text-sm text-gray-600 underline hover:text-black">
                    Connect With Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}