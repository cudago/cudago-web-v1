import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { LaunchSection } from './components/LaunchSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Wait, I need to fix the imports in Home.tsx. 
// Actually, I'll just move the content of App.tsx to Home.tsx and update App.tsx to use Router.

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <HowItWorks />
        <LaunchSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

