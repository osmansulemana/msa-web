import React from 'react';

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false, centered = false }) => (
  <div className={`max-w-3xl mb-16 px-4 ${centered ? 'mx-auto text-center' : ''}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-1 bg-msa-primary rounded-full"></div>
      <h3 className="text-msa-primary font-bold uppercase tracking-widest text-sm">
        {subtitle}
      </h3>
    </div>
    <h2 className={`heading-editorial text-4xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
  </div>
);
