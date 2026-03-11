'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  'Finance Software', 'POS Systems', 'Hospital Management',
  'Billing Software', 'Gym Software', 'Ecommerce Website',
  'Portfolio Website', 'Custom Web Apps',
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.hero-item');
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = '1';
        (item as HTMLElement).style.transform = 'translateY(0)';
      }, i * 120);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-24 pb-16">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-brand-500 top-10 -left-20" />
      <div className="blob w-80 h-80 bg-violet-500 bottom-10 right-0" />
      <div className="blob w-64 h-64 bg-sky-400 top-1/2 left-1/3" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div
              className="hero-item tag w-fit mx-auto lg:mx-0 opacity-0"
              style={{ transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Tamil Nadu&apos;s Premier Software Company
            </div>

            {/* Headline */}
            <div
              className="hero-item opacity-0"
              style={{ transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-slate-900">
                We Build
                <span className="block gradient-text">World-Class</span>
                Software
              </h1>
            </div>

            {/* Sub */}
            <p
              className="hero-item text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0"
              style={{ transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              From custom finance systems to hospital management — we craft powerful,
              scalable software using <strong className="text-slate-800">React, Next.js, Node.js & MongoDB</strong> for businesses across Tamil Nadu.
            </p>

            {/* CTAs */}
            <div
              className="hero-item flex flex-wrap gap-4 justify-center lg:justify-start opacity-0"
              style={{ transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/portfolio" className="btn-secondary text-base px-7 py-3.5">
                View Our Work
              </Link>
            </div>

            {/* Service pills */}
            <div
              className="hero-item opacity-0"
              style={{ transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">We build</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {services.map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Visual card */}
          <div
            className="hero-item hidden lg:flex justify-center opacity-0"
            style={{ transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
          >
            <div className="relative w-full max-w-md animate-float">
              {/* Main card */}
              <div className="gradient-border shadow-card bg-white p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Rise Again Web Technologies</div>
                    <div className="text-xs text-slate-500">Full-Stack Development</div>
                  </div>
                </div>

                {/* Code snippet visual */}
                <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs leading-relaxed mb-6">
                  <div className="text-slate-500">{`// Your Vision → Our Code`}</div>
                  <div className="mt-2">
                    <span className="text-violet-400">const</span>
                    <span className="text-white"> software </span>
                    <span className="text-slate-400">= </span>
                    <span className="text-brand-400">buildExcellence</span>
                    <span className="text-slate-400">{'({'}</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-sky-400">stack</span>
                    <span className="text-slate-400">: [</span>
                    <span className="text-green-400">&apos;Next.js&apos;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-green-400">&apos;Node&apos;</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-green-400">&apos;MongoDB&apos;</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-sky-400">quality</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-amber-400">&apos;world-class&apos;</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-sky-400">location</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-green-400">&apos;Tamil Nadu, India&apos;</span>
                  </div>
                  <div><span className="text-slate-400">{'});'}</span></div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 text-xs font-semibold border border-brand-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 shadow-card flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-slate-800">Available for projects</span>
              </div>

              {/* Floating review card */}
              <div className="absolute -top-4 -right-6 glass rounded-2xl px-4 py-3 shadow-card">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-800">5.0 Client Rating</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
