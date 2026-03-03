import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer";
  const variants = {
    primary: "bg-msa-primary hover:bg-blue-700 text-white shadow-lg shadow-msa-primary/25 border-2 border-msa-primary hover:border-blue-700",
    secondary: "bg-white text-slate-900 hover:bg-slate-100 shadow-md border-2 border-white hover:border-slate-200",
    outline: "bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-slate-900",
    dark: "bg-slate-900 text-white hover:bg-slate-800 border-2 border-slate-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
