export default function StateAbout() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-0 py-16 font-sans">
       <div className="flex items-center w-full mb-20">
          {/* Logo Icon (Oval shape matching the reference) */}
          <div className="mr-6 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase whitespace-nowrap">
            Why GIP
          </div>
          
          
          {/* Horizontal Line */}
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="w-8 h-[14px] border-2 border-black rounded-full flex-shrink-0 ml-6"></div>
          {/* Label */}
          
        </div>
      {/* --- TOP SECTION --- */}
      <div className="mb-12">
        {/* Trusted By + Avatars */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-gray-900 text-sm font-medium">Trusted over 5,000+</span>
          <div className="flex -space-x-2">
            {/* Avatar Placeholders */}
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
          </div>
        </div>

        {/* Headline & Description Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-black">
            Empowering businesses <br /> through strategy and AI
          </h3>
          
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-6">
            <p className="text-gray-900 max-w-md text-base md:text-lg">
              We are a consulting and AI innovation firm dedicated to helping organizations think smarter, move faster, and grow stronger.
            </p>
            
          
          </div>
        </div>
      </div>

      {/* --- GRID SECTION (Bento Box Layout) --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        
        {/* 1. Left Portrait Image (Spans 2 rows) */}
        <div className="md:col-span-4 row-span-2 rounded-[10px] overflow-hidden bg-blue-100 relative">
          {/* REPLACE WITH REAL IMAGE */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1760349553632-3b6b2fc819bf")' }}></div>
        </div>

        {/* 2. Top Middle (Floating Cards) */}
        <div className="md:col-span-4 rounded-[10px] bg-[#f4f4f5] p-6 relative flex items-center justify-center overflow-hidden">
          {/* Mockup Card 1 (Back) */}
          <div className="absolute transform -rotate-12 -translate-x-8 -translate-y-4 bg-[#1a1a1a] text-white p-4 rounded-md w-48 shadow-lg">
            <p className="text-xs font-medium mb-1">Expertise that <br/> Combines <br/> Strategy, Data, <br/> and Artificial <br/> <span className="font-bold">Intelligence</span></p>
          </div>
          {/* Mockup Card 2 (Front) */}
          <div className="absolute transform rotate-6 translate-x-8 translate-y-4 bg-white p-4 rounded-md w-56 shadow-xl border border-gray-100 z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold bg-black text-white px-2 py-1 rounded">Performance</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div className="text-3xl font-bold">49%</div>
            <div className="text-[10px] text-gray-400">Business growth</div>
          </div>
        </div>

        {/* 3. Top Right (Lime Green Stats) */}
        <div className="md:col-span-4 rounded-[10px] bg-gradient-to-b from-lime-300 to-lime-500  p-8 flex flex-col justify-between">
          <div>
            <p className="text-black font-medium text-lg mb-2">Commitment to measurable</p>
            <h2 className="text-6xl md:text-7xl font-light text-black">100%</h2>
          </div>
          <p className="text-black font-medium text-base leading-snug">
            Collaborating with leading AI <br /> and cloud technology providers.
          </p>
        </div>

        {/* 4. Bottom Right (Landscape Image with Tags) */}
        <div className="md:col-span-8 rounded-[10px] overflow-hidden bg-blue-200 relative p-8 flex items-center justify-center">
          {/* REPLACE WITH REAL IMAGE */}
          <div className="absolute inset-0 bg-cover blur-xs bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' }}></div>
          
          {/* Glassmorphism Tags */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 max-w-lg">
            {['Professional', 'Strategic', 'AI-Focused', 'Startup Feel', 'Smarter', 'Grow Faster', 'Build Smart', 'Simple', 'Strategic', 'Startup Feel'].map((tag, i) => (
              <span key={i} className="bg-sky-600/20 backdrop-blur-md border border-white/40 text-gray-50 text-sm font-medium px-4 py-2 rounded-md shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}