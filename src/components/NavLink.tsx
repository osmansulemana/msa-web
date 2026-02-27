import React from 'react';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`font-semibold text-sm uppercase tracking-wide transition-colors ${isScrolled ? 'text-slate-700 hover:text-msa-primary' : 'text-white/90 hover:text-white'
      }`}
  >
    {children}
  </a>
);
