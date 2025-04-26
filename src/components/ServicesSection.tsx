
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, PenTool, Film } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ComponentType<any>; 
  delay?: number;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll" style={{ transitionDelay: `${delay}ms` }}>
    <div className="bg-agency-light/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
      <Icon size={24} className="text-agency-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-agency-dark">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-agency-dark animate-on-scroll">
            {t('services.title')}
          </h2>
          <div className="w-16 h-1 bg-agency-primary mx-auto animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title={t('services.digital.title')}
            description={t('services.digital.description')}
            icon={Zap}
            delay={0}
          />
          <ServiceCard
            title={t('services.branding.title')}
            description={t('services.branding.description')}
            icon={PenTool}
            delay={150}
          />
          <ServiceCard
            title={t('services.creative.title')}
            description={t('services.creative.description')}
            icon={Film}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
