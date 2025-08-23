import Link from "next/link";
import React from "react";
import LogoSVG from "../svg/LogoSVG";

const links = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "Menu", path: "/menu" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer id="Footer" className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container container--sm">
        <div className="max-w-screen-xl mx-auto text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-2xl font-semibold text-gray-800"
          >
            <LogoSVG width={50} height={50} />
            <span className="flex gap-1">
              <span className="text-gray-800 font-brush">Asian</span>
              <span className="text-primary-600 font-brush">Food</span>
            </span>
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
