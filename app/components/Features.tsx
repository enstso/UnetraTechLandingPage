"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wi-Fi Professionnel",
    description: "Déploiement de réseaux sans fil performants, sécurisés, multi-SSID.",
    icon: "📶",
  },
  {
    title: "Cybersécurité",
    description: "Pare-feu, VLAN, VPN, segmentation réseau, surveillance proactive.",
    icon: "🔐",
  },
  {
    title: "Vidéosurveillance",
    description: "Installation & configuration UniFi Protect pour une sécurité visuelle.",
    icon: "📹",
  },
  {
    title: "Support & Maintenance",
    description: "Assistance à distance, mise à jour, supervision & dépannage.",
    icon: "🛠️",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-slate-700 p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
