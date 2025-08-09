"use client";

import { JSX, useEffect, useRef, useMemo, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionSeparator } from "@/components/section-separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/components/language-provider";
import { Star, Quote } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Types
interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

interface TestimonialContent {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

interface TestimonialsData {
  en: TestimonialContent;
  es: TestimonialContent;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

interface Language {
  language: "en" | "es";
}

const testimonials: TestimonialsData = {
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
        text: "BMWEB transformed our online presence completely. Their team delivered a stunning website that perfectly represents our brand.",
      },
      {
        name: "Michael Chen",
        role: "Marketing Director, GrowthCo",
        avatar: "MC",
        rating: 5,
        text: "The digital marketing campaign exceeded all expectations. We saw a 300% increase in leads within the first three months.",
      },
      {
        name: "Emily Rodriguez",
        role: "Founder, Creative Studio",
        avatar: "ER",
        rating: 5,
        text: "Working with BMWEB was a game-changer. Their attention to detail helped us stand out in a competitive market.",
      },
      {
        name: "David Thompson",
        role: "E-commerce Manager, RetailPlus",
        avatar: "DT",
        rating: 5,
        text: "The e-commerce platform is beautiful and functional. Our sales have increased by 150% since the launch.",
      },
      {
        name: "Lisa Wang",
        role: "Product Manager, InnovateLab",
        avatar: "LW",
        rating: 5,
        text: "BMWEB's UI/UX expertise helped us create an intuitive product that our users love. Collaborative approach made it smooth.",
      },
      {
        name: "Robert Garcia",
        role: "CEO, Digital Solutions",
        avatar: "RG",
        rating: 5,
        text: "The SEO and SEM strategies dramatically improved our search rankings and online visibility. Highly recommended!",
      },
      {
        name: "Anna Martinez",
        role: "Startup Founder",
        avatar: "AM",
        rating: 5,
        text: "Professional team with incredible results. They understood our vision and brought it to life perfectly.",
      },
      {
        name: "James Wilson",
        role: "Brand Director",
        avatar: "JW",
        rating: 5,
        text: "Outstanding creative solutions and exceptional customer service. They exceeded every expectation we had.",
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
        text: "BMWEB transformó completamente nuestra presencia en línea. Su equipo entregó un sitio web que representa perfectamente nuestra marca.",
      },
      {
        name: "Michael Chen",
        role: "Director de Marketing, GrowthCo",
        avatar: "MC",
        rating: 5,
        text: "La campaña de marketing digital superó todas las expectativas. Vimos un aumento del 300% en leads en tres meses.",
      },
      {
        name: "Emily Rodriguez",
        role: "Fundadora, Creative Studio",
        avatar: "ER",
        rating: 5,
        text: "Trabajar con BMWEB fue un cambio de juego. Su atención al detalle nos ayudó a destacar en un mercado competitivo.",
      },
      {
        name: "David Thompson",
        role: "Gerente de E-commerce, RetailPlus",
        avatar: "DT",
        rating: 5,
        text: "La plataforma de e-commerce es hermosa y funcional. Nuestras ventas aumentaron un 150% desde el lanzamiento.",
      },
      {
        name: "Lisa Wang",
        role: "Gerente de Producto, InnovateLab",
        avatar: "LW",
        rating: 5,
        text: "La experiencia de BMWEB en UI/UX nos ayudó a crear un producto intuitivo que nuestros usuarios aman.",
      },
      {
        name: "Robert Garcia",
        role: "CEO, Digital Solutions",
        avatar: "RG",
        rating: 5,
        text: "Las estrategias de SEO y SEM mejoraron dramáticamente nuestros rankings de búsqueda. ¡Altamente recomendado!",
      },
      {
        name: "Anna Martinez",
        role: "Fundadora de Startup",
        avatar: "AM",
        rating: 5,
        text: "Equipo profesional con resultados increíbles. Entendieron nuestra visión y la trajeron a la vida perfectamente.",
      },
      {
        name: "James Wilson",
        role: "Director de Marca",
        avatar: "JW",
        rating: 5,
        text: "Soluciones creativas excepcionales y servicio al cliente extraordinario. Superaron todas nuestras expectativas.",
      },
    ],
  },
};

