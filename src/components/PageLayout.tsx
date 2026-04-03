import { ReactNode } from 'react';
import { PolicyNavbar } from './PolicyNavbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <PolicyNavbar />
      <main className="pt-40 md:pt-32 pb-20 px-6 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-surface-container-high"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{title}</h1>
          {subtitle && <p className="text-on-surface-variant mb-10 font-medium text-lg">{subtitle}</p>}
          
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
