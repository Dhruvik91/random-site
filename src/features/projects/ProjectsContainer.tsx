"use client";

import { useState, useEffect, useRef } from "react";
import { useProjects, ProjectFilters, ProjectSort } from "@/lib/hooks/use-projects";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Header } from "./components/Header";
import { SearchAndControls } from "./components/SearchAndControls";
import { SidebarFilters } from "./components/SidebarFilters";
import { MobileFiltersDrawer } from "./components/MobileFiltersDrawer";
import { ProjectsGrid } from "./components/ProjectsGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsContainer() {
  const [filters, setFilters] = useState<ProjectFilters>({});
  const [sort, setSort] = useState<ProjectSort>({ field: "date", direction: "desc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>("grid");
  const [showFilters, setShowFilters] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const { data: projects, isLoading, error } = useProjects(filters, sort);

  // Filter projects by search term
  const filteredProjects =
    projects?.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    ) || [];

  useEffect(() => {
    if (!headerRef.current) return;
    // Header animation
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
    // Search section animation
    if (searchRef.current) {
      gsap.fromTo(
        searchRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <AnimatedBackground />
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading Projects</h1>
          <p className="text-gray-400 mb-6">Please try again later.</p>
          <Link href="/">
            <Button className="organic-button bg-cyan-500 hover:bg-cyan-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header headerRef={headerRef} onShowFilters={() => setShowFilters(!showFilters)} showFilters={showFilters} />
      <SearchAndControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchRef={searchRef}
      />
      <main className="container mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <SidebarFilters filters={filters} sort={sort} setFilters={setFilters} setSort={setSort} />
          <MobileFiltersDrawer
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filters={filters}
            sort={sort}
            setFilters={setFilters}
            setSort={setSort}
          />
          <ProjectsGrid
            filteredProjects={filteredProjects}
            isLoading={isLoading}
            searchTerm={searchTerm}
            setFilters={setFilters}
            setSearchTerm={setSearchTerm}
            viewMode={viewMode}
          />
        </div>
      </main>
    </div>
  );
}
