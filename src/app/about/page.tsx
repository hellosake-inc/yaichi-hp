import { Metadata } from 'next';
import AboutExtended from "@/components/layout/AboutExtended";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import Team from "@/components/layout/Team";
import { Testimonials } from "@/components/layout/Testimonials";

export const metadata: Metadata = {
  title: 'About Us | Yaichi - Japanese Restaurant in Milpitas',
  description: 'Learn about Yaichi, an authentic Japanese udon and seafood restaurant in Milpitas. Our story, our team, and our commitment to traditional Japanese cuisine.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <AboutExtended />
      <Team />
      <Testimonials />
      <Footer />
    </PageWrapper>
  );
}
