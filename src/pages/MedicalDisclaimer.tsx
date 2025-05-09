
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';

const MedicalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 bg-primary/5">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-4">Medical Disclaimer</h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        <ContentSection id="disclaimer-intro" title="Important Notice">
          <p className="font-semibold text-lg">
            THE INFORMATION PROVIDED ON THIS WEBSITE IS NOT INTENDED AS A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.
          </p>
        </ContentSection>

        <ContentSection id="general-info" title="General Information Only">
          <p>
            The information provided on BMI Insights is designed to provide helpful information on the subjects discussed. This website is not meant to be used, nor should it be used, to diagnose or treat any medical condition. For diagnosis or treatment of any medical problem, consult your own physician.
          </p>
          <p className="mt-4">
            The publisher and creator of BMI Insights are not responsible for any specific health or allergy needs that may require medical supervision and are not liable for any damages or negative consequences from any treatment, action, application or preparation, to any person reading or following the information on this website.
          </p>
        </ContentSection>

        <ContentSection id="bmi-limitations" title="BMI Calculation Limitations">
          <p>
            Body Mass Index (BMI) is a screening measure and not a diagnostic tool. It is only one factor in determining health status and disease risk.
          </p>
          <p className="mt-4">
            BMI has several limitations:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>It does not distinguish between muscle mass and fat tissue</li>
            <li>It does not account for differences in body composition between different age groups</li>
            <li>It may not accurately reflect health risks for different ethnicities</li>
            <li>It may not be appropriate for athletes, pregnant women, or the elderly</li>
          </ul>
          <p className="mt-4">
            Always consult with a healthcare professional for a comprehensive assessment of your health status and appropriate medical advice.
          </p>
        </ContentSection>

        <ContentSection id="no-guarantees" title="No Guarantees">
          <p>
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website for any purpose.
          </p>
          <p className="mt-4">
            Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
        </ContentSection>

        <ContentSection id="consult-healthcare" title="Always Consult a Healthcare Professional">
          <p>
            Before starting any diet, exercise, or supplementation program, consult your physician to clear any medical or physical conditions you may have, and to receive full clearance and permission to engage in said practices.
          </p>
          <p className="mt-4">
            If you experience any pain or difficulty with these practices, stop and consult your healthcare provider. If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>
        </ContentSection>

        <ContentSection id="contact" title="Contact Us">
          <p>
            If you have any questions about this Medical Disclaimer, please contact us at:
          </p>
          <p className="mt-2">
            Email: medical@bmi-insights.com<br />
            Address: BMI Insights, Medical Department, 123 Health Street, Wellness City, 12345
          </p>
        </ContentSection>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalDisclaimer;
