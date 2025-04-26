
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-gradient-to-b from-agency-dark to-agency-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-agency-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-agency-tertiary/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 text-white leading-tight animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-agency-light/90">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-agency-light/90 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-6 text-lg animate-scale-in"
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
