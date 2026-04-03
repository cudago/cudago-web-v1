import { PolicyLayout } from './PolicyLayout';

export const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="April 2, 2024">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as your name, email address, phone number, and location data when you use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Sharing of Information</h2>
        <p>
          We may share your information with service providers who perform services on our behalf, or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
        <p>
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Your Choices</h2>
        <p>
          You may update or correct your account information at any time by logging into your account or contacting us.
        </p>
      </section>
    </PolicyLayout>
  );
};
