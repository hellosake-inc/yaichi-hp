import Header from "@/components/layout/Header";
import FloatingCTA from "@/components/ui/FloatingCTA";
import "../styles/main.scss";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Yaichi - Authentic Japanese Udon & Seafood | Milpitas, CA",
  description: "Experience authentic Japanese udon and fresh seafood at Yaichi in Milpitas. Traditional flavors, modern atmosphere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
