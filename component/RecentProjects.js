
const projects = [
  {
    id: "01",
    name: "Kayapalat",
    category: "Wellness",
    year: "2026",
    description:
      "A bold visual identity built to create a distinctive presence and connect with the right audience.",
    image: "/kaya.jpg",
    alt: "Kayapalat creative branding project",
  },
  {
    id: "02",
    name: "Aurette",
    category: "Resorts & Real Estate",
    year: "2024",
    description:
      "A digital experience combining expressive visuals with a refined and memorable brand presence.",
    image: "/aurette.jpg",
    alt: "Drift Studio web design project",
  },
  {
    id: "03",
    name: "Purple Club",
    category: "Fitness & Community",
    year: "2025",
    description:
      "An experimental motion direction designed to bring ideas and brand stories to life.",
    image: "/purple.jpg",
    alt: "Purple Club motion design project",
  },
  {
    id: "04",
    name: "Toothique",
    category: "Dental & Health",
    year: "2024",
    description:
      "A minimal brand identity focused on timeless design, clarity and visual storytelling.",
    image: "/tto.jpg",
    alt: "Toothique identity design project",
  },
];

export default function RecentProjects() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1024px]">

        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

          <div>
            <span className="mb-2 block text-[9px] font-medium tracking-[0.08em] text-neutral-500">
              {"OUR WORK"}
            </span>

            <h2 className="flex flex-col text-[28px] font-bold leading-[0.98] tracking-[-1.5px] text-black md:text-[36px]">
              <span>RECENT PROJECTS</span>
              <span className="text-neutral-400">
                WE&apos;RE PROUD OF
              </span>
            </h2>
          </div>

          <p className="max-w-[245px] text-[13px] leading-[1.7] text-neutral-600 sm:mt-5">
            We work with startups, scaleups, and established brands
            to launch digital products that stand out and convert.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-[9px] sm:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative aspect-[1.13/1] cursor-pointer overflow-hidden rounded-[2px] bg-neutral-900"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-[1.09]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 transition-all duration-700 group-hover:from-black group-hover:via-black/40 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">

                {/* Project Name */}
                <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <h3 className="text-[13px] font-bold tracking-tight text-white md:text-[15px]">
                    {project.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-1.5 text-[9px] text-white/80">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Hidden Description */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-[11px] leading-relaxed text-white/85 md:text-xs">
                      {project.description}
                    </p>

                    <div className="mt-3 flex max-h-0 items-center justify-between overflow-hidden text-[9px] font-semibold tracking-[0.12em] text-white transition-all duration-500 group-hover:max-h-10">
                      <span>VIEW PROJECT</span>
                      <span className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
