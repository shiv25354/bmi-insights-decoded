
import React from 'react';
import ContentSection from './ContentSection';

export const WhatIsBmi = () => (
  <ContentSection id="what-is-bmi" title="What is Body Mass Index (BMI)?">
    <ul className="list-disc pl-6 space-y-2">
      <li>BMI is a measure of weight relative to height.</li>
      <li>It is a calculated measure of a person's body weight (in kilograms) divided by the square of their height (in meters).</li>
      <li>BMI is a screening tool that healthcare providers use to estimate the amount of body fat using height and weight measurements.</li>
      <li>It is a quick, low-cost, and reliable screening measure.</li>
    </ul>
  </ContentSection>
);

export const HowBmiCalculated = () => (
  <ContentSection id="how-calculated" title="How is BMI Calculated?">
    <ul className="list-disc pl-6 space-y-2">
      <li>The formula is weight (kg) / height (m)².</li>
      <li>If using pounds and inches, a conversion factor of 703 is applied: (mass in lb / (height in inches)²) × 703.</li>
      <li>Calculators are available for both adults and children/teens.</li>
    </ul>
    <div className="mt-4 p-4 bg-primary/5 rounded-lg">
      <p className="font-medium">Formula Examples:</p>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        <div>
          <p className="font-semibold">Metric:</p>
          <p>Weight: 70 kg, Height: 170 cm (1.7 m)</p>
          <p>BMI = 70 / (1.7)² = 70 / 2.89 = 24.2</p>
        </div>
        <div>
          <p className="font-semibold">Imperial:</p>
          <p>Weight: 160 lb, Height: 5'8" (68 inches)</p>
          <p>BMI = (160 / 68²) × 703 = (160 / 4624) × 703 = 24.3</p>
        </div>
      </div>
    </div>
  </ContentSection>
);

export const BmiCategories = () => (
  <ContentSection id="categories" title="Understanding BMI Categories">
    <ul className="list-disc pl-6 space-y-2">
      <li>BMI values are often grouped into categories associated with health problems.</li>
      <li>For adults aged 20 years and older, standard categories (in kg/m²) are:</li>
    </ul>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="bmi-category underweight">
        <h4 className="font-bold">Underweight</h4>
        <p>Less than 18.5 kg/m²</p>
      </div>
      
      <div className="bmi-category normal">
        <h4 className="font-bold">Normal weight (Optimum range)</h4>
        <p>18.5 to 24.9 kg/m²</p>
      </div>
      
      <div className="bmi-category overweight">
        <h4 className="font-bold">Overweight</h4>
        <p>25 to 29.9 kg/m²</p>
        <p className="text-sm">People who are overweight have too much body weight for their height.</p>
      </div>
      
      <div className="bmi-category obesity">
        <h4 className="font-bold">Obesity</h4>
        <p>30 kg/m² or greater</p>
        <p className="text-sm">People who are obese almost always have a large amount of body fat in relation to their height.</p>
        <p className="text-sm font-medium mt-1">Can be further categorised into Class I (30-34.9), II (35-39.9), and III (≥40).</p>
      </div>
    </div>
    
    <ul className="list-disc pl-6 space-y-2 mt-4">
      <li>For children and teens aged 2 through 19 years, BMI is calculated the same way but compared to percentiles for others of the same age and sex, using growth charts.</li>
      <ul className="list-circle pl-6 space-y-1 mt-1">
        <li>Less than the 5th percentile is considered underweight.</li>
        <li>Between the 85th and 95th percentile is considered overweight.</li>
        <li>At or above the 95th percentile is considered obese.</li>
      </ul>
      <li>International variations exist in recommended cut-off points for categories, particularly for Asian populations, due to different associations between BMI, body fat, and health risks.</li>
    </ul>
  </ContentSection>
);

export const BmiUses = () => (
  <ContentSection id="uses" title="Uses and Applications of BMI">
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">For Individuals:</h3>
        <p>
          BMI is a screening measure to assess a person's weight relative to their height. It is one measure used by an individual and their healthcare provider to help determine chronic disease risk. Routine tracking of BMI over time is useful to detect weight changes and monitor risk for health problems.
        </p>
        <p>
          However, for a complete picture of an individual's health, BMI should be considered with other factors like medical history, health behaviours (diet, activity, sleep), physical exam findings (blood pressure, muscle mass), and laboratory findings (glucose, cholesterol).
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">For Population Health:</h3>
        <p>
          BMI is a valuable population health measure used worldwide for decades to assess trends and make comparisons across time, geographic areas, and groups of people. This data helps public health entities make decisions.
        </p>
      </div>
    </div>
  </ContentSection>
);

