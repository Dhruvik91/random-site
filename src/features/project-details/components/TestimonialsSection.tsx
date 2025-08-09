import { Card } from '@/components/ui/card';
import { Quote, Users } from 'lucide-react';
import React from 'react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="content-section">
      <div className="sticky top-24 bg-background/80 backdrop-blur-sm py-4 mb-8 border-b border-white/[0.08]">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Quote className="w-8 h-8 mr-3 text-cyan-400" />
          Client Testimonials
        </h2>
      </div>
      <div className="space-y-6">
        <Card className="organic-card glass-card p-8 border-white/[0.08]">
          <div className="flex items-start space-x-4">
            <Quote className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-300 leading-relaxed text-lg mb-4 italic">
                {`ScaleTech delivered exactly what we needed. The new system has transformed our operations and significantly improved our user experience. The team's expertise and attention to detail were exceptional throughout the entire project.`}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 organic-feature rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CTO, TechCorp Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="organic-card glass-card p-8 border-white/[0.08]">
          <div className="flex items-start space-x-4">
            <Quote className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-300 leading-relaxed text-lg mb-4 italic">
                {`"The results speak for themselves. We've seen a dramatic improvement in performance and user engagement since launching the new platform. ScaleTech's modern approach and technical excellence made all the difference."`}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 organic-feature rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Product Manager, InnovateLab</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
} 