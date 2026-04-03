import { PolicyLayout } from '../policies/PolicyLayout';
import { Link } from 'react-router-dom';

export const Careers = () => {
  return (
    <PolicyLayout title="Join the Cudago Team" lastUpdated="April 2, 2024">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Building the Future of Hyperlocal Services</h2>
        <p className="text-lg mb-6">
          At Cudago, we're on a mission to redefine how urban households manage their daily needs. We're building a digital concierge that brings trust, reliability, and convenience to hyperlocal services.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-surface-container-low p-8 rounded-3xl border border-surface-container-high">
            <h3 className="text-xl font-bold mb-4 text-primary">Our Culture</h3>
            <p className="text-on-surface-variant">
              We value ownership, empathy, and speed. We're a small, high-impact team that believes in solving real-world problems with elegant technology.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-3xl border border-surface-container-high">
            <h3 className="text-xl font-bold mb-4 text-primary">Benefits</h3>
            <p className="text-on-surface-variant">
              Competitive compensation, flexible work hours, health insurance, and the opportunity to shape a product from the ground up.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Open Roles</h2>
        <div className="space-y-4">
          {[
            { title: 'Senior Product Designer', location: 'Remote / Pune', type: 'Full-time' },
            { title: 'Full Stack Engineer (React/Node)', location: 'Remote / Pune', type: 'Full-time' },
            { title: 'Operations Manager', location: 'Pune', type: 'Full-time' },
            { title: 'Customer Success Lead', location: 'Pune', type: 'Full-time' },
          ].map((role) => (
            <Link key={role.title} to="/apply" className="flex justify-between items-center p-6 bg-white border border-surface-container-high rounded-2xl hover:border-primary transition-all cursor-pointer group block">
              <div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{role.title}</h4>
                <p className="text-on-surface-variant text-sm">{role.location} • {role.type}</p>
              </div>
              <div className="text-primary font-bold">Apply →</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <p className="text-center text-on-surface-variant italic">
          Don't see a role that fits? Send your resume to <span className="text-primary font-bold">careers@cudago.com</span> and tell us how you can help.
        </p>
      </section>
    </PolicyLayout>
  );
};

