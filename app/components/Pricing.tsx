"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const pricingPlans = [
  {
    name: "Pack Start",
    price: "249€",
    features: ["Installation Wi-Fi", "Configuration de base", "Support 7j/7"],
    recommended: false,
  },
  {
    name: "Pack Pro",
    price: "649€",
    features: ["Réseau complet", "VLAN, Firewall", "Monitoring + Support"],
    recommended: true,
  },
  {
    name: "Surveillance",
    price: "129€",
    features: ["Installation UniFi Protect", "Accès distant", "Stockage local ou cloud"],
    recommended: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      aria-label="Forfaits tarifaires"
      className="py-20 bg-white px-6 lg:px-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Nos Forfaits Tarifaires
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`border rounded-2xl p-8 text-center transition-all ${
                plan.recommended
                  ? "border-primary bg-blue-50 scale-105 shadow-2xl"
                  : "border-gray-200 hover:shadow-lg"
              }`}
            >
              {plan.recommended && (
                <div className="bg-primary text-white px-4 py-1 rounded-full inline-block mb-4 text-sm">
                  Recommandé
                </div>
              )}

              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{plan.name}</h3>

              <div className="mb-6">
                <div className="text-sm font-normal text-gray-600 mb-2">À partir de</div>
                <div className="text-5xl font-bold text-primary">
                  {plan.price}
                  <div className="text-sm text-gray-500 font-normal mt-1">/mois</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  plan.recommended
                    ? "bg-primary text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                aria-label={`Choisir le ${plan.name}`}
              >
                Choisir ce plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
