import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { SCHEDULES } from '../data/constants';

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState<'junior' | 'elite' | 'keeper'>('junior');

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Header Section */}
      <div className="bg-msa-midnight text-white py-24 relative overflow-hidden">
        {/* Background typographic watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="heading-editorial text-[15rem] md:text-[25rem] text-white/2 leading-none whitespace-nowrap">
            SCHEDULES
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="w-12 h-1.5 bg-msa-primary mx-auto mb-8"></div>
          <h1 className="heading-editorial text-5xl md:text-7xl lg:text-8xl mb-6">
            TRAINING <span className="text-msa-primary">SCHEDULES</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto tracking-wide uppercase font-medium">
            Season 2026/2027 &bull; Plan your week ahead
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row bg-slate-50 border border-slate-200 p-1 mb-12">
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'junior' ? 'bg-msa-primary text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-white'}`}
            onClick={() => setActiveTab('junior')}
          >
            Junior Academy
          </button>
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'elite' ? 'bg-msa-primary text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-white'}`}
            onClick={() => setActiveTab('elite')}
          >
            Elite Development
          </button>
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'keeper' ? 'bg-msa-primary text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-white'}`}
            onClick={() => setActiveTab('keeper')}
          >
            Goalkeeper Union
          </button>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {SCHEDULES[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 hover:border-msa-primary p-6 md:p-8 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden"
            >
              {/* Hover Left Border Detail */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-msa-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

              {/* Day & Date */}
              <div className="flex items-start gap-5 md:w-1/3 relative z-10">
                <div className="w-14 h-14 bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-msa-primary group-hover:bg-msa-primary group-hover:text-white transition-all duration-300">
                  <Calendar className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="heading-editorial text-3xl text-slate-900 tracking-wide group-hover:text-msa-primary transition-colors">{item.day}</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Weekly Session</p>
                </div>
              </div>

              {/* Time & Activity */}
              <div className="flex-1 space-y-3 border-l-2 border-slate-100 pl-6 md:border-none md:p-0 relative z-10">
                <h4 className="heading-editorial text-2xl text-slate-800 tracking-wide">{item.activity}</h4>
                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-600 uppercase tracking-wide">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-msa-primary" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-msa-primary" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Optional Right Action (e.g., Book) */}
              <div className="hidden md:block relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                <span className="text-msa-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  Details
                  <div className="w-6 h-px bg-msa-primary"></div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
