"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Hamburger from "../ui/Hamburger";
import CTAButton from "../ui/CTAButton";

const links = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const toggleOverflowHidden = (shouldHide: boolean) => {
      const action = shouldHide ? "add" : "remove";
      document.body.classList[action]("overflow-hidden");
      document.documentElement.classList[action]("overflow-hidden");
    };

    toggleOverflowHidden(isMenuOpen);

    return () => toggleOverflowHidden(false);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={clsx(isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible", "transition absolute w-full h-full bg-black/30")} onClick={() => setIsMenuOpen(false)}></div>
      <nav
        id="Header"
        className={clsx(
          "z-40 w-full transition-all duration-300",
          isHomepage &&
            (isScrolled || isMenuOpen ? "bg-white shadow-card" : "bg-white/95 shadow-subtle"),
          isHomepage ? "fixed top-0" : "sticky top-0 bg-white shadow-card"
        )}
      >
        <div className="container">
          <div className="w-full py-4 mx-auto lg:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="flex items-center justify-center"
              >
                <Image
                  src="/YAICHILOGO.png"
                  alt="Yaichi - Authentic Japanese Udon & Seafood Restaurant"
                  width={180}
                  height={60}
                  className="h-12 w-auto md:h-14 lg:h-16"
                  priority
                />
              </Link>
              <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>
            <div
              className={clsx(
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
                "lg:visible transition absolute inset-x-0 z-20 w-full px-6 py-4 duration-300 ease-in-out bg-white shadow-lg lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
              )}
            >
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:mx-6">
                {links.map(({ id, title, path }) => {
                  return (
                    <Link
                      key={id}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        "relative my-2 transition-colors duration-300 transform  md:mx-4 md:my-0",
                        pathname == path
                          ? "text-primary-600 font-medium"
                          : "text-gray-700 hover:text-primary-600"
                      )}
                      href={path}
                    >
                      {title}
                      {pathname == path && (
                        <div className="absolute w-5 h-[3px] -translate-x-1/2 rounded-custom -bottom-2 left-1/2 bg-primary-600"></div>
                      )}
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-4 mt-6 lg:flex-row lg:gap-3 lg:mt-0 lg:ml-4">
                <CTAButton
                  href="https://www.toasttab.com/yaichi-placeholder"
                  variant="primary"
                  size="sm"
                >
                  Order Online
                </CTAButton>
                <CTAButton
                  href="https://www.doordash.com/store/yaichi-placeholder"
                  variant="secondary"
                  size="sm"
                >
                  Delivery
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
