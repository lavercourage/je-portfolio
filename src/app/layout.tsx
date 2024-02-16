import type { Metadata } from "next";
import "../styles/layout.css";
import "../styles/globals.css";
import "../styles/fonts.css";

import { Fredoka } from "next/font/google";
// import "./globals.css";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const fredoka = Fredoka({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김정음 :: About",
  description: "김정음 프론트엔드 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
