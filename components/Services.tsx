'use client';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Finance Software',
    desc: 'Custom accounting, payroll, expense tracking, and financial reporting systems tailored for Tamil Nadu businesses.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: 'Billing Software',
    desc: 'GST-compliant invoicing, billing automation, and payment tracking systems with real-time dashboards.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'POS Systems',
    desc: 'Point-of-sale solutions for retail shops, restaurants & supermarkets with inventory, barcode scanning & reports.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Hospital Management',
    desc: 'Complete HMS: patient records, OPD/IPD, pharmacy, lab, appointment scheduling & billing — all in one system.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    text: 'text-rose-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Gym Software',
    desc: 'Membership management, attendance tracking, payment reminders, trainer scheduling & fitness dashboards.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Custom Web & App Dev',
    desc: 'Bespoke web applications using React, Next.js, Node.js & MongoDB. From MVP to enterprise-scale products.',
    color: 'from-brand-500 to-violet-600',
    bg: 'bg-brand-50',
    text: 'text-brand-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Ecommerce Website',
    desc: 'Full-featured online stores with product listings, cart, payment gateway integration, order management, and admin dashboard.',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Portfolio Website',
    desc: 'Stunning, modern portfolio websites for freelancers, agencies, and professionals. Fast, SEO-friendly, and mobile-first.',
    color: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
  },
];

export default function Services() {
  return (
    <section className="section bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tag mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Everything Your Business{' '}
            <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We build industry-specific software tailored to your exact workflow —
            not generic off-the-shelf tools, but custom solutions that drive growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.map((s) => (
            <div
              key={s.title}
              className="group animate-on-scroll p-7 bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.desc}</p>

              <Link
                href="/services"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${s.text} hover:gap-3 transition-all duration-200`}
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 mb-4">Don&apos;t see your industry? We build for any domain.</p>
          <Link href="/contact" className="btn-primary">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
