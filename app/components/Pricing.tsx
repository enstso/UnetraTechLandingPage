"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

/* stagger container */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const plans = [
  { name: "Pack Start", features: ["Installation Wi-Fi", "Configuration de base", "Support 7j/7"] },
  { name: "Pack Pro", features: ["Réseau complet", "VLAN, Firewall", "Monitoring + Support"], recommended: true },
  { name: "Surveillance", features: ["Installation UniFi Protect", "Accès distant", "Stockage local ou cloud"] },
  { name: "Pack Développement", features: ["Application Web/Mobile", "API & back-office", "Déploiement & maintenance"] },
  { name: "Audit & Optimisation", features: ["Audit complet infra / code / sécu", "Schémas & documentation", "Plan d’actions concret"] },
  { name: "Pack Sur Mesure", features: ["Solutions personnalisées", "Infra · dev · cloud · audit", "Accompagnement dédié"] },
];

export default function Pricing() {
  // Fonction pour sauvegarder dans localStorage
  function handleClick(planName: string) {
    console.log("Selected plan:", planName);
    localStorage.setItem("selectedPack", planName);
  }

  return (
    <motion.section
      id="pricing"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      {/* halos */}
      <div className="absolute -top-24 -left-32 w-96 h-96 bg-indigo-500/30 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-purple-600/25 blur-3xl rounded-full -z-10 animate-pulse delay-500" />

      <motion.h2
        className="gradient-text text-3xl md:text-4xl font-bold text-center mb-20"
        variants={item}
      >
        Nos Packs & Services
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={container}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`card-pricing bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 text-center
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300
                        flex flex-col justify-between
                        relative z-10`}
          >
            <div>
              {plan.recommended && (
                <span className="px-4 py-1 mb-5 inline-block rounded-full text-sm font-medium
                                 bg-gradient-to-r from-indigo-500 to-purple-500">
                  Recommandé
                </span>
              )}

              <h3 className="text-2xl font-semibold mb-6">{plan.name}</h3>

              <ul className="space-y-4 mb-10 text-slate-300 text-left text-sm max-w-xs mx-auto">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-[2px]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="btn-gradient relative z-20"
              onClick={() => handleClick(plan.name)}
            >
              Demander un devis
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