export const HealthImplications = () => (
  <ContentSection id="health-implications" title="Health Implications of BMI Categories">
    <ul className="list-disc pl-6 space-y-2">
      <li>While BMI alone doesn't diagnose health, certain categories are associated with health problems.</li>
      <li>
        If you have a BMI less than 18.5 (underweight), you may be at higher risk for malnutrition, anemia, weakened immune system, osteoporosis, and infertility.
      </li>
      <li>
        In general, the higher your BMI, the higher your risk for conditions such as:
      </li>
    </ul>
    
    <div className="grid md:grid-cols-3 gap-4 my-4">
      <div className="p-3 bg-rose-50 rounded-md">
        <ul className="list-disc pl-6 space-y-1">
          <li>Heart disease</li>
          <li>High blood pressure</li>
          <li>Type 2 diabetes</li>
        </ul>
      </div>
      <div className="p-3 bg-rose-50 rounded-md">
        <ul className="list-disc pl-6 space-y-1">
          <li>Gallstones</li>
          <li>Osteoarthritis</li>
          <li>Sleep apnea</li>
        </ul>
      </div>
      <div className="p-3 bg-rose-50 rounded-md">
        <ul className="list-disc pl-6 space-y-1">
          <li>Stroke</li>
          <li>Infertility</li>
          <li>Certain cancers</li>
        </ul>
      </div>
    </div>
    
    <ul className="list-disc pl-6 space-y-2">
      <li>BMIs under 20 and over 25 have been associated with higher all-cause mortality.</li>
    </ul>
  </ContentSection>
);

export const BmiLimitations = () => (
  <ContentSection id="limitations" title="Limitations of BMI">
    <ul className="list-disc pl-6 space-y-3">
      <li>
        BMI is a quick tool but isn't always an accurate measurement of body fatness and isn't the sole determiner of general health.
      </li>
      <li>
        BMI doesn't differentiate between lean body mass (muscle/bone) and fat mass. Muscular individuals (like athletes) can have a high BMI but low body fat.
      </li>
      <li>
        The same BMI chart is used for males and females, even though women typically have more body fat. There are also racial/ethnic differences in the relationship between BMI and health risks. The BMI was originally designed for European men.
      </li>
      <li>
        BMI doesn't measure the location or distribution of body fat, which is important as abdominal fat poses higher risks.
      </li>
      <li>
        The standard BMI chart should not be used to assess body fat for:
        <ul className="list-circle pl-6 space-y-1 mt-1">
          <li>Athletes and bodybuilders</li>
          <li>Children and teenagers (use percentiles instead)</li>
          <li>Pregnant women</li>
          <li>Anyone over 65</li>
          <li>People with muscle atrophy</li>
        </ul>
      </li>
      <li>
        The formula's use of squared height can mean taller people have misleadingly high BMIs compared to their body fat levels. It also fails to account for height loss due to ageing.
      </li>
      <li>
        The threshold for overweight and obese has varied over time. Some studies suggest the lowest mortality risk is in the BMI range of 23–29, indicating that a BMI up to 29 might not always be associated with higher risk.
      </li>
    </ul>
  </ContentSection>
);

export const AlternativeMeasures = () => (
  <ContentSection id="alternative-measures" title="BMI: Comparisons and Alternative Measures">
    <p className="mb-4">
      Given the limitations, other tools and measures are used alongside or as alternatives to BMI. These often provide a more complete picture of body composition or fat distribution:
    </p>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Waist Circumference</h3>
        <p>
          A good indicator of visceral fat, which poses more health risks than fat elsewhere. High waist circumference is associated with increased risk for type 2 diabetes, hypertension, and cardiovascular disease.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Waist-to-Height Ratio</h3>
        <p>
          Considered a better predictor of mortality and heart disease risk than BMI by some studies. Thresholds vary by age.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Waist-to-Hip Ratio</h3>
        <p>
          Also used, though found to be no better and more complicated than waist circumference alone.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Skinfold Thickness Measurements</h3>
        <p>
          Used to estimate body fat by measuring skin thickness with calipers.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">DEXA Scan (Dual-energy X-ray Absorptiometry)</h3>
        <p>
          Precisely measures body composition (fat, muscle, bone). It is accurate but expensive and not widely available.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Air Displacement Plethysmography (ADP)</h3>
        <p>
          Less often used, measures body volume.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Advanced Indices</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Corpulence Index: Uses height cubed in the denominator.</li>
          <li>New BMI: Uses height to the power of 2.5.</li>
          <li>BMI Prime: Ratio of actual BMI to the upper limit of optimal BMI range.</li>
          <li>Surface-based Body Shape Index (SBSI): Based on body surface area and other measures.</li>
          <li>Modified Body Mass Index (mBMI): Used in specific medical contexts.</li>
        </ul>
      </div>
    </div>
  </ContentSection>
);
