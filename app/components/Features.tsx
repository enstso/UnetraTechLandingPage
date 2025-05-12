"use client";

import { motion } from "framer-motion";
import {
  VideoCameraIcon,
  LockClosedIcon,
  WifiIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CloudIcon,
  ServerStackIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SquaresPlusIcon
} from "@heroicons/react/24/outline";

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
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
    description:
      "Conception et déploiement de réseaux sans fil stables, sécurisés et multi-SSID pour les environnements exigeants.",
    icon: WifiIcon
  },
  {
    title: "Cybersécurité",
    description:
      "Protection du système d'information : firewall, segmentation, VPN, surveillance réseau et politiques de sécurité.",
    icon: LockClosedIcon
  },
  {
    title: "Vidéosurveillance IP",
    description:
      "Installation de systèmes de vidéosurveillance performants via UniFi Protect, avec accès à distance sécurisé.",
    icon: VideoCameraIcon
  },
  {
    title: "Support & Maintenance",
    description:
      "Assistance réactive utilisateurs/applicatifs, supervision d'infrastructure, correctifs et mises à jour régulières.",
    icon: WrenchScrewdriverIcon
  },
  {
    title: "Développement Web & API",
    description:
      "Applications web et interfaces métiers sur mesure, connectées à vos outils et besoins métier.",
    icon: CodeBracketIcon
  },
  {
    title: "Développement Mobile",
    description:
      "Applications mobiles Android/iOS sur mesure, pensées pour les usages clients ou métiers.",
    icon: DevicePhoneMobileIcon
  },
  {
    title: "Développement Desktop",
    description:
      "Applications desktop sur mesure pour Windows, macOS et Linux, adaptées à vos besoins métiers.",
    icon: ComputerDesktopIcon
  },
  {
    title: "Infrastructure Cloud",
    description:
      "Déploiement, migration et gestion d’infrastructures cloud (AWS, Azure, OVH, Proxmox, etc.).",
    icon: CloudIcon
  },
  {
    title: "Administration Systèmes",
    description:
      "Gestion serveurs Linux/Windows, Active Directory, sauvegardes, haute dispo, scripts & performances.",
    icon: ServerStackIcon
  },
  {
    title: "Automatisation & DevOps",
    description:
      "CI/CD, Ansible, scripts, pipelines, Infrastructure as Code, conteneurs Docker/Kubernetes.",
    icon: CpuChipIcon
  },
  {
    title: "Audit & Documentation",
    description:
      "Audit complet : code, infra, sécurité, documentation et recommandations concrètes.",
    icon: DocumentMagnifyingGlassIcon
  },
  {
    title: "Missions sur mesure",
    description:
      "Tout type de mission orientée infrastructure ou développement selon vos besoins spécifiques.",
    icon: SquaresPlusIcon
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nos Fonctionnalités Clés
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl text-center border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <feature.icon className="w-14 h-14 mx-auto mb-6 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
