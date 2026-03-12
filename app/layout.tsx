import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo-final-icon.svg",
    shortcut: "/logo-final-icon.svg",
  },
  title: "AISIA Club — Where AI Meets Asia",
  description:
    "Southeast Asia's open community for artificial intelligence. News, learning, events, and connections for everyone curious about AI in Malaysia and beyond.",
  openGraph: {
    title: "AISIA Club — Where AI Meets Asia",
    description:
      "Southeast Asia's open community for artificial intelligence. News, learning, events, and connections.",
    url: "https://aisiaclub.com",
    siteName: "AISIA Club",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISIA Club — Where AI Meets Asia",
    description: "Southeast Asia's open AI community — Malaysia-first.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
