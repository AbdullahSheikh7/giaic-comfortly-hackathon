import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"], display: "swap", weight: "variable" });

export const metadata: Metadata = {
  title: "Comforty",
  description: "Make your house comfortable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
