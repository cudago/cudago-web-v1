import { PolicyLayout } from './PolicyLayout';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="June 27, 2026">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Scope</h2>
        <p>
          This Privacy Policy explains how Cudago collects, uses, discloses, stores, and protects information when you use the Cudago website, the Cudago customer app, and the Cudago Partner app. The customer app helps users discover, book, pay for, and manage home services. The partner app helps service providers manage jobs, availability, earnings, wallet activity, support, and verification.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
        <p>
          We collect account and profile information such as name, phone number, email address, profile photo, language preference, role, service preferences, saved addresses, society or locality details, and app settings. For providers, we may collect professional profile details such as service categories, availability, localities served, experience, ratings, bank account holder name, bank account number, and KYC status.
        </p>
        <p>
          We collect booking and transaction information such as selected services, questionnaire answers, booking address, schedule, recurring booking preferences, assigned provider, booking status, cancellation or refund details, wallet balance, ledger entries, payment order IDs, transaction references, invoices, and support records.
        </p>
        <p>
          We collect location information when you allow location access. In the customer app, location is used to check service availability, suggest or save addresses, and match bookings to service areas. In the provider app, location is used for nearby job matching, availability, check-in or service coordination, and service area operations.
        </p>
        <p>
          We collect photos, images, and files you choose to upload, including profile images, KYC identity documents, selfies for identity verification, and support attachments where available. We collect notification identifiers such as Firebase Cloud Messaging tokens so we can send booking, payment, wallet, support, and message updates.
        </p>
        <p>
          We may collect device, log, and usage information such as app version, operating system, device identifiers, crash or diagnostic data, IP address, timestamps, feature usage, and security events. We also collect support communications, chat messages, ticket details, ratings, reviews, and feedback you send through Cudago.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. How We Use Information</h2>
        <p>
          We use information to create and manage accounts, verify identity, provide customer and provider app functionality, process bookings, match users with providers, calculate pricing and service availability, process payments and refunds, maintain wallet and ledger records, send notifications, provide support, prevent fraud and misuse, comply with legal obligations, improve our services, and communicate important service updates.
        </p>
        <p>
          We use provider bank and wallet information to support payouts, withdrawals, earnings records, and related compliance checks. We use customer payment information to create and verify service payments, top-ups, refunds, and transaction history. Payment instruments may be processed by third-party payment providers such as Razorpay; Cudago does not intend to store full card, UPI, or banking credentials unless required for wallet, payout, compliance, or transaction records.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Sharing and Disclosure</h2>
        <p>
          We share information only as needed to operate Cudago. Customers and providers may receive limited booking-related information about each other, such as name, service details, schedule, location required to perform the booking, chat messages, ratings, and booking status. We may share information with payment processors, cloud hosting providers, authentication providers, notification providers, analytics or diagnostics providers, support tools, and other vendors who process information for us.
        </p>
        <p>
          We may disclose information if required by law, regulation, court order, government request, safety investigation, fraud prevention, rights enforcement, or to protect users, providers, Cudago, or the public. We do not sell personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Permissions</h2>
        <p>
          The apps may request permissions for location, notifications, camera or photo library access, internet access, and related platform capabilities. The customer app may request microphone or speech recognition related access if voice-enabled input is used. You can control many permissions through your device settings, but some features may not work without the required permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
        <p>
          We keep information for as long as needed to provide services, maintain booking and payment records, resolve disputes, support users and providers, meet tax, audit, legal, and compliance requirements, prevent fraud, and enforce our terms. KYC, payment, booking, wallet, and support records may be retained for longer where required for safety, compliance, accounting, or dispute resolution.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Your Choices and Account Deletion</h2>
        <p>
          You may update profile details in the app where supported. You can request account deletion through our{' '}
          <Link to="/delete-account" className="font-bold text-primary underline underline-offset-4">
            Delete Account page
          </Link>
          {' '}or by contacting support@cudago.in to request access, correction, deletion, or assistance with your information. Some records may be retained after deletion where legally required or necessary for completed transactions, fraud prevention, dispute handling, accounting, or compliance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Security</h2>
        <p>
          We use reasonable technical and organizational safeguards designed to protect information from unauthorized access, loss, misuse, alteration, or disclosure. No online service can be guaranteed to be completely secure, so you should keep your login credentials and device access secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">9. Children</h2>
        <p>
          Cudago is not intended for children. Users should use Cudago only if they are legally able to enter into a binding agreement or have appropriate guardian consent where applicable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised last updated date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
        <p>
          For privacy questions, account deletion help, or data requests, contact us at support@cudago.in.
        </p>
      </section>
    </PolicyLayout>
  );
};
