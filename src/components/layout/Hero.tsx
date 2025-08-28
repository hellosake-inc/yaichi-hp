"use client";
import React, { useEffect, useState } from "react";
import bg from "@/public/hero-bg.avif";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import SocialLink from "../ui/SocialLink";
import Animated from "./Animated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";
import CTAButton from "../ui/CTAButton";
import { STORE_INFO } from "@/constants/storeInfo";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded, animationControls]);

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section
      id="Hero"
      className="relative w-full h-screen bg-right bg-no-repeat bg-cover bg-neutral-900"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 z-10 w-full h-full",
          isMobile
            ? "bg-gradient-to-r from-neutral-900/80 to-neutral-900/40"
            : "bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent"
        )}
      ></div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        {(!isMobile || isMobile === undefined) && (
          <Image
            className="absolute top-0 left-0 object-cover w-full transition z-1"
            src={bg}
            fill
            onLoad={() => setLoaded(true)}
            priority
            placeholder="blur"
            alt="Traditional Japanese cuisine background"
          />
        )}
        {(isMobile || isMobile === undefined) && (
          <Image
            className="absolute top-0 left-0 object-cover object-left w-full transition z-1"
            src={
              "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            onLoad={() => setLoaded(true)}
            priority
            alt="Traditional Japanese cuisine background"
          />
        )}
      </motion.div>
      <div className="container z-10 w-full min-h-screen mx-auto px-4">
        <div className="grid w-full min-h-screen max-w-full mx-auto lg:grid-cols-2">
          <div className="z-10 flex flex-col self-center justify-start sm:justify-center min-h-screen max-w-2xl py-8 sm:py-12 md:py-16 pt-24 sm:pt-20 md:pt-0 md:mt-24">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Logo Card with White Background */}
              <Animated
                type="spring"
                delay={0.2}
                duration={0.8}
                variant={"top-sm"}
                className="inline-block"
              >
                <div className="inline-flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-95">
                  <Image
                    src="/YAICHILOGO.png"
                    alt="Yaichi - Authentic Japanese Udon & Seafood Restaurant"
                    width={180}
                    height={240}
                    className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
                    priority
                  />
                </div>
              </Animated>

              {/* Main Heading */}
              <Animated
                as="div"
                delay={0.4}
                variant={"top-sm"}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Your Connection</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    to Authentic Japan
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
              </Animated>

              {/* Description */}
              <Animated
                as="p"
                delay={0.6}
                variant="top-sm"
                className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed max-w-xl"
              >
                Yaichi (+81) - Japan&apos;s country code. We bring genuine Japanese taste 
                directly to your table. Handcrafted udon noodles and soul-warming dashi 
                broth await.
              </Animated>

              {/* CTA Buttons - Hidden on Mobile */}
              <Animated
                delay={0.8}
                className="hidden md:flex flex-row flex-wrap gap-4 pt-4"
              >
                <CTAButton
                  href="https://www.toasttab.com/yaichi-placeholder"
                  variant="primary"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Order Online
                </CTAButton>
                <CTAButton
                  href="https://www.doordash.com/store/yaichi-placeholder"
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  Delivery
                </CTAButton>
              </Animated>

              {/* Social Links */}
              <Animated
                delay={1.0}
                variant="top-sm"
                className="flex flex-row items-center gap-6 pt-8"
              >
                <div className="flex flex-row items-center gap-4">
                  <SocialLink
                    variant="instagram"
                    url={STORE_INFO.social.instagram}
                  />
                </div>
                <div className="hidden sm:block w-32 h-[1px] bg-gradient-to-r from-neutral-400 to-transparent"></div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
