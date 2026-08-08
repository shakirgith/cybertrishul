import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/common/footer/Footer";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Trishul",
  description: "Cyber Security Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
         <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}