"use client";

import { useState, useEffect } from "react";
import { Loader2, X } from "lucide-react";

export default function ContactModal() {
  // The modal manages its own open/closed state now
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- NEW: Global Click Listener for the CSS Class ---
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const target = e.target;
      // Check if the clicked element or any of its parents has the specific class
      if (target.closest(".trigger-contact-modal")) {
        e.preventDefault(); // Prevent default behavior if attached to an <a> tag
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Optional: Reset form on close
    setFormData({ name: "", email: "", mobile: "", message: "", privacy: false });
    setErrors({});
    setIsSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Must be exactly 10 digits and start with 6, 7, 8, or 9";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.privacy) {
      newErrors.privacy = "You must accept the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = { ...formData, mobile: `+91${formData.mobile}` };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If state is false, render nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm font-sans">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl h-auto md:h-[650px] animate-in fade-in zoom-in duration-300">
        
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Left Side: Video Background */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full bg-black">
              <div className="absolute left-0 w-full h-32 md:h-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-0"></div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://www.pexels.com/download/video/18069233/"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
            <h2 className="text-white text-3xl font-bold mb-2">Elevate Your Brand</h2>
            <p className="text-gray-200 text-sm">
              Connect with our digital marketing experts today.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Get in touch</h3>
            <p className="text-sm text-gray-500">Fill out the form below to start a conversation.</p>
          </div>

          {isSuccess ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 text-center">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Form Inputs (Identical to previous response) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-600 font-medium">
                    +91
                  </span>
                  <input
                    type="text"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                    className={`flex-1 w-full px-4 py-2 border rounded-r-md focus:ring-2 focus:ring-blue-600 outline-none transition ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="9876543210"
                  />
                </div>
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-500 cursor-pointer">
                    I agree to the privacy policy and terms of service.
                  </label>
                  {errors.privacy && <p className="text-red-500 text-xs mt-1 block">{errors.privacy}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}