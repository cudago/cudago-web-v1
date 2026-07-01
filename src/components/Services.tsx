import { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, HeartHandshake, Car, ChevronLeft, ChevronRight, Wrench } from 'lucide-react';
import { Card } from './ui/Card';

export const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Sparkles className="text-primary" size={32} />,
      title: 'Cleaning',
      description: 'Routine home cleaning and deep cleaning support for apartments and family homes.',
    },
    {
      icon: <Utensils className="text-primary" size={32} />,
      title: 'Cooking',
      description: 'Daily cooks and meal-prep help for busy households.',
    },
    {
      icon: <HeartHandshake className="text-primary" size={32} />,
      title: 'Care Support',
      description: 'Assistance for children, elders, and family members who need extra help at home.',
    },
    {
      icon: <Car className="text-primary" size={32} />,
      title: 'Drivers',
      description: 'Driver support for planned local commutes and household travel needs.',
    },
    {
      icon: <Wrench className="text-primary" size={32} />,
      title: 'Repairs',
      description: 'Plumbing, electrical, appliance, and other home maintenance requests.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-on-surface-variant">
              Practical help for the tasks that keep a home running.
            </p>
          </div>
          <div className="gap-3 hidden sm:flex">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[400px] snap-start flex-shrink-0"
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-32 rounded-2xl bg-primary-fixed flex items-center justify-center m-8 mb-0">
                  {service.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-on-surface">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
