import { forwardRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Briefcase, Filter } from 'lucide-react';

interface HeaderProps {
  headerRef: React.RefObject<HTMLDivElement>;
  onShowFilters: () => void;
  showFilters: boolean;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header({ headerRef, onShowFilters, showFilters }, ref) {
  return (
    <header ref={headerRef} className="relative z-10 glass-nav organic-nav sticky top-0 backdrop-blur-2xl w-full">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 w-full sm:w-auto">
            <Link href="/">
              <Button variant="ghost" size="sm" className="organic-button text-gray-400 hover:text-white hover:bg-white/5 w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <div className="flex items-center space-x-3 mt-2 sm:mt-0">
              <Badge className="organic-badge bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                <Briefcase className="w-4 h-4 mr-1" />
                Portfolio
              </Badge>
              {/* <h1 className="text-2xl lg:text-3xl font-bold text-white">
                Our Projects
              </h1> */}
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end space-x-4 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={onShowFilters}
              className="organic-button lg:hidden border-gray-700 text-gray-300 hover:bg-white/5 w-full sm:w-auto"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}); 