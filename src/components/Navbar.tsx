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

  // const navLinks = [
  //   { name: 'Services', href: isHome ? '#services' : '/#services' },
  //   { name: 'Download', href: isHome ? '#download' : '/#download' },
  // ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary font-headline">
          Cudago
        </Link>

        <div className="hidden md:block">
          <a href={isHome ? '#download' : '/#download'}>
            <Button size="md">Download App</Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};
