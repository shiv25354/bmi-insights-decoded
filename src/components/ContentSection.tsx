
import React from 'react';
import { Card } from '@/components/ui/card';

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ContentSection = ({ id, title, children }: ContentSectionProps) => {
  return (
    <section id={id} className="py-8">
      <div className="container">
        <h2>{title}</h2>
        <Card className="section-card">
          {children}
        </Card>
      </div>
    </section>
  );
};

export default ContentSection;
