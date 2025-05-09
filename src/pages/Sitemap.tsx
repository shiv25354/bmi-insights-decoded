
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Sitemap = () => {
  // Define the structure of our site
  const siteStructure = [
    {
      section: "Main Pages",
      links: [
        { title: "Home", path: "/" },
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Terms of Service", path: "/terms-of-service" },
        { title: "Medical Disclaimer", path: "/medical-disclaimer" },
      ]
    },
    {
      section: "BMI Information",
      links: [
        { title: "What is BMI", path: "/#what-is-bmi" },
        { title: "How BMI is Calculated", path: "/#how-bmi-calculated" },
        { title: "BMI Categories", path: "/#bmi-categories" },
        { title: "BMI Uses", path: "/#bmi-uses" },
        { title: "Health Implications", path: "/#health-implications" },
        { title: "BMI Limitations", path: "/#bmi-limitations" },
        { title: "Alternative Measures", path: "/#alternative-measures" },
      ]
    },
    {
      section: "Tools",
      links: [
        { title: "BMI Calculator", path: "/#calculator" },
      ]
    },
    {
      section: "Resources",
      links: [
        { title: "FAQ", path: "/#faq" },
        { title: "Top Picks", path: "/#top-picks" },
        { title: "Take Action", path: "/#take-action" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 bg-primary/5">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-4">Sitemap</h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Find all pages and sections of our website
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {siteStructure.map((section, index) => (
                <Card key={index} className="shadow-md">
                  <div className="bg-primary/5 border-b p-6">
                    <h2 className="text-2xl font-semibold">{section.section}</h2>
                  </div>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link 
                            to={link.path} 
                            className="text-primary hover:text-primary/80 hover:underline"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
