import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { Button } from '../components/ui/Button';
import { CheckSquare, AlertCircle, Loader2 } from 'lucide-react';
import { storage, databases, ID, isAppwriteConfigured, appwriteConfig } from '../appwrite';

const getFriendlyRoleName = (roleParam: string): string => {
  if (!roleParam) return 'General Application';
  return roleParam
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const Apply = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get('role') || '';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      setFile(null);
      setFileError(null);
      return;
    }

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
          desiredRole: getFriendlyRoleName(roleParam),
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
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 text-red-800 rounded-2xl flex items-start gap-3 border border-red-200">
            <AlertCircle className="shrink-0 mt-0.5" size={20} />
            <div className="text-sm font-semibold">{error}</div>
          </div>
        )}

        <div>
          <label className="block text-sm font-bold mb-2">Role</label>
          <div className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low text-on-surface-variant font-semibold">
            {getFriendlyRoleName(roleParam)}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">LinkedIn Profile URL</label>
          <input 
            type="url" 
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/..." 
            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Portfolio / Personal Website (Optional)</label>
          <input 
            type="url" 
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="https://..." 
            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Resume / CV (PDF format, max 5MB)</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-container file:text-on-primary hover:file:bg-primary/20" 
            required 
          />
          {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full mt-4" 
          disabled={loading || !!fileError}
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
    </PageLayout>
  );
};

