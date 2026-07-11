import { motion } from 'motion/react';

import cleaningImg from '../../images/cleaning.jpg';
import cookingImg from '../../images/cooking.jpg';
import babysittingImg from '../../images/babysitting.jpg';
import elderlyCareImg from '../../images/elderly-care.jpg';
import houseCaretakerImg from '../../images/house-caretaker.jpg';
import laundryImg from '../../images/laundry.jpg';
import tutoringImg from '../../images/tutoring.jpg';
import personalTrainingImg from '../../images/personal-training.jpg';
import beautyImg from '../../images/beauty-and-grooming.jpg';

export const Services = () => {
  const services = [
    {
      title: 'Cleaning',
      image: cleaningImg,
      description: 'Routine home cleaning and deep cleaning support for apartments and family homes.',
    },
    {
      title: 'Cooking',
      image: cookingImg,
      description: 'Daily cooks and meal-prep help for busy households.',
    },
    {
      title: 'Child Care',
      image: babysittingImg,
      description: 'Trusted babysitters and nannies for active child support.',
    },
    {
      title: 'Elderly Care',
      image: elderlyCareImg,
      description: 'Empathetic caretakers for elder care, companionship, and daily assistance.',
    },
    {
      title: 'Laundry & Ironing',
      image: laundryImg,
      description: 'Professional wash, fold, and ironing services collected right at your door.',
    },
    {
      title: 'Beauty & Grooming',
      image: beautyImg,
      description: 'Salon services, haircuts, massages, and grooming at home.',
    },
    {
      title: 'Home Tutoring',
      image: tutoringImg,
      description: 'Qualified home tutors for school subjects and skill development.',
    },
    {
      title: 'House Caretaker',
      image: houseCaretakerImg,
      description: 'Security and caretaker support to keep your house safe.',
    },
    {
      title: 'Personal Training',
      image: personalTrainingImg,
      description: 'Fitness coaches and trainers for customized home workout sessions.',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight leading-tight font-headline">
            Our Services
          </h2>
          <p className="text-lg text-on-surface-variant font-medium">
            Practical help for the tasks that keep a home running.
          </p>
        </div>

        {/* Minimal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="flex gap-5 p-5 bg-white rounded-[2rem] border border-surface-container-low hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full items-start">
                
                {/* Minimal Rounded Thumbnail */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-surface-container-low shadow-sm">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold text-on-surface mb-1 group-hover:text-primary transition-colors font-headline">
                    {service.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
