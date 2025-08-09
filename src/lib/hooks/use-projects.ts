'use client';

import { useQuery } from '@tanstack/react-query';
import { projects, Project } from '@/lib/data/projects';

export interface ProjectFilters {
  category?: string;
  status?: string;
  technologies?: string[];
}

export interface ProjectSort {
  field: 'date' | 'title';
  direction: 'asc' | 'desc';
}

export function useProjects(filters?: ProjectFilters, sort?: ProjectSort) {
  return useQuery({
    queryKey: ['projects', filters, sort],
    queryFn: () => {
      let filteredProjects = [...projects];

      // Apply filters
      if (filters?.category) {
        filteredProjects = filteredProjects.filter(p => p.category === filters.category);
      }

      if (filters?.status) {
        filteredProjects = filteredProjects.filter(p => p.status === filters.status);
      }

      if (filters?.technologies?.length) {
        filteredProjects = filteredProjects.filter(p => 
          filters.technologies!.some(tech => p.technologies.includes(tech))
        );
      }

      // Apply sorting
      if (sort) {
        filteredProjects.sort((a, b) => {
          let aValue: string | Date;
          let bValue: string | Date;

          if (sort.field === 'date') {
            aValue = new Date(a.createdAt);
            bValue = new Date(b.createdAt);
          } else {
            aValue = a.title.toLowerCase();
            bValue = b.title.toLowerCase();
          }

          if (sort.direction === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
          } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
          }
        });
      }

      return filteredProjects;
    },
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: () => {
      const project = projects.find(p => p.slug === slug);
      if (!project) {
        throw new Error('Project not found');
      }
      return project;
    },
  });
}