import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PolicyNavbar } from '../components/PolicyNavbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import {
  CheckSquare,
  AlertCircle,
  Loader2,
  UploadCloud,
  FileText,
  Trash2,
  ArrowLeft,
  User,
  Mail,
  Linkedin,
  Globe,
  Briefcase,
  ChevronDown,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { storage, databases, ID, isAppwriteConfigured, appwriteConfig } from '../appwrite';
import { JOBS, Job } from '../data/jobs';

const getFriendlyRoleName = (jobId: string): string => {
  const job = JOBS.find(j => j.id === jobId);
  return job ? job.title : 'General Application';
};

const GENERAL_JOB: Job = {
  id: 'general-application',
  title: 'General Application',
  location: 'Remote / Pune',
  type: 'Full-time / Internship',
  department: 'General',
  about: "Don't see an open role that perfectly matches your skills? Submit a general application. Tell us about your background, what you're passionate about, and how you think you can help Cudago grow.",
  responsibilities: [
    'Take initiative and show high ownership in your domain.',
    'Collaborate across team members to solve complex hyperlocal service problems.',
    'Learn fast, experiment, and adapt to early startup speeds.'
  ],
  requirements: [
    'Strong curiosity and a builder mentality.',
    'Excellent communication and collaboration skills.',
    'A desire to create positive real-world impact for service providers and users.'
  ],
  benefits: [
    'Competitive compensation & flexible environment',
    'Mentorship from experienced founders',
    'Opportunity to shape a product from the ground up'
  ]
};

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const Apply = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobIdParam = searchParams.get('jobId') || 'general-application';

  const [selectedRoleId, setSelectedRoleId] = useState(jobIdParam);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Keep search params in sync if role is selected on careers page or changed via dropdown
  useEffect(() => {
    const currentJobId = searchParams.get('jobId') || 'general-application';
    setSelectedRoleId(currentJobId);
  }, [searchParams]);

  const handleRoleChange = (newJobId: string) => {
    setSelectedRoleId(newJobId);
    setSearchParams({ jobId: newJobId });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    if (selectedFile.type !== 'application/pdf') {
      setFileError('Please upload a PDF file.');
      setFile(null);
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileError('File size must be less than 5MB.');
      setFile(null);
      return;
    }

    setFileError(null);
    setFile(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError('Please upload your resume.');
      return;
    }

    if (!isAppwriteConfigured || !databases || !storage) {
      setError(
        'Appwrite configuration is missing. Please provide your Appwrite credentials in the `.env` file at the root of the project.'
      );
      return;
    }

    setLoading(true);

    try {
      // 1. Upload file to Appwrite Storage
      const uploadedFile = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(),
        file
      );

      // 2. Get file view URL
      const resumeUrl = storage.getFileView(appwriteConfig.bucketId, uploadedFile.$id).toString();

      // 3. Add document to Appwrite DB
      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collectionId,
        ID.unique(),
        {
          desiredRole: getFriendlyRoleName(selectedRoleId),
          name,
          email,
          linkedinProfile: linkedin,
          portfolio: portfolio || null,
          resumeUrl,
          applicationStatus: 'submitted'
        }
      );

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting application:', err);
      setError(err?.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const selectedJob = JOBS.find((j) => j.id === selectedRoleId) || GENERAL_JOB;

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface flex flex-col">
        <PolicyNavbar />
        <main className="pt-40 md:pt-32 pb-20 px-6 flex-grow flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white p-8 md:p-12 rounded-[3rem] shadow-md border border-surface-container-high text-center"
          >
            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckSquare className="text-primary" size={40} />
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-4">Application Received!</h3>
            <p className="text-on-surface-variant font-medium mb-8 leading-relaxed">
              Thanks for applying to Cudago. We're reviewing your profile, and if your background matches our needs, our team will reach out shortly.
            </p>
            <Link to="/company/careers">
              <Button variant="outline" className="w-full">
                Back to Careers
              </Button>
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <PolicyNavbar />
      <main className="pt-40 md:pt-32 pb-20 px-6 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Description details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-5 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-surface-container-high space-y-6"
          >
            <div>
              <Link
                to="/company/careers"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline mb-6 group"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" /> Back to Careers
              </Link>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary-fixed text-primary mb-2 inline-block">
                {selectedJob.department}
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                {selectedJob.title}
              </h1>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium mt-2">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-primary" />
                  {selectedJob.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={14} className="text-secondary" />
                  {selectedJob.type}
                </span>
              </div>
            </div>

            <div className="border-t border-surface-container-high pt-6 space-y-6">
              <div>
                <h3 className="font-extrabold text-primary text-sm uppercase tracking-wider mb-2">About the Role</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  {selectedJob.about}
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-primary text-sm uppercase tracking-wider mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-on-surface-variant">
                      <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-extrabold text-primary text-sm uppercase tracking-wider mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-on-surface-variant">
                      <CheckCircle size={15} className="text-secondary mt-0.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-extrabold text-primary text-sm uppercase tracking-wider mb-3">Benefits</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.benefits.map((benefit, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant text-[11px] font-semibold border border-surface-container-high">
                      ✨ {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-surface-container-high"
          >
            <h2 className="text-2xl font-extrabold text-primary mb-2">Apply for this Position</h2>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
              Please fill out the form below. We will review your application and get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 text-red-800 rounded-2xl flex items-start gap-3 border border-red-200">
                  <AlertCircle className="shrink-0 mt-0.5" size={20} />
                  <div className="text-sm font-semibold">{error}</div>
                </div>
              )}

              {/* Role Select Dropdown */}
              <div>
                <label className="block text-sm font-bold mb-2">Applying for Role</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 animate-pulse" size={18} />
                  <select
                    value={selectedRoleId}
                    onChange={(e) => handleRoleChange(e.target.value)}
                    className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-on-surface font-semibold appearance-none cursor-pointer text-sm"
                  >
                    <option value="general-application">General Application</option>
                    {JOBS.map((j) => (
                      <option key={j.id} value={j.id}>{j.title}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 pointer-events-none" size={18} />
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={18} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-on-surface text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-on-surface text-sm"
                    required
                  />
                </div>
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label className="block text-sm font-bold mb-2">LinkedIn Profile URL</label>
                <div className="relative">
                  <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={18} />
                  <input
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-on-surface text-sm"
                    required
                  />
                </div>
              </div>

              {/* Portfolio / Personal Website */}
              <div>
                <label className="block text-sm font-bold mb-2">Portfolio / Website (Optional)</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={18} />
                  <input
                    type="url"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    placeholder="https://yourportfolio.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-on-surface text-sm"
                  />
                </div>
              </div>

              {/* Interactive Drag & Drop CV Upload */}
              <div>
                <label className="block text-sm font-bold mb-2">Resume / CV (PDF format, max 5MB)</label>
                {file ? (
                  /* File Selected Display Card */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between p-4 rounded-2xl border border-primary/30 bg-primary-fixed/20"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-primary/20 text-primary shrink-0">
                        <FileText size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-on-surface truncate">{file.name}</p>
                        <p className="text-xs text-on-surface-variant">{formatBytes(file.size)} • PDF</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-2 rounded-full hover:bg-red-50 text-on-surface-variant hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove resume"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ) : (
                  /* Drag & Drop File Zone */
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-primary bg-primary/5 scale-[0.99]'
                        : 'border-outline-variant bg-surface-container-low hover:bg-surface-container-high/50'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <UploadCloud
                      size={36}
                      className={`mb-3 transition-colors ${
                        dragActive ? 'text-primary animate-pulse' : 'text-on-surface-variant/70'
                      }`}
                    />
                    <p className="text-sm font-bold text-on-surface mb-1">
                      Drag & drop your resume here, or <span className="text-primary hover:underline">browse</span>
                    </p>
                    <p className="text-xs text-on-surface-variant">PDF format only, up to 5MB</p>
                  </div>
                )}
                {fileError && <p className="text-red-500 text-xs mt-1.5 font-semibold flex items-center gap-1"><AlertCircle size={14} />{fileError}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full mt-4"
                disabled={loading || !!fileError || !file}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    Submitting Application...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
