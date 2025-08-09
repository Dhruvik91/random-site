import React, { forwardRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Zap, Target, Brain, Users, CheckCircle } from 'lucide-react';

const FeaturesSection = forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-20 lg:py-32 relative">
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <Badge className="organic-badge bg-gray-500/10 text-gray-400 border-gray-500/20 px-4 py-2 mb-6">
          <CheckCircle className="w-4 h-4 mr-2" />
          Our Expertise
        </Badge>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Why Choose <span className="text-gradient-primary">ScaleTech</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We combine technical excellence with strategic thinking to deliver solutions that scale with your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="feature-card organic-feature glass-card p-6 text-center border-white/[0.08] hover:border-cyan-500/20 transition-all duration-500 hover-lift group">
          <div className="w-16 h-16 bg-cyan-500/10 organic-feature rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
            <Zap className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Performance First</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Optimized solutions built for speed, scalability, and exceptional user experiences.
          </p>
        </Card>
        <Card className="feature-card organic-feature glass-card p-6 text-center border-white/[0.08] hover:border-cyan-500/20 transition-all duration-500 hover-lift group">
          <div className="w-16 h-16 bg-cyan-500/10 organic-feature rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
            <Target className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Strategic Approach</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every solution is carefully planned and executed to align with your business objectives.
          </p>
        </Card>
        <Card className="feature-card organic-feature glass-card p-6 text-center border-white/[0.08] hover:border-cyan-500/20 transition-all duration-500 hover-lift group">
          <div className="w-16 h-16 bg-cyan-500/10 organic-feature rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
            <Brain className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Modern Technology</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leveraging cutting-edge technologies and best practices for future-proof solutions.
          </p>
        </Card>
        <Card className="feature-card organic-feature glass-card p-6 text-center border-white/[0.08] hover:border-cyan-500/20 transition-all duration-500 hover-lift group">
          <div className="w-16 h-16 bg-cyan-500/10 organic-feature rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
            <Users className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">Client Partnership</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Collaborative approach ensuring your vision is realized with precision and care.
          </p>
        </Card>
      </div>
    </div>
  </section>
));

FeaturesSection.displayName = 'FeaturesSection';
export default FeaturesSection; 