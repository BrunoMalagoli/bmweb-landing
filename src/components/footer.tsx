"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import {
  Globe,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";

const footer = {
  en: {
    company: {
      title: "BMWEB",
      description:
        "Leading web design and digital marketing agency dedicated to helping businesses thrive in the digital landscape.",
    },
    services: {
      title: "Services",
      items: [
        { name: "Web Development", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "Digital Marketing", href: "#services" },
        { name: "SEO & SEM", href: "#services" },
        { name: "Mobile Optimization", href: "#services" },
        { name: "E-commerce Solutions", href: "#services" },
      ],
    },
    company_links: {
      title: "Company",
      items: [
        { name: "About Us", href: "#about" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
    contact: {
      title: "Contact Info",
      address: "123 Digital Street, Tech City, TC 12345",
      phone: "+1 (555) 123-4567",
      email: "hello@bmweb.com",
    },
    newsletter: {
      title: "Stay Updated",
      description:
        "Subscribe to our newsletter for the latest insights and updates.",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    copyright: "© 2024 BMWEB. All rights reserved.",
    scrollToTop: "Back to top",
  },
  es: {
    company: {
      title: "BMWEB",
      description:
        "Agencia líder de diseño web y marketing digital dedicada a ayudar a las empresas a prosperar en el panorama digital.",
    },
    services: {
      title: "Servicios",
      items: [
        { name: "Desarrollo Web", href: "#services" },
        { name: "Diseño UI/UX", href: "#services" },
        { name: "Marketing Digital", href: "#services" },
        { name: "SEO & SEM", href: "#services" },
        { name: "Optimización Móvil", href: "#services" },
        { name: "Soluciones E-commerce", href: "#services" },
      ],
    },
    company_links: {
      title: "Empresa",
      items: [
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Testimonios", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contacto", href: "#contact" },
        { name: "Política de Privacidad", href: "#" },
        { name: "Términos de Servicio", href: "#" },
      ],
    },
    contact: {
      title: "Información de Contacto",
      address: "123 Calle Digital, Ciudad Tech, TC 12345",
      phone: "+1 (555) 123-4567",
      email: "hello@bmweb.com",
    },
    newsletter: {
      title: "Mantente Actualizado",
      description:
        "Suscríbete a nuestro boletín para las últimas noticias y actualizaciones.",
      placeholder: "Ingresa tu email",
      button: "Suscribirse",
    },
    copyright: "© 2024 BMWEB. Todos los derechos reservados.",
    scrollToTop: "Volver arriba",
  },
};

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const content = footer[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(
      language === "en"
        ? "Thank you for subscribing!"
        : "¡Gracias por suscribirte!"
    );
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {content.company.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {content.company.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {content.services.title}
            </h4>
            <ul className="space-y-2">
              {content.services.items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {content.company_links.title}
            </h4>
            <ul className="space-y-2">
              {content.company_links.items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                {content.contact.title}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    {content.contact.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    {content.contact.phone}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    {content.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {content.newsletter.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                {content.newsletter.description}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder={content.newsletter.placeholder}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <Button type="submit" size="sm" className="text-xs">
                  {content.newsletter.button}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">{content.copyright}</p>

          {/* Language & Theme Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "es")}
                className="bg-transparent text-sm text-muted-foreground border-none focus:outline-none focus:ring-0"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <select
                value={theme}
                onChange={(e) =>
                  setTheme(e.target.value as "light" | "dark" | "system")
                }
                className="bg-transparent text-sm text-muted-foreground border-none focus:outline-none focus:ring-0"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            {/* Scroll to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              {content.scrollToTop}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
