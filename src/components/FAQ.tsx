import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ = () => {
  const faqs = [
    {
      question: 'How do you verify the helpers?',
      answer: 'Every helper goes through a multi-point verification process including Aadhaar-linked background checks, local police verification, and a personal interview with our society liaison.',
    },
    {
      question: 'What if a helper cancels or doesn\'t show up?',
      answer: 'Our Quick Replacement policy ensures that a standby helper is assigned to your booking within 30-60 minutes if the original helper is unavailable.',
    },
    {
      question: 'Are the prices fixed?',
      answer: 'Yes, we have standardized pricing based on the service type and duration. You can see the full breakdown before you confirm your booking.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24" id="safety">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between font-bold text-lg"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
