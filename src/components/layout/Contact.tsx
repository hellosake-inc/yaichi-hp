"use client";
import React, { useState } from "react";
import SocialLink from "../ui/SocialLink";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { STORE_INFO } from "@/constants/storeInfo";

export default function Contact() {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message! We'll get back to you soon."
        );
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="Contact" className="bg-gray-50 py-section">
      <ScrollAnimated className="container container--sm">
        {/* Contact Form Section */}
        <div className="mb-16">
          <h2 className="text-center text-gray-800 heading-second mb-8">
            <span className="text-primary-600">Get in Touch</span>
          </h2>

          <form
            name="contact"
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field for spam protection */}
            <div className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human:{" "}
                <input name="bot-field" />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="(408) 649-3305"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {submitMessage && (
              <div
                className={`mt-4 p-4 rounded-lg text-center ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h2 className="text-center lg:text-left text-gray-800 heading-second">
              <span className="text-primary-600">Contact us</span> <br /> for
              more info
            </h2>

            <address className="flex flex-col items-center mt-6 space-y-8 lg:items-start lg:items-left lg:mt-8">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden w-6 h-6 lg:block text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <span className="truncate w-72 text-gray-600">
                    {STORE_INFO.address.street}
                  </span>
                  <span className="truncate w-72 text-gray-600">
                    {STORE_INFO.address.city}, {STORE_INFO.address.state}{" "}
                    {STORE_INFO.address.zip}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-600 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link
                  className="truncate text-gray-600"
                  href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, "")}`}
                >
                  {STORE_INFO.phone}
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary-600 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <Link
                  className="truncate w-fit text-gray-600"
                  href={`mailto:${STORE_INFO.email}`}
                >
                  {STORE_INFO.email}
                </Link>
              </div>
            </address>

            <section className="mt-6 ">
              <p className="mb-2 text-center lg:text-left text-gray-700">
                Follow us
              </p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <SocialLink
                  variant="instagram"
                  url={STORE_INFO.social.instagram}
                />
              </div>
            </section>
          </div>

          {!isMobile && (
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.547594402587!2d-121.90503562373056!3d37.42414407206525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9d5b3a8fb11%3A0x8e53d7eb8a890414!2s668%20Barber%20Ln%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1706648975000!5m2!1sen!2sus"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </ScrollAnimated>
    </section>
  );
}
