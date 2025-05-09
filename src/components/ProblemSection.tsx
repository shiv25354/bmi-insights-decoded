
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Why BMI Matters for Your Health</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health Risks of Unmanaged Weight</h3>
                  <p className="text-muted-foreground">
                    Maintaining unhealthy weight levels significantly increases risks for heart disease, type 2 diabetes, stroke, and certain types of cancer. BMI provides an early warning system to help identify potential health issues before they become serious.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Confusion About Body Weight Standards</h3>
                  <p className="text-muted-foreground">
                    With conflicting information about ideal body weight, many people struggle to understand what's healthy for their specific age, gender, and body type. BMI provides a standardized starting point for weight assessment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="max-w-3xl mx-auto text-lg">
            Understanding your BMI is the first step toward taking control of your health. While not a perfect measurement, BMI serves as an important screening tool used by healthcare providers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
