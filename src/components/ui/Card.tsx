import { ReactNode, HTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className = '', hoverEffect = true, ...props }: CardProps) => {
  return (
    <motion.div
      initial={hoverEffect ? { y: 0 } : false}
      whileHover={hoverEffect ? { y: -8 } : false}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-transparent hover:border-primary/5 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

