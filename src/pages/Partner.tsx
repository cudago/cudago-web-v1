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
  TrendingUp, 
  ShieldCheck, 
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ClipboardCheck,
  Check,
  User,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { databases, ID, isAppwriteConfigured, appwriteConfig } from '../appwrite';

interface PartnershipSubmission {
  agencyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
  status: string;
}

export const Partner = () => {
  // Form State
  const [agencyName, setAgencyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Submission State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Calculator State
  const [calcTeamSize, setCalcTeamSize] = useState(10);
  const [calcJobsPerDay, setCalcJobsPerDay] = useState(2);

  // Calculator Constants
  const AVG_JOB_VALUE = 450; // Average job ticket in INR
  const WORKING_DAYS = 26;   // Operational days per month
  const estimatedRevenue = calcTeamSize * calcJobsPerDay * AVG_JOB_VALUE * WORKING_DAYS;

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
      const submission: PartnershipSubmission = {
        agencyName,
        contactName,
        email,
        phone,
        message,
        status: 'submitted'
      };

      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.partnershipCollectionId,
        ID.unique(),
        submission
      );

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting partner inquiry:', err);
      setError(err?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <PolicyNavbar />
      
      <main className="pt-32 md:pt-36 pb-24 px-6 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-fixed border border-primary/10 text-primary font-bold text-sm mb-4"
          >
            <Building2 size={16} />
            <span>Agency Tie-up Program</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight font-headline"
          >
            Partner Your Agency With Cudago
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant font-medium leading-relaxed"
          >
            Get in touch with our team to discuss how to list your agency, receive consistent jobs for your crew, and manage your workforce.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sales Copy & Earnings Estimator */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Value Propositions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2.5">
                <Sparkles className="text-secondary" /> Grow With Cudago
              </h3>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-on-surface text-base mb-1">Increase Crew Utilization</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Keep your workers busy with steady local bookings. Reduce downtime and maximize your team's productivity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-on-surface text-base mb-1">Crew Management Console</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Once partnered, use our admin panel to easily dispatch jobs, view customer details, and track check-ins.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-on-surface text-base mb-1">Weekly Payouts</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Enjoy fast, secure payouts deposited directly into your bank account with complete booking details.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-surface-container-low p-6 md:p-8 rounded-[2.5rem] border border-surface-container-high shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <h4 className="text-xl font-extrabold text-primary mb-2 flex items-center gap-2">
                <ClipboardCheck className="text-secondary" size={20} />
                Partner Earnings Calculator
              </h4>
              <p className="text-xs text-on-surface-variant font-medium mb-6">
                Slide the values to estimate your monthly business potential on Cudago.
              </p>

              {/* Slider 1: Team Size */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm font-bold text-on-surface">
                  <span>Active Crew Size</span>
                  <span className="text-primary bg-primary-fixed px-2.5 py-0.5 rounded-full">{calcTeamSize} Workers</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5" 
                  value={calcTeamSize} 
                  onChange={(e) => setCalcTeamSize(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-surface-container-high accent-primary appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Average Jobs per day */}
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-sm font-bold text-on-surface">
                  <span>Daily Jobs per Worker</span>
                  <span className="text-primary bg-primary-fixed px-2.5 py-0.5 rounded-full">{calcJobsPerDay} Jobs</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="4" 
                  step="1" 
                  value={calcJobsPerDay} 
                  onChange={(e) => setCalcJobsPerDay(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-surface-container-high accent-primary appearance-none cursor-pointer"
                />
              </div>

              {/* Estimate Output */}
              <div className="bg-white p-5 rounded-2xl border border-surface-container-high text-center">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">
                  Est. Monthly Revenue Potential
                </span>
                <span className="text-3xl font-extrabold text-primary font-headline tracking-tight block">
                  ₹{estimatedRevenue.toLocaleString('en-IN')}
                </span>
              </div>
            </motion.div>

            {/* Local Trust Note */}
            <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 flex items-center gap-3">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <p className="text-xs font-bold text-primary-container leading-relaxed">
                Currently looking to connect with registered service agencies in Pune.
              </p>
            </div>

          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-sm border border-surface-container-high relative"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="partner-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-xl font-extrabold text-primary mb-2">Partner Inquiry Form</h2>
                      <p className="text-sm text-on-surface-variant font-medium">
                        Fill out your agency contact info below, and our business development team will contact you shortly.
                      </p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 rounded-2xl border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-2">
                        <AlertCircle className="flex-shrink-0" size={18} />
                        <span>{error}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Agency Name */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Building2 size={14} /> Agency / Company Name
                        </label>
                        <input 
                          type="text" 
                          value={agencyName}
                          onChange={(e) => setAgencyName(e.target.value)}
                          placeholder="e.g. Pune Cleaning Services"
                          className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                          required 
                        />
                      </div>

                      {/* Contact Person Name */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                          <User size={14} /> Contact Person Name
                        </label>
                        <input 
                          type="text" 
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                          required 
                        />
                      </div>

                      {/* Grid: Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Mail size={14} /> Business Email
                          </label>
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. contact@agency.com"
                            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                            required 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Phone size={14} /> Contact Phone Number
                          </label>
                          <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="10-digit number"
                            pattern="[0-9]{10}"
                            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all text-sm font-medium" 
                            required 
                          />
                        </div>
                      </div>

                      {/* Textarea: Message */}
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
                          <MessageSquare size={14} /> Message / Tell us about your services
                        </label>
                        <textarea 
                          rows={4} 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Please specify what services your agency offers, crew size, and any questions you have."
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
                            <span>Submit Partnership Inquiry</span>
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
                      Thank you for contacting us. We've received your partnership inquiry, and our operations team will get in touch with you within 24 hours.
                    </p>

                    <div className="bg-surface-container-low border border-surface-container-high rounded-3xl p-6 text-left max-w-md mx-auto mb-8 space-y-4">
                      <h4 className="font-bold text-on-surface text-sm flex items-center gap-2">
                        <Check className="text-primary" size={16} /> What happens next?
                      </h4>
                      <ul className="text-xs text-on-surface-variant space-y-2.5 font-medium">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">1.</span>
                          <span><strong>Review:</strong> Our business development managers will review your service types and location.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">2.</span>
                          <span><strong>Call:</strong> We will call you to discuss our partnership terms, ticket commissions, and scheduling.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">3.</span>
                          <span><strong>Tie-up:</strong> Complete a simple registration to get agency accounts and list your team.</span>
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
      
      <Footer />
    </div>
  );
};
