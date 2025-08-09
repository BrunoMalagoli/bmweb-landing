import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseSectionAnimationOptions {
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
}

export function useSectionAnimation(
  options: UseSectionAnimationOptions = {}
) {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    direction = "up",
    distance = 60,
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    ease = "power2.out"
  } = options;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Find all animatable elements
    const elements = section.querySelectorAll(
      '[data-animate], .animate-on-scroll, h1, h2, h3, p, .card, .btn, img'
    );

    if (elements.length === 0) return;

    // Set initial states based on direction
    const initialState: gsap.TweenVars = {
      opacity: 0,
      force3D: true,
    };

    switch (direction) {
      case "up":
        initialState.y = distance;
        break;
      case "down":
        initialState.y = -distance;
        break;
      case "left":
        initialState.x = distance;
        break;
      case "right":
        initialState.x = -distance;
        break;
      case "fade":
        initialState.scale = 0.95;
        break;
    }

    gsap.set(elements, initialState);

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse",
        fastScrollEnd: true,
      }
    });

    // Animate elements with stagger
    const finalState: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      ease,
      stagger,
      force3D: true,
      clearProps: "transform",
    };

    if (delay > 0) {
      tl.to(elements, finalState, delay);
    } else {
      tl.to(elements, finalState);
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, duration, delay, stagger, ease]);

  return sectionRef;
}