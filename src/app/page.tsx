import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LoadingFallback } from "@/components/loading-fallback";

// Lazy load non-critical sections for better performance
const ServicesSection = dynamic(() => import("@/components/services-section").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <LoadingFallback />
});

const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <LoadingFallback />
});

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <LoadingFallback />
});

const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <LoadingFallback />
});

const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <LoadingFallback />
});

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <LoadingFallback height="h-32" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback height="h-32" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
