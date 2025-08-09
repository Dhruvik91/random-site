"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/data/projects";
import { ExternalLink, Github, Calendar, Clock, Star, Tag } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

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

  return (
    <Card
      ref={cardRef}
      className="organic-card glass-card border-white/[0.08] hover:border-cyan-500/20 transition-all duration-500 hover-lift group overflow-hidden h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden organic-hero h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {/* Featured Badge Overlay */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="organic-badge bg-amber-500/90 text-amber-100 border-0 backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Status and Category Badges */}
        <div className="flex gap-2 mb-2">
          <Badge
            className={`organic-badge ${getCategoryColor(
              project.category
            )} backdrop-blur-sm`}
          >
            <Tag className="w-3 h-3 mr-1" />
            {project.category}
          </Badge>
          <Badge
            className={`organic-badge ${getStatusColor(
              project.status
            )} backdrop-blur-sm`}
          >
            {project.status}
          </Badge>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              className="organic-badge bg-gray-500/10 text-gray-400 border-gray-500/20 text-xs px-2 py-1"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge className="organic-badge bg-gray-500/10 text-gray-400 border-gray-500/20 text-xs px-2 py-1">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(project.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {project.timeline}
            </div>
          </div>
        </div>

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Link href={`/projects/${project.slug}`} className="flex-1">
            <Button className="organic-button w-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              View Details
            </Button>
          </Link>

          <div className="flex gap-2">
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="organic-button border-gray-700 text-gray-300 hover:bg-white/5 p-2"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="organic-button border-gray-700 text-gray-300 hover:bg-white/5 p-2"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
