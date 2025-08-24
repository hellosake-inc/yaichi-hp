import { Metadata } from 'next';
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: 'Contact Us | Yaichi - Japanese Restaurant in Milpitas',
  description: 'Get in touch with Yaichi Japanese Restaurant. Find our location, hours, phone number, and contact information. Visit us in Milpitas, CA.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <Contact />
      <Footer />
    </PageWrapper>
  );
}
