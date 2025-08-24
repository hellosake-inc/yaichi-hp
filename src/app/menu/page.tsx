import { Metadata } from 'next';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageWrapper from "@/components/layout/PageWrapper";
import Menu from "@/components/layout/menu/Menu";
import Products from "@/components/layout/menu/Products";

export const metadata: Metadata = {
  title: 'Menu | Yaichi - Authentic Japanese Udon & Seafood',
  description: 'Explore our menu featuring authentic Japanese udon noodles, fresh seafood bowls, appetizers, and traditional desserts. Order online or dine in at Yaichi.',
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuPage() {
  return (
    <PageWrapper className="bg-neutral-900">
      <Products pb="xl" />
      <Menu pt="xl" pb="xl" />
      <Footer />
    </PageWrapper>
  );
}
