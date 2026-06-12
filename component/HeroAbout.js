import FadeIn from '@/components/FadeIn';
import AnimatedHeading from '@/components/AnimatedHeading';

export default function Hero() {
  return (
    <main className="relative w-full h-screen overflow-hidden text-white">
      {/* Raw Background Video - No overlays */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Container */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* Navbar */}
        <nav className="px-6 md:px-12 lg:px-16 pt-6 w-full">
          <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="text-2xl font-semibold tracking-tight">
              VEX
            </div>

            {/* Center: Links */}
            <div className="hidden md:flex gap-8 text-sm">
              {['Story', 'Investing', 'Building', 'Advisory'].map((item) => (
                <a key={item} href="#" className="hover:text-gray-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Right: CTA */}
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Start a Chat
            </button>
          </div>
        </nav>

        {/* Hero Content Bottom */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 w-full">
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
            
            {/* Left Column - Main Content */}
            <div className="w-full">
              <AnimatedHeading text={"Shaping tomorrow\nwith vision and action."} />

              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-300">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Start a Chat
                  </button>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Tag */}
            <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end w-full">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl inline-block">
                  <span className="text-lg md:text-xl lg:text-2xl font-light">
                    Investing. Building. Advisory.
                  </span>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}