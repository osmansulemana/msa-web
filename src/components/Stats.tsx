import React from 'react';
import { STATS } from '../data/constants';

export const Stats: React.FC = () => {
  return (
    <div className="bg-white py-12 relative z-20 -mt-8 mx-4 md:mx-12 shadow-2xl shadow-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-900">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black mb-2">{stat.value}</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
