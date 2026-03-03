import React from 'react';
import { COACHES } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const Coaches: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Elite Staff" title="MEET THE COACHING TEAM" />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {COACHES.map((coach, index) => (
            <div key={index} className="group bg-white overflow-hidden border border-slate-100 hover:border-msa-primary/30 transition-colors duration-300">
              <div className="h-72 overflow-hidden relative">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-msa-primary"></div>
              </div>
              <div className="p-6">
                <h3 className="heading-editorial text-2xl text-slate-900 mb-1">{coach.name}</h3>
                <h4 className="text-xs font-bold text-msa-primary uppercase tracking-[0.2em] mb-4">{coach.role}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
