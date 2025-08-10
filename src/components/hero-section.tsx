"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useMemo, useRef, memo } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { Star, ArrowRight, Zap } from "lucide-react";

import { hyperspeedPresets } from "@/components/Hyperspeed/HyperSpeedPresets";

// Lazy load Hyperspeed for better initial load performance
const Hyperspeed = dynamic(() => import("@/components/Hyperspeed/Hyperspeed"), {
  loading: function HyperspeedLoading() {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />
    );
  },
});

const heroContent = {
  en: {
    eyebrow: "🚀 Trusted by 500+ Growing Businesses",
    eyebrowMobile: "🚀 500+ Growing Businesses",
    headline: "Your Business, Ready for Tomorrow — Today",
    description:
      "We create complete digital ecosystems: websites that convert, systems that automate, AI that powers your business, and branding that differentiates.",
    cta: "Request free consultation",
    ctaSecondary: "View Case Studies",
    socialProof: {
      rating: "4.9/5",
      reviews: "200+ reviews",
      clients: "Join 500+ successful businesses",
    },
  },
  es: {
    eyebrow: "🚀 Confianza de 500+ Empresas en Crecimiento",
    eyebrowMobile: "🚀 500+ Empresas Exitosas",
    headline: "Tu negocio listo para mañana — hoy",
    description:
      "Creamos ecosistemas digitales completos: webs que convierten, sistemas que automatizan, IA que potencia tu negocio, y branding que diferencia.",
    cta: "Solicitar consultoría gratuita",
    ctaSecondary: "Ver Casos de Éxito",
    socialProof: {
      rating: "4.9/5",
      reviews: "200+ reseñas",
      clients: "Únete a 500+ empresas exitosas",
    },
  },
};

export const HeroSection = memo(function HeroSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  // Memoize content to prevent unnecessary re-renders
  const content = useMemo(() => heroContent[language], [language]);

  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hyperspeedOptions = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        ...hyperspeedPresets.one,
        colors: hyperspeedPresets.one.colors,
      };
    }

    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const themeColors = isDark
      ? {
          roadColor: 0x1a1a1a,
          islandColor: 0x0f0f0f,
          background: 0x000000,
          shoulderLines: 0x404040,
          brokenLines: 0x404040,
          leftCars: [0x60a5fa, 0x3b82f6, 0x2563eb],
          rightCars: [0x06b6d4, 0x0891b2, 0x0e7490],
          sticks: 0x06b6d4,
        }
      : {
          roadColor: 0xf8f8f8,
          islandColor: 0xe5e5e5,
          background: 0xffffff,
          shoulderLines: 0x888888,
          brokenLines: 0x888888,
          leftCars: [0x3b82f6, 0x1d4ed8, 0x1e40af],
          rightCars: [0x06b6d4, 0x0891b2, 0x0e7490],
          sticks: 0x06b6d4,
        };

    return {
      ...hyperspeedPresets.one,
      colors: themeColors,
    };
  }, [theme]);

  useEffect(() => {
    // GSAP animations for hero content
    if (
      eyebrowRef.current &&
      headlineRef.current &&
      descriptionRef.current &&
      ctaRef.current &&
      trustRef.current &&
      containerRef.current
    ) {
      const tl = gsap.timeline();

      // Split headline text into words for staggered animation
      const headline = headlineRef.current;
      const words = headline.textContent?.split(" ") || [];
      headline.innerHTML = words
        .map((word) => `<span class="inline-block">${word}</span>`)
        .join(" ");

      // Set initial states with GPU optimization
      gsap.set(
        [
          eyebrowRef.current,
          headline.children,
          descriptionRef.current,
          ctaRef.current,
          trustRef.current,
        ],
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
          force3D: true,
        }
      );

      // High-performance animation sequence
      tl
        // Eyebrow animation
        .to(eyebrowRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.out",
          force3D: true,
        })
        // Headline staggered animation
        .to(
          headline.children,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.3"
        )
        // Description animation
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.3"
        )
        // CTA buttons animation
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.2"
        )
        // Trust elements animation
        .to(
          trustRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.3"
        );

      // Enhanced CTA hover animations
      const primaryCTA = ctaRef.current?.querySelector("[data-primary-cta]");
      if (primaryCTA) {
        let hoverTween: gsap.core.Tween | null = null;

        const handleMouseEnter = () => {
          if (hoverTween) hoverTween.kill();
          hoverTween = gsap.to(primaryCTA, {
            scale: 1.05,
            y: -3,
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power2.out",
            force3D: true,
          });
        };

        const handleMouseLeave = () => {
          if (hoverTween) hoverTween.kill();
          hoverTween = gsap.to(primaryCTA, {
            scale: 1,
            y: 0,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
            force3D: true,
          });
        };

        primaryCTA.addEventListener("mouseenter", handleMouseEnter, {
          passive: true,
        });
        primaryCTA.addEventListener("mouseleave", handleMouseLeave, {
          passive: true,
        });
      }
    }

    // Load Unicorn Studio script only on desktop
    const loadUnicornStudio = () => {
      if (window.innerWidth >= 768) {
        if (!window.UnicornStudio) {
          window.UnicornStudio = { isInitialized: false };
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
          script.onload = function () {
            if (
              !window.UnicornStudio.isInitialized &&
              window.UnicornStudio.init
            ) {
              window.UnicornStudio.init();
              window.UnicornStudio.isInitialized = true;
            }
          };
          script.onerror = function () {
            console.error("Failed to load Unicorn Studio script");
          };
          (document.head || document.body).appendChild(script);
        }
      }
    };

    // Load on mount
    loadUnicornStudio();

    // Handle resize
    const handleResize = () => {
      loadUnicornStudio();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [content.headline]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-start overflow-hidden section-bg-neutral"
    >
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 w-full h-full">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Content positioned at top left with proper spacing */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32"
      >
        <div className="max-w-4xl space-y-8">
          {/* Eyebrow - Trust Signal */}
          <div ref={eyebrowRef} className="flex items-start gap-2">
            <Badge
              variant="secondary"
              className="text-xs sm:text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors px-2 py-1 sm:px-3 sm:py-1.5 max-w-full whitespace-normal leading-tight"
            >
              <Zap className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="break-words sm:hidden">
                {content.eyebrowMobile}
              </span>
              <span className="break-words hidden sm:inline">
                {content.eyebrow}
              </span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            {content.headline}
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Button
              data-primary-cta
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90 shadow-lg group transition-all duration-300"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto hover:bg-muted/50 transition-colors"
            >
              {content.ctaSecondary}
            </Button>
          </div>

          {/* Trust Elements */}
          <div ref={trustRef} className="space-y-6">
            {/* Social Proof Card */}
            <Card className="w-full sm:w-fit bg-background/80 backdrop-blur-sm border-muted/50">
              <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 p-3 sm:p-4">
                <div className="flex items-center gap-1 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 font-semibold text-xs sm:text-sm">
                    {content.socialProof.rating}
                  </span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-border" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {content.socialProof.reviews}
                </span>
                <div className="hidden sm:block h-4 w-px bg-border" />
                <span className="text-xs sm:text-sm font-medium leading-tight">
                  {content.socialProof.clients}
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});
