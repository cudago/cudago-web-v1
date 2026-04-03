import { PolicyLayout } from '../policies/PolicyLayout';
import { Download, FileText, Image as ImageIcon } from 'lucide-react';

export const PressKit = () => {
  return (
    <PolicyLayout title="Press Kit" lastUpdated="April 2, 2024">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Media Resources</h2>
        <p className="text-lg mb-8">
          Welcome to the Cudago Press Kit. Here you'll find our official brand assets, company overview, and high-resolution media for your stories.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Brand Assets', icon: <ImageIcon className="text-primary" />, desc: 'Logos, color palettes, and typography guidelines.', size: '12 MB' },
            { title: 'Company Fact Sheet', icon: <FileText className="text-primary" />, desc: 'Key stats, mission statement, and founder bios.', size: '2 MB' },
            { title: 'Product Screenshots', icon: <ImageIcon className="text-primary" />, desc: 'High-res images of the Cudago mobile and web app.', size: '45 MB' },
          ].map((item) => (
            <div key={item.title} className="bg-surface-container-low p-8 rounded-3xl border border-surface-container-high flex flex-col items-center text-center group hover:border-primary transition-all cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6">{item.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                <Download size={16} />
                Download {item.size}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">About Cudago</h2>
        <p className="mb-4">
          Cudago is a hyperlocal digital concierge platform that connects urban households with verified and trusted home service providers. Founded in 2024, we aim to solve the trust deficit in domestic services through technology and rigorous verification.
        </p>
        <p>
          Our first launch in Kharadi, Pune, marks the beginning of our journey to bring peace of mind to every society in India.
        </p>
      </section>

      <section className="bg-primary text-white p-12 rounded-[3rem] text-center">
        <h2 className="text-2xl font-bold mb-4">Press Inquiries</h2>
        <p className="mb-8 opacity-90">
          For interview requests, media inquiries, or additional information, please contact our PR team.
        </p>
        <div className="text-xl font-bold underline underline-offset-8">press@cudago.com</div>
      </section>
    </PolicyLayout>
  );
};
