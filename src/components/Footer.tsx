import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-msa-midnight text-slate-400">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/msalogo.png" alt="Muta Sports Academy" className="h-12 w-auto" />
              <span className="heading-editorial text-xl tracking-wide text-white">
                MUTA<span className="text-msa-primary">SPORTS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The premier destination for youth soccer development. Building champions on and off the field since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-slate-800 flex items-center justify-center hover:bg-msa-primary hover:border-msa-primary hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-slate-800 flex items-center justify-center hover:bg-msa-primary hover:border-msa-primary hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-slate-800 flex items-center justify-center hover:bg-msa-primary hover:border-msa-primary hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="heading-editorial text-lg text-white tracking-wide mb-6">PROGRAMS</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/schedules" className="hover:text-msa-primary transition-colors">Junior Academy (6-10)</Link></li>
              <li><Link to="/schedules" className="hover:text-msa-primary transition-colors">Elite Development (11-16)</Link></li>
              <li><Link to="/schedules" className="hover:text-msa-primary transition-colors">Goalkeeper Training</Link></li>
              <li><Link to="/register" className="hover:text-msa-primary transition-colors">Summer Camps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-editorial text-lg text-white tracking-wide mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="hover:text-msa-primary transition-colors">About Us</a></li>
              <li><a href="/#coaches" className="hover:text-msa-primary transition-colors">Coaching Staff</a></li>
              <li><a href="/#facilities" className="hover:text-msa-primary transition-colors">Facilities</a></li>
              <li><a href="/#contact" className="hover:text-msa-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-editorial text-lg text-white tracking-wide mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-msa-primary shrink-0" />
                <span>53 Ovaltine Court, UK<br />18 Appolo Street, Ghana<br />P.O. Box 634, Tamale</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-msa-primary shrink-0" />
                <span>contact@mutasports.com</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-msa-primary shrink-0" />
                <span>+44 7437 003979</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Muta Sports Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-slate-600">Defending with confidence &bull; Dribbling techniques</p>
        </div>
      </div>
    </footer>
  );
};
