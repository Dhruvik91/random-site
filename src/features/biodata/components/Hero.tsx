"use client";

import React, { forwardRef } from "react";
import { Biodata } from "@/lib/data/biodata";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

interface HeroProps {
  data: Biodata;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ data }, ref) => {
  return (
    <section
      ref={ref}
      className="relative z-10 container mx-auto px-4 pt-24 pb-16 content-section"
    >
      <div className="organic-hero glass-card border-white/[0.08] p-8 md:p-12 text-center">
        {data.personal.photo && (
          <div className="mx-auto mb-6 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-cyan-500/30 shadow-lg subtle-glow relative">
            <Image
              src={data.personal.photo}
              alt={data.personal.fullName}
              fill
              sizes="(min-width: 768px) 9rem, 7rem"
              className="object-cover"
            />
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 text-gradient-primary">
          {data.personal.fullName}
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Software Engineer • {data.professional.organization} •{" "}
          {data.professional.workLocation}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <span className="organic-badge bg-cyan-500/10 text-cyan-300 border-cyan-500/20 px-3 py-1 rounded-md">
            Vegetarian
          </span>
          <span className="organic-badge bg-cyan-500/10 text-cyan-300 border-cyan-500/20 px-3 py-1 rounded-md">
            Athletic
          </span>
          <span className="organic-badge bg-cyan-500/10 text-cyan-300 border-cyan-500/20 px-3 py-1 rounded-md">
            Gym • Reading • Coding • Sketching
          </span>
        </div>
        <SocialLinks contact={data.contact} />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
