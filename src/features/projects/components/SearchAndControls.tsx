import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Grid, List } from 'lucide-react';
import React from 'react';

interface SearchAndControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  searchRef: React.RefObject<HTMLDivElement>;
}

export const SearchAndControls: React.FC<SearchAndControlsProps> = ({ searchTerm, setSearchTerm, viewMode, setViewMode, searchRef }) => {
  return (
    <section className="relative z-10 py-8">
      <div className="container mx-auto px-4">
        <div ref={searchRef} className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="organic-button pl-12 glass-card border-white/[0.08] text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`organic-button ${viewMode === 'grid' 
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-white border-0' 
                  : 'border-gray-700 text-gray-300 hover:bg-white/5'
                }`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`organic-button ${viewMode === 'list' 
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-white border-0' 
                  : 'border-gray-700 text-gray-300 hover:bg-white/5'
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 