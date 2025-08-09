import React, { forwardRef } from 'react';

const StatsSection = forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-20 lg:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 curved-bottom" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="stat-card text-center">
          <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">150+</div>
          <div className="text-gray-400 font-medium">Projects Delivered</div>
        </div>
        <div className="stat-card text-center">
          <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">100%</div>
          <div className="text-gray-400 font-medium">Client Satisfaction</div>
        </div>
        <div className="stat-card text-center">
          <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">24/7</div>
          <div className="text-gray-400 font-medium">Support Available</div>
        </div>
        <div className="stat-card text-center">
          <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">8+</div>
          <div className="text-gray-400 font-medium">Years Experience</div>
        </div>
      </div>
    </div>
  </section>
));

StatsSection.displayName = 'StatsSection';
export default StatsSection; 