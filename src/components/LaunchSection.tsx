import { Rocket, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const LaunchSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary-container to-secondary rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <MapPin size={480} />
          </div>
          
          <div className="relative z-10 md:w-3/5">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
              <Rocket size={16} />
              LAUNCHING SOON
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Exclusive Launch in <span className="underline decoration-white/30">Kharadi, Pune</span>
            </h2>
            <p className="text-white/80 text-xl mb-10 leading-relaxed">
              We are starting with select premium societies in Kharadi. Be the first to experience elite home services with our Early Access pass.
            </p>
            <Link to="/waitlist">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-surface">
                Join Early Access
              </Button>
            </Link>
          </div>

          <div className="relative z-10 md:w-2/5 flex justify-center">
            <div className="bg-white p-4 rounded-[2rem] shadow-2xl rotate-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6z0hg7muyzt98bIQDH9DR64PaECmw6S9leBTi7SSgvo57ZQoiFvpZIUFViigngKNGu5LbhZLAKgAkiZHuH8O8wnJOrq35umnSwRhkkKWl5O_Y1QdOT1hrJsmzEAsl5GKvmaYzY9xOjmcVd1b5OOc7MKSrw3V5ytr1hxhTckIX4OZMrZVv3cdN6faEJ3urtlSfYSpiFjsCrGQQPZ3XbWv34hgRlEmCOkyK2jJrtJmb3K7o3p3i-mIEgPyTidgSWczLPaF-AL0DQIU"
                alt="Kharadi Map"
                className="w-64 h-80 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
