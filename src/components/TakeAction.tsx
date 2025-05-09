
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Apple, FileText } from 'lucide-react';

const TakeAction = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container">
        <h2 className="text-center">Taking Action: What Next?</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          BMI is just one tool to help assess your health. Here are some next steps to consider for maintaining a healthy lifestyle.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Talk to a Healthcare Provider</h3>
            <p className="text-muted-foreground">
              If you have concerns about your weight, BMI, or health risks, consult a healthcare professional for personalized advice.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Activity className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Physical Activity</h3>
            <p className="text-muted-foreground">
              Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity each week, plus muscle-strengthening activities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Apple className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Healthy Diet</h3>
            <p className="text-muted-foreground">
              Focus on balanced nutrition including fruits, vegetables, whole grains, lean proteins, and limited processed foods and added sugars.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Learn More About Healthy Weight
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
