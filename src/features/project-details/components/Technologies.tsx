import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';

interface TechnologiesProps {
  technologies: string[];
}

export default function Technologies({ technologies }: TechnologiesProps) {
  return (
    <Card className="organic-card glass-card p-6 border-white/[0.08] mt-6">
      <h3 className="text-lg font-bold text-white mb-4">Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} className="organic-badge bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
} 