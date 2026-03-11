import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Services — Custom Software Development Tamil Nadu',
  description:
    'Explore all services by Rise Again Web Technologies: Finance Software, POS Systems, Hospital Management, Billing, Gym Software, and custom web & app development in Tamil Nadu.',
  alternates: { canonical: 'https://www.riseagaintech.com/services' },
};

const services = [
  {
    icon: '💰',
    title: 'Finance Software',
    desc: 'Comprehensive financial management systems built for Tamil Nadu businesses. Automate accounting, payroll, expense tracking, and generate detailed financial reports with real-time dashboards.',
    features: [
      'General Ledger & Accounts',
      'Payroll Management',
      'Expense Tracking & Approval',
      'Financial Reporting & Analytics',
      'GST & Tax Compliance',
      'Bank Reconciliation',
      'Multi-currency Support',
      'Audit Trail Logs',
    ],
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: '🧾',
    title: 'Billing Software',
    desc: 'GST-compliant invoicing and billing automation tailored for Indian businesses. Generate professional invoices, track payments, send reminders, and get paid faster.',
    features: [
      'GST Invoice Generation',
      'E-invoice & E-waybill',
      'Quotation & Estimate Builder',
      'Payment Tracking & Reminders',
      'Multi-tax Rate Support',
      'Recurring Billing',
      'Customer Portal',
      'Tally Export Integration',
    ],
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-100',
  },
  {
    icon: '🏪',
    title: 'POS Systems',
    desc: 'Modern point-of-sale solutions for retail shops, restaurants, supermarkets, and franchise businesses. Speed up billing, manage inventory, and track daily sales effortlessly.',
    features: [
      'Fast Billing & Receipt Printing',
      'Barcode & QR Code Scanning',
      'Real-time Inventory Management',
      'Multi-branch & Multi-store',
      'Daily/Monthly Sales Reports',
      'Customer Loyalty Program',
      'Staff & Cashier Management',
      'Offline Mode Support',
    ],
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    icon: '🏥',
    title: 'Hospital Management Software',
    desc: 'End-to-end HMS for clinics, hospitals, and diagnostic centres. Manage patients, staff, pharmacy, labs, and billing — all in one powerful system.',
    features: [
      'OPD / IPD Management',
      'Patient Records (EMR/EHR)',
      'Appointment Scheduling',
      'Pharmacy Management',
      'Lab & Diagnostic Reports',
      'In-patient Billing',
      'Doctor & Nurse Scheduling',
      'Insurance & TPA Management',
    ],
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-100',
  },
  {
    icon: '💪',
    title: 'Gym Management Software',
    desc: 'Smart gym software to automate membership, attendance, payments, and trainer management. Reduce no-shows, boost renewals, and grow your gym business.',
    features: [
      'Member Registration & Profiles',
      'Biometric / QR Attendance',
      'Membership Plans & Renewals',
      'Automated Payment Reminders',
      'Trainer Scheduling & Assignments',
      'Diet & Workout Plans',
      'Multi-gym / Branch Support',
      'Revenue & Retention Reports',
    ],
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-100',
  },
  {
    icon: '🌐',
    title: 'Custom Web & App Development',
    desc: 'Bespoke web applications and portals built with modern technologies. From B2B SaaS platforms to internal tools — we turn your idea into a scalable product.',
    features: [
      'React & Next.js Frontend',
      'Node.js & Express Backend',
      'MongoDB & PostgreSQL',
      'REST API & GraphQL',
      'Authentication & Role-based Access',
      'Cloud Deployment (AWS/Vercel)',
      'Admin Dashboard & CMS',
      'Mobile-responsive Design',
    ],
    color: 'from-brand-500 to-violet-600',
    bg: 'bg-brand-50',
    text: 'text-brand-600',
    border: 'border-brand-100',
  },
  {
    icon: '🛒',
    title: 'Ecommerce Website',
    desc: 'Professional online stores built to sell. We design and develop fully functional ecommerce websites with seamless payment integration, inventory management, and a powerful admin panel.',
    features: [
      'Product Catalog & Categories',
      'Shopping Cart & Wishlist',
      'Razorpay / Stripe / UPI Integration',
      'Order & Inventory Management',
      'Customer Accounts & Reviews',
      'Discount Codes & Promotions',
      'Mobile-first & Fast Loading',
      'SEO-optimised Product Pages',
    ],
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    text: 'text-pink-600',
    border: 'border-pink-100',
  },
  {
    icon: '🎨',
    title: 'Portfolio Website',
    desc: 'Make a powerful first impression. We craft stunning portfolio websites for professionals, agencies, and creatives — built for speed, SEO, and conversions.',
    features: [
      'Custom Design & Branding',
      'Responsive on All Devices',
      'SEO Optimised & Fast',
      'Project Showcase Gallery',
      'Contact Form Integration',
      'Blog / News Section',
      'Google Analytics Setup',
      'Domain & Hosting Guidance',
    ],
    color: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'border-teal-100',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-6">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Software Built for <span className="gradient-text">Every Industry</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don&apos;t believe in one-size-fits-all. Every product we build is custom-designed
            for your specific workflow, users, and business goals.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Info */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 rounded-2xl ${s.bg} flex items-center justify-center text-3xl mb-6`}>
                  {s.icon}
                </div>
                <h2 className={`text-3xl md:text-4xl font-extrabold text-slate-900 mb-4`}>
                  {s.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{s.desc}</p>
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
              </div>

              {/* Features card */}
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`p-8 rounded-2xl border ${s.border} ${s.bg}`}>
                  <h3 className={`font-bold ${s.text} mb-5 text-sm uppercase tracking-wider`}>Key Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className={`w-5 h-5 rounded-full ${s.bg} border ${s.border} ${s.text} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
