"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const pricingPlans = [
  {
    name: "Pack Start",
    features: ["Installation Wi-Fi", "Configuration de base", "Support 7j/7"],
  },
  {
    name: "Pack Pro",
    features: ["Réseau complet", "VLAN, Firewall", "Monitoring + Support"],
    recommended: true,
  },
  {
    name: "Surveillance",
    features: ["Installation UniFi Protect", "Accès distant", "Stockage local ou cloud"],
  },
  {
    name: "Pack Développement",
    features: [
      "Application Web ou Mobile sur mesure",
      "Développement API / back-office",
      "Déploiement & maintenance",
    ],
  },
  {
    name: "Audit & Optimisation",
    features: [
      "Audit complet (infra, code, sécu)",
      "Schémas techniques et documentation",
      "Plan de recommandations concrètes",
    ],
  },

  {
    name: "Pack Sur Mesure",
    features: [
      "Solutions totalement personnalisées",
      "Infrastructure, développement, cloud, audit",
      "Accompagnement dédié & devis adapté"
    ],
  }
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Fond lumineux subtil */}
      <div className="absolute -top-24 -left-32 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-2xl rounded-full animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Packs & Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl p-8 text-center border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {plan.recommended && (
                  <div className="bg-indigo-500 text-white px-4 py-1 rounded-full inline-block mb-4 text-sm">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                  {plan.name}
                </h3>

                <ul className="space-y-4 mb-8 text-slate-300 text-left max-w-xs mx-auto text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-auto w-full py-3 rounded-full font-semibold text-white bg-indigo-600 group-hover:bg-indigo-700 transition text-center"
              >
                Demander un devis
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
