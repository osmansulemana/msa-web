import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { NavLink } from './NavLink';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const isTransparentPage = location.pathname === '/' || location.pathname === '/register';
  const isTransparent = isTransparentPage && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isTransparent
          ? 'bg-transparent pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-6'
          : 'bg-white shadow-lg pt-[calc(env(safe-area-inset-top)+1rem)] pb-4'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className={`text-2xl font-black tracking-tighter ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
          MUTA<span className="text-msa-primary">SPORTS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/#programs" isScrolled={!isTransparent}>Programs</NavLink>
          <NavLink href="/#about" isScrolled={!isTransparent}>About</NavLink>
          <NavLink href="/#contact" isScrolled={!isTransparent}>Contact</NavLink>
          <Link to="/register">
            <Button variant={!isTransparent ? 'primary' : 'secondary'} className="py-2 px-5 text-xs">
              Join The Academy
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-8 h-8 ${isTransparent ? 'text-white' : 'text-slate-900'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isTransparent ? 'text-white' : 'text-slate-900'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 animate-fade-in-up">
          <a href="/#programs" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Programs</a>
          <a href="/#about" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/#contact" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full mt-4">Join Now</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
