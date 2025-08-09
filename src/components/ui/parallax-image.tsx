"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  heightClass?: string; // e.g., 'h-64 md:h-96'
  speed?: number; // positive = slower background movement
  roundedClass?: string;
}

export default function ParallaxImage({
  src,
  heightClass = "h-64 md:h-96",
  speed = 30,
  roundedClass = "rounded-3xl",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: -speed },
        {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${roundedClass} ${heightClass} glass-card border border-white/[0.06]`}
    >
      <img
        ref={imgRef}
        src={src}
        alt="parallax"
        className="absolute inset-0 w-full h-full object-cover select-none will-change-transform"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
