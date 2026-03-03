import { Activity, MapPin, Users } from 'lucide-react';
import React from 'react';
import { IMAGES } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="Our Philosophy" title="MORE THAN JUST A GAME" />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-8">
          {/* Image Grid — asymmetric editorial */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 rounded-lg overflow-hidden">
                <img
                  src={IMAGES.coach}
                  alt="Coach Mentoring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={IMAGES.gallery1}
                  alt="Training session"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-msa-primary flex items-center justify-center p-8">
                <div className="text-center">
                  <span className="heading-editorial text-5xl text-white block">98%</span>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Improvement Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:w-1/2">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At Muta Sports Academy (MSA), we believe in rising by lifting others. We don't just build better players; we build resilient, disciplined, and collaborative individuals.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our facilities include a standard green turf pitch, stadium with running tracks, futsal courts, gym, and swimming pool. We provide full boarding and vocational training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-msa-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-msa-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Expert Mentorship</h4>
                  <p className="text-slate-500 text-sm">UEFA licensed coaches dedicated to your growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-msa-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-msa-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Elite Facilities</h4>
                  <p className="text-slate-500 text-sm">FIFA grade turf and performance gyms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-msa-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-msa-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Full Boarding</h4>
                  <p className="text-slate-500 text-sm">Complete residential program with academics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
