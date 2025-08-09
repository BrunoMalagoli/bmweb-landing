"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/components/language-provider";
import { Star } from "lucide-react";

const testimonials = {
  en: {
    title: "What Our Clients Say",
    subtitle:
      "Don't just take our word for it - hear from our satisfied clients",
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        avatar: "SJ",
        rating: 5,
        text: "BMWEB transformed our online presence completely. Their team delivered a stunning website that perfectly represents our brand and has significantly increased our conversion rates.",
      },
      {
        name: "Michael Chen",
        role: "Marketing Director, GrowthCo",
        avatar: "MC",
        rating: 5,
        text: "The digital marketing campaign BMWEB created for us exceeded all expectations. We saw a 300% increase in leads within the first three months.",
      },
      {
        name: "Emily Rodriguez",
        role: "Founder, Creative Studio",
        avatar: "ER",
        rating: 5,
        text: "Working with BMWEB was a game-changer for our business. Their attention to detail and creative solutions helped us stand out in a competitive market.",
      },
      {
        name: "David Thompson",
        role: "E-commerce Manager, RetailPlus",
        avatar: "DT",
        rating: 5,
        text: "The e-commerce platform BMWEB built for us is not only beautiful but also highly functional. Our sales have increased by 150% since the launch.",
      },
      {
        name: "Lisa Wang",
        role: "Product Manager, InnovateLab",
        avatar: "LW",
        rating: 5,
        text: "BMWEB's expertise in UI/UX design helped us create an intuitive product that our users love. Their collaborative approach made the entire process smooth.",
      },
      {
        name: "Robert Garcia",
        role: "CEO, Digital Solutions",
        avatar: "RG",
        rating: 5,
        text: "The SEO and SEM strategies implemented by BMWEB have dramatically improved our search rankings and online visibility. Highly recommended!",
      },
    ],
  },
  es: {
    title: "Lo Que Dicen Nuestros Clientes",
    subtitle:
      "No solo tomes nuestra palabra - escucha de nuestros clientes satisfechos",
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        avatar: "SJ",
        rating: 5,
        text: "BMWEB transformó completamente nuestra presencia en línea. Su equipo entregó un sitio web impresionante que representa perfectamente nuestra marca y ha aumentado significativamente nuestras tasas de conversión.",
      },
      {
        name: "Michael Chen",
        role: "Director de Marketing, GrowthCo",
        avatar: "MC",
        rating: 5,
        text: "La campaña de marketing digital que BMWEB creó para nosotros superó todas las expectativas. Vimos un aumento del 300% en leads en los primeros tres meses.",
      },
      {
        name: "Emily Rodriguez",
        role: "Fundadora, Creative Studio",
        avatar: "ER",
        rating: 5,
        text: "Trabajar con BMWEB fue un cambio de juego para nuestro negocio. Su atención al detalle y soluciones creativas nos ayudaron a destacar en un mercado competitivo.",
      },
      {
        name: "David Thompson",
        role: "Gerente de E-commerce, RetailPlus",
        avatar: "DT",
        rating: 5,
        text: "La plataforma de e-commerce que BMWEB construyó para nosotros no solo es hermosa sino también altamente funcional. Nuestras ventas han aumentado un 150% desde el lanzamiento.",
      },
      {
        name: "Lisa Wang",
        role: "Gerente de Producto, InnovateLab",
        avatar: "LW",
        rating: 5,
        text: "La experiencia de BMWEB en diseño UI/UX nos ayudó a crear un producto intuitivo que nuestros usuarios aman. Su enfoque colaborativo hizo que todo el proceso fuera fluido.",
      },
      {
        name: "Robert Garcia",
        role: "CEO, Digital Solutions",
        avatar: "RG",
        rating: 5,
        text: "Las estrategias de SEO y SEM implementadas por BMWEB han mejorado dramáticamente nuestros rankings de búsqueda y visibilidad en línea. ¡Altamente recomendado!",
      },
    ],
  },
};

export function TestimonialsSection() {
  const { language } = useLanguage();
  const content = testimonials[language];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed italic">
                  "{testimonial.text}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
