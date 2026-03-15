import type { Metadata } from 'next';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Portfolio | Software Projects — Rise Again Web Technologies, Nagercoil',
  description:
    'Projects by Rise Again Web Technologies, Nagercoil — Finance Software, POS Systems, eCommerce Websites, Hospital Management, and custom web apps for businesses in Kanyakumari district and Tamil Nadu.',
  alternates: { canonical: 'https://www.riseagaintech.com/portfolio' },
};

const projects = [
  {
    title: 'MultiShop POS',
    category: 'POS & Retail',
    desc: 'Multi-branch point-of-sale system for a retail chain with real-time inventory sync, GST billing, barcode scanning, and WhatsApp receipt sharing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    icon: '🏪',
    color: 'from-emerald-400 to-teal-500',
    metrics: ['5 Branches', '300+ Daily Bills', 'Real-time Inventory'],
  },
  {
    title: 'MedCare HMS',
    category: 'Hospital Management',
    desc: 'Complete hospital management system covering OPD/IPD registration, patient EMR, pharmacy, lab, appointment scheduling, and automated billing.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    icon: '🏥',
    color: 'from-rose-400 to-pink-500',
    metrics: ['100-bed Hospital', '500+ Daily Patients', 'Fully Paperless'],
  },
  {
    title: 'FitPro Gym Suite',
    category: 'Gym Software',
    desc: 'Smart gym management platform with biometric attendance, auto-renewal WhatsApp alerts, trainer assignment, and monthly revenue dashboards.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: '💪',
    color: 'from-amber-400 to-orange-500',
    metrics: ['3 Locations', '2000+ Members', '30% Revenue Growth'],
  },
  {
    title: 'FinTrack Pro',
    category: 'Finance Software',
    desc: 'GST-compliant finance management system with real-time P&L statements, payroll, expense approvals, and bank reconciliation for a mid-size company.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    icon: '💰',
    color: 'from-blue-400 to-brand-600',
    metrics: ['200+ Employees', 'Automated Payroll', 'Zero Manual Errors'],
  },
  {
    title: 'QuickBill GST',
    category: 'Billing Software',
    desc: 'Fast GST invoice generation and billing tool for a trading company. Auto e-invoice submission, payment tracking, and Tally export built-in.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: '🧾',
    color: 'from-violet-400 to-purple-600',
    metrics: ['500+ Invoices/Month', 'E-invoice Ready', 'Tally Export'],
  },
  {
    title: 'AgriConnect Platform',
    category: 'Custom Web App',
    desc: 'B2B marketplace connecting Tamil Nadu farmers with distributors. Features include real-time price updates, order management, and logistics tracking.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay'],
    icon: '🌾',
    color: 'from-lime-400 to-green-600',
    metrics: ['500+ Farmers', '50+ Distributors', '₹1Cr+ Transactions'],
  },
];

const categories = ['All', 'POS & Retail', 'Hospital Management', 'Gym Software', 'Finance Software', 'Billing Software', 'Custom Web App'];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-6">Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Work That <span className="gradient-text">Makes an Impact</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Real software for real businesses across Tamil Nadu. Every project is a partnership built on trust, craftsmanship, and measurable results.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(c => (
              <span
                key={c}
                className={`px-4 py-2 rounded-xl text-sm font-medium cursor-default border transition-all ${
                  c === 'All'
                    ? 'bg-gradient-brand text-white border-transparent'
                    : 'bg-white text-slate-600 border-slate-200'
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(p => (
              <div
                key={p.title}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Visual header */}
                <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-8xl" aria-hidden="true">{p.icon}</span>
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
                  <div className="grid grid-cols-1 gap-1.5 mb-5">
                    {p.metrics.map(m => (
                      <div key={m} className="flex items-center gap-2 text-xs text-emerald-700">
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {m}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
