import Link from "next/link";
import React from "react";
import Image from "next/image";

const links = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer id="Footer" className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container container--sm">
        <div className="max-w-screen-xl mx-auto text-center">
          <Link
            href="/"
            className="flex items-center justify-center mb-4"
          >
            <Image
              src="/YAICHILOGO.png"
              alt="Yaichi - Authentic Japanese Udon & Seafood Restaurant"
              width={200}
              height={67}
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-gray-700">
            {links.map(({ id, title, path }) => {
              return (
                <Link key={id} className="hover:underline" href={path}>
                  {title}
                </Link>
              );
            })}
          </div>
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Yaichi Restaurant. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
