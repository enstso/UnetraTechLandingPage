import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const GA_ID = "G-XXXXXXXXXX"; // Remplacer par votre vrai ID

export const metadata: Metadata = {
  title: {
    default: "Unetra Tech - Solutions Informatiques Innovantes",
    template: "%s | Unetra Tech",
  },
  description:
      "Spécialiste en transformation digitale et solutions informatiques sur mesure. Développement web, cloud, sécurité et conseils pour entreprises modernes.",
  keywords: [
    "services informatiques",
    "transformation digitale",
    "développement web",
    "solutions cloud",
    "sécurité informatique",
    "conseil IT"
  ],
  openGraph: {
    title: "Unetra Tech - Solutions Informatiques",
    description: "Transformation digitale et services informatiques pour entreprises",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unetra Tech - Solutions Informatiques"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unetra Tech - Solutions Informatiques",
    description: "Spécialiste en transformation digitale et solutions IT",
    images: ["/images/twitter-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
  alternates: {
    canonical: "https://votre-domaine.com",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
          className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-inter antialiased`}
      >
      <div className="relative min-h-screen">
        {children}
      </div>
      <GoogleAnalytics gaId={GA_ID} />
      </body>
      </html>
  );
}
