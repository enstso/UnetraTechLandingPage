"use client";
import { motion } from "framer-motion";
import { CheckIcon } from '@heroicons/react/24/solid';

const pricingPlans = [
  {
    name: "Pack Start",
    price: "249€",
    features: ["Installation Wi-Fi", "Configuration de base", "Support 7j/7"],
    recommended: false

  },
  {
    name: "Pack Pro",
    price: "649€",
    features: ["Réseau complet", "VLAN, Firewall", "Monitoring + Support"],
    recommended: true

  },
  {
    name: "Surveillance",
    price: "129€/caméra",
    features: ["Installation UniFi Protect", "Accès distant", "Stockage local ou cloud"],
    recommended: false

  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white px-6 lg:px-24" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Nos Forfaits Tarifaires
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className={`
                border rounded-xl p-8 text-center transition-all 
                ${plan.recommended 
                  ? 'border-primary bg-blue-50 scale-105 shadow-xl' 
                  : 'border-gray-200 hover:shadow-lg'}
              `}
            >
              {plan.recommended && (
                <div className="bg-primary text-white px-4 py-1 rounded-full inline-block mb-4">
                  Recommandé
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}€ 
                <span className="text-base text-gray-500"> /mois</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center justify-center text-gray-700"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-full py-3 rounded-full transition-colors
                  ${plan.recommended 
                    ? 'bg-primary text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                Choisir ce plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
