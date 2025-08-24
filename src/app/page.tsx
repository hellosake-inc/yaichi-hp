import Image from "next/image";
import Button from "../components/ui/Button";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Image1 from "@/public/bento/bento-1.jpg";
import Image2 from "@/public/bento/bento-2.jpg";
import Image3 from "@/public/bento/bento-3.jpg";
import Image4 from "@/public/bento/bento-4.jpg";
import Image5 from "@/public/bento/bento-5.jpg";
import Image6 from "@/public/bento/bento-6.jpg";
import RamenSVG from "@/public/bento/ramen.svg";
import { Testimonials } from "@/components/layout/Testimonials";
import Footer from "@/components/layout/Footer";
import Features from "@/components/layout/Features";
import Header from "@/components/layout/Header";
import Team from "@/components/layout/Team";
import Contact from "@/components/layout/Contact";
import Products from "@/components/layout/menu/Products";
import Categories from "@/components/layout/Categories";
import Banner from "@/components/layout/Banner";
import DividerSharp from "@/components/layout/DividerSharp";
import PageWrapper from "@/components/layout/PageWrapper";
import MenuSection from "@/components/layout/MenuSection";

export default function Home() {
  return (
    <PageWrapper className="overflow-x-hidden">
      <Hero />
      {/* <div className="relative w-full h-24 -mt-20 rounded-tl-full rounded-tr-full bg-light-ivory"></div> */}
      <Categories pt="xl" />
      <About />
      <MenuSection />
      <DividerSharp />
      {/* <Banner /> */}
      {/* <Features /> */}
      <Products />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}
