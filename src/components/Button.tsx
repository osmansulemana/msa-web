import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  const variants = {
    primary: "bg-msa-primary hover:bg-msa-light text-white shadow-lg shadow-msa-primary/30 border-2 border-msa-primary hover:border-msa-light",
    secondary: "bg-white text-slate-900 hover:bg-slate-100 shadow-md border-2 border-white",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    dark: "bg-slate-900 text-white hover:bg-slate-800 border-2 border-slate-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
