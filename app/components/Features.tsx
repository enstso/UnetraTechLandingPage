"use client";

import { useEffect, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import {
  ArrowLongRightIcon,
  BoltIcon,
  CloudIcon,
  ComputerDesktopIcon,
  DocumentCheckIcon,
  LifebuoyIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  SignalIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type Funnel = {
  id: string;
  title: string;
  category: string;
  need: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  steps: string[];
  recurring: string;
};

const funnels: Funnel[] = [
  {
    id: "depannage-maintenance",
    title: "Dépannage -> Contrat de maintenance",
    category: "Support",
    need: "Le client a un problème urgent sur un poste ou un serveur.",
    icon: WrenchScrewdriverIcon,
    steps: [
      "Intervention dépannage",
      "Antivirus et sauvegarde",
      "Plan de prévention",
      "Maintenance mensuelle",
    ],
    recurring: "Contrat support récurrent",
  },
  {
    id: "audit-gestion",
    title: "Audit gratuit -> Gestion IT complète",
    category: "Sécurité",
    need: "L'entreprise veut identifier les risques sans engagement.",
    icon: ShieldCheckIcon,
    steps: [
      "Audit informatique offert",
      "Rapport priorisé",
      "Corrections sécurité / réseau / backup",
      "Pilotage IT mensuel",
    ],
    recurring: "Gestion informatique externalisée",
  },
  {
    id: "site-services-it",
    title: "Site web -> Services IT",
    category: "Développement",
    need: "Le client veut un site qui génère des demandes.",
    icon: ComputerDesktopIcon,
    steps: [
      "Création du site",
      "Hébergement et maintenance",
      "Email professionnel",
      "Support informatique",
    ],
    recurring: "Maintenance web + support",
  },
  {
    id: "securite-monitoring",
    title: "Diagnostic sécurité -> Monitoring",
    category: "Sécurité",
    need: "Le client craint les cyberattaques et pertes de données.",
    icon: LockClosedIcon,
    steps: [
      "Diagnostic sécurité",
      "Correction des failles",
      "Firewall et antivirus",
      "Supervision continue",
    ],
    recurring: "Monitoring sécurité mensuel",
  },
  {
    id: "cloud-gestion",
    title: "Migration cloud -> Administration cloud",
    category: "Cloud",
    need: "L'équipe veut accéder aux fichiers partout en sécurité.",
    icon: CloudIcon,
    steps: [
      "Migration vers le cloud",
      "Sauvegardes et accès",
      "Gestion utilisateurs",
      "Administration continue",
    ],
    recurring: "Gestion cloud mensuelle",
  },
  {
    id: "reseau-maintenance",
    title: "Installation réseau -> Maintenance infra",
    category: "Infrastructure",
    need: "L'entreprise déménage ou restructure ses locaux.",
    icon: SignalIcon,
    steps: [
      "Installation réseau et Wi-Fi",
      "Configuration NAS / serveurs",
      "Monitoring réseau",
      "Maintenance infrastructure",
    ],
    recurring: "Contrat infrastructure",
  },
  {
    id: "backup-pca",
    title: "Sauvegarde -> Plan de continuité",
    category: "Sécurité",
    need: "Le client veut éviter toute interruption d'activité.",
    icon: DocumentCheckIcon,
    steps: [
      "Mise en place sauvegardes",
      "Tests de restauration",
      "Plan de reprise d'activité",
      "Gestion mensuelle des sauvegardes",
    ],
    recurring: "Continuité d'activité pilotée",
  },
  {
    id: "materiel-parc",
    title: "Achat matériel -> Gestion de parc",
    category: "Infrastructure",
    need: "Le client renouvelle ses ordinateurs et veut standardiser.",
    icon: BoltIcon,
    steps: [
      "Installation et configuration",
      "Gestion des utilisateurs",
      "Standardisation des postes",
      "Suivi du parc",
    ],
    recurring: "Contrat de gestion de parc IT",
  },
  {
    id: "formation-support",
    title: "Formation équipes -> Support utilisateurs",
    category: "Support",
    need: "L'entreprise veut réduire les erreurs et gagner du temps.",
    icon: UserGroupIcon,
    steps: [
      "Formation outils numériques",
      "Optimisation des postes",
      "Support utilisateurs",
      "Assistance mensuelle",
    ],
    recurring: "Support IT récurrent",
  },
  {
    id: "urgence-externalisation",
    title: "Urgence -> IT externalisé",
    category: "Support",
    need: "Une panne critique bloque la production.",
    icon: LifebuoyIcon,
    steps: [
      "Intervention rapide",
      "Diagnostic global",
      "Plan d'amélioration",
      "Externalisation du service IT",
    ],
    recurring: "Direction IT déléguée",
  },
];

const categories = [
  "Tous",
  "Support",
  "Sécurité",
  "Cloud",
  "Infrastructure",
  "Développement",
];

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.05, spacing: 14 },
    loop: false,
    mode: "snap",
    rubberband: false,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.8, spacing: 18 },
      },
    },
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleCategoryFromFooter = (e: Event) => {
      const category = (e as CustomEvent).detail as string;
      if (categories.includes(category)) {
        setActiveCategory(category);
      } else {
        setActiveCategory("Tous");
      }
    };

    window.addEventListener("serviceCategorySelected", handleCategoryFromFooter);
    return () => window.removeEventListener("serviceCategorySelected", handleCategoryFromFooter);
  }, []);

  const filteredFunnels =
    activeCategory === "Tous"
      ? funnels
      : funnels.filter((funnel) => funnel.category === activeCategory);

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-indigo-50/60" />
      <div className="absolute left-8 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-20 right-8 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Funnels de conversion orientés
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> résultat</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Chaque parcours part d&apos;un problème concret et mène vers un service récurrent.
            Dépannage informatique Paris, maintenance PME et support entreprise en Île-de-France.
          </p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {isMobile ? (
          <div ref={sliderRef} className="keen-slider">
            {filteredFunnels.map((funnel) => (
              <div key={funnel.id} className="keen-slider__slide">
                <FunnelCard funnel={funnel} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredFunnels.map((funnel, idx) => (
              <motion.div
                key={funnel.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <FunnelCard funnel={funnel} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white md:p-10"
        >
          <h3 className="text-2xl font-bold">Objectif: transformer chaque intervention en revenu récurrent</h3>
          <p className="mt-3 max-w-3xl text-blue-100">
            Positionnement commercial conseillé: problème ponctuel, solution immédiate, amélioration, prévention, puis contrat mensuel.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Demander un diagnostic gratuit
            <ArrowLongRightIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FunnelCard({ funnel }: { funnel: Funnel }) {
  const Icon = funnel.icon;

  return (
    <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {funnel.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900">{funnel.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{funnel.need}</p>

      <div className="mt-5 space-y-2.5">
        {funnel.steps.map((step, index) => (
          <div key={step} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-700">
              {index + 1}
            </span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
        <span className="text-xs font-semibold text-slate-500">Offre récurrente</span>
        <span className="text-sm font-semibold text-blue-700">{funnel.recurring}</span>
      </div>
    </article>
  );
}
