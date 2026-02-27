import { Quote } from 'lucide-react';
import React from 'react';
import { TESTIMONIALS } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader subtitle="Word on the Pitch" title="Player & Parent Voices" light />

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-msa-primary transition-colors">
              <Quote className="w-10 h-10 text-msa-primary mb-6 opacity-50" />
              <p className="text-lg text-slate-300 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
                <p className="text-msa-primary text-sm font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
