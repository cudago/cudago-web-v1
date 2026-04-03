import { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, HeartHandshake, Car, ChevronLeft, ChevronRight } from 'lucide-react';
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
      title: 'Maid & Cleaning',
      description: 'Daily cleaning, deep cleaning, and household chores managed by verified professionals.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400',
    },
    {
      icon: <Utensils className="text-primary" size={32} />,
      title: 'Gourmet Cooks',
      description: 'Experienced cooks who can prepare healthy, delicious meals tailored to your dietary needs.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400',
    },
    {
      icon: <HeartHandshake className="text-primary" size={32} />,
      title: 'Elderly Support',
      description: 'Compassionate and trained caregivers to assist your elderly loved ones with daily activities.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400',
    },
    {
      icon: <Car className="text-primary" size={32} />,
      title: 'Drivers',
      description: 'Reliable and background-checked drivers for your daily commute or special trips.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400',
    },
    {
      icon: <Sparkles className="text-primary" size={32} />,
      title: 'Babysitting',
      description: 'Trusted and experienced babysitters to take care of your little ones while you work or relax.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400',
    }
  ];

  return (
    <section id="services" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-on-surface-variant">
              Everything you need to run your home smoothly, provided by trusted professionals from your community.
            </p>
          </div>
          <div className="flex gap-3 hidden sm:flex">
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[400px] snap-start flex-shrink-0"
            >
              <Card className="h-full overflow-hidden group border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-white shadow-sm">
                    {service.icon}
                  </div>
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
