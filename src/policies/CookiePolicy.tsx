import { PolicyLayout } from './PolicyLayout';

export const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="April 2, 2024">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
        <p>
          We use cookies to understand how you use our website and to improve your experience. This includes keeping you logged in and remembering your preferences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
        <p>
          We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
        </p>
      </section>
    </PolicyLayout>
  );
};
