import React from 'react';

export default function VideoHeroSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden font-sans text-white">
      
      {/* 1. Background Video */}
      {/* Note: Place your video file in the 'public' folder of your Next.js project */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" type="video/mp4" />
      </video>

      {/* 2. Gradient Overlay */}
      {/* Adds a slight dark wash to the edges to make the text pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-10 pointer-events-none"></div>

      {/* 3. Main Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
        
        {/* Top Left: Main Headline */}
        <div className="max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-[1.1]">
  Our approach isn't about chasing tech trends <br className="hidden md:block" />
  — it's about giving ambitious brands the <br className="hidden md:block" />
  resilient infrastructure to scale, adapt, <br className="hidden md:block" />
  and perform flawlessly under pressure.
</h3>
        </div>

        {/* Bottom Row: Credits and Badge */}
        <div className="flex items-end justify-between w-full">
          
          {/* Bottom Left: Author Info */}
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-sm md:text-base tracking-tight">
              Gaurav Saluja
            </span>
            <span className="text-xs md:text-sm font-medium text-white/80">
              CO-Founder of GIP Technology™
            </span>
          </div>

     

        </div>
      </div>
      
    </section>
  );
}