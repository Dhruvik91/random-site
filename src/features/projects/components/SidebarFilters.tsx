import { ProjectFiltersComponent } from '@/components/ui/project-filters';
import { ProjectFilters, ProjectSort } from '@/lib/hooks/use-projects';
import React from 'react';

interface SidebarFiltersProps {
  filters: ProjectFilters;
  sort: ProjectSort;
  setFilters: (filters: ProjectFilters) => void;
  setSort: (sort: ProjectSort) => void;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({ filters, sort, setFilters, setSort }) => (
  <aside className="lg:col-span-1 hidden lg:block">
    <div className="sticky top-32">
      <ProjectFiltersComponent
        filters={filters}
        sort={sort}
        onFiltersChange={setFilters}
        onSortChange={setSort}
      />
    </div>
  </aside>
); 