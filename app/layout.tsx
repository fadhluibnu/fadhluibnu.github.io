import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fadhluibnu.my.id"),
  title: {
    default: "Fadhlu Ibnu — Backend Developer & FullStack Engineer | Portfolio",
    template: "%s | Fadhlu Ibnu",
  },
  description:
    "Portfolio Fadhlu Ibnu, Backend Developer & FullStack Engineer. Lihat proyek, pengalaman, dan keahlian dalam membangun aplikasi web modern.",
  keywords: ["Fadhlu Ibnu", "Backend Developer", "FullStack Engineer", "Portfolio", "Next.js", "React"],
  authors: [{ name: "Fadhlu Ibnu", url: "https://fadhluibnu.my.id" }],
  creator: "Fadhlu Ibnu",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fadhluibnu.my.id",
    siteName: "Fadhlu Ibnu Portfolio",
    title: "Fadhlu Ibnu — Backend Developer & FullStack Engineer",
    description: "Portfolio Fadhlu Ibnu, Backend Developer & FullStack Engineer.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Fadhlu Ibnu Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadhlu Ibnu — Backend Developer & FullStack Engineer",
    description: "Portfolio Fadhlu Ibnu, Backend Developer & FullStack Engineer.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
