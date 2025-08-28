import Link from "next/link";
import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/constants/storeInfo";

const links = [
  { id: 0, title: "Home", path: "/" },
  // { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer id="Footer" className="py-8 bg-gray-100 border-t border-gray-200">
      <div className="container container--sm">
        <div className="max-w-screen-xl mx-auto">
          {/* Logo and Navigation */}
          <div className="text-center mb-8">
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
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-gray-700">
              {links.map(({ id, title, path }) => {
                return (
                  <Link key={id} className="hover:underline" href={path}>
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Store Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
            {/* Location */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-sm text-gray-600">
                {STORE_INFO.address.street}<br />
                {STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.zip}
              </p>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              {Object.entries(STORE_INFO.hours).map(([day, hours]) => (
                <p key={day} className="text-sm text-gray-600">
                  {day}: {hours}
                </p>
              ))}
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-600">
                Phone: <a href={`tel:${STORE_INFO.phone}`} className="hover:underline">{STORE_INFO.phone}</a><br />
                Email: <a href={`mailto:${STORE_INFO.email}`} className="hover:underline">{STORE_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-300">
            <span className="text-sm text-gray-500">
              © 2024 {STORE_INFO.name} Restaurant. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
