
import React from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6" />
          <h1 className="text-xl font-bold m-0">BMI Insights</h1>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><a href="/#calculator" className="hover:text-accent transition-colors">Calculator</a></li>
            <li><a href="/#faq" className="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-primary p-4 shadow-lg">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-accent transition-colors block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="/#calculator" 
                  className="hover:text-accent transition-colors block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Calculator
                </a>
              </li>
              <li>
                <a 
                  href="/#faq" 
                  className="hover:text-accent transition-colors block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
