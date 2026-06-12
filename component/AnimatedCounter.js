"use client";

import { useEffect, useState, useRef } from "react";

// Reusable Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when the component scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Handle the counting animation
  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Calculate current count and update state
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// Default Values
const defaultStats = [
  { id: 1, end: 50, suffix: "+", duration: 1500, label: "Works automated" },
  { id: 2, end: 1000, suffix: "+", duration: 2000, label: "Daily AI Interaction" },
  { id: 3, end: 70, suffix: "%", duration: 1500, label: "Time saved" },
];

const defaultDescription =
  "We're an agency helping businesses automate workflows, build AI agents, and unlock insights. Our mission is simple, make automation effortless so you can focus on scaling what matters most.";

// Main Section Component
export default function StatsSection({ 
  stats = defaultStats, 
  description = defaultDescription 
}) {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-16 w-full font-sans">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24">
        
        {/* Statistics Grid */}
        <div className="flex flex-wrap gap-12 md:gap-16 flex-shrink-0">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-1">
              <h2 className="text-gray-950 text-5xl md:text-5xl font-medium tracking-tight">
                <AnimatedCounter 
                  end={stat.end} 
                  suffix={stat.suffix} 
                  duration={stat.duration} 
                />
              </h2>
              <p className="text-gray-950 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="max-w-xl">
          <p className="text-gray-900 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
        
      </div>
    </section>
  );
}