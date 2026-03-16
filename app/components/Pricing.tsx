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
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import {
  BoltIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  LockClosedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type PriceType = "monthly" | "fixed" | "from" | "free";

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
  hourlyRate?: string;
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
    price: 95,
    displayPrice: "95€",
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
    name: "Support Ponctuel",
    category: "Support",
    description: "Assistance technique à la demande pour besoins ponctuels.",
    price: 92,
    displayPrice: "92€",
    priceType: "fixed",
    duration: "Par heure",
    hourlyRate: "92€/h",
    features: [
      "Support L1/L2 à distance",
      "Minimum 1h, puis décompte au quart d'heure",
      "Compte-rendu d'intervention",
    ],
    icon: LifebuoyIcon,
  },
  {
    name: "Pack Support 10h",
    category: "Support",
    description: "Crédit d'heures pour réduire le coût unitaire du support.",
    price: 850,
    displayPrice: "850€",
    priceType: "fixed",
    duration: "Pack 10h",
    hourlyRate: "85€/h",
    features: [
      "SLA standard en heures ouvrées",
      "Tickets et assistance utilisateur",
      "Valable 3 mois",
    ],
    icon: LifebuoyIcon,
  },
  {
    name: "Pack Support 25h",
    category: "Support",
    description: "Forfait entreprise avec priorité et coût horaire réduit.",
    price: 1850,
    displayPrice: "1 850€",
    priceType: "fixed",
    duration: "Pack 25h",
    hourlyRate: "74€/h",
    features: [
      "SLA prioritaire",
      "Support utilisateurs et systèmes",
      "Valable 6 mois",
    ],
    icon: BoltIcon,
  },
  {
    name: "Protection Continue",
    category: "Sécurité",
    description: "Antivirus, sauvegarde cloud et surveillance de base.",
    price: 159,
    displayPrice: "159€",
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
    description: "Support mensuel PME avec suivi préventif inclus.",
    price: 329,
    displayPrice: "329€",
    priceType: "monthly",
    duration: "Par mois",
    hourlyRate: "82€/h hors forfait",
    features: [
      "2h de support incluses / mois",
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
    hourlyRate: "72€/h hors forfait",
    features: [
      "4h de support incluses / mois",
      "Supervision proactive",
      "Comité de suivi trimestriel",
      "Visite préventive sur site",
    ],
    icon: BoltIcon,
  },
  {
    name: "IT Externalisé",
    category: "Maintenance",
    description: "Pilotage global de votre informatique par notre équipe.",
    price: 930,
    displayPrice: "930€",
    priceType: "monthly",
    duration: "Par mois",
    hourlyRate: "65€/h hors forfait",
    features: [
      "8h de support incluses / mois",
      "Support, sécurité et sauvegardes",
      "Point stratégique mensuel",
    ],
    icon: SparklesIcon,
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
      "Optimisation des coûts mensuelle",
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: "Pack IA Business",
    category: "IA",
    description: "Automatisation IA des tâches répétitives pour gagner du temps.",
    price: 890,
    displayPrice: "890€",
    priceType: "from",
    duration: "A partir de",
    features: [
      "Audit des processus à automatiser",
      "Assistant IA adapté à votre activité",
      "Automatisation emails, FAQ et documents",
      "Formation équipe (2h)",
    ],
    icon: CpuChipIcon,
    popular: true,
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
    name: "Site Vitrine Business",
    category: "Web",
    description: "Site orienté conversion avec formulaire de devis.",
    price: 1390,
    displayPrice: "1 390€",
    priceType: "from",
    duration: "A partir de",
    features: [
      "Design responsive",
      "Optimisation SEO locale",
      "Intégration d'appels à l'action",
    ],
    icon: ComputerDesktopIcon,
  },
];

