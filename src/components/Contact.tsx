import { Calendar } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-msa-midnight relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="heading-editorial text-[12rem] md:text-[20rem] text-white/3 leading-none">
          MSA
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-1.5 bg-msa-primary mx-auto mb-8"></div>
          <h2 className="heading-editorial text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            READY TO DOMINATE<br />THE PITCH?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join over 500+ athletes training at the highest level. First session is on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="primary" className="px-12 py-4 text-base">
                Register Now
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium mt-6">
            <Calendar className="w-4 h-4" />
            Next intake: Sept 1st
          </div>
        </div>
      </div>
    </section>
  );
};
