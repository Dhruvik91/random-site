import { Card } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import React from 'react';

interface ProjectOverviewProps {
  description: string;
}

export default function ProjectOverview({ description }: ProjectOverviewProps) {
  return (
    <section id="overview" className="content-section">
      <div className="sticky top-24 bg-background/80 backdrop-blur-sm py-4 mb-8 border-b border-white/[0.08]">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Zap className="w-8 h-8 mr-3 text-cyan-400" />
          Project Overview
        </h2>
      </div>
      <Card className="organic-card glass-card p-8 border-white/[0.08]">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            {description}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            This project represents a comprehensive solution designed to address modern business challenges through innovative technology implementation. Our team focused on creating a scalable, maintainable, and user-friendly application that delivers exceptional value to end users while meeting all technical requirements.
          </p>
        </div>
      </Card>
    </section>
  );
} 