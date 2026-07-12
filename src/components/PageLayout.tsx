import { ReactNode } from 'react';
import { PolicyNavbar } from './PolicyNavbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useIsApp } from '../hooks/useIsApp';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  useProse?: boolean;
  maxWidth?: string;
  children: ReactNode;
}

export const PageLayout = ({
  title,
  subtitle,
  lastUpdated,
  useProse,
  maxWidth,
  children,
}: PageLayoutProps) => {
  const isApp = useIsApp();

  return (
    <div className={`min-h-screen ${isApp ? 'bg-white' : 'bg-surface'} flex flex-col`}>
      {!isApp && <PolicyNavbar />}
      <main className={isApp ? 'pt-6 pb-6 px-4 flex-grow' : 'pt-40 md:pt-32 pb-20 px-6 flex-grow'}>
        <motion.div
          initial={{ opacity: 0, y: isApp ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mx-auto ${maxWidth || 'max-w-3xl'} ${
            isApp
              ? 'bg-transparent p-0 border-0 shadow-none'
              : 'bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-surface-container-high'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{title}</h1>
          
          {subtitle && (
            <p className="text-on-surface-variant mb-10 font-medium text-lg">{subtitle}</p>
          )}
          
          {lastUpdated && (
            <p className="text-on-surface-variant mb-12 font-medium">Last Updated: {lastUpdated}</p>
          )}
          
          {useProse ? (
            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-headline prose-p:text-on-surface-variant prose-p:leading-relaxed prose-li:text-on-surface-variant">
              {children}
            </div>
          ) : (
            children
          )}
        </motion.div>
      </main>
      {!isApp && <Footer />}
    </div>
  );
};

