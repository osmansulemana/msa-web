import { Award } from 'lucide-react';
import React from 'react';
import { COACHES } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const Coaches: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Elite Staff" title="Meet the Men Behind the Magic" />

        <div className="grid md:grid-cols-3 gap-10">
          {COACHES.map((coach, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-msa-primary transition-colors duration-300 relative z-10">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 right-0 bg-msa-primary text-white p-3 rounded-full shadow-lg z-20 group-hover:-translate-y-2 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{coach.name}</h3>
              <h4 className="text-sm font-bold text-msa-primary uppercase tracking-widest mb-4">{coach.role}</h4>
              <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                {coach.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
