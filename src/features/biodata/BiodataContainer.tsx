"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { biodata } from "@/lib/data/biodata";
import Hero from "./components/Hero";
import PersonalDetails from "./components/PersonalDetails";
import FamilySection from "./components/FamilySection";
import EducationProfessional from "./components/EducationProfessional";
import LifestyleSection from "./components/LifestyleSection";
import GalleriesSection from "./components/GalleriesSection";
import HomeImagesSection from "./components/HomeImagesSection";
import ContactSection from "./components/ContactSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BiodataContainer() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionsRef.current) return;
    const sections = sectionsRef.current.querySelectorAll(".content-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Hero data={biodata} />
      <div ref={sectionsRef} className="relative z-10">
        <PersonalDetails data={biodata} />
        <EducationProfessional data={biodata} />
        <FamilySection data={biodata} />
        <LifestyleSection data={biodata} />
        <GalleriesSection />
        {/* <HomeImagesSection /> */}
        <ContactSection data={biodata} />
      </div>
    </div>
  );
}
