
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 bg-primary/5">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        <ContentSection id="terms-intro" title="Introduction">
          <p>
            These terms and conditions govern your use of the BMI Insights website; by using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
          </p>
        </ContentSection>

        <ContentSection id="license" title="License to Use Website">
          <p>
            Unless otherwise stated, BMI Insights and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
          </p>
          <p className="mt-4">
            You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
          </p>
          <p className="mt-4">
            You must not:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Republish material from this website (including republication on another website)</li>
            <li>Sell, rent or sub-license material from the website</li>
            <li>Show any material from the website in public</li>
            <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose</li>
            <li>Edit or otherwise modify any material on the website</li>
            <li>Redistribute material from this website except for content specifically and expressly made available for redistribution</li>
          </ul>
        </ContentSection>

        <ContentSection id="acceptable-use" title="Acceptable Use">
          <p>
            You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
          </p>
          <p className="mt-4">
            You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
          </p>
        </ContentSection>

        <ContentSection id="limitation" title="Limitation of Liability">
          <p>
            Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from negligence; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; (c) limit any of our or your liabilities in any way that is not permitted under applicable law; or (d) exclude any of our or your liabilities that may not be excluded under applicable law.
          </p>
          <p className="mt-4">
            The limitations and exclusions of liability set out in this Section and elsewhere in these terms and conditions: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the terms and conditions or in relation to the subject matter of the terms and conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
          </p>
        </ContentSection>

        <ContentSection id="indemnity" title="Indemnity">
          <p>
            You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms and conditions.
          </p>
        </ContentSection>

        <ContentSection id="contact" title="Contact Us">
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@bmi-insights.com<br />
            Address: BMI Insights, Legal Department, 123 Health Street, Wellness City, 12345
          </p>
        </ContentSection>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
