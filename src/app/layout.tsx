import { Metadata } from "next";
import Header from "@/components/layout/Header";
import FloatingCTA from "@/components/ui/FloatingCTA";
import StructuredData from "@/components/layout/StructuredData";
import "../styles/main.scss";
import { Inter, Poppins } from "next/font/google";
import { STORE_INFO } from "@/constants/storeInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yaichi - Authentic Japanese Udon & Seafood | Milpitas, CA",
  description:
    "Experience authentic Japanese udon and fresh seafood at Yaichi in Milpitas. Traditional flavors, modern atmosphere. Order online or visit us today!",
  keywords: [
    "Japanese restaurant",
    "udon",
    "seafood",
    "Milpitas restaurant",
    "authentic Japanese food",
    "sushi",
    "ramen",
    "Japanese cuisine",
    "Bay Area Japanese restaurant",
    "Milpitas dining",
    "online ordering",
    "DoorDash delivery",
  ],
  authors: [{ name: STORE_INFO.name }],
  creator: STORE_INFO.name,
  publisher: STORE_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yaichi-restaurant.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yaichi - Authentic Japanese Udon & Seafood | Milpitas, CA",
    description:
      "Experience authentic Japanese udon and fresh seafood at Yaichi in Milpitas. Traditional flavors, modern atmosphere. Order online or visit us today!",
    url: "https://yaichi-restaurant.com",
    siteName: STORE_INFO.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yaichi Japanese Restaurant - Udon & Seafood",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaichi - Authentic Japanese Udon & Seafood | Milpitas, CA",
    description:
      "Experience authentic Japanese udon and fresh seafood at Yaichi in Milpitas. Traditional flavors, modern atmosphere.",
    creator: "@yaichi_restaurant",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Hidden form for Netlify Forms detection - required for Next.js SSR */}
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
          style={{ display: "none" }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="subject" />
          <textarea name="message" />
        </form>

        <Header />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
