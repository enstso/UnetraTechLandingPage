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
  metadataBase: new URL("https://unetratech.com"),
  title: {
    default: "Support Informatique Paris | Dépannage & Maintenance PME | Unetra Tech",
    template: "%s | Unetra Tech",
  },
  description:
    "Unetra Tech accompagne les PME et indépendants à Paris et en Île-de-France: dépannage informatique, maintenance, sécurité, sauvegarde et support IT récurrent.",
  keywords: [
    "dépannage informatique Paris",
    "maintenance informatique PME Paris",
    "support informatique entreprise Île-de-France",
    "sécurité informatique PME",
    "sauvegarde données entreprise",
    "externalisation informatique Paris",
  ],
  openGraph: {
    title: "Support Informatique Paris et Île-de-France | Unetra Tech",
    description:
      "Dépannage, sécurité, maintenance et gestion IT pour PME et indépendants à Paris et en Île-de-France.",
    type: "website",
    locale: "fr_FR",
    url: "https://unetratech.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unetra Tech - Support informatique Paris et Île-de-France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage et Maintenance Informatique Paris | Unetra Tech",
    description:
      "Support IT pour PME et indépendants: intervention rapide, sécurité et maintenance récurrente.",
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
  alternates: {
    canonical: "https://unetratech.com",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
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
