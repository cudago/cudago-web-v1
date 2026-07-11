import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { LaunchSection } from './components/LaunchSection';
import { CTA } from './components/CTA';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <LaunchSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
