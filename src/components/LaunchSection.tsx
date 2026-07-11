import { Apple, Play, Smartphone } from 'lucide-react';
import { Button } from './ui/Button';
import cudagoUserHome from '../../images/cudago-user-home.png';

export const LaunchSection = () => {
  return (
    <section className="py-24" id="download">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-container rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="relative z-10 md:w-3/5">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
              <Smartphone size={16} />
              APP RELEASE IN PROGRESS
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Download the Cudago app
            </h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              Our mobile app is being prepared for public release. App Store and Play Store links will appear here as soon as they are available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-surface">
                <Play size={20} className="mr-2" />
                Download App
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
                <Apple size={20} className="mr-2" />
                iOS Coming Soon
              </Button>
            </div>
          </div>

          <div className="relative z-10 md:w-2/5 flex justify-center">
            <div className="w-64 rounded-[2rem] bg-white p-3 shadow-2xl rotate-3">
              <img
                src={cudagoUserHome}
                alt="Cudago app home screen"
                className="w-full rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
