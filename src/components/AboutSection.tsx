
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="bg-agency-light/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-agency-dark animate-on-scroll">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1 bg-agency-primary mx-auto mb-8 animate-on-scroll"></div>
          <p className="text-lg text-gray-700 animate-on-scroll">
            {t('about.description')}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="text-4xl font-bold text-agency-primary">10+</div>
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="text-4xl font-bold text-agency-primary">250+</div>
              <div className="text-gray-600 mt-2">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="text-4xl font-bold text-agency-primary">100%</div>
              <div className="text-gray-600 mt-2">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
