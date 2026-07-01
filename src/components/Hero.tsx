import { motion } from 'motion/react';
import { CalendarCheck, MapPin, ShieldCheck, Sparkles, Utensils, Wrench } from 'lucide-react';
import { Button } from './ui/Button';

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
          <div className="relative mx-auto max-w-sm rounded-[2.5rem] bg-on-surface p-3 shadow-2xl">
            <div className="rounded-[2rem] bg-surface-container-lowest overflow-hidden">
              <div className="bg-primary px-6 pt-8 pb-6 text-white">
                <p className="text-sm font-semibold text-white/75">Cudago</p>
                <h2 className="text-3xl font-bold mt-2">What do you need today?</h2>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { icon: <Sparkles size={22} />, title: 'Cleaning', meta: 'Home and deep cleaning' },
                  { icon: <Utensils size={22} />, title: 'Cooking', meta: 'Daily meals and prep' },
                  { icon: <Wrench size={22} />, title: 'Repairs', meta: 'Fixes around the house' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-surface-container-high bg-surface p-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{item.title}</p>
                      <p className="text-sm text-on-surface-variant">{item.meta}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl bg-secondary-fixed p-4">
                  <p className="text-xs font-bold text-primary tracking-widest uppercase">Coming Soon</p>
                  <p className="mt-1 font-bold text-on-surface">Download links will be available here.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
