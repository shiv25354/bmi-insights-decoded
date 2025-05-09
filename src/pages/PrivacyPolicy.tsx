
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 bg-primary/5">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        <ContentSection id="privacy-intro" title="Introduction">
          <p>
            At BMI Insights, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          <p>
            This website is not intended for children and we do not knowingly collect data relating to children.
          </p>
        </ContentSection>

        <ContentSection id="data-we-collect" title="The Data We Collect About You">
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            <li><strong>Health Data</strong> includes height, weight, and BMI calculations that you choose to enter into our calculator.</li>
          </ul>
          <p className="mt-4">
            We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data) unless you specifically choose to provide health information through our BMI calculator. Even in this case, the data is processed locally on your device and is not stored on our servers unless you explicitly choose to create an account and save your data.
          </p>
        </ContentSection>

        <ContentSection id="how-we-use" title="How We Use Your Personal Data">
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          <p className="mt-4">
            We do not rely on consent as a legal basis for processing your personal data except where explicitly requested, such as for sending direct marketing communications. You have the right to withdraw consent at any time by contacting us.
          </p>
        </ContentSection>

        <ContentSection id="cookies" title="Cookies">
          <p>
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </ContentSection>

        <ContentSection id="contact" title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@bmi-insights.com<br />
            Address: BMI Insights, Privacy Department, 123 Health Street, Wellness City, 12345
          </p>
        </ContentSection>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
