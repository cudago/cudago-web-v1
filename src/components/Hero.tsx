import { motion } from 'motion/react';
import { CalendarCheck, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import cudagoUserHome from '../../images/cudago-user-home.png';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-tight mb-6">
            Home services, <br />
            <span className="text-secondary">made local</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant mb-10 max-w-xl">
            Cudago helps families book verified help for cleaning, cooking, repairs, caregiving, and everyday home needs.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#download">
              <Button size="lg">Download App</Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary" size={20} />
              <span className="text-sm font-semibold text-on-surface">Verified helpers</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck className="text-primary" size={20} />
              <span className="text-sm font-semibold text-on-surface">Simple booking</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={20} />
              <span className="text-sm font-semibold text-on-surface">Local coverage</span>
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
          <div className="relative mx-auto max-w-[19rem] rounded-[2.5rem] bg-on-surface p-3 shadow-2xl">
            <img
              src={cudagoUserHome}
              alt="Cudago app home screen"
              className="w-full rounded-[2rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
