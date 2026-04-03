import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Button } from '../components/ui/Button';
import { CheckSquare } from 'lucide-react';

export const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PageLayout title="Application Received" subtitle="Thanks for applying to Cudago!">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckSquare className="text-primary" size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">We're reviewing your profile</h3>
          <p className="text-on-surface-variant mb-8">If your background is a good match, our recruiting team will reach out shortly.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Apply Now" subtitle="Join us in building the future of hyperlocal services.">
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Role</label>
          <select className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required>
            <option value="">Select a role...</option>
            <option value="design">Senior Product Designer</option>
            <option value="engineering">Full Stack Engineer (React/Node)</option>
            <option value="ops">Operations Manager</option>
            <option value="success">Customer Success Lead</option>
            <option value="other">Other / General Application</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input type="text" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input type="email" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">LinkedIn Profile URL</label>
          <input type="url" placeholder="https://linkedin.com/in/..." className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Portfolio / Personal Website (Optional)</label>
          <input type="url" placeholder="https://..." className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" />
        </div>
        <Button size="lg" className="w-full mt-4">Submit Application</Button>
      </form>
    </PageLayout>
  );
};
