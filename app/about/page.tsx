import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Us — Rise Again Web Technologies',
  description:
    'Learn about Rise Again Web Technologies — a Tamil Nadu-based custom software development company building world-class digital products for businesses across India.',
  alternates: { canonical: 'https://www.riseagaintech.com/about' },
};

const values = [
  {
    icon: '🎯',
    title: 'Client-First Always',
    desc: 'Your success is our success. We listen deeply, understand your needs, and deliver software that actually solves your problems.',
  },
  {
    icon: '⚡',
    title: 'Speed Without Compromise',
    desc: 'We ship fast without cutting corners. Our agile process means you see real results in weeks, not months.',
  },
  {
    icon: '🔒',
    title: 'Security by Design',
    desc: 'Security isn\'t an afterthought — it\'s built into every layer. Your data and your customers\' data are always protected.',
  },
  {
    icon: '🤝',
    title: 'Long-term Partnership',
    desc: 'We don\'t disappear after launch. We\'re your ongoing technology partner — supporting, scaling, and evolving your software.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+',  label: 'Years Experience' },
  { value: '10+', label: 'Industries Served' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-6">About Us</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            We Are <span className="gradient-text">Rise Again</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A passionate team of developers and designers from Tamil Nadu, building software
            that transforms how businesses operate.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag mb-4">Our Story</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Built from Passion, Driven by <span className="gradient-text">Purpose</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Rise Again Web Technologies was born from a simple belief: businesses in Tamil Nadu
                  deserve world-class software — not just off-the-shelf tools that barely fit their needs.
                </p>
                <p>
                  We started by building custom solutions for local businesses — a POS for a grocery store,
                  a billing system for a clinic, a membership tool for a gym. With every project, we
                  learned more about what businesses truly needed.
                </p>
                <p>
                  Today, we&apos;re a full-stack software development company trusted by businesses across
                  Tamil Nadu — from Chennai to Coimbatore, Madurai to Salem — delivering software that
                  drives real, measurable business growth.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(s => (
                <div key={s.label} className="p-8 rounded-2xl bg-gradient-soft border border-brand-100 text-center">
                  <div className="text-4xl font-extrabold gradient-text mb-2">{s.value}</div>
                  <div className="text-sm font-medium text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl mb-5">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower Tamil Nadu businesses with world-class custom software that automates operations,
                eliminates inefficiencies, and creates sustainable competitive advantages — at a fair, transparent price.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center text-2xl mb-5">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become Tamil Nadu&apos;s most trusted software development partner — known for quality,
                reliability, and the depth of our business impact. We aim to put Tamil Nadu businesses on the global digital map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="tag mb-4">Our Values</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-5">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-card text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations served */}
      <section className="section bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-4">📍 Serving All of Tamil Nadu</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            Wherever You Are in Tamil Nadu, <span className="gradient-text">We&apos;re Here</span>
          </h2>
          <p className="text-slate-600 mb-8">
            We work with businesses across Tamil Nadu — remotely and on-site. No location is too far for world-class software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tirunelveli', 'Trichy', 'Vellore', 'Erode', 'Tiruppur', 'Thanjavur', 'Dindigul', 'Kanyakumari'].map(city => (
              <span key={city} className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                📍 {city}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
