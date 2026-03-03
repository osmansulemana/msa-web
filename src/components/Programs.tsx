import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader
          subtitle="Our Curriculum"
          title="PATHWAYS TO EXCELLENCE"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {PROGRAMS.map((program, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-msa-primary/30"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 left-0 w-full h-1 bg-msa-volt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-900">
                  {program.age}
                </div>
              </div>
              <div className="p-8">
                <h3 className="heading-editorial text-3xl text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                      <ArrowRight className="w-4 h-4 text-msa-primary mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/register" className="block w-full">
                  <button className="w-full py-4 border-2 border-slate-100 font-bold text-slate-900 hover:border-msa-primary hover:text-msa-primary transition-colors uppercase text-xs tracking-widest cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
