import { Calendar } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6">Ready to dominate the pitch?</h2>
            <p className="text-white text-lg mb-0">
              Join over 500+ athletes training at the highest level. First session is on us.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-w-62.5">
            <Link to="/register">
              <Button variant="secondary" className="w-full py-4 text-lg">
                Register Now
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-2 text-white text-sm font-medium">
              <Calendar className="w-4 h-4" /> Next intake: Sept 1st
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
