import React from 'react';

interface TickerItem {
  label: string;
  value: string;
}

interface TickerProps {
  items?: TickerItem[];
  variant?: 'primary' | 'dark';
}

const DEFAULT_ITEMS: TickerItem[] = [
  { label: 'ACTIVE PLAYERS', value: '450+' },
  { label: 'CHAMPIONSHIPS WON', value: '28' },
  { label: 'ELITE COACHES', value: '15' },
  { label: 'PRO SIGNINGS', value: '12' },
  { label: 'YEARS OF EXCELLENCE', value: '15+' },
  { label: 'TRAINING FACILITIES', value: '6' },
];

export const Ticker: React.FC<TickerProps> = ({ items = DEFAULT_ITEMS, variant = 'primary' }) => {
  const bgClass = variant === 'primary' ? 'bg-msa-primary' : 'bg-slate-900';

  return (
    <div className={`${bgClass} py-4 overflow-hidden select-none`}>
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-8 shrink-0">
            <span className="heading-editorial text-white text-2xl md:text-3xl mr-3">
              {item.value}
            </span>
            <span className="text-white/70 text-xs md:text-sm font-bold uppercase tracking-widest">
              {item.label}
            </span>
            <span className="text-msa-volt mx-8 text-xl">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
