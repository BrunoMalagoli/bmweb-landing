"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";

const faq = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our services",
    items: [
      {
        question: "What services does BMWEB offer?",
        answer:
          "BMWEB offers comprehensive web design and digital marketing services including custom website development, UI/UX design, digital marketing campaigns, SEO/SEM optimization, mobile app development, and e-commerce solutions.",
      },
      {
        question: "How long does it take to complete a website project?",
        answer:
          "The timeline varies depending on the project complexity. A simple website typically takes 2-4 weeks, while complex e-commerce platforms can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer:
          "Yes, we offer various maintenance and support packages to ensure your website continues to perform optimally. This includes regular updates, security monitoring, content updates, and technical support.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "Our pricing is project-based and depends on the scope, complexity, and specific requirements. We provide detailed quotes after understanding your needs. We also offer flexible payment plans for larger projects.",
      },
      {
        question: "Do you work with clients internationally?",
        answer:
          "Absolutely! We work with clients worldwide and have experience serving businesses in various industries and markets. We use modern communication tools to ensure smooth collaboration regardless of location.",
      },
      {
        question: "Can you help improve my existing website?",
        answer:
          "Yes, we can audit and improve your existing website. We'll analyze performance, user experience, SEO, and design to provide recommendations and implement improvements to enhance your online presence.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We use modern, industry-standard technologies including React, Next.js, Node.js, WordPress, Shopify, and various other frameworks and tools. We choose the best technology stack based on your specific project requirements.",
      },
      {
        question: "How do you ensure website security?",
        answer:
          "We implement industry best practices for website security including SSL certificates, regular security updates, secure hosting, data encryption, and compliance with security standards. We also provide security monitoring services.",
      },
    ],
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle:
      "Encuentra respuestas a preguntas comunes sobre nuestros servicios",
    items: [
      {
        question: "¿Qué servicios ofrece BMWEB?",
        answer:
          "BMWEB ofrece servicios integrales de diseño web y marketing digital incluyendo desarrollo de sitios web personalizados, diseño UI/UX, campañas de marketing digital, optimización SEO/SEM, desarrollo de aplicaciones móviles y soluciones de e-commerce.",
      },
      {
        question: "¿Cuánto tiempo toma completar un proyecto de sitio web?",
        answer:
          "El cronograma varía según la complejidad del proyecto. Un sitio web simple típicamente toma 2-4 semanas, mientras que plataformas de e-commerce complejas pueden tomar 8-12 semanas. Proporcionaremos un cronograma detallado durante nuestra consulta inicial.",
      },
      {
        question:
          "¿Proporcionan soporte continuo después de completar el proyecto?",
        answer:
          "Sí, ofrecemos varios paquetes de mantenimiento y soporte para asegurar que tu sitio web continúe funcionando de manera óptima. Esto incluye actualizaciones regulares, monitoreo de seguridad, actualizaciones de contenido y soporte técnico.",
      },
      {
        question: "¿Cuál es su estructura de precios?",
        answer:
          "Nuestros precios están basados en proyectos y dependen del alcance, complejidad y requisitos específicos. Proporcionamos cotizaciones detalladas después de entender tus necesidades. También ofrecemos planes de pago flexibles para proyectos más grandes.",
      },
      {
        question: "¿Trabajan con clientes internacionales?",
        answer:
          "¡Absolutamente! Trabajamos con clientes de todo el mundo y tenemos experiencia sirviendo a empresas en varias industrias y mercados. Usamos herramientas modernas de comunicación para asegurar una colaboración fluida independientemente de la ubicación.",
      },
      {
        question: "¿Pueden ayudar a mejorar mi sitio web existente?",
        answer:
          "Sí, podemos auditar y mejorar tu sitio web existente. Analizaremos el rendimiento, experiencia del usuario, SEO y diseño para proporcionar recomendaciones e implementar mejoras que mejoren tu presencia en línea.",
      },
      {
        question: "¿Qué tecnologías utilizan?",
        answer:
          "Usamos tecnologías modernas y estándares de la industria incluyendo React, Next.js, Node.js, WordPress, Shopify y varios otros frameworks y herramientas. Elegimos la mejor pila tecnológica basada en los requisitos específicos de tu proyecto.",
      },
      {
        question: "¿Cómo aseguran la seguridad del sitio web?",
        answer:
          "Implementamos las mejores prácticas de la industria para la seguridad del sitio web incluyendo certificados SSL, actualizaciones regulares de seguridad, hosting seguro, encriptación de datos y cumplimiento con estándares de seguridad. También proporcionamos servicios de monitoreo de seguridad.",
      },
    ],
  },
};

export function FAQSection() {
  const { language } = useLanguage();
  const content = faq[language];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {content.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
