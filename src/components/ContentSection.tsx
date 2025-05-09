
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ContentSection = ({ id, title, children }: ContentSectionProps) => {
  return (
    <section id={id} className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <Card className="shadow-md">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContentSection;
