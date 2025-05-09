
import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-10 shadow-md">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Activity className="h-6 w-6" />
          <h1 className="text-xl font-bold m-0">BMI Insights</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="#calculator" className="hover:text-accent transition-colors">Calculator</Link></li>
            <li><Link to="#faq" className="hover:text-accent transition-colors">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
