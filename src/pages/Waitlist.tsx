import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Button } from '../components/ui/Button';
import { PartyPopper } from 'lucide-react';

export const Waitlist = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PageLayout title="You're on the list!" subtitle="Thanks for joining our early access waitlist.">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
            <PartyPopper className="text-primary" size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Welcome to the club</h3>
          <p className="text-on-surface-variant mb-8">We'll notify you as soon as Cudago is available in your society.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Join Early Access" subtitle="Be the first to experience elite home services in Kharadi.">
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Society Name</label>
          <input type="text" placeholder="e.g. Ganga Constella" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <Button size="lg" className="w-full mt-4">Join Waitlist</Button>
      </form>
    </PageLayout>
  );
};
