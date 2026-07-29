import React from 'react';

// Reusable Image Card with the gradient fade mask
const ProfileCard = ({ src, alt, className }) => (
  <div 
    className={`relative overflow-hidden rounded-xl ${className} [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]`}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
    />
  </div>
);

export default function RevenueCta() {
  return (
    <section className="relative w-full overflow-hidden bg-sky-100 py-20 md:py-28 font-sans">
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
 <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
      {/* Floating Headshots Grid */}
      <div className="flex justify-center items-start gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto px-4 mb-10">
        <div className="hidden sm:flex flex-col gap-6 mt-8 w-24 md:w-32 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-32 md:h-40" 
          />
          <ProfileCard 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24 md:h-44" 
          />
        </div>
        {/* Column 1 (Far Left) - Hidden on mobile/tablet */}
        <div className="hidden lg:flex flex-col gap-6 mt-20 w-28 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-32" 
          />
          <ProfileCard 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-32" 
          />
        </div>

        {/* Column 2 (Mid Left) - Hidden on small mobile */}
        <div className="hidden sm:flex flex-col gap-6 mt-8 w-24 md:w-32 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-32 md:h-40" 
          />
          <ProfileCard 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24 md:h-44" 
          />
        </div>

        {/* Column 3 (Center Left) */}
        <div className="flex flex-col gap-6 mt-16 w-28 sm:w-32 md:w-24 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-40 sm:h-48 md:h-52" 
          />
        </div>

        {/* Column 4 (Center Right) */}
        <div className="flex flex-col gap-6 mt-6 w-28 sm:w-32 md:w-24 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24 sm:h-44 md:h-48" 
          />
        </div>

        {/* Column 5 (Mid Right) */}
        <div className="flex flex-col gap-6 mt-14 w-24 md:w-32 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-32 md:h-40" 
          />
          <ProfileCard 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24 md:h-44" 
          />
        </div>

        {/* Column 6 (Far Right) - Hidden on mobile/tablet */}
        <div className="hidden lg:flex flex-col gap-6 mt-24 w-28 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24" 
          />
          <ProfileCard 
            src="https://images.unsplash.com/photo-1508214751196-bfd14113cefc?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24" 
          />
        </div>
 <div className="flex flex-col gap-6 mt-14 w-24 md:w-32 shrink-0">
          <ProfileCard 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-32 md:h-40" 
          />
          <ProfileCard 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" 
            alt="Team member" 
            className="h-24 md:h-44" 
          />
        </div>
      </div>

      {/* Text & CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-gray-900 leading-[1.1] mb-6">
        Engineering <br />
          Revenue Growth
        </h2>
        
        <p className="text-md md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          GIP Technologies is an elite ecosystem of growth strategists and data scientists aligned on a 
          mission for scalable, transparent business systems. Our global team discards traditional vanity 
          metrics to architect predictable acquisition engines that maximize your bottom line.
        </p>
        
         <button className="px-6 trigger-contact-modal py-3 bg-gradient-to-b from-sky-300 to-sky-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                  Get My Free Proposal
                </button>

      </div>
    </section>
  );
}