import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink, Github } from 'lucide-react';
import React from 'react';

interface LinksSectionProps {
  liveUrl?: string;
  githubUrl?: string;
  gallery: string[];
  title: string;
}

export default function LinksSection({ liveUrl, githubUrl, gallery, title }: LinksSectionProps) {
  return (
    <section id="links" className="content-section">
      <div className="sticky top-24 bg-background/80 backdrop-blur-sm py-4 mb-8 border-b border-white/[0.08]">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <ExternalLink className="w-8 h-8 mr-3 text-cyan-400" />
          Live Project & Links
        </h2>
      </div>
      <Card className="organic-card glass-card p-8 border-white/[0.08]">
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Explore the live project and access additional resources to see our work in action. The project is fully deployed and actively serving users in production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveUrl && (
              <div className="organic-feature glass-card p-6 border-white/[0.05]">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Live Website</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Experience the fully functional application with all features and optimizations.
                </p>
                <Button asChild className="organic-button w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </a>
                </Button>
              </div>
            )}
            {githubUrl && (
              <div className="organic-feature glass-card p-6 border-white/[0.05]">
                <div className="flex items-center space-x-3 mb-4">
                  <Github className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Source Code</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Explore the codebase and technical implementation details.
                </p>
                <Button variant="outline" asChild className="organic-button w-full border-gray-700 text-gray-300 hover:bg-white/5">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            )}
          </div>
          {gallery.length > 0 && (
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-6">Project Gallery</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gallery.map((image, index) => (
                  <div key={index} className="relative organic-feature overflow-hidden group">
                    <img 
                      src={image} 
                      alt={`${title} gallery ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
} 