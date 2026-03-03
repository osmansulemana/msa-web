import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/constants';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-175 flex items-end overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Soccer Stadium"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-24">
        <div className="max-w-4xl">
          {/* Accent line */}
          <div className="w-16 h-1.5 bg-msa-primary mb-8"></div>

          <h1 className="heading-editorial text-6xl md:text-8xl lg:text-[10rem] text-white leading-[0.85] mb-8">
            THE HEART<br />
            OF THE<br />
            <span className="text-msa-primary">GAME</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
            A fully fledged football academy with educational and vocational training facilities, complete with boarding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button variant="primary">
                Register Now <ChevronRight className="w-4 h-4 ml-2" />
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

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-msa-primary z-20"></div>
    </section>
  );
};
