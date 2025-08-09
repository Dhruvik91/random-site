import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface NavigationProps {
  backHref: string;
  backText?: string;
}

export default function Navigation({ backHref, backText = 'Back to Projects' }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 glass-nav organic-nav border-b border-white/[0.08] backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-4">
        <Link href={backHref}>
          <Button variant="ghost" size="sm" className="organic-button text-gray-400 hover:text-white hover:bg-white/5">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backText}
          </Button>
        </Link>
      </div>
    </nav>
  );
} 