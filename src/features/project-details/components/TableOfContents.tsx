import { Card } from '@/components/ui/card';
import React from 'react';
import Technologies from './Technologies';

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
  scrollToSection: (id: string) => void;
  tocRef: React.RefObject<HTMLDivElement>;
  technologies: string[];
}

export default function TableOfContents({ sections, activeSection, scrollToSection, tocRef, technologies }: TableOfContentsProps) {
  return (
    <div ref={tocRef} className="sticky top-32">
      <Card className="organic-card glass-card p-6 border-white/[0.08]">
        <h3 className="text-lg font-bold text-white mb-6">Table of Contents</h3>
        <nav className="space-y-2">
          {sections.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`w-full text-left p-3 organic-button transition-all duration-300 flex items-center space-x-3 ${
                activeSection === id
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{title}</span>
            </button>
          ))}
        </nav>
      </Card>
      <Technologies technologies={technologies} />
    </div>
  );
} 