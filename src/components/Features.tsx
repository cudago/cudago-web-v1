import { ShieldCheck, RefreshCw, MapPin, CreditCard } from 'lucide-react';
import { Card } from './ui/Card';

export const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: 'Verified & Trusted',
      description: 'Background-checked helpers only, verified by local authorities and neighbors.',
    },
    {
      icon: <RefreshCw className="text-primary" size={32} />,
      title: 'Quick Replacement',
      description: "Help didn't show up? We provide a replacement in record time, guaranteed.",
    },
    {
      icon: <MapPin className="text-primary" size={32} />,
      title: 'Hyperlocal Edge',
      description: 'Most of our helpers are already working in your society or nearby area.',
    },
    {
      icon: <CreditCard className="text-primary" size={32} />,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise negotiations. Pay exactly what you see on the app.',
    },
  ];

  return (
    <section className="py-20 bg-surface-container-low rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Why neighbors trust Cudago</h2>
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
