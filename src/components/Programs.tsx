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
          title="Pathways to Excellence"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                  {program.age}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                        <ArrowRight className="w-3 h-3 text-msa-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/register" className="block w-full">
                  <button className="w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-900 hover:border-msa-primary hover:text-msa-primary transition-colors uppercase text-sm tracking-wide cursor-pointer">
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
