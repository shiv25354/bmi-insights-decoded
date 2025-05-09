
import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-10 shadow-md">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6" />
          <h1 className="text-xl font-bold m-0">BMI Insights</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><a href="/#calculator" className="hover:text-accent transition-colors">Calculator</a></li>
            <li><a href="/#faq" className="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
