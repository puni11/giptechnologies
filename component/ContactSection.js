"use client";

import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

// Standard Social SVG Icons
const SocialIcon = ({ path, delay }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.1, y: -2 }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-black transition-colors"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  </motion.a>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // 🆕 Added state for field errors
  const [consent, setConsent] = useState(false); // 🆕 Added state for consent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear specific field error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Please enter a valid name";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (!consent) {
      newErrors.consent = "You must agree to the privacy policy to proceed";
    }

    setErrors(newErrors);

    // Return true only if no errors exist
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 🆕 Included consent details in the payload
        body: JSON.stringify({
          ...formData,
          consentGiven: true,
          consentDate: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Message sent successfully!");

      // Reset form on success
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
      setConsent(false);
      setErrors({});
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans pt-20 pb-12 rounded-2xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 "
      >
        <source
          src="https://stream.mux.com/Si6ej2ZRrxRCnTYBXSScDRCdd7CGnyTqiPszZcw3z4I.m3u8"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 w-full max-w-7xl h-full grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 lg:gap-0">
        {/* ========================================= */}
        {/* LEFT PANEL: Contact Information           */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#f4f4f4] rounded-l-[0.5rem] p-10 md:p-14 lg:p-16 flex flex-col justify-between h-full"
        >
          {/* Header */}
          <div>
            <h2 className="text-4xl md:text-[2.75rem] font-medium tracking-tight text-[#111] mb-6 leading-tight">
              Reach out today
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[280px]">
              Learn about our journey, mission, and the team driving innovation.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8 my-12 lg:my-0">
            <div>
              <p className="text-gray-500 text-sm mb-2">Email:</p>
              <p className="text-lg md:text-xl text-[#111] font-medium hover:text-gray-600 transition-colors cursor-pointer w-fit">
                info@giptechnologies.com
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2">Phone:</p>
              <p className="text-lg md:text-xl text-[#111] font-medium hover:text-gray-600 transition-colors cursor-pointer w-fit">
                +91 99833 40133
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-2">Office:</p>
              <p className="text-lg md:text-lg text-[#111] font-medium">
                B-4, Jawahar Lal Nehru Marg, OPP. DAINIK BHASKAR, Vivek Vihar,
                Bajaj Nagar, Jaipur, Rajasthan 302054
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-500 text-sm mb-4">Follow Us:</p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <SocialIcon delay={0.1} path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              {/* Facebook */}
              <SocialIcon delay={0.2} path="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              {/* LinkedIn */}
              <SocialIcon delay={0.3} path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              {/* X / Twitter */}
              <SocialIcon delay={0.4} path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </div>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* RIGHT PANEL: Form & Background Image      */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative rounded-r-[0.5rem] overflow-hidden min-h-[600px] flex items-center justify-center p-6 md:p-12 lg:p-20"
        >
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-cover bg-center" />

          {/* Dark/Blur Overlay (Optional, to ensure form pops) */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-[0.5rem]" />

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full max-w-2xl"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] font-medium text-[#fff]">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-5 py-3.5 bg-white border rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs font-medium pl-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] font-medium text-[#fff]">
                  Mobile. No.
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your Mobile Number"
                  className={`w-full px-5 py-3.5 bg-white border rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${
                    errors.mobile
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-400 text-xs font-medium pl-1">{errors.mobile}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] font-medium text-[#fff]">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className={`w-full px-5 py-3.5 bg-white border rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs font-medium pl-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] font-medium text-[#fff]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={3}
                  className={`w-full px-5 py-3.5 bg-white border rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs font-medium pl-1">{errors.message}</p>
                )}
              </div>

              {/* 🆕 Consent Checkbox */}
              <div className="flex flex-col gap-1">
                <div className="flex items-start gap-3 mt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={handleConsentChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500 cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="text-[13px] text-white/90 leading-tight cursor-pointer"
                  >
                    I agree to the collection and processing of my personal data as outlined in the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sky-300 hover:text-sky-200"
                    >
                      Privacy Policy
                    </a>.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-400 text-xs font-medium pl-7">{errors.consent}</p>
                )}
              </div>

              {/* Custom Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || !consent}
                whileHover={!loading && consent ? { scale: 1.02 } : {}}
                whileTap={!loading && consent ? { scale: 0.98 } : {}}
                className={`group mt-3 self-start flex items-center bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg pl-8 pr-4 py-2 shadow-lg transition-all ${
                  !consent || loading ? "opacity-60 cursor-not-allowed grayscale-[30%]" : ""
                }`}
              >
                <span className="text-[#ffffff] text-xs font-bold tracking-[0.15em] mr-6">
                  {loading ? "SUBMITTING..." : "SUBMIT"}
                </span>
                {loading ? (
                  <LoaderIcon size={14} className="animate-spin text-white" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#f0f0f0]/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}