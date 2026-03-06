"use client";

import { useEffect, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import {
  BoltIcon,
  CloudArrowUpIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  LockClosedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type PriceType = "monthly" | "fixed" | "from" | "free" | "custom";

type PricingPlan = {
  name: string;
  category: string;
  description: string;
  price: number;
  displayPrice: string;
  priceType: PriceType;
  duration: string;
  features: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Audit Flash Sécurité",
    category: "Sécurité",
    description: "Audit initial pour identifier les risques prioritaires.",
    price: 0,
    displayPrice: "0€",
    priceType: "free",
    duration: "Offert pour nouveaux clients",
    features: [
      "Analyse postes, sauvegardes et accès",
      "Rapport priorisé en 48h",
      "Plan d'action concret",
    ],
    icon: ShieldCheckIcon,
    popular: true,
  },
  {
    name: "Dépannage Express",
    category: "Intervention",
    description: "Intervention rapide sur incident poste, réseau ou serveur.",
    price: 89,
    displayPrice: "89€",
    priceType: "fixed",
    duration: "Par intervention distante",
    features: [
      "Prise en charge prioritaire",
      "Diagnostic complet inclus",
      "Compte-rendu + recommandations",
    ],
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Réseau Pro PME",
    category: "Intervention",
    description: "Installation et sécurisation Wi-Fi / réseau en entreprise.",
    price: 1190,
    displayPrice: "1 190€",
    priceType: "from",
    duration: "A partir de",
    features: [
      "Installation réseau et Wi-Fi pro",
      "Segmentation et règles de sécurité",
      "Documentation + transfert équipe",
    ],
    icon: ServerStackIcon,
  },
  {
    name: "Protection Continue",
    category: "Sécurité",
    description: "Antivirus, sauvegarde cloud et surveillance de base.",
    price: 149,
    displayPrice: "149€",
    priceType: "monthly",
    duration: "Par mois",
    features: [
      "Antivirus managé",
      "Sauvegarde quotidienne supervisée",
      "Test de restauration trimestriel",
    ],
    icon: LockClosedIcon,
  },
  {
    name: "Maintenance Essentielle",
    category: "Maintenance",
    description: "Support mensuel pour PME avec suivi préventif.",
    price: 329,
    displayPrice: "329€",
    priceType: "monthly",
    duration: "Par mois",
    features: [
      "Support utilisateurs illimité (distance)",
      "Mises à jour sécurité",
      "Suivi mensuel et reporting",
    ],
    icon: LifebuoyIcon,
    popular: true,
  },
  {
    name: "Maintenance Avancée",
    category: "Maintenance",
    description: "Pour équipes exigeantes avec SLA renforcé.",
    price: 549,
    displayPrice: "549€",
    priceType: "monthly",
    duration: "Par mois",
    features: [
      "SLA prioritaire",
      "Supervision proactive",
      "Comité de suivi trimestriel",
      "Visite préventive sur site",
    ],
    icon: BoltIcon,
  },
  {
    name: "Administration Cloud",
    category: "Cloud",
    description: "Gestion cloud et optimisation des coûts au quotidien.",
    price: 390,
    displayPrice: "390€",
    priceType: "monthly",
    duration: "Par mois",
    features: [
      "Administration des comptes et droits",
      "Gestion sauvegardes cloud",
      "Optimisation coûts mensuelle",
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: "Migration Cloud Start",
    category: "Cloud",
    description: "Migration initiale de vos données et outils critiques.",
    price: 1390,
    displayPrice: "1 390€",
    priceType: "from",
    duration: "A partir de",
    features: [
      "Audit de l'existant",
      "Migration planifiée sans interruption",
      "Formation utilisateurs",
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: "Site Vitrine Business",
    category: "Web",
    description: "Site orienté conversion avec formulaire de devis.",
    price: 1290,
    displayPrice: "1 290€",
    priceType: "from",
    duration: "A partir de",
    features: [
      "Design responsive",
      "Optimisation SEO locale",
      "Intégration appel à l'action",
    ],
    icon: ComputerDesktopIcon,
  },
  {
    name: "IT Externalisé",
    category: "Maintenance",
    description: "Pilotage global de votre informatique par notre équipe.",
    price: 890,
    displayPrice: "890€",
    priceType: "monthly",
    duration: "Par mois",
    features: [
      "Support, sécurité et sauvegardes",
      "Plan de continuité d'activité",
      "Point stratégique mensuel",
    ],
    icon: SparklesIcon,
  },
];

const categories = ["Tous", "Intervention", "Sécurité", "Maintenance", "Cloud", "Web"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAll, setShowAll] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.06, spacing: 16 },
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

  const filteredPlans =
    activeCategory === "Tous"
      ? pricingPlans
      : pricingPlans.filter((plan) => plan.category === activeCategory);

  const displayedPlans = showAll || isMobile ? filteredPlans : filteredPlans.slice(0, 6);
  const hasMorePlans = !isMobile && filteredPlans.length > 6;

  const recommendedPlanName = getRecommendedPlan(displayedPlans);

  function handleClick(planName: string) {
    localStorage.setItem("selectedPack", planName);
    window.dispatchEvent(new CustomEvent("planSelected", { detail: planName }));
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/60" />
      <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-16 right-6 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <SparklesIcon className="h-4 w-4" />
            Tarifs attractifs et transparents
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Offres conçues pour convertir vers la
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> maintenance récurrente</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Positionnement prix: raisonnable et légèrement sous le marché pour accélérer l'acquisition client, puis montée en valeur via la prévention.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
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
            {filteredPlans.map((plan) => (
              <div key={plan.name} className="keen-slider__slide">
                <PricingCard
                  plan={plan}
                  isRecommended={plan.name === recommendedPlanName}
                  handleClick={handleClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <motion.div
              className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={`${activeCategory}-${showAll}`}
            >
              <AnimatePresence mode="popLayout">
                {displayedPlans.map((plan) => (
                  <motion.div key={plan.name} variants={item} layout>
                    <PricingCard
                      plan={plan}
                      isRecommended={plan.name === recommendedPlanName}
                      handleClick={handleClick}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMorePlans && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  {showAll ? "Voir moins d'offres" : "Voir toutes les offres"}
                  <ChevronDownIcon className={`h-5 w-5 transition ${showAll ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </>
        )}

        <motion.div
          className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold">Besoin d'un chiffrage immédiat ?</h3>
          <p className="mt-3 max-w-2xl text-blue-100">
            Nous proposons un diagnostic gratuit puis un devis clair, sans coûts cachés.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Demander mon devis
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function getRecommendedPlan(plans: PricingPlan[]) {
  const validPlans = plans.filter((plan) => plan.priceType !== "custom" && plan.priceType !== "free");
  if (validPlans.length === 0) {
    return undefined;
  }

  const sorted = [...validPlans].sort((a, b) => a.price - b.price);
  return sorted[Math.floor(sorted.length / 2)]?.name;
}

function PricingCard({
  plan,
  isRecommended,
  handleClick,
}: {
  plan: PricingPlan;
  isRecommended: boolean;
  handleClick: (name: string) => void;
}) {
  const Icon = plan.icon;

  return (
    <div className="group relative h-full rounded-3xl border-2 border-slate-100 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
      {plan.popular && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
          <SparklesIcon className="h-3.5 w-3.5" />
          Offre d'entrée
        </div>
      )}

      {isRecommended && (
        <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold text-white">
          Recommandé
        </div>
      )}

      <div className="mb-5 flex items-start justify-between gap-2">
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {plan.category}
        </span>
        <span className="text-xs font-semibold text-slate-500">{plan.duration}</span>
      </div>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600">
        <Icon className="h-8 w-8 text-white" />
      </div>

      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{plan.description}</p>

      <div className="my-6">
        <p className="text-4xl font-black text-gray-900">{plan.displayPrice}</p>
        <p className="mt-1 text-xs font-medium text-gray-500">{plan.duration}</p>
      </div>

      <div className="mb-6 space-y-2.5">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckIcon className="h-3 w-3" />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleClick(plan.name)}
        className={`w-full rounded-xl px-5 py-3.5 font-semibold transition ${
          isRecommended
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
            : "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-600"
        }`}
      >
        Choisir cette offre
      </button>
    </div>
  );
}
