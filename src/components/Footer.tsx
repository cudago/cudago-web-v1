import { Mail, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low rounded-t-[3rem] md:rounded-t-[5rem] mt-20 border-t border-surface-container-high">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-surface-container-high">
          {/* Brand & Description Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="text-2xl font-bold text-primary font-headline block">
              Cudago
            </Link>
            <p className="text-on-surface-variant text-sm md:text-base max-w-sm leading-relaxed">
              Redefining how urban households manage daily needs with a trusted hyperlocal concierge for all your home services.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white border border-surface-container-high transition-all cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white border border-surface-container-high transition-all cursor-pointer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:cudagoplatform@gmail.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white border border-surface-container-high transition-all cursor-pointer"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1: Company */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/company/careers" className="text-on-surface-variant hover:text-primary transition-all font-medium">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-on-surface-variant hover:text-primary transition-all font-medium">
                  Agency Partnerships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-all font-medium">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Support */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Legal & Security</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/policies/terms" className="text-on-surface-variant hover:text-primary transition-all font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="text-on-surface-variant hover:text-primary transition-all font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/app/user/delete-account" className="text-on-surface-variant hover:text-primary transition-all font-medium">
                  Delete Account Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright / local tagline row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-on-surface-variant font-medium">
          <p>© 2026 Cudago. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Home services made local. Built with 🧡 in Pune.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
