
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

// All translations go here
const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    pt: 'Início',
  },
  'nav.about': {
    en: 'About',
    pt: 'Sobre',
  },
  'nav.services': {
    en: 'Services',
    pt: 'Serviços',
  },
  'nav.contact': {
    en: 'Contact',
    pt: 'Contato',
  },
  
  // Hero Section
  'hero.title': {
    en: 'Creative Solutions for Modern Brands',
    pt: 'Soluções Criativas para Marcas Modernas',
  },
  'hero.subtitle': {
    en: 'We transform ideas into impactful advertising campaigns',
    pt: 'Transformamos ideias em campanhas publicitárias impactantes',
  },
  'hero.cta': {
    en: 'Get Started',
    pt: 'Começar',
  },

  // About Section
  'about.title': {
    en: 'About Us',
    pt: 'Sobre Nós',
  },
  'about.description': {
    en: 'We are a creative advertising agency focused on delivering impactful solutions for brands that want to stand out in their markets. With years of experience and a passionate team, we create campaigns that drive results.',
    pt: 'Somos uma agência de publicidade criativa focada em entregar soluções impactantes para marcas que querem se destacar em seus mercados. Com anos de experiência e uma equipe apaixonada, criamos campanhas que geram resultados.',
  },

  // Services Section
  'services.title': {
    en: 'Our Services',
    pt: 'Nossos Serviços',
  },
  'services.digital.title': {
    en: 'Digital Marketing',
    pt: 'Marketing Digital',
  },
  'services.digital.description': {
    en: 'Strategic campaigns across social media, search engines, and digital platforms to reach your target audience.',
    pt: 'Campanhas estratégicas em redes sociais, motores de busca e plataformas digitais para alcançar seu público-alvo.',
  },
  'services.branding.title': {
    en: 'Branding',
    pt: 'Branding',
  },
  'services.branding.description': {
    en: 'Complete brand identity development including logo design, visual language, and brand guidelines.',
    pt: 'Desenvolvimento completo de identidade de marca, incluindo design de logotipo, linguagem visual e diretrizes de marca.',
  },
  'services.creative.title': {
    en: 'Creative Content',
    pt: 'Conteúdo Criativo',
  },
  'services.creative.description': {
    en: 'Engaging content creation for all platforms, from social media posts to comprehensive advertising campaigns.',
    pt: 'Criação de conteúdo envolvente para todas as plataformas, desde posts em redes sociais até campanhas publicitárias abrangentes.',
  },

  // Contact Section
  'contact.title': {
    en: 'Contact Us',
    pt: 'Entre em Contato',
  },
  'contact.description': {
    en: 'Ready to elevate your brand? Reach out to us today.',
    pt: 'Pronto para elevar sua marca? Entre em contato conosco hoje.',
  },
  'contact.name': {
    en: 'Name',
    pt: 'Nome',
  },
  'contact.email': {
    en: 'Email',
    pt: 'Email',
  },
  'contact.message': {
    en: 'Message',
    pt: 'Mensagem',
  },
  'contact.submit': {
    en: 'Send Message',
    pt: 'Enviar Mensagem',
  },
  'contact.success': {
    en: 'Message sent successfully!',
    pt: 'Mensagem enviada com sucesso!',
  },

  // Footer
  'footer.rights': {
    en: 'All Rights Reserved',
    pt: 'Todos os Direitos Reservados',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
