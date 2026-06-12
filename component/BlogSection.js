"use client";

import { motion } from "framer-motion";

// 1. Define the Blog Data Array
const blogsData = [
  {
    id: 1,
    category: "Transformation",
    title: "The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy",
    description: "Explore how federated learning and private hosting are allowing firms to innovate without risking security.",
    author: "Frank Joel",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Red abstract geometric",
    theme: "dark",
  },
  {
    id: 2,
    category: "Architecture",
    title: "The Architecture of Autonomy: Scaling AI Within Legacy Frameworks",
    description: "A comprehensive guide on integrating custom machine learning models into complex enterprise environments.",
    author: "Daniela Manuel",
    imageSrc: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Blue 3D abstract ring",
    theme: "light",
  },
  {
    id: 3,
    category: "Privacy",
    title: "Human-Centric Automation: Designing AI That Empowers Your Workforce",
    description: "Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it.",
    author: "Deborah Reavie",
    imageSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Smooth blue waves",
    theme: "light",
  },
];

// Reusable SVG Arrow Component
const ArrowRight = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${className}`}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export default function BlogSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#b7f365]"></span>
          <span className="text-sm font-semibold tracking-wide">Blogs</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-6">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight mb-6">
            Insights & News
          </h2>
          <p className="text-gray-950 text-lg max-w-md">
            A selection of brands we've helped transform, scale, and position
            for long-term success.
          </p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* 2. Map through the blogs array */}
        {blogsData.map((blog) => {
          const isDark = blog.theme === "dark";

          return (
            <div key={blog.id} className="flex flex-col gap-4">
              
              {/* Image Always on Top */}
              <motion.div
                variants={itemVariants}
                className="w-full h-64 md:h-[220px] rounded-[0.5rem] overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={blog.imageSrc}
                  alt={blog.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Dynamic Text Card on Bottom */}
              <motion.div
                variants={itemVariants}
                className={`flex-1 rounded-[0.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] group cursor-pointer ${
                  isDark ? "bg-[#7d7d7d]" : "bg-[#e4e4e4]"
                }`}
              >
                <div>
                  <p
                    className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${
                      isDark ? "text-gray-50" : "text-gray-800"
                    }`}
                  >
                    {blog.category}
                  </p>
                  <h3
                    className={`text-2xl leading-tight font-medium mb-4 pr-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {blog.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed max-w-[85%] ${
                      isDark ? "text-gray-50" : "text-gray-800"
                    }`}
                  >
                    {blog.description}
                  </p>
                </div>
                
                <div className="flex items-end justify-between mt-12">
                  <div>
                    <p
                      className={`text-xs mb-1 ${
                        isDark ? "text-gray-50" : "text-gray-800"
                      }`}
                    >
                      Written by
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {blog.author}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isDark
                        ? "bg-[#f2f2f2] text-gray-900 group-hover:bg-white"
                        : "bg-[#1a1a1a] text-white group-hover:bg-black"
                    }`}
                  >
                    <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>

            </div>
          );
        })}
      </motion.div>
    </section>
  );
}