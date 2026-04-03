import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Button } from '../components/ui/Button';
import { MailCheck } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <PageLayout title="Message Sent" subtitle="We've received your inquiry.">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
            <MailCheck className="text-primary" size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">We'll be in touch</h3>
          <p className="text-on-surface-variant mb-8">Our sales team will get back to you within 24 hours.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Contact Sales" subtitle="Looking for a society-wide tie-up? Let's talk.">
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2">First Name</label>
            <input type="text" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Last Name</label>
            <input type="text" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Work Email</label>
          <input type="email" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Society / Company Name</label>
          <input type="text" className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Message</label>
          <textarea rows={4} className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all resize-none" required></textarea>
        </div>
        <Button size="lg" className="w-full mt-4">Send Message</Button>
      </form>
    </PageLayout>
  );
};
