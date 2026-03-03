import React from 'react';
import { IMAGES } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader subtitle="In Action" title="LIFE AT THE ACADEMY" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {/* Large featured image */}
          <div className="col-span-2 row-span-2 overflow-hidden relative group aspect-square">
            <img
              src={IMAGES.gallery1}
              alt="Action Shot"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="heading-editorial text-white text-2xl">Match Day Intensity</span>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-msa-primary"></div>
          </div>

          {/* Top right */}
          <div className="overflow-hidden relative group aspect-square">
            <img
              src={IMAGES.gallery2}
              alt="Training"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-msa-primary/0 group-hover:bg-msa-primary/20 transition-colors duration-300"></div>
          </div>

          {/* Top right 2 */}
          <div className="overflow-hidden relative group aspect-square">
            <img
              src={IMAGES.gallery3}
              alt="Team Huddle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-msa-primary/0 group-hover:bg-msa-primary/20 transition-colors duration-300"></div>
          </div>

          {/* Bottom right — wide */}
          <div className="col-span-2 overflow-hidden relative group aspect-2/1">
            <img
              src={IMAGES.gallery4}
              alt="Goal Celebration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="heading-editorial text-white text-2xl">Victory Moments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
