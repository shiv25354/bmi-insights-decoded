
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { TopLeaderboard, SideSkyscraper, SideMediumRectangle, InContentBanner } from './AdPlacements';

interface StaticPageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({ 
  children, 
  title, 
  description 
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 bg-primary/5">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
            {description && (
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </section>

        <TopLeaderboard />

        <section className="py-12">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              <SideSkyscraper />
              
              <div className="flex-1">
                <article className="bg-white rounded-lg shadow-md p-6">
                  {children}
                </article>
                <InContentBanner />
              </div>
              
              <div className="lg:w-80">
                <SideMediumRectangle />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StaticPageLayout;
