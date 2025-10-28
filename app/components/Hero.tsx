"use client";

import {motion} from "framer-motion";
import {
    ChevronRightIcon,
    CheckCircleIcon,
    PlayCircleIcon
} from "@heroicons/react/24/solid";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex items-center overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"/>
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"
                     style={{animationDelay: '2s'}}/>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3E%3Cpath d='m0 .5h32m-32 32v-32m32 0v32m-32-32h32'/%3E%3C/svg%3E')] opacity-30"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

                    {/* Contenu Texte */}
                    <motion.div
                        className="space-y-8"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2, duration: 0.6}}
                            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                            Experts cloud, sécurité & digitalisation
                        </motion.div>

                        {/* Titre Principal */}
                        <motion.h1
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3, duration: 0.8}}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                        >
                            Propulsez votre entreprise vers le{" "}
                            <span
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                futur digital
                            </span>
                        </motion.h1>

                        {/* Sous-titre */}
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5, duration: 0.6}}
                            className="text-xl text-gray-600 leading-relaxed max-w-xl"
                        >
                            Solutions informatiques haut de gamme : cloud, infrastructure, cybersécurité, développement et conseil.
                            Profitez d’un accompagnement sur mesure : chaque besoin, chaque défi, chaque ambition.
                        </motion.p>

                        {/* Points forts */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.7, duration: 0.6}}
                            className="flex flex-wrap gap-4 text-sm text-gray-700"
                        >
                            {[
                                'Développement sur mesure',
                                'Support sur mesure',
                                'Audit et sécurité incluses'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500"/>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Boutons CTA */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.9, duration: 0.6}}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Démarrer mon projet
                                <ChevronRightIcon
                                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </a>

                            <a
                                href="#about"
                                className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-gray-200 hover:border-blue-300"
                            >
                                <PlayCircleIcon className="w-5 h-5 mr-2"/>
                                En savoir plus
                            </a>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="flex items-center gap-6 text-sm text-gray-500"
                        >
                            <div className="flex items-center gap-2">
                                {/* Option simple : une seule puce verte ou une icône, ici juste ✅ */}
                                <span className="text-green-500 text-xl mr-1">●</span>
                                <span>Des clients déjà conquis par notre réactivité</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">★★★★★</span>
                                <span>Recommandé pour la qualité du suivi</span>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Visuel Droite */}
                    <motion.div
                        className="relative"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.4, duration: 0.8}}
                    >
                        {/* Dashboard/Interface mockup */}
                        <div
                            className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-1 transition-transform duration-500">

                            {/* Header */}
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"/>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"/>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"/>
                                </div>
                                <div className="ml-4 text-sm text-gray-500">unetratech-dashboard.app</div>
                            </div>

                            {/* Content mockup */}
                            <div className="space-y-4">
                                <div
                                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">Performance Système</div>
                                        <div className="text-2xl font-bold text-blue-600">98.7%</div>
                                    </div>
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                        <div className="text-white text-lg">✓</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        {label: 'Sécurité', value: '100%', color: 'green'},
                                        {label: 'Disponibilité', value: '99.9%', color: 'blue'}
                                    ].map((item) => (
                                        <div key={item.label} className="p-3 bg-gray-50 rounded-lg">
                                            <div className="text-xs text-gray-600">{item.label}</div>
                                            <div
                                                className={`text-lg font-bold text-${item.color}-600`}>{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{y: [-10, 10, -10]}}
                            transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                            className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                        >
                            <div className="flex items-center gap-2 text-sm">
                                <div className="w-3 h-3 bg-green-500 rounded-full"/>
                                <span className="font-medium">Système en ligne</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{y: [10, -10, 10]}}
                            transition={{duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1}}
                            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg p-4"
                        >
                            <div className="text-sm font-medium">+127% Performance</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

