
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BmiCalculator from '@/components/BmiCalculator';
import Footer from '@/components/Footer';
import { WhatIsBmi, HowBmiCalculated, BmiCategories, BmiUses, HealthImplications, BmiLimitations, AlternativeMeasures } from '@/components/BmiInfo';
import Faq from '@/components/Faq';
import TakeAction from '@/components/TakeAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatIsBmi />
        <HowBmiCalculated />
        <BmiCalculator />
        <BmiCategories />
        <BmiUses />
        <HealthImplications />
        <BmiLimitations />
        <AlternativeMeasures />
        <Faq />
        <TakeAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
