"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    company: "Network",
    icon: "❈", 
    text: "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions.",
    author: "- Mark Riley , Network Corp.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 2,
    company: "umbrella",
    icon: "☂", 
    text: "They offered clear insights on tough projects, removing limits and providing sharp, key solutions now.",
    author: "- Elara Vance , Umbrella Co.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    id: 3,
    company: "vision",
    icon: "👁", 
    text: "They gave key clarity to hard issues, tearing down walls and producing smart, new quick answers.",
    author: "- Darius Jones , Vision Tech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 4,
    company: "Cactus",
    icon: "🌵", 
    text: "They solved complex needs with great clarity, cutting through mess and giving sharp, key results.",
    author: "- Mei Lin , Cactus",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 5,
    company: "Global",
    icon: "❖",
    text: "An exceptional team that delivers on promises and elevates the entire digital experience.",
    author: "- Sarah Jenkins , Global Ltd.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    id: 6,
    company: "Nexus",
    icon: "⌘",
    text: "Their technical execution was flawless. We saw immediate improvements in our core metrics across the board.",
    author: "- Alex Rivera , Nexus Systems",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 7,
    company: "Aura",
    icon: "✧",
    text: "A truly collaborative process from start to finish. They brought our vision to life beautifully and efficiently.",
    author: "- Chloe Smith , Aura Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 8,
    company: "Vertex",
    icon: "△",
    text: "Highly responsive and incredibly skilled. They tackled our toughest engineering challenges with absolute ease.",
    author: "- Samira Khan , Vertex Partners",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  }
];

export default function TestimonialSection() {
  // We duplicate the array so the end seamlessly meets the beginning
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto mb-12 px-6">
        <p className="text-xs font-bold text-gray-800 uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#b7f365]"></span>
          Testimonials
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">
          What they say about us?
        </h2>
        <p className="text-gray-800 text-md max-w-md text-left sm:text-right">
          Here's what they shared about their experience working with our team.
        </p>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Optional: Add gradient masks on the left and right edges for a fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-4 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, // Increase or decrease this number to control the speed
            repeat: Infinity 
          }} 
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              // We use index here because the duplicated IDs would cause React key warnings
              key={`${testimonial.id}-${index}`}
              className="relative shrink-0 w-[420px] h-[500px] rounded-[0.5rem] overflow-hidden group cursor-pointer"
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10"></div>

              <div className="absolute top-6 left-6 text-white font-medium flex items-center gap-2">
                <span className="text-xl">{testimonial.icon}</span>
                {testimonial.company}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-3 text-3xl opacity-80">"</div>
                <p className="text-sm font-medium leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-xs text-gray-300 text-right">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}