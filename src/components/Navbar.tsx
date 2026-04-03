import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'How it Works', href: isHome ? '#how-it-works' : '/#how-it-works' },
    { name: 'Safety', href: isHome ? '#safety' : '/#safety' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary font-headline">
          Cudago
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-all font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/waitlist">
            <Button size="md">Join Waitlist</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-t border-surface-container-high px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-on-surface-variant"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link to="/waitlist" onClick={() => setIsOpen(false)}>
            <Button size="lg" className="w-full">Join Waitlist</Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

