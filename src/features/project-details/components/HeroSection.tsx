import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Tag, CheckCircle, Star } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  featured: boolean;
  category: string;
  status: string;
  title: string;
  shortDescription: string;
  createdAt: string;
  timeline: string;
  getCategoryColor: (category: string) => string;
  getStatusColor: (status: string) => string;
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({
  featured,
  category,
  status,
  title,
  shortDescription,
  createdAt,
  timeline,
  getCategoryColor,
  getStatusColor,
  heroRef,
}: HeroSectionProps) {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={heroRef} className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-4">
            {featured && (
              <Badge className="organic-badge bg-amber-500/10 text-amber-400 border-amber-500/20">
                <Star className="w-4 h-4 mr-1" />
                Featured Project
              </Badge>
            )}
            <Badge className={`organic-badge ${getCategoryColor(category)}`}>
              <Tag className="w-4 h-4 mr-1" />
              {category}
            </Badge>
            <Badge className={`organic-badge ${getStatusColor(status)}`}>
              <CheckCircle className="w-4 h-4 mr-1" />
              {status}
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {shortDescription}
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {timeline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 