import React from 'react';

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => (
  <div className="text-center max-w-3xl mx-auto mb-16 px-4">
    <h3 className={`text-msa-primary font-bold uppercase tracking-widest text-sm mb-3`}>
      {subtitle}
    </h3>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tight`}>
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-msa-primary mx-auto mt-6 rounded-full"></div>
  </div>
);
