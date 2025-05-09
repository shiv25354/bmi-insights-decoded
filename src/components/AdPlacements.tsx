
import React from 'react';
import AdBanner from './AdBanner';

export const TopLeaderboard = () => (
  <div className="flex justify-center my-6 overflow-hidden">
    <AdBanner size="leaderboard" className="hidden md:flex" />
    <AdBanner size="mobile-leaderboard" className="md:hidden" />
  </div>
);

export const SideSkyscraper = () => (
  <div className="hidden lg:block">
    <AdBanner size="large-skyscraper" className="sticky top-24" />
  </div>
);

export const SideMediumRectangle = () => (
  <div className="hidden md:block lg:hidden my-6">
    <AdBanner size="medium-rectangle" />
  </div>
);

export const InContentBanner = () => (
  <div className="flex justify-center my-8 overflow-hidden">
    <AdBanner size="banner" className="hidden md:flex" />
    <AdBanner size="medium-rectangle" className="md:hidden" />
  </div>
);

export const WideSkyscraper = () => (
  <div className="hidden xl:block">
    <AdBanner size="wide-skyscraper" className="sticky top-24" />
  </div>
);
