import React, { forwardRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTASection = forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-20 lg:py-32 relative">
    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <Badge className="organic-badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2">
          <TrendingUp className="w-4 h-4 mr-2" />
          Ready to Scale
        </Badge>
        <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Transform Your
          <span className="text-gradient-primary block mt-2">Digital Presence?</span>
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your goals with innovative technology solutions and exceptional execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link href="/projects">
            <Button size="lg" className="organic-button bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <Code className="w-5 h-5 mr-2" />
              View Our Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
));

CTASection.displayName = 'CTASection';
export default CTASection; 