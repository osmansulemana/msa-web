import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Schedule } from './pages/Schedule';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Modern Soccer Academy Website
 * A single-file React application with a focus on visual impact and modern UI trends.
 */

export default function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-msa-primary selection:text-white">
        <ScrollToTop />
        <Navbar isScrolled={isScrolled} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/schedules" element={<Schedule />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
