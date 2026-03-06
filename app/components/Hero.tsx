"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const priorities = [
  {
    title: "Panne bloquante",
    desc: "Intervention prioritaire sur poste, serveur ou réseau.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Sécurité et sauvegarde",
    desc: "Protection active et plan de restauration testé.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Contrat récurrent",
    desc: "Maintenance mensuelle pour éviter les interruptions.",
    icon: ClipboardDocumentCheckIcon,
  },
];

const socialProof = [
  "Réponse sous 24h ouvrées",
  "Interventions sur site et à distance",
  "Accompagnement PME et indépendants",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100 pt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Audit informatique offert pour les nouveaux clients
          </div>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Support informatique pour
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> PME et indépendants</span>
            <br />
            à Paris et en Île-de-France
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Dépannage informatique à Paris, sécurité, maintenance et gestion IT externalisée.
            Notre objectif: transformer un besoin ponctuel en continuité d&apos;activité durable.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {socialProof.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white/80 p-3 text-sm text-gray-700">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700"
            >
              Demander un audit gratuit
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Voir les parcours clients
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto w-full max-w-xl"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-gray-900">Funnel recommandé</h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">B2B IT</span>
            </div>

            <div className="space-y-4">
              {priorities.map((item, index) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-700">Etape {index + 1}</p>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
              <p className="text-sm font-semibold text-blue-100">Objectif commercial</p>
              <p className="mt-1 text-lg font-bold">Client ponctuel vers contrat mensuel</p>
              <p className="mt-2 text-sm text-blue-100">
                Dépannage, sécurisation, prévention, puis support récurrent.
              </p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-2 underline-offset-4">
                <PhoneIcon className="h-4 w-4" />
                Planifier un diagnostic
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
