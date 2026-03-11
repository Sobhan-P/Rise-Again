import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Quote',
  description:
    'Contact Rise Again Web Technologies for a free software project consultation. Call +91 75300 58236 or email contact@riseagaintech.com. Serving all of Tamil Nadu.',
  alternates: { canonical: 'https://www.riseagaintech.com/contact' },
};

export default function ContactPage() {
  return <ContactForm />;
}