// Memoized Testimonial Card Component - Optimized for performance
const TestimonialCard: React.FC<TestimonialCardProps> = memo(
  ({ testimonial }) => {
    // Memoize star rating to prevent re-renders
    const starRating = useMemo(
      () =>
        Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        )),
      [testimonial.rating]
    );

    return (
      <Card className="w-[240px] sm:w-[280px] md:w-[300px] mx-2 bg-card/80 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 group flex-shrink-0 will-change-transform">
        <CardContent className="p-4 sm:p-5">
          {/* Quote Icon */}
          <Quote className="w-5 h-5 text-primary/40 mb-3 group-hover:text-primary/60 transition-colors" />

          {/* Testimonial Text - Use CSS containment for better performance */}
          <CardDescription className="text-sm leading-relaxed text-foreground/80 mb-4 line-clamp-4 contain-layout">
            &ldquo;{testimonial.text}&rdquo;
          </CardDescription>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 contain-layout">
              <Avatar className="w-8 h-8 ring-1 ring-primary/20">
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-medium text-xs">
                  {testimonial.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <div className="font-medium text-foreground text-xs leading-tight">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground truncate max-w-[120px]">
                  {testimonial.role}
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-0.5 flex-shrink-0">{starRating}</div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export function TestimonialsSection(): JSX.Element {
  const { language }: Language = useLanguage();
  const content: TestimonialContent = testimonials[language];

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and subtitle with improved stagger animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      if (titleRef.current && subtitleRef.current) {
        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current], {
          opacity: 0,
          x: -40,
          filter: "blur(8px)",
        });

        headerTl
          .to(titleRef.current, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
          })
          .to(
            subtitleRef.current,
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4"
          );
      }

      // Enhanced cards staggered entrance animation
      if (sectionRef.current) {
        const topRowCards = sectionRef.current.querySelectorAll(
          ".testimonial-row:first-child .testimonial-card"
        );
        const bottomRowCards = sectionRef.current.querySelectorAll(
          ".testimonial-row:last-child .testimonial-card"
        );

        // Set initial states
        gsap.set([...topRowCards, ...bottomRowCards], {
          opacity: 0,
          y: 60,
          rotateY: -15,
          scale: 0.9,
        });

        // Animate top row cards
        gsap.to(topRowCards, {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate bottom row cards with slight delay
        gsap.to(bottomRowCards, {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
          stagger: 0.08,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // High-performance infinite scroll animations
      const setupInfiniteScroll = (
        container: HTMLDivElement,
        direction: "right" | "left"
      ): (() => void) => {
        const originalCards = Array.from(container.children);
        const cardWidth = 316; // 300px width + 16px gap
        const originalWidth = cardWidth * originalCards.length;

        // Clone exactly one set of cards for seamless infinite loop
        const clones = originalCards.map((card) => {
          const clone = card.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          return clone;
        });
        
        // Append clones to create seamless loop
        clones.forEach(clone => container.appendChild(clone));

        // Set initial position for seamless loop
        const startX = direction === "right" ? 0 : -originalWidth;
        const endX = direction === "right" ? -originalWidth : 0;
        
        gsap.set(container, {
          x: startX,
          force3D: true,
        });

        // Create smooth infinite animation
        const tween = gsap.to(container, {
          x: endX,
          duration: 30, // Adjusted for smoother speed
          ease: "none",
          repeat: -1,
          force3D: true,
        });

        // Smooth hover controls
        let hoverTween: gsap.core.Tween | null = null;
        
        const handleMouseEnter = () => {
          if (hoverTween) hoverTween.kill();
          hoverTween = gsap.to(tween, { 
            timeScale: 0.3, 
            duration: 0.5, 
            ease: "power2.out"
          });
        };
        
        const handleMouseLeave = () => {
          if (hoverTween) hoverTween.kill();
          hoverTween = gsap.to(tween, { 
            timeScale: 1, 
            duration: 0.5, 
            ease: "power2.out"
          });
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        return () => {
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
          if (hoverTween) hoverTween.kill();
          tween.kill();
          // Remove clones
          clones.forEach(clone => {
            if (clone.parentNode) {
              clone.parentNode.removeChild(clone);
            }
          });
          gsap.set(container, { clearProps: "all" });
        };
      };

      // Setup infinite scrolling with proper timing
      const timeoutId = setTimeout(() => {
        if (topRowRef.current && bottomRowRef.current) {
          const cleanupTop = setupInfiniteScroll(topRowRef.current, "right");
          const cleanupBottom = setupInfiniteScroll(
            bottomRowRef.current,
            "left"
          );

          return () => {
            cleanupTop?.();
            cleanupBottom?.();
          };
        }
      }, 800); // Increased delay for better initialization

      return () => {
        clearTimeout(timeoutId);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  // Split testimonials into two rows
  const firstRow: Testimonial[] = content.items.slice(0, 4);
  const secondRow: Testimonial[] = content.items.slice(4);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 section-bg-accent overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
          >
            {content.title}
          </h2>
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {content.subtitle}
          </p>
        </div>

        {/* Testimonials Rows - Improved mobile layout */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Top Row - Scrolling Right */}
          <div className="relative testimonial-row">
            <div className="overflow-hidden">
              <div
                ref={topRowRef}
                className="flex gap-4 will-change-transform"
                style={{ backfaceVisibility: "hidden" }}
              >
                {firstRow.map((testimonial: Testimonial, index: number) => (
                  <div key={`top-${index}`} className="testimonial-card">
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - Scrolling Left */}
          <div className="relative testimonial-row">
            <div className="overflow-hidden">
              <div
                ref={bottomRowRef}
                className="flex gap-4 will-change-transform"
                style={{ backfaceVisibility: "hidden" }}
              >
                {secondRow.map((testimonial: Testimonial, index: number) => (
                  <div key={`bottom-${index}`} className="testimonial-card">
                    <TestimonialCard
                      testimonial={testimonial}
                      index={index + 4}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Gradient Overlays - Mobile optimized */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .testimonial-card {
            transform: scale(0.95);
          }
        }

        .testimonial-row {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        /* Smooth GPU acceleration */
        .testimonial-card {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Enhanced mobile performance */
        @media (max-width: 768px) {
          .testimonial-row {
            transform: translateZ(0);
          }
        }
      `}</style>
    </section>
  );
}
