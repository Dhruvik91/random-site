import { ProjectCard } from '@/components/ui/project-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import React from 'react';
import { Project } from '@/lib/data/projects';

interface ProjectsGridProps {
  filteredProjects: Project[];
  isLoading: boolean;
  searchTerm: string;
  setFilters: (filters: any) => void;
  setSearchTerm: (term: string) => void;
  viewMode: 'grid' | 'list';
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ filteredProjects, isLoading, searchTerm, setFilters, setSearchTerm, viewMode }) => {
  return (
    <div className="lg:col-span-3">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="organic-card glass-card h-80 mb-4"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
                </h2>
                {searchTerm && (
                  <p className="text-gray-400 text-sm">
                    Showing results for <span className="text-cyan-400">{`"${searchTerm}"`}</span>
                  </p>
                )}
              </div>
              {filteredProjects.length > 0 && (
                <Badge className="organic-badge bg-amber-500/10 text-amber-400 border-amber-500/20">
                  {filteredProjects.filter(p => p.featured).length} Featured
                </Badge>
              )}
            </div>
          </div>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-500/10 organic-feature rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">No projects found</h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Try adjusting your filters or search terms to discover our projects.
              </p>
              <Button 
                onClick={() => {
                  setFilters({});
                  setSearchTerm('');
                }}
                className="organic-button bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}; 