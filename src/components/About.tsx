import { Activity, MapPin, Users } from 'lucide-react';
import React from 'react';
import { IMAGES } from '../data/constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-msa-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-msa-primary rounded-2xl rotate-3 opacity-30"></div>
              <img
                src={IMAGES.coach}
                alt="Coach Mentoring"
                className="rounded-2xl shadow-2xl relative w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Activity className="w-8 h-8 text-slate-800" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-2xl">98%</p>
                    <p className="text-slate-500 text-sm font-bold uppercase">Improvement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Our Philosophy</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">
              More Than Just <br /> A Game
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              At Muta Sports Academy (MSA), we believe in rising by lifting others. We don't just build better players; we build resilient, disciplined, and collaborative individuals.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Our facilities include a standard green turf pitch, stadium with running tracks, futsal courts, gym, and swimming pool. We provide full boarding and vocational training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-slate-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Mentorship</h4>
                  <p className="text-slate-400 text-sm">UEFA licensed coaches dedicated to your growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-slate-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Elite Facilities</h4>
                  <p className="text-slate-400 text-sm">FIFA grade turf and performance gyms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
