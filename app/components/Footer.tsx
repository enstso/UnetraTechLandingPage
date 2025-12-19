'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    ChevronUpIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    ShieldCheckIcon,
    BoltIcon,
    SparklesIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    services: [
        { name: 'Sites Vitrines Premium', category: 'Développement', icon: '🌐' },
        { name: 'Solutions Cloud', category: 'Cloud', icon: '☁️' },
        { name: 'Audit de Sécurité', category: 'Sécurité', icon: '🔐' },
        { name: 'DevOps & Automatisation', category: 'DevOps', icon: '🚀' },
        { name: 'Support Technique Premium', category: 'Support', icon: '🔧' },
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

const trustBadges = [
    { icon: ShieldCheckIcon, text: 'Sécurité garantie' },
    { icon: BoltIcon, text: 'Support réactif 24h' },
    { icon: SparklesIcon, text: 'Qualité premium' }
];

export default function Footer() {
    const { scrollY } = useScroll();
    const [showTop, setShowTop] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const unsubscribe = scrollY.on('change', y => setShowTop(y > 600));
        return () => unsubscribe();
    }, [scrollY]);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    // FONCTION POUR ACTIVER UNE CATÉGORIE DE SERVICE
    const handleServiceClick = (category: string) => {
        // Dispatch un événement custom pour informer la section Services
        window.dispatchEvent(new CustomEvent('serviceCategorySelected', {
            detail: category
        }));

        // Scroll vers la section services
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <>
            <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* CTA Banner */}
                    <motion.div
                        className="py-12 border-b border-white/10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                        Prêt à transformer votre <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">infrastructure digitale</span> ?
                                    </h3>
                                    <p className="text-blue-100 text-lg mb-6 md:mb-0">
                                        Discutons de votre projet et recevez un devis personnalisé sous 24h
                                    </p>
                                </div>
                                <motion.a
                                    href="#contact"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                            {/* Company Info - 2 colonnes */}
                            <motion.div
                                className="lg:col-span-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                                        <Image
                                            src="/images/logo2.png"
                                            alt="Unetra Tech"
                                            width={48}
                                            height={48}
                                            className="relative rounded-2xl shadow-lg"
                                        />
                                    </div>
                                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                        Unetra Tech
                                    </span>
                                </Link>

                                <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                                    Votre partenaire digital pour transformer vos ambitions en solutions concrètes.
                                    Expertise tech, accompagnement humain.
                                </p>

                                {/* Trust Badges */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {trustBadges.map((badge, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                                        >
                                            <badge.icon className="w-4 h-4 text-blue-400" />
                                            <span className="text-sm text-blue-100">{badge.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Contact Info Cards */}
                                <div className="space-y-3">
                                    {[
                                        { icon: MapPinIcon, text: 'Paris & Île-de-France', href: '#' },
                                        { icon: PhoneIcon, text: '+33 6 46 57 46 36', href: 'tel:+33646574636' },
                                        { icon: EnvelopeIcon, text: 'contact@unetratech.com', href: 'mailto:contact@unetratech.com' },
                                        { icon: ClockIcon, text: 'Lun-Ven: 9h-18h', href: '#' }
                                    ].map((item, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={item.href}
                                            className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                            <span className="text-blue-100 group-hover:text-white transition-colors">{item.text}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Services & Company Links Combined */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Nos Services
                                </h3>
                                <ul className="space-y-3 mb-10">
                                    {footerLinks.services.map((link) => (
                                        <li key={link.name}>
                                            <button
                                                onClick={() => handleServiceClick(link.category)}
                                                className="group flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 w-full text-left"
                                            >
                                                <span className="text-lg">{link.icon}</span>
                                                <span className="group-hover:translate-x-1 transition-transform">
                                                    {link.name}
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Entreprise
                                </h3>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
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
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Newsletter
                                </h3>
                                <p className="text-blue-100 mb-4 text-sm">
                                    Recevez nos actualités, conseils tech et offres exclusives
                                </p>
                                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="votre@email.com"
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                        required
                                    />
                                    <motion.button
                                        type="submit"
                                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        S'abonner
                                    </motion.button>
                                </form>

                                {/* Social Media */}
                                <div className="mt-8">
                                    <p className="text-blue-100 mb-4 text-sm">Suivez-nous</p>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                                title={social.name}
                                            >
                                                <span className="text-blue-100 group-hover:text-white transition-colors">
                                                    {social.icon}
                                                </span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="border-t border-white/10 py-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Copyright */}
                            <div className="text-center md:text-left">
                                <p className="text-blue-200 text-sm">
                                    © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Unetra Tech</span>. Tous droits réservés.
                                </p>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap justify-center gap-6 text-sm">
                                {[
                                    { name: 'Mentions Légales', href: '/mentions-legales' },
                                    { name: 'Confidentialité', href: '/confidentialite' },
                                    { name: 'CGV', href: '/cgv' },
                                    { name: 'Cookies', href: '/cookies' }
                                ].map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-blue-200 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            {/* Status Badge */}
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <span className="flex items-center gap-2">
                                    <span className="relative">
                                        <span className="w-2 h-2 bg-green-400 rounded-full block" />
                                        <span className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
                                    </span>
                                    <span className="text-sm text-blue-100">Service disponible</span>
                                </span>
                                <span className="text-blue-300/50">•</span>
                                <span className="text-sm text-blue-100">Réponse sous 24h</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <motion.button
                className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-2xl shadow-2xl transition-all duration-300 group ${
                    showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Revenir en haut"
            >
                <ChevronUpIcon className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
            </motion.button>
        </>
    );
}
