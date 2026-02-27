import { ChevronRight, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/constants';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-175 flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Soccer Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm uppercase mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 fill-white" />
            <span>Est. 2010 - Registration Open</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tight">
            WE RISE BY <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-300">
              LIFTING
            </span> <br />
            OTHERS
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
            A fully fledged football academy with educational and vocational training facilities, complete with boarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button variant="secondary">
                Book a Free Trial <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/schedules">
              <Button variant="outline">
                View Schedules
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
