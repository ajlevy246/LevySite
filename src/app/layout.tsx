import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";

// @ts-ignore: allow side-effect css import without type declarations
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const robotoCondensed = Roboto_Condensed({
//   variable: "--font-roboto-condensed",
//   subsets: ["latin"],
// })

export const metadata: Metadata = {
  title: "Alex Levy - Personal Portfolio",
  description: "Hi there! I&apos;m a senior at Virginia Tech, studying computer science and discrete mathematics. This is my personal portfolio site, describing my projects and experience.",
  verification: {
    google: 'cHkxGM-xskW7nnoVIpETkB3Ap6uKULtgfUumbYSk0H0',
  },
  openGraph: {
    title: "Alex Levy - Personal Portfolio",
    description:
      "Hi there! I’m a senior at Virginia Tech, studying computer science and discrete mathematics.",
    url: "https://alexlevy.me", // ← replace with your actual domain
    siteName: "Alex Levy - Personal Portfolio",
    images: [
      {
        url: "https://alexlevy.me/AlexLevyProfile.jpg", // served from public/assets/
        width: 1200,
        height: 630,
        alt: "Alex Levy profile image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased leading-tight">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
