import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Améliore le chargement initial
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: 'Votre Solution Innovative - Transformation Digitale',
    template: '%s | Unetra Tech',
  },
  description: 'Solution innovante qui révolutionne votre productivité et votre stratégie digitale.',
  openGraph: {
    title: 'Votre Solution Innovative',
    description: 'Transformation digitale pour les entreprises modernes',
    images: ['/public/images/logo.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Votre Solution Innovative',
    description: 'Transformation digitale pour les entreprises modernes',
    images: ['/public/images/linkedin.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  verification: {
    google: 'votre-code-verification-google'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />

      </body>
    </html>
  );
}
