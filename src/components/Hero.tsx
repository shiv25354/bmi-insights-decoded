
import React from 'react';

const Hero = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">Body Mass Index (BMI): Understanding, Calculation, Categories, and Health Implications</h1>
          <p className="text-lg opacity-90 mb-6">
            Learn everything about BMI, from basic calculations to health implications, limitations, 
            and alternative measurement approaches.
          </p>
          <a 
            href="#calculator" 
            className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Calculate Your BMI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
