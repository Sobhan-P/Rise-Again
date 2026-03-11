import Link from 'next/link';

const projects = [
  {
    title: 'MultiShop POS System',
    category: 'POS & Retail',
    desc: 'A comprehensive point-of-sale system for a multi-branch retail chain with real-time inventory sync, barcode scanning, and daily sales reporting.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-emerald-400 to-teal-500',
    icon: '🏪',
    metrics: ['5 Branches', 'Real-time Sync', '₹50L+ Monthly Sales Tracked'],
  },
  {
    title: 'MedCare HMS',
    category: 'Hospital Management',
    desc: 'End-to-end hospital management system covering OPD/IPD, pharmacy, lab reports, appointment booking, and patient billing for a 100-bed hospital.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    color: 'from-rose-400 to-pink-500',
    icon: '🏥',
    metrics: ['100+ Beds', '500+ Daily Patients', 'Fully Paperless'],
  },
  {
    title: 'FitPro Gym Suite',
    category: 'Gym Software',
    desc: 'Smart gym management system with biometric attendance, membership renewals, trainer scheduling, and WhatsApp payment reminders.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-amber-400 to-orange-500',
    icon: '💪',
    metrics: ['3 Gym Locations', '2000+ Members', 'Auto Renewal Alerts'],
  },
];

export default function Portfolio() {
  return (
    <section className="section bg-surface" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Projects That{' '}
            <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real software solving real problems for Tamil Nadu businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {projects.map((p) => (
            <div
              key={p.title}
              className="animate-on-scroll group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card header visual */}
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl" aria-hidden="true">{p.icon}</span>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.desc}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.metrics.map(m => (
                    <span key={m} className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg">
                      ✓ {m}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className="btn-secondary">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
