
"use client";

import { useState } from "react";

export default function YouTubeHero({
  videoId,
  title = "Experience Something Extraordinary",
  subtitle = "",
  children,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">

      {/* YouTube Background */}
      <div className="absolute inset-0 overflow-hidden">

        <iframe
          src={`https://www.youtube-nocookie.com/embed/IJwCKBAgF2U?autoplay=1&mute=1&loop=1&playlist=IJwCKBAgF2U&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
          title="Background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          onLoad={() => setLoaded(true)}
          className={`
            pointer-events-none absolute left-1/2 top-1/2
            h-[56.25vw] min-h-[100vh]
            w-[177.78vh] min-w-full
            -translate-x-1/2 -translate-y-1/2
            border-0 transition-opacity duration-1000
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />

      </div>



    </section>
  );
}
