'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    ChevronUpIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    services: [
        { name: 'Réseaux Wi-Fi Pro', href: '#services' },
        { name: 'Cybersécurité', href: '#services' },
        { name: 'Développement Web', href: '#services' },
        { name: 'Solutions Cloud', href: '#services' },
    ],
    company: [
        { name: 'À Propos', href: '#about' },
        { name: 'Nos Services', href: '#services' },
        { name: 'Tarifs', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ],
    legal: [
        { name: 'Mentions Légales', href: '/mentions-legales' },
        { name: 'Confidentialité', href: '/confidentialite' },
        { name: 'CGV', href: '/cgv' },
        { name: 'Cookies', href: '/cookies' },
    ]
};

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/unetratech',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        )
    },
    {
        name: 'GitHub',
        href: 'https://github.com/unetratech',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        )
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/unetratech',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        )
    }
];

export default function Footer() {
    const { scrollY } = useScroll();
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on('change', y => setShowTop(y > 600));
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <>
            <footer className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 relative overflow-hidden">

                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                    <div className="absolute -top-32 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                    {/* Main Footer Content */}
                    <div className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* Company Info */}
                            <motion.div
                                className="lg:col-span-1"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link href="/" className="flex items-center gap-3 mb-6">
                                    <Image
                                        src="/images/logo2.png"
                                        alt="Unetra Tech"
                                        width={40}
                                        height={40}
                                        className="rounded-xl"
                                    />
                                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Unetra Tech
                  </span>
                                </Link>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Votre partenaire de confiance pour la transformation digitale.
                                    Solutions informatiques innovantes et accompagnement personnalisé.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPinIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span>Paris & Île-de-France</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <a href="tel:+33123456789" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            +33 1 23 45 67 89
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <EnvelopeIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <a href="mailto:contact@unetratech.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            contact@unetratech.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <ClockIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span>Lun-Ven: 9h-18h</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Services */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h3 className="text-lg font-semibold mb-6 text-gray-900">Nos Services</h3>
                                <ul className="space-y-3">
                                    {footerLinks.services.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Company */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-lg font-semibold mb-6 text-gray-900">Entreprise</h3>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Newsletter & Social */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold mb-6 text-gray-900">Restez Connecté</h3>

                                {/* Newsletter */}
                                <div className="mb-6">
                                    <p className="text-gray-600 text-sm mb-4">
                                        Recevez nos actualités et conseils tech
                                    </p>
                                    <form className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="Votre email"
                                            className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
                                        >
                                            OK
                                        </button>
                                    </form>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <p className="text-gray-600 text-sm mb-4">Suivez-nous</p>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-white border border-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:border-transparent rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                                                title={social.name}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="border-t border-gray-200 py-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                            {/* Copyright */}
                            <div className="text-center md:text-left">
                                <p className="text-gray-500 text-sm">
                                    © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Unetra Tech</span>.
                                    Tous droits réservés.
                                </p>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap justify-center gap-6 text-sm">
                                {footerLinks.legal.map((link, index) => (
                                    <span key={link.name} className="flex items-center">
                    <a
                        href={link.href}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                                        {index < footerLinks.legal.length - 1 && (
                                            <span className="ml-6 text-gray-300">•</span>
                                        )}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Additional Company Info */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                                <div>
                                    SIRET : 123 456 789 00012 • TVA : FR12345678901
                                </div>
                                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    Service disponible
                  </span>
                                    <span>•</span>
                                    <span>Réponse sous 24h</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <motion.button
                className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                    showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Revenir en haut"
            >
                <ChevronUpIcon className="w-5 h-5" />
            </motion.button>
        </>
    );
}
