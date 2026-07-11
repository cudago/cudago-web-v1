import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Cudago is getting ready for launch
        </h2>
        <p className="text-xl text-on-surface-variant mb-12">
          We are building a simpler way to book trusted home services from your phone.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#download">
            <Button size="xl">Download App</Button>
          </a>
          <Link to="/contact">
            <Button variant="outline" size="xl">Contact Support</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
