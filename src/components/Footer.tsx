import { Activity, Facebook, Instagram, MapPin, Twitter, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/msalogo.png" alt="Muta Sports Academy" className="h-12 w-auto" />
              <span className="font-bold text-xl tracking-tight text-white">MutaSports</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The premier destination for youth soccer development. Building champions on and off the field since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Programs</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/schedules" className="hover:text-white transition-colors">Junior Academy (6-10)</Link></li>
              <li><Link to="/schedules" className="hover:text-white transition-colors">Elite Development (11-16)</Link></li>
              <li><Link to="/schedules" className="hover:text-white transition-colors">Goalkeeper Training</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Summer Camps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#coaches" className="hover:text-white transition-colors">Coaching Staff</a></li>
              <li><a href="/#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <span>53 Ovaltine Court, UK<br />18 Appolo Street, Ghana<br />P.O. Box 634, Tamale</span>
              </li>
              <li className="flex gap-3">
                <Users className="w-5 h-5 text-slate-400 shrink-0" />
                <span>contact@mutasports.com</span>
              </li>
              <li className="flex gap-3">
                <Activity className="w-5 h-5 text-slate-400 shrink-0" />
                <span>+44 7437 003979</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Muta Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
