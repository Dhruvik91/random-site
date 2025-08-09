import { Button } from '@/components/ui/button';
import { Eye, Github } from 'lucide-react';
import React from 'react';

interface BannerImageProps {
  image: string;
  title: string;
  liveUrl?: string;
  githubUrl?: string;
  bannerRef: React.RefObject<HTMLDivElement>;
}

export default function BannerImage({ image, title, liveUrl, githubUrl, bannerRef }: BannerImageProps) {
  return (
    <section className="relative py-8">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={bannerRef} className="relative organic-hero overflow-hidden shadow-2xl primary-glow">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[400px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex gap-4">
              {liveUrl && (
                <Button asChild size="lg" className="organic-button bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-5 h-5 mr-2" />
                    View Live
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button variant="outline" size="lg" asChild className="organic-button border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 