
import React from 'react';
import { Activity, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">BMI Insights</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted resource for understanding Body Mass Index and its implications for your health.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#calculator" className="hover:text-primary">BMI Calculator</a></li>
              <li><a href="#what-is-bmi" className="hover:text-primary">About BMI</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@bmi-insights.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>
                <div className="flex space-x-3 mt-4">
                  {["Twitter", "Facebook", "Instagram"].map(social => (
                    <a key={social} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                      <span className="sr-only">{social}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">BMI for Women</a></li>
              <li><a href="#" className="hover:text-primary">BMI for Men</a></li>
              <li><a href="#" className="hover:text-primary">BMI for Children</a></li>
              <li><a href="#" className="hover:text-primary">Health Calculators</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BMI Insights. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Cookie Policy</a>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-6">
            Information sourced from health organizations including CDC, NIH, NHLBI, and Cleveland Clinic. 
            This content is for informational purposes and not a substitute for medical advice.
          </p>
          
          <div className="flex justify-center items-center mt-6 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-rose-500" />
            <span>by Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
