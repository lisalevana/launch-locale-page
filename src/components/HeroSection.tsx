
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-agency-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-agency-secondary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-agency-dark leading-tight animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-agency-primary hover:bg-agency-secondary text-white rounded-full px-8 py-6 text-lg animate-scale-in"
            style={{animationDelay: '0.4s'}}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
