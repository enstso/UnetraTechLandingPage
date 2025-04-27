"use client";
import { motion } from "framer-motion";
import { 
  VideoCameraIcon, 
  LockClosedIcon,
  WifiIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

const features = [
  {
    title: "Wi-Fi Professionnel",
    description: "Déploiement de réseaux sans fil performants, sécurisés, multi-SSID.",
    icon: WifiIcon,
  },
  {
    title: "Cybersécurité",
    description: "Pare-feu, VLAN, VPN, segmentation réseau, surveillance proactive.",
    icon: LockClosedIcon,
  },
  {
    title: "Vidéosurveillance",
    description: "Installation & configuration UniFi Protect pour une sécurité visuelle.",
    icon: VideoCameraIcon,
  },
  {
    title: "Support & Maintenance",
    description: "Assistance à distance, mise à jour, supervision & dépannage.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white px-6 lg:px-24" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Nos Fonctionnalités Clés
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index} 
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl text-center 
              hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
