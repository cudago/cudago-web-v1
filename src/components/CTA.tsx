import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Get reliable help, without the hassle
        </h2>
        <p className="text-xl text-on-surface-variant mb-12">
          Join thousands of happy families in Kharadi making their lives simpler today.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/waitlist">
            <Button size="xl">Join Waitlist</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="xl">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
