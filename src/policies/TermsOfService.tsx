import { PolicyLayout } from './PolicyLayout';

export const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="April 2, 2024">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Cudago, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
        <p>
          Cudago provides a hyperlocal digital concierge platform connecting users with verified home service providers, including maids, cooks, and other domestic help.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
        <p>
          Users must provide accurate information when creating an account and are responsible for maintaining the confidentiality of their login credentials.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Service Provider Verification</h2>
        <p>
          While we perform background checks and verification, users are encouraged to exercise their own judgment when interacting with service providers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
        <p>
          Cudago shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
        </p>
      </section>
    </PolicyLayout>
  );
};
