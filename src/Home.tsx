import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { LaunchSection } from './components/LaunchSection';
import { CTA } from './components/CTA';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useIsApp } from './hooks/useIsApp';

export const Home = () => {
  const isApp = useIsApp();

  return (
    <div className="min-h-screen">
      {!isApp && <Navbar />}
      <main>
        <Hero />
        <Features />
        <Services />
        <LaunchSection />
        {/* <CTA /> */}
      </main>
      {!isApp && <Footer />}
    </div>
  );
};
