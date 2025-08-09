"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { Users, Target, Award, Zap } from "lucide-react";

const about = {
  en: {
    title: "About BMWEB",
    subtitle:
      "We are passionate about creating exceptional digital experiences",
    description:
      "BMWEB is a leading web design and digital marketing agency dedicated to helping businesses thrive in the digital landscape. With years of experience and a team of creative professionals, we deliver innovative solutions that drive results.",
    stats: [
      {
        icon: Users,
        number: "500+",
        label: "Happy Clients",
      },
      {
        icon: Target,
        number: "1000+",
        label: "Projects Completed",
      },
      {
        icon: Award,
        number: "50+",
        label: "Awards Won",
      },
      {
        icon: Zap,
        number: "99%",
        label: "Client Satisfaction",
      },
    ],
    values: [
      {
        title: "Innovation",
        description:
          "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
      },
      {
        title: "Quality",
        description:
          "Every project is crafted with attention to detail and excellence in execution.",
      },
      {
        title: "Partnership",
        description:
          "We work closely with our clients to understand their needs and deliver tailored solutions.",
      },
    ],
  },
  es: {
    title: "Sobre BMWEB",
    subtitle:
      "Somos apasionados por crear experiencias digitales excepcionales",
    description:
      "BMWEB es una agencia líder de diseño web y marketing digital dedicada a ayudar a las empresas a prosperar en el panorama digital. Con años de experiencia y un equipo de profesionales creativos, entregamos soluciones innovadoras que generan resultados.",
    stats: [
      {
        icon: Users,
        number: "500+",
        label: "Clientes Felices",
      },
      {
        icon: Target,
        number: "1000+",
        label: "Proyectos Completados",
      },
      {
        icon: Award,
        number: "50+",
        label: "Premios Ganados",
      },
      {
        icon: Zap,
        number: "99%",
        label: "Satisfacción del Cliente",
      },
    ],
    values: [
      {
        title: "Innovación",
        description:
          "Nos mantenemos a la vanguardia con tecnologías de vanguardia y soluciones creativas.",
      },
      {
        title: "Calidad",
        description:
          "Cada proyecto se elabora con atención al detalle y excelencia en la ejecución.",
      },
      {
        title: "Asociación",
        description:
          "Trabajamos de cerca con nuestros clientes para entender sus necesidades y entregar soluciones personalizadas.",
      },
    ],
  },
};

export function AboutSection() {
  const { language } = useLanguage();
  const content = about[language];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {content.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
