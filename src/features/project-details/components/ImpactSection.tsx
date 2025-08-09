import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import React from 'react';

export default function ImpactSection() {
  return (
    <section id="impact" className="content-section">
      <div className="sticky top-24 bg-background/80 backdrop-blur-sm py-4 mb-8 border-b border-white/[0.08]">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
          The Impact
        </h2>
      </div>
      <Card className="organic-card glass-card p-8 border-white/[0.08]">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            The implementation of our solution delivered significant improvements across all key metrics, resulting in enhanced user satisfaction, increased efficiency, and substantial cost savings for our client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center organic-feature glass-card p-6 border-white/[0.05]">
              <div className="text-3xl font-bold text-gradient-primary mb-2">85%</div>
              <div className="text-white font-medium mb-1">Performance Improvement</div>
              <div className="text-gray-400 text-sm">Faster loading times and better responsiveness</div>
            </div>
            <div className="text-center organic-feature glass-card p-6 border-white/[0.05]">
              <div className="text-3xl font-bold text-gradient-primary mb-2">60%</div>
              <div className="text-white font-medium mb-1">Cost Reduction</div>
              <div className="text-gray-400 text-sm">Lower maintenance and operational costs</div>
            </div>
            <div className="text-center organic-feature glass-card p-6 border-white/[0.05]">
              <div className="text-3xl font-bold text-gradient-primary mb-2">95%</div>
              <div className="text-white font-medium mb-1">User Satisfaction</div>
              <div className="text-gray-400 text-sm">Improved user experience and engagement</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
} 