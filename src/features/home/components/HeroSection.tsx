import React, { forwardRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Rocket, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const HeroSection = forwardRef<HTMLDivElement>((props, ref) => (
  <section className="relative py-20 lg:py-32 overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div ref={ref} className="text-center space-y-8 max-w-4xl mx-auto">
        <Badge className="organic-badge bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-6 py-3 text-sm backdrop-blur-sm">
          <Star className="w-4 h-4 mr-2" />
          Professional Services
        </Badge>
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Scale</span>
            <span className="text-gradient-primary">Tech</span>
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Transforming businesses through innovative technology solutions and exceptional digital experiences
          </h2>
        </div>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
          We partner with forward-thinking companies to build scalable, modern applications that drive growth and deliver measurable results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link href="/projects">
            <Button size="lg" className="organic-button bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <Rocket className="w-5 h-5 mr-2" />
              View Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="organic-button border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-white/5 px-8 py-4 text-lg font-medium backdrop-blur-sm">
            <ExternalLink className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';
export default HeroSection; 