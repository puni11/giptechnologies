import Image from 'next/image';
import Link from 'next/link';

const timelineData = [
  {
    year: '2021',
    title: 'The Spark That Started It All',
    description: 'We began our journey focusing on core Web Development and Digital Marketing. Our goal was simple: help businesses establish a powerful digital footprint and reach their target audience effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2', // Replace with your actual image path
  },
  {
    year: '2022',
    title: 'Scaling Infrastructure',
    description: 'As our clients grew, so did their traffic. We rolled up our sleeves and introduced robust Server Management solutions, ensuring high availability, performance, and peace of mind.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    year: '2023',
    title: 'Bridging Dev and Ops',
    description: 'Momentum kicked in. We fully integrated DevOps practices into our workflows, automating CI/CD pipelines to deploy faster, smarter, and with zero downtime.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
  },
  {
    year: '2024',
    title: 'Going Cloud Native',
    description: 'We moved beyond traditional servers, architecting highly scalable Cloud Native environments using Kubernetes and microservices to build future-proof applications.',
    imageUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
  },
  {
    year: '2025',
    title: 'Shifting Security Left',
    description: 'Security is no longer an afterthought. We evolved into DevSecOps, embedding automated security checks directly into our cloud-native deployment pipelines to protect robust infrastructures.',
    imageUrl: 'https://images.unsplash.com/photo-1581089781785-603411fa81e5',
  },
  {
    year: '2026',
    title: 'The Automated Future',
    description: 'Today, we are combining our deep DevSecOps and cloud expertise with advanced AI automation, creating self-healing servers and hyper-optimized marketing systems.',
    imageUrl: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740',
  }
];

export default function TimelineSection() {
  return (
    <section className="bg-[#ffffff] text-black py-24 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 flex flex-col items-start justify-center space-y-6">
            
              
              <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
                The Journey That Built Our Tech-Driven Future
              </h2>
              
              <p className="text-gray-950 text-lg max-w-lg">
                From our first project to today, we've stayed focused on one mission: building scalable, secure, and high-performance digital ecosystems.
              </p>
              
            <button className="group relative flex items-center w-[200px] h-[56px] bg-[#18181b] hover:bg-gradient-to-b from-sky-300 to-sky-500  text-white rounded-[8px] overflow-hidden transition-colors duration-500 mt-auto">
      
      {/* Inner White Icon Block */}
      <div className="absolute left-1.5 bg-white group-hover:bg-black text-black group-hover:text-white p-3 flex items-center justify-center rounded-lg transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:left-[calc(100%-50px)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8H12V10H14V8Z" fill="currentColor"/>
          <path d="M16 10H14V12H16V10Z" fill="currentColor"/>
          <path d="M18 12H16V14H18V12Z" fill="currentColor"/>
          <path d="M16 14H14V16H16V14Z" fill="currentColor"/>
          <path d="M14 16H12V18H14V16Z" fill="currentColor"/>
          <path d="M10 12H4V14H10V12Z" fill="currentColor"/>
          <path d="M8 10H6V12H8V10Z" fill="currentColor"/>
          <path d="M8 14H6V16H8V14Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Text */}
      <span className="absolute right-5 font-medium text-sm md:text-[15px] transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:right-[60px]">
        Contact Support
      </span>

    </button>
            </div>
          </div>

          {/* Right Side: Scrollable Timeline Cards */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Year Badge (Overlapping top-left) */}
                <div className="absolute -top-0 -left-0 z-10">
                  <div className="bg-gradient-to-b from-sky-300 to-sky-500  text-white font-bold text-sm px-4 py-2 rounded-br-2xl rounded-tl-xl border-b border-r border-white/10">
                    {item.year}
                  </div>
                </div>

                {/* Card Container */}
                <div className="bg-gradient-to-b from-white/5 to-transparent border border-black/10 rounded-lg overflow-hidden flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale-100"
                    />
                    {/* Dark gradient overlay at bottom of image for seamless text transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff] via-[#fffff]/40 to-transparent"></div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 md:p-10 -mt-16 relative z-10">
                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-900 text-md leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}