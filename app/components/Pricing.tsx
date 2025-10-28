"use client";

import { motion } from "framer-motion";
import { CheckIcon, StarIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const pricingPlans = [
  // Infrastructure
  {
    name: "Pack Start",
    category: "Infrastructure",
    description: "Idéal pour démarrer avec une base réseau solide.",
    price: "À partir de 2 500€",
    duration: "Installation complète",
    features: [
      "Installation Wi-Fi pro",
      "Réseau sécurisé",
      "Formation équipes",
      "Support 30 jours"
    ],
    icon: "🚀", color: "blue", ctaText: "Commencer"
  },
  {
    name: "Pack Pro",
    category: "Infrastructure",
    description: "Réseau, firewall, supervision et évolutivité pour PME.",
    price: "À partir de 5 500€",
    duration: "Projet sur mesure",
    features: [
      "Réseau segmenté VLAN",
      "Firewall avancé + monitoring",
      "Support prioritaire 24/7",
      "Maintenance préventive"
    ],
    icon: "🏢", color: "indigo", recommended: true, ctaText: "Choisir Pro"
  },
  {
    name: "Pack Cloud",
    category: "Infrastructure",
    description: "Déploiement Cloud et migration sécurisée.",
    price: "À partir de 3 500€",
    duration: "Déploiement & formation",
    features: [
      "Migration AWS/Azure/OVH",
      "Automatisation sauvegardes",
      "Sécurité & accès moderne"
    ],
    icon: "☁️", color: "cyan", ctaText: "Passer au Cloud"
  },

  // Support & Heures
  {
    name: "Heures Essentiel",
    category: "Support & Heures",
    description: "Crédit de 10h support - SLA J+1 - 90€/h dégressif.",
    price: "900€",
    duration: "10h support • 12 mois",
    features: [
      "Support garanti (ticket mail)",
      "Interventions réseau & bureautique",
      "Décompte 1/4h"
    ],
    icon: "⌛", color: "emerald", ctaText: "Acheter 10h"
  },
  {
    name: "Heures Business",
    category: "Support & Heures",
    description: "25h support - SLA 8h ouvrées - 81€/h.",
    price: "2 025€",
    duration: "25h support • 12 mois",
    features: [
      "SLA prioritaire",
      "Firewall, sécurité, supervision",
      "Portail client inclus"
    ],
    icon: "🔧", color: "sky", recommended: true, ctaText: "Acheter 25h"
  },
  {
    name: "Heures Premium",
    category: "Support & Heures",
    description: "50h support L1/L2 - SLA 4h - audit inclus.",
    price: "3 825€",
    duration: "50h support • 12 mois",
    features: [
      "Audit sécurité offert",
      "Maintenance préventive incluse",
      "Suivi stratégique trimestriel"
    ],
    icon: "💎", color: "violet", ctaText: "Acheter 50h"
  },

  // Développement & Conseil
  {
    name: "Pack Développement",
    category: "Développement",
    description: "Apps web, mobile et desktop sur-mesure.",
    price: "À partir de 8 500€",
    duration: "Projet personnalisé",
    features: [
      "Design UX/UI moderne",
      "Déploiement, CI/CD",
      "Formation & docs",
      "Maintenance offerte 3 mois"
    ],
    icon: "💻", color: "green", ctaText: "Développer"
  },
  {
    name: "Audit & Conseil",
    category: "Conseil",
    description: "Analyse/sécurité IT, recommandations, schémas détaillés.",
    price: "À partir de 2 500€",
    duration: "Mission 5-15 jours",
    features: [
      "Audit infra/code/cloud",
      "Feuille de route détaillée",
      "Livrables actionnables"
    ],
    icon: "🔍", color: "orange", ctaText: "Demander audit"
  },
  {
    name: "Mission Sur Mesure",
    category: "Conseil",
    description: "Solution 100% personnalisée multi-domaines.",
    price: "Sur devis",
    duration: "Durée flexible",
    features: [
      "Analyse approfondie",
      "Accompagnement dédié",
      "Livrable & support unique"
    ],
    icon: "⭐", color: "pink", ctaText: "Personnaliser"
  }
];

const categories = [
  "Tous",
  "Infrastructure",
  "Support & Heures",
  "Développement",
  "Conseil"
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredPlans = activeCategory === "Tous"
      ? pricingPlans
      : pricingPlans.filter(plan => plan.category === activeCategory);

  function handleClick(planName: string) {
    localStorage.setItem("selectedPack", planName);
    window.dispatchEvent(new CustomEvent("planSelected", { detail: planName }));
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  const getColorClasses = (color: string, recommended: boolean = false) => {
    const colors = {
      blue: recommended ? "from-blue-500 to-blue-600" : "from-blue-50 to-blue-100 border-blue-200",
      indigo: recommended ? "from-indigo-500 to-indigo-600" : "from-indigo-50 to-indigo-100 border-indigo-200",
      purple: recommended ? "from-purple-500 to-purple-600" : "from-purple-50 to-purple-100 border-purple-200",
      green: recommended ? "from-green-500 to-green-600" : "from-green-50 to-green-100 border-green-200",
      orange: recommended ? "from-orange-500 to-orange-600" : "from-orange-50 to-orange-100 border-orange-200",
      cyan: recommended ? "from-cyan-500 to-cyan-600" : "from-cyan-50 to-cyan-100 border-cyan-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
      <section
          id="pricing"
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Packs & Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Solutions complètes et tarification transparente pour tous vos besoins informatiques
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          {/* Category Filter */}
          <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
          >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeCategory === category
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                            : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                >
                  {category}
                </button>
            ))}
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={activeCategory}
          >
            {filteredPlans.map((plan, i) => (
                <motion.div
                    key={`${plan.name}-${i}`}
                    variants={item}
                    className={`relative group ${
                        plan.recommended ? 'lg:scale-105 z-10' : 'hover:scale-105'
                    } transition-all duration-300`}
                >
                  {/* Recommended badge */}
                  {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                          <StarIcon className="w-4 h-4" />
                          Recommandé
                        </div>
                      </div>
                  )}

                  <div className={`relative h-full p-8 flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                      plan.recommended
                          ? 'bg-gradient-to-br from-white to-blue-50 border-blue-300 shadow-blue-100'
                          : `bg-gradient-to-br ${getColorClasses(plan.color)} hover:shadow-lg`
                  }`}>

                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{plan.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-2">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      </div>
                      <p className="text-sm text-gray-500">{plan.duration}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8 flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button ALIGNÉ BAS */}
                    <div className="mt-auto">
                      <button
                          onClick={() => handleClick(plan.name)}
                          className={`w-full group/btn flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                              plan.recommended
                                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                  : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                          }`}
                      >
                        <span>{plan.ctaText}</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  {
                    q: "Incluez-vous la maintenance dans vos offres ?",
                    a: "Oui, chaque projet inclut une période de garantie et un support technique de démarrage. Nous proposons aussi des packs d'heures pour suivre, maintenir et améliorer votre solution dans la durée."
                  },
                  {
                    q: "Vos devis sont-ils vraiment gratuits et sans engagement ?",
                    a: "Oui, vous pouvez demander un diagnostic initial et un chiffrage détaillé, le tout sans aucune obligation de votre part. Notre premier conseil est toujours offert."
                  },
                  {
                    q: "Quels sont vos délais pour un projet ?",
                    a: "Nos délais sont adaptés à notre taille et à la complexité de chaque mission : environ 2 à 6 semaines pour une installation, jusqu’à plusieurs mois pour une application sur-mesure. Nous co-construisons le planning avec vous."
                  },
                  {
                    q: "Le support technique est-il réactif ?",
                    a: "Oui ! Notre équipe est proche de ses clients : vous avez un interlocuteur dédié, et les tickets sont traités en quelques heures ou sous 24h ouvrées selon priorité."
                  },
                  {
                    q: "J’ai un besoin très spécifique, pouvez-vous m’accompagner ?",
                    a: "Notre force, c’est justement la personnalisation : solution cloud, outil métier, audit sécurité, missions sur-mesure… tout est modulable. Parlez-nous de votre contexte, on s’adapte !"
                  },
                  {
                    q: "Combien de clients accompagnez-vous aujourd'hui ?",
                    a: "Nous sommes en plein développement et chaque nouveau projet est traité avec une implication maximale. Vous n’êtes ni un numéro, ni un ticket de support : vous êtes notre priorité !"
                  }
                ].map((faq, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                      <p className="text-gray-600 text-sm">{faq.a}</p>
                    </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Besoin d'aide pour choisir la solution adaptée ?
            </p>
            <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consultation gratuite
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
  );
}
