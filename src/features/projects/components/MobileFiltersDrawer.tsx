import { ProjectFiltersComponent } from '@/components/ui/project-filters';
import { ProjectFilters, ProjectSort } from '@/lib/hooks/use-projects';
import React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';

interface MobileFiltersDrawerProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  filters: ProjectFilters;
  sort: ProjectSort;
  setFilters: (filters: ProjectFilters) => void;
  setSort: (sort: ProjectSort) => void;
}

export const MobileFiltersDrawer: React.FC<MobileFiltersDrawerProps> = ({ showFilters, setShowFilters, filters, sort, setFilters, setSort }) => {
  return (
    <Sheet open={showFilters} onOpenChange={setShowFilters}>
      <SheetContent side="top" className="lg:hidden p-6">
        <ProjectFiltersComponent
          filters={filters}
          sort={sort}
          onFiltersChange={setFilters}
          onSortChange={setSort}
        />
      </SheetContent>
    </Sheet>
  );
}; 