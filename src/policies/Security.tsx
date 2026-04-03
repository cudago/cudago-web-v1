import { PolicyLayout } from './PolicyLayout';

export const Security = () => {
  return (
    <PolicyLayout title="Security" lastUpdated="April 2, 2024">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Our Commitment to Security</h2>
        <p>
          At Cudago, the security of your data and the safety of our community are our top priorities. We employ industry-standard security measures to protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Data Encryption</h2>
        <p>
          All data transmitted between your device and our servers is encrypted using Secure Socket Layer (SSL) technology.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Verification Process</h2>
        <p>
          Our multi-point verification process for service providers includes Aadhaar-linked background checks and local police verification to ensure a safe environment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Reporting Vulnerabilities</h2>
        <p>
          If you believe you have found a security vulnerability on Cudago, please contact our security team immediately at security@cudago.com.
        </p>
      </section>
    </PolicyLayout>
  );
};
