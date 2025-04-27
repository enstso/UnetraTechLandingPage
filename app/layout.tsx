import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const GA_ID = "G-XXXXXXXXXX"; // Remplacer par votre vrai ID

export const metadata: Metadata = {
  title: {
    default: "Votre Solution Innovante - Transformation Digitale",
    template: "%s | Unetra Tech",
  },
  description:
    "Solution innovante qui révolutionne votre productivité et votre stratégie digitale.",
  openGraph: {
    title: "Votre Solution Innovante",
    description: "Transformation digitale pour les entreprises modernes",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre Solution Innovante",
    description: "Transformation digitale pour les entreprises modernes",
    images: ["/images/linkedin.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
