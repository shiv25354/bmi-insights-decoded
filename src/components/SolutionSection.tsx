
import React from 'react';
import { Check } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">BMI Insights: Your Path to Understanding</h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
          Our comprehensive BMI guide helps you understand what your numbers mean and provides actionable insights tailored to your specific needs.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold text-center mb-6">BMI Interpretation for Different Groups</h3>
        <div className="overflow-x-auto rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Group</TableHead>
                <TableHead>Standard BMI</TableHead>
                <TableHead>Special Considerations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.group}</TableCell>
                  <TableCell>{row.standard}</TableCell>
                  <TableCell>{row.considerations}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Personalized Insights",
    description: "Understand your BMI in context of your age, gender, and body composition for more relevant health insights."
  },
  {
    title: "Clear Categories",
    description: "Our easy-to-understand BMI categories help you quickly assess where you stand and what it means for your health."
  },
  {
    title: "Action Steps",
    description: "Get practical, evidence-based recommendations for maintaining or improving your health based on your BMI results."
  },
];

const comparisonData = [
  {
    group: "Adult Women",
    standard: "18.5-24.9",
    considerations: "Women naturally have higher body fat percentages. Some health organizations suggest a slightly higher healthy BMI range (up to 25.5) may be appropriate."
  },
  {
    group: "Adult Men",
    standard: "18.5-24.9",
    considerations: "Men with significant muscle mass may have misleadingly high BMIs despite healthy body composition."
  },
  {
    group: "Older Adults (65+)",
    standard: "18.5-24.9",
    considerations: "Some research suggests a slightly higher BMI (23-30) may be protective in older adults."
  },
  {
    group: "Asian Populations",
    standard: "18.5-24.9",
    considerations: "WHO suggests lower thresholds may be appropriate: 23+ for overweight and 27.5+ for obesity due to different body compositions."
  },
  {
    group: "Athletes",
    standard: "18.5-24.9",
    considerations: "Standard BMI categories often inappropriate due to higher muscle mass. Alternative measurements recommended."
  },
];

export default SolutionSection;
