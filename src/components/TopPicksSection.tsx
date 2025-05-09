
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TopPicksSection = () => {
  return (
    <section id="top-picks" className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Recommended BMI Resources</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="aspect-video rounded-md overflow-hidden mb-4 bg-muted">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                
                <div className="mt-auto space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Pros</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {resource.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-rose-600 mb-1">Cons</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {resource.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const resources = [
  {
    title: "BMI Guide for Women",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&auto=format&fit=crop",
    description: "A comprehensive guide to understanding BMI specifically for women across different life stages.",
    pros: [
      "Age-specific BMI recommendations",
      "Accounts for pregnancy and menopause",
      "Includes alternative measurements"
    ],
    cons: [
      "Limited discussion of muscle mass variations",
      "Could provide more ethnic-specific guidance"
    ]
  },
  {
    title: "Digital Body Composition Scale",
    image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=600&auto=format&fit=crop",
    description: "Smart scales that measure BMI along with body fat percentage, muscle mass, and other metrics.",
    pros: [
      "Multiple health measurements beyond BMI",
      "Smartphone app integration",
      "Tracks changes over time"
    ],
    cons: [
      "Higher cost than standard scales",
      "Accuracy can vary between models"
    ]
  },
  {
    title: "Professional Health Assessment",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&auto=format&fit=crop",
    description: "Consulting with healthcare professionals for comprehensive health assessments including BMI evaluation.",
    pros: [
      "Personalized health insights",
      "Medical-grade measurements",
      "Comprehensive health screening"
    ],
    cons: [
      "More expensive than self-assessment",
      "Requires scheduling appointments"
    ]
  }
];

export default TopPicksSection;
