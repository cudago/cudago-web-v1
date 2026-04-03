import { motion } from 'motion/react';
import { ShieldCheck, Zap, ThumbsUp, User } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-tight mb-6">
            Trusted home help <br />
            <span className="text-secondary">in minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant mb-10 max-w-xl">
            Find verified maids, cooks & more — right in your society. The digital concierge for your modern home.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/waitlist">
              <Button size="lg">Join Waitlist</Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary" size={20} />
              <span className="text-sm font-semibold text-on-surface">Verified helpers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-primary" size={20} />
              <span className="text-sm font-semibold text-on-surface">Quick replacement</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="text-primary" size={20} />
              <span className="text-sm font-semibold text-on-surface">Rated by neighbors</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl -z-10" />
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA1vg_sqmDNsKwk7vaQV6GcJ0Dsxu1NbYqWRHuYYtuLMfekz_6Hq3_Ve60L-TQ7Ubbf_lQOcl6I9O-DIYDxJts1EQsCsrT4j3FC9bo3zUuL4rGImwzVQkHm55fo6aRN-uGd3-H6i1HgHGuZUsyutWT5piShi7S3fhahmGQFTWQVu258ogKO1g5tC7CqmFDE6Kcv1UuhNi2G9rEFpK6kfLazJUYjDpaMCXsxte77jW2zW0pAUZ5Uo7dksZXE7jDBxHkLBULQOK4u0k"
              alt="Professional cleaner"
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase">Now Booking</p>
                <p className="text-sm font-bold text-on-surface">Sunita M. just arrived at Kharadi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
