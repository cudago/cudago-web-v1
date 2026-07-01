import { Mail, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 rounded-t-[3rem] md:rounded-t-[5rem] mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-primary font-headline mb-6 block">Cudago</Link>
          <p className="text-slate-500 mb-8 max-w-xs">
            A simple app for booking reliable home services.
          </p>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Instagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@cudago.com" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/company/careers" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Careers</Link></li>
            <li><Link to="/company/press" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Press Kit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="/policies/terms" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Terms of Service</Link></li>
            <li><Link to="/policies/privacy" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
            <li><Link to="/app/user/delete-account" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Delete Account</Link></li>
            <li><Link to="/policies/cookies" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Cookie Policy</Link></li>
            <li><Link to="/policies/security" className="text-slate-500 hover:text-primary hover:translate-x-1 inline-block transition-all">Security</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        © 2026 Cudago. Home services made local.
      </div>
    </footer>
  );
};
