import { About } from '../components/About';
import { Coaches } from '../components/Coaches';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Ticker } from '../components/Ticker';

export const Home = () => {
  return (
    <>
      <Hero />
      <Ticker variant="primary" />
      <Stats />
      <Programs />
      <About />
      <Ticker variant="dark" />
      <Coaches />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
};
