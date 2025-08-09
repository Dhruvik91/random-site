import { Card } from '@/components/ui/card';
import { Target } from 'lucide-react';
import React from 'react';

export default function ProblemSection() {
  return (
    <section id="problem" className="content-section">
      <div className="sticky top-24 bg-background/80 backdrop-blur-sm py-4 mb-8 border-b border-white/[0.08]">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Target className="w-8 h-8 mr-3 text-cyan-400" />
          The Problem
        </h2>
      </div>
      <Card className="organic-card glass-card p-8 border-white/[0.08]">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Our client faced significant challenges with their existing system, including poor user experience, scalability issues, and outdated technology stack. The legacy solution was hindering business growth and creating operational inefficiencies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="organic-feature glass-card p-6 border-white/[0.05]">
              <h4 className="text-lg font-semibold text-white mb-3">Performance Issues</h4>
              <p className="text-gray-400 text-sm">Slow loading times and poor responsiveness affecting user engagement and conversion rates.</p>
            </div>
            <div className="organic-feature glass-card p-6 border-white/[0.05]">
              <h4 className="text-lg font-semibold text-white mb-3">Scalability Concerns</h4>
              <p className="text-gray-400 text-sm">System unable to handle growing user base and increasing data volumes effectively.</p>
            </div>
            <div className="organic-feature glass-card p-6 border-white/[0.05]">
              <h4 className="text-lg font-semibold text-white mb-3">User Experience</h4>
              <p className="text-gray-400 text-sm">Outdated interface and complex workflows leading to user frustration and abandonment.</p>
            </div>
            <div className="organic-feature glass-card p-6 border-white/[0.05]">
              <h4 className="text-lg font-semibold text-white mb-3">Maintenance Costs</h4>
              <p className="text-gray-400 text-sm">High maintenance overhead due to legacy codebase and technical debt accumulation.</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
} 