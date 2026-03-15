import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Free Quote — Software Company Nagercoil, Kanyakumari',
  description:
    'Contact Rise Again Web Technologies in Nagercoil, Kanyakumari for a free consultation. Call +91 75300 58236 or email contact@riseagaintech.com. We serve Kanyakumari district and all of Tamil Nadu.',
  alternates: { canonical: 'https://www.riseagaintech.com/contact' },
};

export default function ContactPage() {
  return <ContactForm />;
}
