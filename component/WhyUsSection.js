import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-black"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900">
              Why Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-6">
            We build solutions <br className="hidden lg:block" />
            that create real, <br className="hidden lg:block" />
            measurable impact
          </h2>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-gray-800 leading-relaxed  font-normal">
            Our approach blends strategic consulting, human-
            centered design, and advanced AI — giving you the clarity,
            tools, and confidence to thrive in the age of intelligence.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            // Note: Replace this placeholder with your actual image path (e.g., "/images/team.jpg")
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Team laughing and collaborating"
            fill
            className="object-cover shadow-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw "
          />
        </div>

      </div>
    </section>
  );
}