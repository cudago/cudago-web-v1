import { ShieldCheck, RefreshCw, MapPin, CreditCard } from 'lucide-react';
import { Card } from './ui/Card';

export const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: 'Verified providers',
      description: 'Service partners are checked before they are listed on Cudago.',
    },
    {
      icon: <RefreshCw className="text-primary" size={32} />,
      title: 'Managed bookings',
      description: 'Book, track, and manage home-service requests from one app.',
    },
    {
      icon: <MapPin className="text-primary" size={32} />,
      title: 'Local coverage',
      description: 'Built around neighborhoods, societies, and nearby service availability.',
    },
    {
      icon: <CreditCard className="text-primary" size={32} />,
      title: 'Clear pricing',
      description: 'See service details and pricing before confirming a request.',
    },
  ];

  return (
    <section id="safety" className="py-20 bg-surface-container-low rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Built for everyday reliability</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-8">
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
