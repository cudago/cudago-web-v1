import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export const PolicyNavbar = () => {
  const location = useLocation();
  const isPolicy = location.pathname.startsWith('/policies');
  const isCompany = location.pathname.startsWith('/company');
  const showLinks = isPolicy || isCompany;

  const policyLinks = [
    { name: 'Terms', path: '/policies/terms' },
    { name: 'Privacy', path: '/policies/privacy' },
    // { name: 'Cookies', path: '/policies/cookies' },
    // { name: 'Security', path: '/policies/security' },
  ];

  const companyLinks = [
    { name: 'Careers', path: '/company/careers' },
  ];

  const activeLinks = isPolicy ? policyLinks : isCompany ? companyLinks : [];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary font-headline">
            Cudago
          </Link>
          
          {showLinks && (
            <div className="hidden md:flex items-center bg-surface-container-low p-1 rounded-full border border-surface-container-high">
              {activeLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link key={link.path} to={link.path}>
                    <div className="relative px-4 py-1.5 text-sm font-medium transition-colors">
                      <span className={isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}>
                        {link.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <Link to="/">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 group text-on-surface-variant">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to Home</span>
          </Button>
        </Link>
      </div>

      {/* Mobile Switcher */}
      {showLinks && (
        <div className="md:hidden flex overflow-x-auto px-6 py-2 gap-4 border-t border-surface-container-high no-scrollbar">
          {activeLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`whitespace-nowrap text-sm font-medium px-3 py-1 rounded-full ${
                  isActive ? 'bg-primary text-white' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );

};

