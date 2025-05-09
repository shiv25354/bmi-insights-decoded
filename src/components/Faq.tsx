
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What exactly is BMI?",
    answer: "BMI (Body Mass Index) is a measure of weight relative to height. It's calculated by dividing a person's weight in kilograms by the square of their height in meters. It's a screening tool that healthcare providers use to estimate the amount of body fat, providing a quick, low-cost, and reliable measure."
  },
  {
    question: "How do I calculate my BMI?",
    answer: "The BMI formula is weight (kg) / height (m)². If using pounds and inches, a conversion factor of 703 is applied: (weight in lb / (height in inches)²) × 703. You can use our calculator on this page for an easy calculation."
  },
  {
    question: "What do the different BMI categories mean?",
    answer: "For adults 20 years and older, BMI categories are: Underweight (less than 18.5), Normal weight (18.5 to 24.9), Overweight (25 to 29.9), and Obesity (30 or greater). Each category has different associated health risks."
  },
  {
    question: "Is BMI an accurate measure of health?",
    answer: "BMI is a screening tool, not a diagnostic measure. It has limitations as it doesn't differentiate between lean body mass and fat, doesn't account for sex or ethnic differences, and doesn't indicate where fat is distributed. It should be used alongside other health indicators."
  },
  {
    question: "Why is BMI still used if it has limitations?",
    answer: "Despite its limitations, BMI is still widely used because it's simple, quick, and cost-effective. It provides a standardized way to compare body weights across populations and track changes over time. It's valuable for population health assessments and as an initial screening tool."
  },
  {
    question: "What are the health risks associated with high or low BMI?",
    answer: "A low BMI (under 18.5) may indicate risks like malnutrition, anemia, weakened immune system, and osteoporosis. Higher BMIs are associated with increased risks of heart disease, high blood pressure, type 2 diabetes, gallstones, certain cancers, sleep apnea, and stroke."
  },
  {
    question: "Can I use the standard BMI for my child or teenager?",
    answer: "No, for children and teens (2-19 years), BMI is calculated the same way but compared to percentiles for others of the same age and sex using growth charts. The categories are defined differently than for adults."
  },
  {
    question: "What other measurements can I use besides BMI?",
    answer: "Alternative measurements include waist circumference, waist-to-height ratio, waist-to-hip ratio, skinfold thickness measurements, DEXA scans, air displacement plethysmography, and newer indices like the Surface-based Body Shape Index (SBSI) or the New BMI formula."
  }
];

const Faq = () => {
  return (
    <section id="faq" className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6">{item.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
