
import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold leading-tight">
            Body Mass Index: Your Guide to Health Insights
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Understand your BMI numbers, what they mean for your health, and discover personalized insights for women and men.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#calculator" 
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Calculate Your BMI Now
            </a>
            <a 
              href="#what-is-bmi" 
              className="inline-flex items-center justify-center bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
