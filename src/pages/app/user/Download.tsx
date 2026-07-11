import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
import { PageLayout } from '../../../components/PageLayout';
import { Button } from '../../../components/ui/Button';

export const UserAppDownload = () => {
  return (
    <PageLayout title="Download the Cudago app" subtitle="Our mobile app is being prepared for public release.">
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
          <Smartphone className="text-primary" size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-4">App links coming soon</h3>
        <p className="text-on-surface-variant mb-8">
          Play Store and App Store links will be shared here as soon as Cudago is available for download.
        </p>
        <Link to="/#download">
          <Button size="lg">Download App</Button>
        </Link>
      </div>
    </PageLayout>
  );
};
