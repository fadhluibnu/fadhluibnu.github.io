import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fadhlu Ibnu `Abbad — Portofolio",
  description:
    "Portfolio of Fadhlu Ibnu `Abbad, focused on backend development, system architecture, AI integration, and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
