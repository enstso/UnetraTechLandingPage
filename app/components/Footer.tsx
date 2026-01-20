'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    ChevronUpIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    services: [
        { name: 'Sites Vitrines Premium', category: 'Développement', icon: '🌐' },
        { name: 'Solutions Cloud', category: 'Cloud', icon: '☁️' },
        { name: 'Réseaux Wi-Fi Pro', category: 'Infrastructure', icon: '📡' },
        { name: 'Audit de Sécurité', category: 'Sécurité', icon: '🔐' },
        { name: 'Support Technique Premium', category: 'Support', icon: '🛠️' },
    ],
    company: [
        { name: 'À Propos', href: '#about' },
        { name: 'Nos Services', href: '#services' },
        { name: 'Tarifs', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ]
};

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/unetra-tech/people/',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

    const handleServiceClick = (category: string) => {
        window.dispatchEvent(new CustomEvent('serviceCategorySelected', {
            detail: category
        }));
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <>
            <footer className="bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                {/* Background decorative */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                    <div className="absolute -top-32 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                    {/* CTA Banner */}
                    <motion.div
                        className="py-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                        Prêt à transformer votre <span className="text-blue-200">infrastructure digitale</span> ?
                                    </h3>
                                    <p className="text-blue-100 text-lg">
                                        Discutons de votre projet et recevez un devis personnalisé sous 24h
                                    </p>
                                </div>
                                <motion.a
                                    href="#contact"
                                    className="group px-8 py-4 bg-white hover:bg-blue-50 text-blue-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Démarrer mon projet</span>
                                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

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
                                    Votre partenaire digital agile et réactif pour chaque projet tech.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPinIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span>Paris & Île-de-France</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <a href="tel:+33646574636" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            +33 6 46 57 46 36
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
                                            <button
                                                onClick={() => handleServiceClick(link.category)}
                                                className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                                            >
                                                <span>{link.icon}</span>
                                                <span>{link.name}</span>
                                            </button>
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

                            {/* Social Media */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold mb-6 text-gray-900">Suivez-nous</h3>
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
                                    © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Unetra Tech</span>. Tous droits réservés.
                                </p>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap justify-center gap-6 text-sm">
                                {[
                                    { name: 'Mentions Légales', href: '/mentions-legales' },
                                    { name: 'Confidentialité', href: '/confidentialite' },
                                    { name: 'Cookies', href: '/cookies' }
                                ].map((link, index) => (
                                    <span key={link.name} className="flex items-center">
                                        <a
                                            href={link.href}
                                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                        {index < 2 && (
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
                                    Unetra Tech • Solutions digitales sur-mesure
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
