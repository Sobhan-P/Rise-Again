'use client';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import TechStack from '@/components/TechStack';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function HomePage() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
