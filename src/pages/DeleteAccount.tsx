import { Link } from 'react-router-dom';
import { Mail, ShieldCheck, Smartphone, Trash2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { Button } from '../components/ui/Button';

export const DeleteAccount = () => {
  return (
    <PageLayout
      title="Delete Your Cudago Account"
      subtitle="Delete your Cudago account and associated personal data from the Cudago app, or request help by email."
    >
      <div className="space-y-10 text-on-surface-variant leading-relaxed">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center">
              <Trash2 size={22} />
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Delete your account in the app</h2>
          </div>
          <p>
            Cudago users can request account deletion directly from the Cudago app after signing in. This is the fastest
            way to delete your account because the request is made from your authenticated profile.
          </p>
          <ol className="list-decimal pl-6 mt-5 space-y-3">
            <li>Open the Cudago app and sign in to your account.</li>
            <li>Go to <span className="font-bold text-on-surface">Profile</span>.</li>
            <li>Scroll to the account and legal options.</li>
            <li>Tap <span className="font-bold text-on-surface">Request account deletion</span>.</li>
            <li>Read the confirmation message: deleting your account permanently deletes your Cudago account and data, and the action cannot be undone.</li>
            <li>Type your profile name when prompted, then tap <span className="font-bold text-on-surface">Delete account</span>.</li>
            <li>After deletion completes, the app signs you out.</li>
          </ol>
          <div className="mt-6 rounded-3xl bg-surface-container-low p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white text-primary flex items-center justify-center">
                <Smartphone size={20} />
              </div>
              <p className="font-bold text-on-surface">In-app path: Cudago app &gt; Profile &gt; Request account deletion &gt; Delete account</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-4">Email support option</h2>
          <p>
            If you cannot access the app, email us from the phone number or email address associated with your Cudago
            profile. Include your full name, registered phone number, registered email address, and whether you used the
            Cudago customer app or Cudago Partner app. Our support team may ask for limited verification information to
            confirm that the request belongs to you.
          </p>
          <a href="mailto:cudagoplatform@gmail.com?subject=Cudago%20Account%20Deletion%20Request">
            <Button size="lg" className="mt-6">
              <Mail size={20} className="mr-2" />
              Email Deletion Request
            </Button>
          </a>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center">
              <ShieldCheck size={22} />
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Data deleted</h2>
          </div>
          <p>
            After a verified deletion request, Cudago will delete or anonymize personal profile data that is no longer
            required to provide services or meet legal obligations. This may include your name, contact details, profile
            photo, saved addresses, app preferences, notification tokens, support profile details, and other account-level
            information associated with your Cudago profile.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-4">Data we may retain</h2>
          <p>
            Some records may be retained where required for legal, tax, accounting, security, fraud prevention, dispute
            handling, payment processing, provider verification, or service history obligations. These records may include
            booking history, invoices, transaction references, wallet or ledger records, refund records, KYC or verification
            records, support tickets, safety reports, and audit logs.
          </p>
          <p className="mt-4">
            Retained records are kept only for as long as necessary for the purpose they were retained. Transaction,
            accounting, tax, audit, fraud-prevention, and dispute records may be retained for up to 8 years where required
            or permitted by applicable law. After the retention period ends, records are deleted or anonymized.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-4">Processing time</h2>
          <p>
            We aim to respond to deletion requests within 7 business days. Once your request is verified, deletion or
            anonymization is usually completed within 30 days unless a longer period is required for legal, security,
            dispute, or compliance reasons.
          </p>
        </section>

        <section className="rounded-3xl bg-surface-container-low p-6">
          <h2 className="text-xl font-bold text-on-surface mb-3">Related policy</h2>
          <p>
            For more details about how Cudago collects, uses, and retains data, read our{' '}
            <Link to="/policies/privacy" className="font-bold text-primary underline underline-offset-4">
              Privacy Policy
            </Link>.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};
