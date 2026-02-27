import { Instagram } from 'lucide-react';
import React from 'react';
import { IMAGES } from '../data/constants';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="In Action" title="Life At The Academy" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-150 md:h-125">
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
            <img src={IMAGES.gallery1} alt="Action Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-bold text-xl">Match Day Intensity</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={IMAGES.gallery2} alt="Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={IMAGES.gallery3} alt="Team Huddle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="md:col-span-2 rounded-2xl overflow-hidden relative group">
            <img src={IMAGES.gallery4} alt="Goal Celebration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-bold text-xl">Victory Moments</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50">
            <Instagram className="w-4 h-4 mr-2" /> Follow us @ApexFC
          </Button>
        </div>
      </div>
    </section>
  );
};
