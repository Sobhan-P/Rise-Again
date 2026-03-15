'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Jeba Jini',
    role: 'Owner, Jini Finance',
    location: 'Palliyadi, Kanyakumari',
    text: 'Very usefull and Support my Work',
    rating: 5,
    initials: 'JJ',
    color: 'bg-brand-600',
  },
  {
    name: 'Ben Bino',
    role: 'Owner, SB Finance',
    location: 'Kozhivilai, Kanyakumari',
    text: 'Excellent service with affordable price for S.B Finance',
    rating: 5,
    initials: 'BB',
    color: 'bg-emerald-500',
  },
  {
    name: 'Adlin Soniya',
    role: 'Owner, Maham Finance',
    location: 'Melpalai, Kanyakumari',
    text: 'Good and valuable software',
    rating: 5,
    initials: 'AS',
    color: 'bg-violet-500',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="section bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="tag mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600">
            Real feedback from Tamil Nadu businesses we&apos;ve helped transform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-gradient-soft rounded-3xl p-8 md:p-12 mb-8 border border-brand-100">
            {/* Quote icon */}
            <svg className="w-12 h-12 text-brand-200 mb-6" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl ${t.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
                <div className="text-xs text-brand-600 font-medium mt-0.5">📍 {t.location}</div>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Selector tabs */}
          <div className="flex gap-3 justify-center flex-wrap">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? 'bg-gradient-brand text-white shadow-glow'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg ${item.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {item.initials}
                </div>
                <span className="hidden sm:inline">{item.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
