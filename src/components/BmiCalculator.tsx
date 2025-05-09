
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { AlertCircle } from 'lucide-react';

type BmiCategory = 'underweight' | 'normal' | 'overweight' | 'obesity' | 'extreme obesity' | null;

const BmiCalculator = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [heightFt, setHeightFt] = useState<number | ''>('');
  const [heightIn, setHeightIn] = useState<number | ''>('');
  const [weightLbs, setWeightLbs] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<BmiCategory>(null);

  // BMI Chart data
  const bmiData = [
    { name: 'Underweight', value: 16, fill: '#3B82F6' },
    { name: 'Normal', value: 18.5, fill: '#10B981' },
    { name: 'Overweight', value: 25, fill: '#FBBF24' },
    { name: 'Obesity', value: 30, fill: '#F97316' },
    { name: 'Extreme', value: 35, fill: '#EF4444' },
    { name: 'Extreme', value: 40, fill: '#DC2626' }
  ];

  const calculateBmi = (unit: 'metric' | 'imperial') => {
    let bmiValue: number;
    
    if (unit === 'metric') {
      if (height && weight) {
        // Convert height from cm to m
        const heightInMeters = height / 100;
        bmiValue = weight / (heightInMeters * heightInMeters);
      } else {
        return;
      }
    } else {
      if (heightFt && weightLbs) {
        // Convert height to inches and calculate BMI with imperial formula
        const heightInches = (heightFt * 12) + (heightIn || 0);
        bmiValue = (weightLbs / (heightInches * heightInches)) * 703;
      } else {
        return;
      }
    }
    
    bmiValue = parseFloat(bmiValue.toFixed(1));
    setBmi(bmiValue);
    
    // Set BMI category
    if (bmiValue < 18.5) {
      setBmiCategory('underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBmiCategory('normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiCategory('overweight');
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setBmiCategory('obesity');
    } else {
      setBmiCategory('extreme obesity');
    }
  };

  const getCategoryDescription = () => {
    switch(bmiCategory) {
      case 'underweight':
        return "You may be at higher risk for malnutrition, anemia, weakened immune system, osteoporosis, and infertility.";
      case 'normal':
        return "Your BMI falls within the range considered healthy by most health organizations.";
      case 'overweight':
        return "You have excess body weight that may increase your risk for heart disease, high blood pressure, and type 2 diabetes.";
      case 'obesity':
        return "Having obesity can increase your risk for heart disease, stroke, type 2 diabetes, and certain cancers.";
      case 'extreme obesity':
        return "Extreme obesity significantly raises your risk for serious health problems and may require more intensive interventions.";
      default:
        return "";
    }
  };

  return (
    <section id="calculator" className="py-12">
      <div className="container">
        <h2 className="text-center mb-8">Calculate Your BMI</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>BMI Calculator</CardTitle>
              <CardDescription>
                Enter your height and weight to calculate your Body Mass Index
              </CardDescription>
            </CardHeader>
            
            <Tabs defaultValue="metric" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="metric">Metric</TabsTrigger>
                <TabsTrigger value="imperial">Imperial</TabsTrigger>
              </TabsList>
              
              <TabsContent value="metric" className="px-6">
                <div className="space-y-4 my-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="e.g., 170"
                      value={height}
                      onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : '')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="e.g., 70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : '')}
                    />
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <Button 
                    onClick={() => calculateBmi('metric')}
                    className="w-full"
                    disabled={!height || !weight}
                  >
                    Calculate
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="imperial" className="px-6">
                <div className="space-y-4 my-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="heightFt">Height (ft)</Label>
                      <Input
                        id="heightFt"
                        type="number"
                        placeholder="e.g., 5"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value ? parseFloat(e.target.value) : '')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="heightIn">Inches</Label>
                      <Input
                        id="heightIn"
                        type="number"
                        placeholder="e.g., 10"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value ? parseFloat(e.target.value) : '')}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weightLbs">Weight (lbs)</Label>
                    <Input
                      id="weightLbs"
                      type="number"
                      placeholder="e.g., 155"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value ? parseFloat(e.target.value) : '')}
                    />
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <Button 
                    onClick={() => calculateBmi('imperial')}
                    className="w-full"
                    disabled={!heightFt || !weightLbs}
                  >
                    Calculate
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            {bmi !== null && (
              <CardFooter className="flex flex-col">
                <div className={`p-4 rounded-md w-full text-center ${bmiCategory} animate-fade-in`}>
                  <p className="text-2xl font-bold mb-2">Your BMI: {bmi}</p>
                  <p className="font-medium capitalize">Category: {bmiCategory?.replace('-', ' ')}</p>
                  <p className="mt-2 text-sm">{getCategoryDescription()}</p>
                </div>
              </CardFooter>
            )}
          </Card>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-medium mb-4">BMI Categories</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bmiData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 40]} />
                  <Tooltip />
                  <Bar dataKey="value" name="BMI Range" />
                  {bmi !== null && (
                    <ReferenceLine y={bmi} stroke="#000" strokeWidth={2} strokeDasharray="3 3" label={{ value: `Your BMI: ${bmi}`, position: 'insideBottomRight' }} />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-sm">
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                <p>BMI is a screening tool and not a diagnostic measure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