const categories = ["Tous", "Support", "Intervention", "Sécurité", "Maintenance", "Cloud", "IA", "Web"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Pricing() {
  const [isCarousel, setIsCarousel] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderReady, setIsSliderReady] = useState(false);

  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 12 },
    loop: false,
    mode: "snap",
    rubberband: false,
    created() {
      setIsSliderReady(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const handleResize = () => setIsCarousel(window.innerWidth < 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredPlans =
    activeCategory === "Tous"
      ? pricingPlans
      : pricingPlans.filter((plan) => plan.category === activeCategory);

  const displayedPlans = showAll || isCarousel ? filteredPlans : filteredPlans.slice(0, 6);
  const hasMorePlans = !isCarousel && filteredPlans.length > 6;
  const maxSlideIndex = Math.max(0, filteredPlans.length - 1);
  const sliderKey = `${activeCategory}-${filteredPlans.length}`;

  const recommendedPlanName =
    activeCategory === "Support" ? getRecommendedPlan(displayedPlans) : undefined;

  function handleClick(planName: string) {
    localStorage.setItem("selectedPack", planName);
    window.dispatchEvent(new CustomEvent("planSelected", { detail: planName }));
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/60" />
      <div className="absolute left-10 top-24 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute bottom-16 right-6 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
            <SparklesIcon className="h-4 w-4" />
            Tarifs alignés marché
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Offres conçues pour convertir vers la
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> maintenance récurrente</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:mt-5 sm:text-lg">
            Tarifs raisonnables par rapport au marché, avec détail du support au taux horaire pour une transparence maximale.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                  setCurrentSlide(0);
                  setIsSliderReady(false);
                }}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:py-2.5 sm:text-sm ${
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

        {isCarousel ? (
          <div className="relative">
            <div key={sliderKey} ref={sliderRef} className="keen-slider single-slide-carousel">
              {filteredPlans.map((plan) => (
                <div key={plan.name} className="keen-slider__slide single-slide-item">
                  <PricingCard
                    plan={plan}
                    isRecommended={plan.name === recommendedPlanName}
                    handleClick={handleClick}
                  />
                </div>
              ))}
            </div>

            {isSliderReady && filteredPlans.length > 1 && (
              <>
                <button
                  onClick={() => sliderInstanceRef.current?.prev()}
                  disabled={currentSlide <= 0}
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2 text-slate-700 shadow transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Slide précédent"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => sliderInstanceRef.current?.next()}
                  disabled={currentSlide >= maxSlideIndex}
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2 text-slate-700 shadow transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Slide suivant"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {filteredPlans.map((plan, idx) => (
                    <button
                      key={`dot-${plan.name}`}
                      onClick={() => sliderInstanceRef.current?.moveToIdx(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        currentSlide === idx ? "w-6 bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Aller au slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
              <div className="mt-10 flex justify-center sm:mt-12">
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 sm:px-7"
                >
                  {showAll ? "Voir moins d'offres" : "Voir toutes les offres"}
                  <ChevronDownIcon className={`h-5 w-5 transition ${showAll ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </>
        )}

        <motion.div
          className="mt-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white sm:mt-16 sm:p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold sm:text-2xl">Besoin d'un chiffrage immédiat ?</h3>
          <p className="mt-3 max-w-2xl text-sm text-blue-100 sm:text-base">
            Nous proposons un diagnostic gratuit puis un devis clair, sans coûts cachés.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:mt-6 sm:px-6 sm:text-base"
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
        .single-slide-carousel {
          overflow: hidden;
        }
        .single-slide-carousel :global(.single-slide-item) {
          min-width: 100% !important;
          max-width: 100% !important;
        }
      `}</style>
    </section>
  );
}

function getRecommendedPlan(plans: PricingPlan[]) {
  const validPlans = plans.filter((plan) => plan.priceType !== "free");
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
    <div className="group relative h-full rounded-2xl border-2 border-slate-100 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl sm:rounded-3xl sm:p-7">
      {plan.popular && (
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700 sm:mb-4 sm:text-xs">
          <SparklesIcon className="h-3.5 w-3.5" />
          Offre d'entrée
        </div>
      )}

      {isRecommended && (
        <div className="mb-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-[11px] font-bold text-white sm:mb-4 sm:text-xs">
          Recommandé
        </div>
      )}

      <div className="mb-4 flex flex-wrap items-start justify-between gap-2 sm:mb-5">
        <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 sm:text-xs">
          {plan.category}
        </span>
        <span className="text-[11px] font-semibold text-slate-500 sm:text-xs">{plan.duration}</span>
      </div>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl">
        <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{plan.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{plan.description}</p>

      <div className="my-5 sm:my-6">
        <p className="text-3xl font-black text-gray-900 sm:text-4xl">{plan.displayPrice}</p>
        <p className="mt-1 text-xs font-medium text-gray-500">{plan.duration}</p>
      </div>

      {plan.hourlyRate && (
        <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 sm:mb-5">
          Détail support: {plan.hourlyRate}
        </div>
      )}

      <div className="mb-5 space-y-2.5 sm:mb-6">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2.5 text-xs text-gray-700 sm:text-sm">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckIcon className="h-3 w-3" />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleClick(plan.name)}
        className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition sm:px-5 sm:py-3.5 sm:text-base ${
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
