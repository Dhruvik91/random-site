import { useProject } from "@/lib/hooks/use-projects";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedBackground } from "@/components/ui/animated-background";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import BannerImage from "./components/BannerImage";
import TableOfContents from "./components/TableOfContents";
import Technologies from "./components/Technologies";
import ProjectOverview from "./components/ProjectOverview";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ImpactSection from "./components/ImpactSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LinksSection from "./components/LinksSection";

import {
  Zap,
  Target,
  Code2,
  TrendingUp,
  Quote,
  ExternalLink,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDetailsContainerProps {
  slug: string;
}

export default function ProjectDetailsContainer({
  slug,
}: ProjectDetailsContainerProps) {
  const { data: project, isLoading, error } = useProject(slug);
  const [activeSection, setActiveSection] = useState("overview");

  const heroRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "overview", title: "Project Overview", icon: Zap },
    { id: "problem", title: "The Problem", icon: Target },
    { id: "solution", title: "The Solution", icon: Code2 },
    { id: "impact", title: "The Impact", icon: TrendingUp },
    { id: "testimonials", title: "Client Testimonials", icon: Quote },
    { id: "links", title: "Live Project & Links", icon: ExternalLink },
  ];

  useEffect(() => {
    if (!project || isLoading) return;
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
    if (contentRef.current) {
      const contentSections =
        contentRef.current.querySelectorAll(".content-section");
      contentSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
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
    }
    if (tocRef.current) {
      gsap.fromTo(
        tocRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.8 }
      );
    }
    const observerOptions = { rootMargin: "-20% 0px -70% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [project, isLoading]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // Immediately highlight the clicked section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      let offsetPosition = rect.top + scrollTop - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Ongoing":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Planning":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Mobile":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Design":
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      case "AI/ML":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <AnimatedBackground />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <p className="text-white text-lg">Loading project details...</p>
        </div>
      </div>
    );
  }
  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <AnimatedBackground />
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-bold text-red-400 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-6">{`The project you're looking for doesn't exist.`}</p>
          <Navigation backHref="/projects" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedBackground />
      </div>
      <Navigation backHref="/projects" />
      <HeroSection
        featured={project.featured}
        category={project.category}
        status={project.status}
        title={project.title}
        shortDescription={project.shortDescription}
        createdAt={project.createdAt}
        timeline={project.timeline}
        getCategoryColor={getCategoryColor}
        getStatusColor={getStatusColor}
        heroRef={heroRef}
      />
      <BannerImage
        image={project.image}
        title={project.title}
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        bannerRef={bannerRef}
      />
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <TableOfContents
                sections={sections}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                tocRef={tocRef}
                technologies={project.technologies}
              />
            </aside>
            <div ref={contentRef} className="lg:col-span-3 space-y-16">
              <ProjectOverview description={project.description} />
              <ProblemSection />
              <SolutionSection technologies={project.technologies} />
              <ImpactSection />
              <TestimonialsSection />
              <LinksSection
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                gallery={project.gallery}
                title={project.title}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
