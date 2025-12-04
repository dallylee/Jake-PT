import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake Turner PT | Personal Trainer at PureGym London Aldgate",
  description: "1 to 1 personal training at PureGym London Aldgate for busy young professionals. 8 week shred, strength and muscle coaching, and gym confidence kickstart with serious, trackable results.",
  openGraph: {
    title: "Jake Turner PT | Personal Trainer at PureGym London Aldgate",
    description: "1 to 1 personal training at PureGym London Aldgate for busy young professionals. 8 week shred, strength and muscle coaching, and gym confidence kickstart with serious, trackable results.",
    type: "website",
    // images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jake Turner",
              "jobTitle": "Personal Trainer",
              "worksFor": {
                "@type": "GymOrCenter",
                "name": "PureGym London Aldgate",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Aldgate, London",
                  "addressCountry": "UK"
                }
              },
              "url": "https://jaketurnerpt.com", // Placeholder URL
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
