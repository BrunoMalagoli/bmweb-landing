"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

const heroContent = {
  en: {
    headline: "Enhancing your business experience",
    cta: "Start now",
  },
  es: {
    headline: "Mejorando tu experiencia empresarial",
    cta: "Comenzar ahora",
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <section id="home" className="relative h-screen w-full flex items-end">
      {/* Background div for unicorn.studio interactive element */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"
        aria-label="Interactive background for unicorn.studio integration"
      >
        {/* This div will be used for the unicorn.studio interactive element */}
      </div>

      {/* Content positioned at bottom left with proper spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight">
            {content.headline}
          </h1>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
