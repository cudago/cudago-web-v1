import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary font-headline">
          Cudago
        </Link>

        <div>
          <a href={isHome ? '#download' : '/#download'}>
            <Button size="md">Download App</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
