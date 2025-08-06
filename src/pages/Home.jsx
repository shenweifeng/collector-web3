import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TokenomicsSection from '../components/TokenomicsSection';
import PlatformSection from '../components/PlatformSection';
import BuildersSection from '../components/BuildersSection';
import RoadmapSection from '../components/RoadmapSection';
import PartnersSection from '../components/PartnersSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <HeroSection />
          <TokenomicsSection />
          <PlatformSection />
          <BuildersSection />
          <RoadmapSection />
          <PartnersSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}