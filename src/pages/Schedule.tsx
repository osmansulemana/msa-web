import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { SCHEDULES } from '../data/constants';

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState<'junior' | 'elite' | 'keeper'>('junior');

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold mb-4">
            Season 2026/2027
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
            TRAINING <span className="text-msa-primary">SCHEDULES</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Plan your week ahead. Select your age group to view dedicated training times and locations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-sm border border-slate-100 p-2 mb-8 md:mb-12 gap-2">
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${activeTab === 'junior' ? 'bg-msa-primary text-white shadow-lg shadow-msa-primary/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('junior')}
          >
            Junior Academy
          </button>
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${activeTab === 'elite' ? 'bg-msa-primary text-white shadow-lg shadow-msa-primary/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('elite')}
          >
            Elite Development
          </button>
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${activeTab === 'keeper' ? 'bg-msa-primary text-white shadow-lg shadow-msa-primary/30' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('keeper')}
          >
            Goalkeeper Union
          </button>
        </div>

        {/* Schedule List */}
        <div className="space-y-6">
          {SCHEDULES[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Day & Date */}
              <div className="flex items-start gap-4 md:w-1/3">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border-2 border-slate-100 group-hover:border-msa-primary group-hover:bg-msa-primary/5 transition-colors">
                  <Calendar className="w-6 h-6 text-slate-400 group-hover:text-msa-primary transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{item.day}</h3>
                  <p className="text-slate-500 font-medium">Weekly Session</p>
                </div>
              </div>

              {/* Time & Activity */}
              <div className="flex-1 space-y-2 border-l-2 border-slate-100 pl-6 md:border-none md:p-0">
                <h4 className="text-xl font-bold text-slate-800">{item.activity}</h4>
                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg">
                    <Clock className="w-4 h-4 text-msa-primary" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg">
                    <MapPin className="w-4 h-4 text-msa-primary" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
