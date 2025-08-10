"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and subtitle animations with staggered entrance
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (titleRef.current && subtitleRef.current) {
        // Set initial states with blur effect
        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          y: 30,
          filter: "blur(4px)",
          force3D: true,
        });

        // Simple and reliable title and subtitle animations
        headerTl
          .to(titleRef.current, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            force3D: true,
          })
          .to(
            subtitleRef.current,
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.6,
              ease: "power2.out",
              force3D: true,
            },
            "-=0.4"
          );
      }

      // Section entrance effect - subtle positioning above previous section
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current,
          {
            opacity: 0.8,
            transform: "translateY(20px) translateZ(0)",
          },
          {
            opacity: 1,
            transform: "translateY(0px) translateZ(0)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section 
      ref={sectionRef}
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
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {content.title}
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {content.subtitle}
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
