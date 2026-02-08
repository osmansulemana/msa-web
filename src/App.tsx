import {
  Activity,
  ArrowRight,
  Calendar,
  ChevronRight,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Star,
  Twitter,
  Users,
  X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

/**
 * Modern Soccer Academy Website
 * A single-file React application with a focus on visual impact and modern UI trends.
 */

// --- Interfaces ---

interface ImageAssets {
  hero: string;
  training: string;
  youth: string;
  elite: string;
  keeper: string;
  coach: string;
  gallery1: string;
  gallery2: string;
  gallery3: string;
  gallery4: string;
}

interface Program {
  title: string;
  age: string;
  description: string;
  image: string;
  features: string[];
}

interface Stat {
  label: string;
  value: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

// --- Assets & Constants ---
const IMAGES: ImageAssets = {
  hero: "/img1.jpeg",
  training: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2000&auto=format&fit=crop",
  youth: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=800&auto=format&fit=crop",
  elite: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop",
  keeper: "https://images.unsplash.com/photo-1543326727-25988e0b9684?q=80&w=800&auto=format&fit=crop",
  coach: "https://images.unsplash.com/photo-1531316654086-13d8650eb340?q=80&w=800&auto=format&fit=crop",
  gallery1: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800&auto=format&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=800&auto=format&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1579952363873-27f3bde9be2b?q=80&w=800&auto=format&fit=crop",
};

const PROGRAMS: Program[] = [
  {
    title: "Junior Academy",
    age: "Ages 6-10",
    description: "Building the foundation. Focus on ball mastery, coordination, and falling in love with the game.",
    image: IMAGES.youth,
    features: ["Fun-based learning", "Basic technique", "Small-sided games"]
  },
  {
    title: "Elite Development",
    age: "Ages 11-16",
    description: "Tactical awareness and advanced technical skills for competitive play. Prepare for the next level.",
    image: IMAGES.elite,
    features: ["Tactical workshops", "Strength & conditioning", "League matches"]
  },
  {
    title: "Goalkeeper Union",
    age: "All Ages",
    description: "Specialized training for the most unique position on the field. Reflexes, positioning, and distribution.",
    image: IMAGES.keeper,
    features: ["1-on-1 coaching", "Reaction training", "Match analysis"]
  }
];

const STATS: Stat[] = [
  { label: "Active Players", value: "450+" },
  { label: "Championships", value: "28" },
  { label: "Elite Coaches", value: "15" },
  { label: "Pro Signings", value: "12" },
];

// --- Components ---

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  const variants = {
    primary: "bg-msa-blue hover:bg-msa-light text-white shadow-lg shadow-msa-blue/30 border-2 border-msa-blue hover:border-msa-light",
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

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => (
  <div className="text-center max-w-3xl mx-auto mb-16 px-4">
    <h3 className={`text-msa-blue font-bold uppercase tracking-widest text-sm mb-3`}>
      {subtitle}
    </h3>
    <h2 className={`text-4xl md:text-5xl font-black ${light ? 'text-white' : 'text-slate-900'} tracking-tight`}>
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-msa-blue mx-auto mt-6 rounded-full"></div>
  </div>
);

const NavLink: React.FC<NavLinkProps> = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`font-semibold text-sm uppercase tracking-wide transition-colors ${isScrolled ? 'text-slate-700 hover:text-msa-blue' : 'text-white/90 hover:text-white'
      }`}
  >
    {children}
  </a>
);

// --- Main Application ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-msa-blue selection:text-white">

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/msalogo.png" alt="Muta Sports Academy" className="h-12 w-auto" />
            <span className={`font-bold text-xl tracking-tight hidden sm:block ${isScrolled ? 'text-slate-900' : 'text-white'}`}>MutaSports</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#programs" isScrolled={isScrolled}>Programs</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            <Button variant={isScrolled ? 'primary' : 'secondary'} className="py-2 px-5 text-xs">
              Join The Academy
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-4 md:hidden border-t">
            <a href="#home" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#programs" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Programs</a>
            <a href="#about" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="text-lg font-bold text-slate-800" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button variant="primary" className="w-full mt-4">Join Now</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tight">
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
              <Button variant="secondary">
                Book a Free Trial <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">
                View Schedules
              </Button>
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

      {/* Stats Bar */}
      <div className="bg-white py-12 relative z-20 -mt-8 mx-4 md:mx-12 shadow-2xl shadow-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-900">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-black mb-2">{stat.value}</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            subtitle="Our Curriculum"
            title="Pathways to Excellence"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                    {program.age}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                          <ArrowRight className="w-3 h-3 text-msa-blue" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-900 hover:border-msa-blue hover:text-msa-blue transition-colors uppercase text-sm tracking-wide">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-msa-blue/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-msa-blue rounded-2xl rotate-3 opacity-30"></div>
                <img
                  src={IMAGES.coach}
                  alt="Coach Mentoring"
                  className="rounded-2xl shadow-2xl relative w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-100 p-3 rounded-full">
                      <Activity className="w-8 h-8 text-slate-800" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-2xl">98%</p>
                      <p className="text-slate-500 text-sm font-bold uppercase">Improvement Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Our Philosophy</h3>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                More Than Just <br /> A Game
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                At Muta Sports Academy (MSA), we believe in rising by lifting others. We don't just build better players; we build resilient, disciplined, and collaborative individuals.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Our facilities include a standard green turf pitch, stadium with running tracks, futsal courts, gym, and swimming pool. We provide full boarding and vocational training.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Mentorship</h4>
                    <p className="text-slate-400 text-sm">UEFA licensed coaches dedicated to your growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-8 h-8 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Elite Facilities</h4>
                    <p className="text-slate-400 text-sm">FIFA grade turf and performance gyms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader subtitle="In Action" title="Life At The Academy" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-150 md:h-125">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
              <img src={IMAGES.gallery1} alt="Action Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-bold text-xl">Match Day Intensity</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img src={IMAGES.gallery2} alt="Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img src={IMAGES.gallery3} alt="Team Huddle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden relative group">
              <img src={IMAGES.gallery4} alt="Goal Celebration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-bold text-xl">Victory Moments</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50">
              <Instagram className="w-4 h-4 mr-2" /> Follow us @ApexFC
            </Button>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to dominate the pitch?</h2>
              <p className="text-white text-lg mb-0">
                Join over 500+ athletes training at the highest level. First session is on us.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-62.5">
              <Button variant="secondary" className="w-full py-4 text-lg">
                Register Now
              </Button>
              <div className="flex items-center justify-center gap-2 text-white text-sm font-medium">
                <Calendar className="w-4 h-4" /> Next intake: Sept 1st
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-white transition-colors">Junior Academy (6-10)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Elite Development (11-16)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Goalkeeper Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Summer Camps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coaching Staff</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
    </div>
  );
}
