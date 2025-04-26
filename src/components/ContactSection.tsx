
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: `${formData.name}, ${formData.email}`,
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

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
    <section id="contact" ref={sectionRef} className="bg-agency-light/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-agency-dark animate-on-scroll">
              {t('contact.title')}
            </h2>
            <div className="w-16 h-1 bg-agency-primary mx-auto mb-6 animate-on-scroll"></div>
            <p className="text-lg text-gray-700 animate-on-scroll">
              {t('contact.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll">
            <div>
              <Input
                name="name"
                placeholder={t('contact.name')}
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white border-gray-200"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder={t('contact.email')}
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white border-gray-200"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-white border-gray-200 resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-agency-primary hover:bg-agency-secondary text-white py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? '...' : t('contact.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
