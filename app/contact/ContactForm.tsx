'use client';
import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: '+91 75300 58236',
    href: 'tel:+917530058236',
    sub: 'Mon–Sat, 9am–6pm IST',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@riseagaintech.com',
    href: 'mailto:contact@riseagaintech.com',
    sub: 'We reply within 2 hours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: '#',
    sub: 'Serving all of Tamil Nadu',
  },
];

const services = [
  'Finance Software', 'Billing Software', 'POS System',
  'Hospital Management', 'Gym Software', 'Ecommerce Website',
  'Portfolio Website', 'Custom Web App', 'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === 'phone') {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
      const formatted = digits.length > 5 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : digits;
      setForm(prev => ({ ...prev, phone: formatted }));
    } else {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, phone: `+91 ${form.phone}` }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Something went wrong. Please try again.');
      } else {
        setSent(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-6">Contact Us</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Let&apos;s Build Something <span className="gradient-text">Great</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll get back to you within 2 hours with a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h2>
                <p className="text-slate-600">We&apos;re here to help you build the perfect software for your business.</p>
              </div>

              {contactInfo.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-surface hover:border-brand-200 hover:shadow-card transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="font-bold text-slate-900 text-sm">{c.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.sub}</div>
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917530058236?text=Hi%2C%20I%20am%20interested%20in%20your%20software%20development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="h-full flex items-center justify-center p-12 rounded-2xl border border-emerald-100 bg-emerald-50 text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. Our team will contact you within 2 hours.
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Or call us directly:{' '}
                      <a href="tel:+917530058236" className="text-brand-600 font-semibold">+91 75300 58236</a>
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-slate-100 shadow-card space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm font-medium select-none">+91</span>
                        <input
                          type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="XXXXX XXXXX"
                          maxLength={11}
                          pattern="\d{5}\s\d{5}"
                          title="Enter 10-digit mobile number"
                          className="w-full px-4 py-3 rounded-r-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required *</label>
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell Us About Your Project *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange} rows={5}
                      placeholder="Describe your project, requirements, and timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message — Get Free Quote
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Free consultation • No obligation • Reply within 2 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
