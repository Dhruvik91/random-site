import { Card } from '@/components/ui/card';
import { Code2, CheckCircle } from 'lucide-react';
import React from 'react';

interface SolutionSectionProps {
  technologies: string[];
}

export default function SolutionSection({ technologies }: SolutionSectionProps) {
  return (
    <section id="solution" className="content-section">
      <div className="sticky top-24 bg-background/80 backdrop-blur-sm py-4 mb-8 border-b border-white/[0.08]">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Code2 className="w-8 h-8 mr-3 text-cyan-400" />
          The Solution
        </h2>
      </div>
      <Card className="organic-card glass-card p-8 border-white/[0.08]">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            We developed a comprehensive solution using modern technologies and best practices. Our approach focused on creating a robust, scalable, and maintainable system that addresses all identified pain points while providing room for future growth.
          </p>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Technical Architecture</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built using a modern tech stack with {technologies.slice(0, 3).join(', ')}, ensuring optimal performance, maintainability, and developer experience.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-medium">Responsive Design</h5>
                    <p className="text-gray-400 text-sm">Optimized for all devices and screen sizes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-medium">Performance Optimized</h5>
                    <p className="text-gray-400 text-sm">Fast loading times and smooth interactions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-medium">Scalable Architecture</h5>
                    <p className="text-gray-400 text-sm">Built to handle growth and increased load</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="text-white font-medium">Security First</h5>
                    <p className="text-gray-400 text-sm">Implemented with security best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
} 