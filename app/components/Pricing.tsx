"use client";
import { motion } from "framer-motion";

const packs = [
  {
    name: "Pack Start",
    price: "249€",
    features: ["Installation Wi-Fi", "Configuration de base", "Support 7j/7"],
  },
  {
    name: "Pack Pro",
    price: "649€",
    features: ["Réseau complet", "VLAN, Firewall", "Monitoring + Support"],
  },
  {
    name: "Surveillance",
    price: "129€/caméra",
    features: ["Installation UniFi Protect", "Accès distant", "Stockage local ou cloud"],
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 bg-slate-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Nos Offres</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
        {packs.map((pack, i) => (
          <motion.div
            key={i}
            className="bg-slate-700 p-8 rounded-xl w-full max-w-sm shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{pack.name}</h3>
            <p className="text-3xl font-bold text-brand mb-6">{pack.price}</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {pack.features.map((feat, idx) => (
                <li key={idx}>✅ {feat}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
