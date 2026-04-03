import { ReactNode } from 'react';
import { PolicyNavbar } from '../components/PolicyNavbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
  lastUpdated: string;
}

export const PolicyLayout = ({ title, children, lastUpdated }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen bg-surface">
      <PolicyNavbar />
      <main className="pt-40 md:pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-surface-container-high"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{title}</h1>
          <p className="text-on-surface-variant mb-12 font-medium">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-headline prose-p:text-on-surface-variant prose-p:leading-relaxed prose-li:text-on-surface-variant">
            {children}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
