import type { Metadata } from "next";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Dépannage Informatique Paris et Maintenance PME | Unetra Tech",
  description:
    "Dépannage informatique à Paris, maintenance IT pour PME, sécurité et sauvegarde en Île-de-France. Audit gratuit et devis rapide.",
  keywords: [
    "dépannage informatique Paris",
    "maintenance informatique PME Paris",
    "support informatique entreprise Paris",
    "sécurité informatique PME Paris",
    "sauvegarde données entreprise Paris",
  ],
  alternates: {
    canonical: "https://unetratech.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Unetra Tech",
  image: "https://unetratech.com/images/logo2.png",
  url: "https://unetratech.com",
  telephone: "+33 6 46 57 46 36",
  email: "contact.unetratech@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: ["Paris", "Île-de-France"],
  priceRange: "€€",
  sameAs: ["https://www.linkedin.com/company/unetra-tech/people/"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Support informatique pour PME et indépendants",
  provider: {
    "@type": "LocalBusiness",
    name: "Unetra Tech",
    url: "https://unetratech.com",
  },
  areaServed: ["Paris", "Île-de-France"],
  serviceType: [
    "Dépannage informatique",
    "Maintenance informatique PME",
    "Sécurité informatique",
    "Sauvegarde données entreprise",
    "Externalisation IT",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sous quel délai recevons-nous une réponse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous répondons sous 24h ouvrées avec une première qualification et une proposition de créneau d'échange.",
      },
    },
    {
      "@type": "Question",
      name: "L'audit et le devis sont-ils gratuits ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. L'audit initial et le devis sont gratuits et sans engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous uniquement en Île-de-France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons sur site en Île-de-France et à distance partout en France.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <section id="hero" aria-label="Hero Section">
        <Hero />
      </section>

      <section id="features" aria-label="Features Section">
        <Features />
      </section>

      <section id="about" aria-label="About Us Section">
        <About />
      </section>

      <section id="pricing" aria-label="Pricing Section">
        <Pricing />
      </section>

      <section id="testimonials" aria-label="Testimonials Section">
        <Testimonials />
      </section>

      <section id="contact" aria-label="Contact Section">
        <Contact />
      </section>

      <section aria-label="SEO local" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Dépannage informatique à Paris pour PME et indépendants
          </h2>
          <p className="mt-4 max-w-4xl text-gray-600">
            Unetra Tech intervient à Paris et en Île-de-France pour le support informatique des entreprises:
            dépannage urgent, maintenance préventive, sécurité et sauvegarde des données.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Maintenance informatique PME Paris</h3>
              <p className="mt-2 text-sm text-gray-600">
                Contrats mensuels pour limiter les interruptions, sécuriser les postes et garder vos outils opérationnels.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Support informatique entreprise Île-de-France</h3>
              <p className="mt-2 text-sm text-gray-600">
                Assistance à distance et sur site, suivi des incidents et accompagnement des équipes utilisateurs.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Sécurité informatique et sauvegardes</h3>
              <p className="mt-2 text-sm text-gray-600">
                Diagnostic sécurité, correction des failles, plan de restauration et continuité d'activité.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
