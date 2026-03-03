import React from 'react';
import { STATS } from '../data/constants';

export const Stats: React.FC = () => {
  return (
    <div className="bg-white py-16 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              <span className="heading-editorial text-5xl md:text-6xl lg:text-7xl text-msa-primary block mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </span>
              {idx < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
