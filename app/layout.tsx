import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JayDaryn Web3.0 Initiative Dubai",
  description:
    "Web3.0 Initiative Dubai - Blockchain | Crypto | NFT | Metaverse | Tech Advisors | Consulting",
  openGraph: {
    title: "JayDaryn Web3.0 Initiative Dubai",
    description:
      "Web3.0 Initiative Dubai - Blockchain | Crypto | NFT | Metaverse | Tech Advisors | Consulting",
    images: [
      {
        url: "/img/banner%202.jpg",
        width: 512,
        height: 512,
        alt: "JayDaryn Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JayDaryn Web3.0 Initiative Dubai",
    description:
      "Web3.0 Initiative Dubai - Blockchain | Crypto | NFT | Metaverse | Tech Advisors | Consulting",
    images: ["/img/banner%202.jpg"],
  },
  icons: {
    icon: [
      { url: "/img/small.png", sizes: "16x16", type: "image/png" },
      { url: "/img/small.png", sizes: "32x32", type: "image/png" },
      { url: "/img/banner%202.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    shortcut: "/img/small.png",
    apple: "/img/banner%202.jpg",
  },
  manifest: "/manifest.json",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0f1a22]">
      <body
        className={`${interSans.variable} antialiased bg-[#0f1a22]`}
      >
        {children}
      </body>
    </html>
  );
}
