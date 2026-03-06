"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  LifebuoyIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    icon: ShieldCheckIcon,
    title: "Sécurité",
    desc: "Protection active des accès, postes et données critiques.",
  },
  {
    icon: ClockIcon,
    title: "Continuité",
    desc: "Réduction des interruptions avec sauvegarde et prévention.",
  },
  {
    icon: LifebuoyIcon,
    title: "Tranquillité",
    desc: "Support humain, réactif, avec suivi régulier.",
  },
  {
    icon: ServerStackIcon,
    title: "Évolutivité",
    desc: "Infrastructure qui suit votre croissance.",
  },
];

const metrics = [
  { value: "24h", label: "Délai moyen de première réponse" },
  { value: "99,9%", label: "Objectif de disponibilité" },
  { value: "100%", label: "Devis détaillés et transparents" },
  { value: "1", label: "Interlocuteur principal par dossier" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="absolute inset-0">
        <div className="absolute -left-14 top-16 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-10 bottom-16 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Unetra Tech: un partenaire IT orienté
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> résultats business</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Notre mission est simple: sécuriser votre activité, réduire les pannes et structurer un support fiable dans la durée.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-lg sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900">Ce que votre entreprise gagne</h3>
              <p className="mt-3 text-gray-600">
                Nous ne vendons pas seulement de la technique. Nous vendons la sécurité, la continuité d'activité et la tranquillité d'esprit.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.4 }}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <pillar.icon className="h-6 w-6 text-blue-600" />
                    <h4 className="mt-3 font-semibold text-gray-900">{pillar.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-lg sm:p-8">
              <h3 className="text-xl font-bold text-gray-900">Indicateurs de service</h3>
              <div className="mt-6 grid grid-cols-2 gap-5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl bg-slate-50 p-4 text-center">
                    <p className="text-2xl font-black text-blue-700">{metric.value}</p>
                    <p className="mt-1 text-sm text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-7 text-white sm:p-8">
              <h3 className="text-xl font-bold">Approche recommandée pour votre croissance</h3>
              <p className="mt-3 text-blue-100">
                Dépannage rapide, sécurisation, puis maintenance mensuelle. Cette progression maximise la valeur tout en réduisant les risques opérationnels.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Parler à un expert
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
