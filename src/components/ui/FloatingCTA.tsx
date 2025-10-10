"use client";
import React, { useEffect, useState, useRef } from "react";
import CTAButton from "./CTAButton";
import clsx from "clsx";

const SCROLL_THRESHOLD = 200;

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 16) return; // ~60fps throttle

      lastScrollTime.current = now;
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl transition-transform duration-300 lg:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container px-4 py-3">
        <div className="flex gap-3 justify-center">
          <CTAButton
            href="https://www.toasttab.com/yaichi-placeholder"
            variant="primary"
            size="md"
            className="flex-1 justify-center min-h-[44px]"
            showIcon={false}
          >
            Order Online
          </CTAButton>
          <CTAButton
            href="https://www.doordash.com/store/yaichi-placeholder"
            variant="secondary"
            size="md"
            className="flex-1 justify-center min-h-[44px]"
            showIcon={false}
          >
            Delivery
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
