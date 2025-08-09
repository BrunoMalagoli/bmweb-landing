"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import {
  Code,
  Palette,
  BarChart3,
  Megaphone,
  Smartphone,
  Globe,
} from "lucide-react";

const services = {
  en: {
    title: "Our Services",
    subtitle: "Comprehensive web design and digital marketing solutions",
    items: [
      {
        icon: Code,
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies and best practices.",
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description:
          "Beautiful, intuitive user interfaces that enhance user experience and drive engagement.",
      },
      {
        icon: BarChart3,
        title: "Digital Analytics",
        description:
          "Data-driven insights to optimize your online presence and improve performance.",
      },
      {
        icon: Megaphone,
        title: "Digital Marketing",
        description:
          "Strategic marketing campaigns to increase brand awareness and drive conversions.",
      },
      {
        icon: Smartphone,
        title: "Mobile Optimization",
        description:
          "Responsive design and mobile-first approaches for optimal mobile experience.",
      },
      {
        icon: Globe,
        title: "SEO & SEM",
        description:
          "Search engine optimization and marketing to improve your online visibility.",
      },
    ],
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones integrales de diseño web y marketing digital",
    items: [
      {
        icon: Code,
        title: "Desarrollo Web",
        description:
          "Sitios web y aplicaciones personalizadas construidas con tecnologías modernas y mejores prácticas.",
      },
      {
        icon: Palette,
        title: "Diseño UI/UX",
        description:
          "Interfaces de usuario hermosas e intuitivas que mejoran la experiencia del usuario.",
      },
      {
        icon: BarChart3,
        title: "Analítica Digital",
        description:
          "Información basada en datos para optimizar tu presencia en línea y mejorar el rendimiento.",
      },
      {
        icon: Megaphone,
        title: "Marketing Digital",
        description:
          "Campañas de marketing estratégicas para aumentar el reconocimiento de marca.",
      },
      {
        icon: Smartphone,
        title: "Optimización Móvil",
        description:
          "Diseño responsivo y enfoques mobile-first para una experiencia móvil óptima.",
      },
      {
        icon: Globe,
        title: "SEO & SEM",
        description:
          "Optimización y marketing en motores de búsqueda para mejorar tu visibilidad en línea.",
      },
    ],
  },
};

export function ServicesSection() {
  const { language } = useLanguage();
  const content = services[language];

  return (
    <section 
      id="services" 
      className="py-24 section-bg-primary relative overflow-hidden"
    >
      {/* Optimized background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-48 h-48 bg-primary/6 rounded-full blur-3xl animate-gradient-pulse" />
        <div className="absolute bottom-1/3 left-1/6 w-32 h-32 bg-secondary/8 rounded-full blur-2xl animate-float-contained" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
