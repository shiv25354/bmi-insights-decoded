
import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">BMI Insights</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="mb-1">Information sourced from health organizations including CDC, NIH, NHLBI, and Cleveland Clinic.</p>
            <p>This content is for informational purposes and not a substitute for medical advice.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BMI Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
