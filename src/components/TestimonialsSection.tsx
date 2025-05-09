
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-primary/10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="italic mb-4 text-muted-foreground">"{testimonial.quote}"</blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    stars: 5,
    quote: "This BMI calculator and guide helped me understand my health better than any other resource I've found online.",
    name: "Sarah Johnson",
    title: "Fitness Enthusiast"
  },
  {
    stars: 5,
    quote: "I appreciate how this site explains the limitations of BMI while still making it useful for general health assessment.",
    name: "Dr. Michael Chen",
    title: "Healthcare Professional"
  },
  {
    stars: 4,
    quote: "The personalized recommendations based on my BMI calculation were genuinely helpful and practical.",
    name: "Thomas Wilson",
    title: "Weight Management Journey"
  }
];

const trustBadges = [
  "Evidence Based",
  "Healthcare Approved",
  "100,000+ Users",
  "Privacy Protected"
];

export default TestimonialsSection;
