import React, { useState } from 'react';
import { PolicyNavbar } from '../components/PolicyNavbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  ArrowRight,
  Check,
  User,
  ChevronDown,
  Clock,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { databases, ID, isAppwriteConfigured, appwriteConfig } from '../appwrite';
import { useIsApp } from '../hooks/useIsApp';

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
}

export const Contact = () => {
  const isApp = useIsApp();
  // Form State
  const [generalName, setGeneralName] = useState('');
  const [generalEmail, setGeneralEmail] = useState('');
  const [generalPhone, setGeneralPhone] = useState('');
  const [generalSubject, setGeneralSubject] = useState('Support');
  const [generalMessage, setGeneralMessage] = useState('');

  // Submission State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isAppwriteConfigured || !databases) {
      // Simulate submission in local dev environment if Appwrite is not configured
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
      return;
    }

    setLoading(true);

    try {
      const submission: ContactSubmission = {
        name: generalName,
        email: generalEmail,
        phone: generalPhone || 'Not provided',
        subject: generalSubject,
        message: generalMessage,
        status: 'submitted'
      };

      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.contactCollectionId,
        ID.unique(),
        submission
      );

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting contact form:', err);
      setError(err?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${isApp ? 'bg-white' : 'bg-surface'} flex flex-col`}>
      {!isApp && <PolicyNavbar />}
      
      <main className={isApp ? "pt-6 pb-6 px-4 max-w-7xl mx-auto w-full flex-grow" : "pt-32 md:pt-36 pb-24 px-6 max-w-7xl mx-auto w-full flex-grow"}>
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed border border-primary/10 text-primary font-bold text-sm mb-4"
          >
            <Building2 size={16} />
            <span>Contact Cudago</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight font-headline"
          >
            Let's Get in Touch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant font-medium leading-relaxed"
          >
            Have questions about our services, need help with a booking, or want to share feedback? We are here to help.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Support details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2.5">
                <HelpCircle className="text-secondary" /> Customer Support
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Need help with a live service order, payment, or have suggestions for our platform? Get in touch with our helpdesk.
              </p>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-on-surface text-base mb-1">Email Support</h4>
                  <p className="text-sm text-on-surface-variant mb-1">Send us an email anytime and we will respond within 24 hours.</p>
                  <a href="mailto:support@cudago.com" className="text-sm text-primary font-bold hover:underline">
                    support@cudago.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-on-surface text-base mb-1">Operating Hours</h4>
                  <p className="text-sm text-on-surface-variant">Our support team is active from 8:00 AM to 8:00 PM, 7 days a week.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-on-surface text-base mb-1">Operations Office</h4>
                  <p className="text-sm text-on-surface-variant">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl border border-surface-container-high">
              <h4 className="font-bold text-on-surface text-sm mb-2">Looking for Careers?</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                Interested in joining our team in operations, design, or engineering? View our current openings.
              </p>
              <a href="/company/careers">
                <Button size="sm" variant="outline">View Careers</Button>
              </a>
            </div>
          </div>

          {/* Right Column: General Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`relative ${
                isApp 
                  ? 'bg-transparent p-0 border-0 shadow-none' 
                  : 'bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-surface-container-high'
              }`}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="general-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <h2 className="text-xl font-extrabold text-primary mb-1">Get in Touch</h2>
                      <p className="text-xs text-on-surface-variant font-semibold">
                        Send us a message and our support team will respond shortly.
                      </p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 rounded-2xl border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-2">
                        <AlertCircle className="flex-shrink-0" size={18} />
                        <span>{error}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                          <User size={13} /> Full Name
                        </label>
                        <input 
                          type="text" 
                          value={generalName}
                          onChange={(e) => setGeneralName(e.target.value)}
                          placeholder="e.g. Aditi Sharma"
                          className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                          required 
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Mail size={13} /> Email Address
                          </label>
                          <input 
                            type="email" 
                            value={generalEmail}
                            onChange={(e) => setGeneralEmail(e.target.value)}
                            placeholder="e.g. aditi@domain.com"
                            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Phone size={13} /> Phone Number (Optional)
                          </label>
                          <input 
                            type="tel" 
                            value={generalPhone}
                            onChange={(e) => setGeneralPhone(e.target.value)}
                            placeholder="10-digit number"
                            pattern="[0-9]{10}"
                            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                          Subject
                        </label>
                        <div className="relative">
                          <select 
                            value={generalSubject}
                            onChange={(e) => setGeneralSubject(e.target.value)}
                            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none appearance-none transition-all text-sm font-medium pr-10"
                          >
                            <option value="Support">Customer Support / Help</option>
                            <option value="Partnership">General Partnership Inquiry</option>
                            <option value="Feedback">Feedback & Suggestions</option>
                            <option value="Others">Others</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" size={16} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                          Your Message
                        </label>
                        <textarea 
                          rows={4} 
                          value={generalMessage}
                          onChange={(e) => setGeneralMessage(e.target.value)}
                          placeholder="Please write your inquiry details here."
                          className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium resize-none"
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full mt-4 flex items-center justify-center gap-2"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="animate-spin" size={18} />
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight size={18} />
                          </>
                        )}
                      </Button>

                    </form>
                  </motion.div>
                ) : (
                  /* Success View */
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner text-primary">
                      <CheckCircle2 size={40} />
                    </div>
                    
                    <h3 className="text-2xl font-extrabold text-primary mb-3">Message Sent!</h3>
                    <p className="text-on-surface-variant font-medium max-w-sm mx-auto mb-8 leading-relaxed text-sm">
                      Thank you for getting in touch. Your support ticket has been registered. Our helpdesk team will respond within 24 hours.
                    </p>

                    <div className="bg-surface-container-low border border-surface-container-high rounded-3xl p-6 text-left max-w-md mx-auto mb-8 space-y-4">
                      <h4 className="font-bold text-on-surface text-sm flex items-center gap-2">
                        <Check className="text-primary" size={16} /> What happens next?
                      </h4>
                      <ul className="text-xs text-on-surface-variant space-y-2.5 font-medium">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">1.</span>
                          <span><strong>Registration:</strong> Your inquiry is safely submitted to our team's dashboard.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">2.</span>
                          <span><strong>Review:</strong> An operations or support executive will review your message.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">3.</span>
                          <span><strong>Response:</strong> We will reach back out to you via Email or Phone call.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-center gap-4">
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Inquiry
                      </Button>
                      <a href="/">
                        <Button>Return Home</Button>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </main>
      
      {!isApp && <Footer />}
    </div>
  );
};
