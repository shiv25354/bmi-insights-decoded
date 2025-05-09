
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TopPicksSection from '@/components/TopPicksSection';
import BmiCalculator from '@/components/BmiCalculator';
import Footer from '@/components/Footer';
import { WhatIsBmi, HowBmiCalculated, BmiCategories, BmiUses, HealthImplications, BmiLimitations, AlternativeMeasures } from '@/components/BmiInfo';
import Faq from '@/components/Faq';
import TakeAction from '@/components/TakeAction';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <WhatIsBmi />
        <HowBmiCalculated />
        <BmiCalculator />
        <SolutionSection />
        <BmiCategories />
        <TopPicksSection />
        <BmiUses />
        <HealthImplications />
        <BmiLimitations />
        <AlternativeMeasures />
        <TestimonialsSection />
        <Faq />
        <TakeAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
