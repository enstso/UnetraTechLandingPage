"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  ChevronUpIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  CloudIcon,
  ComputerDesktopIcon,
  SignalIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Dépannage et support", category: "Support", icon: WrenchScrewdriverIcon },
    { name: "Sécurité et sauvegardes", category: "Sécurité", icon: ShieldCheckIcon },
    { name: "Migration cloud", category: "Cloud", icon: CloudIcon },
    { name: "Réseaux d'entreprise", category: "Infrastructure", icon: SignalIcon },
    { name: "Sites orientés conversion", category: "Développement", icon: ComputerDesktopIcon },
  ],
  company: [
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/unetra-tech/people/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => setShowTop(y > 600));
    return () => unsubscribe();
  }, [scrollY]);

  const handleServiceClick = (category: string) => {
    window.dispatchEvent(new CustomEvent("serviceCategorySelected", { detail: category }));
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="py-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 shadow-2xl md:p-12">
              <motion.div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white md:text-4xl">Passez d'une IT subie à une IT pilotée</h3>
                  <p className="mt-3 text-lg text-blue-100">Recevez votre plan d'action et un devis personnalisé sous 24h.</p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition hover:bg-blue-50"
                >
                  Démarrer mon audit
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="py-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Link href="/" className="mb-6 flex items-center gap-3">
                  <Image src="/images/logo2.png" alt="Unetra Tech" width={40} height={40} className="rounded-xl" />
                  <span className="text-2xl font-bold text-blue-700">Unetra Tech</span>
                </Link>

                <p className="mb-6 text-gray-600">Support informatique orienté continuité d'activité pour PME et indépendants.</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPinIcon className="h-5 w-5 text-blue-500" />
                    <span>Paris et Île-de-France</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                    <a href="tel:+33646574636" className="hover:text-blue-600">+33 6 46 57 46 36</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                    <a href="mailto:contact.unetratech@gmail.com" className="hover:text-blue-600">contact.unetratech@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <h3 className="mb-6 text-lg font-semibold text-gray-900">Nos Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((service) => (
                    <li key={service.name}>
                      <button
                        onClick={() => handleServiceClick(service.category)}
                        className="group flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600"
                      >
                        <service.icon className="h-4 w-4 text-blue-500" />
                        <span>{service.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <h3 className="mb-6 text-lg font-semibold text-gray-900">Entreprise</h3>
                <ul className="space-y-3 text-sm">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-600 transition hover:text-blue-600">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <h3 className="mb-6 text-lg font-semibold text-gray-900">Suivez-nous</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="border-t border-gray-200 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Unetra Tech. Tous droits réservés.</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="/mentions-legales" className="text-gray-500 transition hover:text-blue-600">
                  Mentions Légales
                </a>
                <a href="/confidentialite" className="text-gray-500 transition hover:text-blue-600">
                  Confidentialité
                </a>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6 text-xs text-gray-400">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <span>Unetra Tech - Solutions informatiques pour PME</span>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Service disponible
                  </span>
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      <motion.button
        className={`fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white shadow-lg transition ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Revenir en haut"
      >
        <ChevronUpIcon className="h-5 w-5" />
      </motion.button>
    </>
  );
}
