'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0 lg:gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-2 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                path === l.href
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-slate-600 hover:text-brand-600 hover:bg-brand-50/60'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a href="tel:+917530058236" className="hidden lg:block text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
            +91 75300 58236
          </a>
          <Link href="/contact" className="btn-primary text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5">
            Get a Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass border-t border-slate-200/60 px-4 py-4 flex flex-col gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                path === l.href
                  ? 'text-brand-600 bg-brand-50'
                  : 'text-slate-700 hover:text-brand-600 hover:bg-brand-50/60'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-2 justify-center text-sm">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
