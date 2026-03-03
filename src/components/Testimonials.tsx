import { Quote } from 'lucide-react';
import React from 'react';
import { TESTIMONIALS } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 heading-editorial text-[20rem] text-white leading-none select-none pointer-events-none">
          "
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader subtitle="Word on the Pitch" title="PLAYER & PARENT VOICES" light />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 border-l-4 border-msa-primary hover:bg-slate-800 transition-colors duration-300">
              <Quote className="w-8 h-8 text-msa-primary mb-6" />
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-700 pt-4">
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-msa-primary text-sm font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
