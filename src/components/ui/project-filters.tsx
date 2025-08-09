'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProjectFilters, ProjectSort } from '@/lib/hooks/use-projects';
import { Filter, SortAsc, SortDesc, X } from 'lucide-react';

interface ProjectFiltersComponentProps {
  filters: ProjectFilters;
  sort: ProjectSort;
  onFiltersChange: (filters: ProjectFilters) => void;
  onSortChange: (sort: ProjectSort) => void;
}

export function ProjectFiltersComponent({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
}: ProjectFiltersComponentProps) {
  const categories = ['Web', 'Mobile', 'Design', 'AI/ML'];
  const statuses = ['Completed', 'Ongoing', 'Planning'];
  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Python', 'Node.js', 
    'PostgreSQL', 'MongoDB', 'TensorFlow', 'Firebase', 'Stripe'
  ];

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: filters.category === category ? undefined : category,
    });
  };

  const handleStatusChange = (status: string) => {
    onFiltersChange({
      ...filters,
      status: filters.status === status ? undefined : status,
    });
  };

  const handleTechnologyToggle = (tech: string) => {
    const currentTechs = filters.technologies || [];
    const newTechs = currentTechs.includes(tech)
      ? currentTechs.filter(t => t !== tech)
      : [...currentTechs, tech];
    
    onFiltersChange({
      ...filters,
      technologies: newTechs.length > 0 ? newTechs : undefined,
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = filters.category || filters.status || (filters.technologies && filters.technologies.length > 0);

  return (
    <Card className="organic-card glass-card p-6 border-white/[0.08] space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="w-5 h-5 mr-2 text-cyan-400" />
          Filters
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-400 hover:text-white hover:bg-white/5"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Sort */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-300">Sort By</label>
        <div className="space-y-2">
          <Select
            value={sort.field}
            onValueChange={(value: 'date' | 'title') => 
              onSortChange({ ...sort, field: value })
            }
          >
            <SelectTrigger className="organic-button glass-card border-white/[0.08] text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="glass-card border-white/[0.08] bg-gray-900/95 backdrop-blur-xl">
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectContent>
          </Select>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => 
              onSortChange({ 
                ...sort, 
                direction: sort.direction === 'asc' ? 'desc' : 'asc' 
              })
            }
            className="organic-button w-full border-gray-700 text-gray-300 hover:bg-white/5"
          >
            {sort.direction === 'asc' ? (
              <SortAsc className="w-4 h-4 mr-2" />
            ) : (
              <SortDesc className="w-4 h-4 mr-2" />
            )}
            {sort.direction === 'asc' ? 'Ascending' : 'Descending'}
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-300">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={filters.category === category ? 'default' : 'outline'}
              className={`organic-badge cursor-pointer transition-all duration-200 ${
                filters.category === category
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-300">Status</label>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <Badge
              key={status}
              variant={filters.status === status ? 'default' : 'outline'}
              className={`organic-badge cursor-pointer transition-all duration-200 ${
                filters.status === status
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
              onClick={() => handleStatusChange(status)}
            >
              {status}
            </Badge>
          ))}
        </div>
      </div>

      {/* Technologies Filter */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-300">Technologies</label>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant={filters.technologies?.includes(tech) ? 'default' : 'outline'}
              className={`organic-badge cursor-pointer transition-all duration-200 text-xs ${
                filters.technologies?.includes(tech)
                  ? 'bg-cyan-500 text-white border-cyan-500'
                  : 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
              onClick={() => handleTechnologyToggle(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}