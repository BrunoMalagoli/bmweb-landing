"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useMemo, useRef, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

import { hyperspeedPresets } from "@/components/Hyperspeed/HyperSpeedPresets";

// Lazy load Hyperspeed for better initial load performance
const Hyperspeed = dynamic(() => import("@/components/Hyperspeed/Hyperspeed"), {
  loading: () => <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />
});

const heroContent = {
  en: {
    headline: "Your Business, Ready for Tomorrow — Today",
    cta: "Start now",
  },
  es: {
    headline: "Tu negocio listo para mañana — hoy",
    cta: "Comenzar ahora",
  },
};

export const HeroSection = memo(() => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  // Memoize content to prevent unnecessary re-renders
  const content = useMemo(() => heroContent[language], [language]);
  
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hyperspeedOptions = useMemo(() => {
    if (typeof window === 'undefined') {
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
    if (headlineRef.current && ctaRef.current && containerRef.current) {
      const tl = gsap.timeline();

      // Split headline text into words for staggered animation
      const headline = headlineRef.current;
      const words = headline.textContent?.split(' ') || [];
      headline.innerHTML = words
        .map(word => `<span class="inline-block">${word}</span>`)
        .join(' ');

      // Set initial states with GPU optimization
      gsap.set(headline.children, {
        opacity: 0,
        x: -60,
        filter: "blur(10px)",
        force3D: true,
        transformOrigin: "left center",
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 20,
        force3D: true,
      });

      // High-performance animation with GPU acceleration
      tl.to(headline.children, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        force3D: true,
        immediateRender: false,
      })
      // Animate CTA button with hardware acceleration
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        force3D: true,
        immediateRender: false,
      }, "-=0.2");

      // Optimized CTA hover animations with throttling
      const ctaButton = ctaRef.current;
      let hoverTween: gsap.core.Tween | null = null;
      
      const handleMouseEnter = () => {
        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.to(ctaButton, {
          y: -2,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          duration: 0.2,
          ease: "power2.out",
          force3D: true,
        });
      };

      const handleMouseLeave = () => {
        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.to(ctaButton, {
          y: 0,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          duration: 0.2,
          ease: "power2.out",
          force3D: true,
        });
      };

      // Use passive event listeners for better performance
      ctaButton.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      ctaButton.addEventListener('mouseleave', handleMouseLeave, { passive: true });
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
      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl">
          <h1 
            ref={headlineRef} 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            {content.headline}
          </h1>
          <div className="mt-8">
            <Button 
              ref={ctaRef}
              size="lg" 
              className="text-lg px-8 py-4 h-auto transition-transform duration-300"
            >
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});
