import { About } from '../components/About';
import { Coaches } from '../components/Coaches';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <About />
      <Coaches />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
};
