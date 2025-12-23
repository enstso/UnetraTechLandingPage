"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, StarIcon, ArrowRightIcon, SparklesIcon, ChevronDownIcon, BoltIcon, FireIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const pricingPlans = [
  // ===== CLOUD =====
  {
    name: "Cloud Start",
    category: "Cloud",
    description: "Migration cloud pour démarrer en toute sérénité.",
    price: 2800,
    displayPrice: "2 800€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Migration AWS/Azure/GCP",
      "Configuration initiale sécurisée",
      "Formation équipe",
      "Support 30 jours"
    ],
    icon: "☁️",
    priority: true
  },
  {
    name: "Cloud Pro",
    category: "Cloud",
    description: "Infrastructure cloud haute disponibilité + monitoring.",
    price: 5200,
    displayPrice: "5 200€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Architecture multi-zone",
      "Auto-scaling & Load Balancing",
      "Monitoring 24/7 avancé",
      "Backup automatisé quotidien",
      "Support prioritaire inclus"
    ],
    icon: "🚀",
    priority: true
  },
  {
    name: "Cloud Enterprise",
    category: "Cloud",
    description: "Solution cloud sur-mesure avec accompagnement dédié.",
    price: 9500,
    displayPrice: "9 500€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Architecture multi-cloud",
      "Infrastructure as Code (Terraform)",
      "DevOps CI/CD complet",
      "Audit sécurité inclus",
      "SLA & astreinte 24/7"
    ],
    icon: "💎",
    priority: false
  },

  // ===== INFRASTRUCTURE =====
  {
    name: "Réseau Start",
    category: "Infrastructure",
    description: "Installation réseau professionnelle pour PME.",
    price: 1900,
    displayPrice: "1 900€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Wi-Fi pro UniFi/Cisco",
      "Configuration sécurisée",
      "Formation utilisateurs",
      "Support 30 jours"
    ],
    icon: "📡",
    priority: true
  },
  {
    name: "Réseau Pro",
    category: "Infrastructure",
    description: "Réseau segmenté VLAN + firewall + monitoring.",
    price: 4200,
    displayPrice: "4 200€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Segmentation VLAN avancée",
      "Firewall FortiGate/pfSense",
      "Monitoring réseau 24/7",
      "VPN sécurisé entreprise",
      "Maintenance préventive 6 mois"
    ],
    icon: "🏢",
    priority: true
  },
  {
    name: "Infra Enterprise",
    category: "Infrastructure",
    description: "Infrastructure complète sur-mesure multi-sites.",
    price: 8900,
    displayPrice: "8 900€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Multi-sites interconnectés",
      "Active Directory & serveurs",
      "Supervision centralisée",
      "Audit & documentation complète",
      "Support premium 12 mois"
    ],
    icon: "🏗️",
    priority: false
  },

  // ===== DÉVELOPPEMENT =====
  {
    name: "Site Vitrine",
    category: "Développement",
    description: "Site web moderne, responsive et optimisé SEO.",
    price: 1500,
    displayPrice: "1 500€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Design sur-mesure moderne",
      "100% responsive mobile",
      "Optimisation SEO avancée",
      "Formulaire de contact",
      "Hébergement 1 an offert"
    ],
    icon: "🎨",
    priority: true,
    popular: true
  },
  {
    name: "Application Mobile",
    category: "Développement",
    description: "App mobile native iOS/Android performante.",
    price: 8500,
    displayPrice: "8 500€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Développement natif iOS & Android",
      "Design UX/UI mobile-first",
      "APIs & synchronisation cloud",
      "Notifications push intégrées",
      "Publication stores incluse",
      "Maintenance 3 mois offerte"
    ],
    icon: "📱",
    priority: true
  },
  {
    name: "Application Web",
    category: "Développement",
    description: "App web moderne React/Next.js avec APIs intégrées.",
    price: 6500,
    displayPrice: "6 500€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Architecture React/Next.js",
      "APIs REST/GraphQL custom",
      "Design UX/UI premium",
      "Authentification sécurisée",
      "CI/CD & déploiement cloud",
      "Maintenance 3 mois offerte"
    ],
    icon: "💻",
    priority: false
  },
  {
    name: "Solution Full-Stack",
    category: "Développement",
    description: "Application complète web + mobile + backend sur-mesure.",
    price: 15000,
    displayPrice: "15 000€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Web app + App mobile native",
      "Backend scalable (Node.js/Python)",
      "Base de données optimisée",
      "Panel admin complet",
      "Intégrations tierces illimitées",
      "Formation & documentation",
      "Maintenance 6 mois incluse"
    ],
    icon: "🚀",
    priority: false
  },

  // ===== SUPPORT =====
  {
    name: "Pack 10h",
    category: "Support",
    description: "Crédit 10h support - Interventions ponctuelles.",
    price: 900,
    displayPrice: "900€",
    priceType: "fixed",
    duration: "Prix fixe • 10h",
    features: [
      "Support ticket mail (J+1)",
      "Interventions réseau/système",
      "Décompte par 1/4h",
      "90€/h dégressif"
    ],
    icon: "⌛",
    priority: false
  },
  {
    name: "Pack 25h",
    category: "Support",
    description: "25h support avec SLA prioritaire 8h.",
    price: 2025,
    displayPrice: "2 025€",
    priceType: "fixed",
    duration: "Prix fixe • 25h",
    features: [
      "SLA prioritaire 8h ouvrées",
      "Support firewall & sécurité",
      "Portail client dédié",
      "81€/h",
      "Interventions planifiées"
    ],
    icon: "🔧",
    priority: false
  },
  {
    name: "Pack 50h Premium",
    category: "Support",
    description: "50h support L1/L2 avec audit sécurité offert.",
    price: 3825,
    displayPrice: "3 825€",
    priceType: "fixed",
    duration: "Prix fixe • 50h",
    features: [
      "SLA 4h - Support L1/L2",
      "Audit sécurité offert",
      "Maintenance préventive incluse",
      "Suivi stratégique trimestriel",
      "76,5€/h"
    ],
    icon: "💎",
    priority: false
  },
  {
    name: "Support Sur Mesure",
    category: "Support",
    description: "Support personnalisé adapté à vos besoins.",
    price: 999999,
    displayPrice: "Sur devis",
    priceType: "custom",
    duration: "100% personnalisé",
    features: [
      "Astreinte weekend 24/7",
      "Support dédié on-site",
      "Contrat flexible sur-mesure",
      "SLA personnalisé",
      "Accompagnement long-terme"
    ],
    icon: "⭐",
    priority: false
  },

  // ===== CONSEIL =====
  {
    name: "Audit Express",
    category: "Conseil",
    description: "Audit technique rapide avec recommandations.",
    price: 1500,
    displayPrice: "1 500€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Analyse infrastructure/code",
      "Rapport détaillé + roadmap",
      "Recommandations actionnables",
      "Session restitution 2h"
    ],
    icon: "🔍",
    priority: false
  },
  {
    name: "Audit Complet",
    category: "Conseil",
    description: "Audit approfondi SI + sécurité + cloud.",
    price: 3500,
    displayPrice: "3 500€",
    priceType: "from",
    duration: "À partir de",
    features: [
      "Audit infra/sécu/cloud complet",
      "Pentest & analyse vulnérabilités",
      "Feuille de route stratégique",
      "Schémas techniques détaillés",
      "Suivi post-audit 30 jours"
    ],
    icon: "🎯",
    priority: false
  },
  {
    name: "Mission Sur Mesure",
    category: "Conseil",
    description: "Solution 100% personnalisée multi-domaines.",
    price: 999999,
    displayPrice: "Sur devis",
    priceType: "custom",
    duration: "Durée flexible",
    features: [
      "Analyse approfondie",
      "Accompagnement dédié",
      "Livrable & support unique"
    ],
    icon: "⭐",
    priority: false
  }
];

const categories = [
  "Tous",
  "Cloud",
  "Infrastructure",
  "Développement",
  "Support",
  "Conseil"
];

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAll, setShowAll] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.1, spacing: 20 },
    loop: false,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.1, spacing: 20 },
      },
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredPlans = activeCategory === "Tous"
      ? pricingPlans
      : pricingPlans.filter(plan => plan.category === activeCategory);

  // LIMITE À 6 PACKS INITIALEMENT (Desktop uniquement)
  const displayedPlans = showAll || isMobile
      ? filteredPlans
      : filteredPlans.slice(0, 6);

  const hasMorePlans = !isMobile && filteredPlans.length > 6;

  // CALCUL AUTOMATIQUE DU PACK RECOMMANDÉ (MILIEU)
  const getRecommendedPlan = (plans: typeof pricingPlans) => {
    const validPlans = plans.filter(p => p.priceType !== 'custom');
    const sorted = [...validPlans].sort((a, b) => a.price - b.price);
    const middleIndex = Math.floor(sorted.length / 2);
    return sorted[middleIndex]?.name;
  };

  const recommendedPlanName = getRecommendedPlan(displayedPlans);

  function handleClick(planName: string) {
    localStorage.setItem("selectedPack", planName);
    window.dispatchEvent(new CustomEvent("planSelected", { detail: planName }));
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
      <section
          id="pricing"
          className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background ultra premium */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-indigo-50/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header ultra premium */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full px-5 py-2 mb-6 shadow-sm backdrop-blur-sm"
            >
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tarification Transparente
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nos <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions & Tarifs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des forfaits clairs, adaptés à chaque besoin. Investissez dans votre transformation digitale dès aujourd'hui.
            </p>

            {/* Decorative line */}
            <div className="relative w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 mx-auto mt-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-sm opacity-50" />
              <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Category Filter premium - Desktop only */}
          {!isMobile && (
              <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-14"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
              >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setShowAll(false);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-7 py-3.5 rounded-full font-semibold transition-all duration-300 ${
                            activeCategory === category
                                ? 'text-white shadow-lg shadow-blue-200'
                                : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                    >
                      {activeCategory === category && (
                          <>
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40" />
                          </>
                      )}
                      <span className="relative z-10">{category}</span>
                    </motion.button>
                ))}
              </motion.div>
          )}

          {/* Cards Grid/Slider */}
          {isMobile ? (
              <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                  {filteredPlans.map((plan, idx) => (
                      <div key={idx} className="keen-slider__slide">
                        <PricingCard
                            plan={plan}
                            isRecommended={plan.name === recommendedPlanName}
                            handleClick={handleClick}
                        />
                      </div>
                  ))}
                </div>
                <SliderNavigation sliderRef={sliderRef} />
              </div>
          ) : (
              <>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    key={`${activeCategory}-${showAll}`}
                >
                  <AnimatePresence mode="popLayout">
                    {displayedPlans.map((plan, i) => (
                        <motion.div
                            key={`${plan.name}-${i}`}
                            variants={item}
                            layout
                        >
                          <PricingCard
                              plan={plan}
                              isRecommended={plan.name === recommendedPlanName}
                              handleClick={handleClick}
                          />
                        </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Bouton "Voir tous les tarifs" */}
                {hasMorePlans && (
                    <motion.div
                        className="flex justify-center mt-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                      <motion.button
                          onClick={() => setShowAll(!showAll)}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative inline-flex items-center gap-3 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300" />
                        <SparklesIcon className="relative w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform" />
                        <span className="relative">{showAll ? 'Voir moins de tarifs' : 'Découvrir tous nos tarifs'}</span>
                        <ChevronDownIcon className={`relative w-5 h-5 transform transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
                      </motion.button>
                    </motion.div>
                )}
              </>
          )}

          {/* FAQ ultra premium */}
          <motion.div
              className="mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-30" />

              <h3 className="relative text-3xl font-bold text-gray-900 text-center mb-12">
                Questions fréquentes
              </h3>

              <div className="relative grid md:grid-cols-2 gap-8">
                {[
                  {
                    q: "Les tarifs \"À partir de\" incluent quoi exactement ?",
                    a: "Les tarifs \"À partir de\" correspondent à une configuration de base. Le prix final dépend de vos besoins spécifiques (fonctionnalités, complexité, intégrations). Nous vous fournissons toujours un devis détaillé avant de démarrer."
                  },
                  {
                    q: "Proposez-vous des facilités de paiement ?",
                    a: "Oui ! Pour les projets supérieurs à 3000€, nous proposons des paiements échelonnés : 30% au démarrage, 40% à mi-projet, 30% à la livraison. Nous pouvons adapter selon votre situation."
                  },
                  {
                    q: "Quels sont vos délais pour un projet ?",
                    a: "Les délais varient : 2-4 semaines pour un site vitrine, 6-12 semaines pour une app web, jusqu'à plusieurs mois pour des solutions sur-mesure. Nous co-construisons le planning avec vous."
                  },
                  {
                    q: "La maintenance est-elle incluse ?",
                    a: "Chaque projet inclut une période de garantie et support de démarrage. Pour le suivi long-terme, nous proposons des packs d'heures flexibles adaptés à vos besoins."
                  },
                  {
                    q: "Puis-je combiner plusieurs services ?",
                    a: "Absolument ! Nous créons souvent des bundles personnalisés (ex: Cloud + Développement + Support). Cela permet souvent d'optimiser votre investissement. Parlons-en !"
                  },
                  {
                    q: "Vos devis sont-ils vraiment gratuits ?",
                    a: "Oui, 100% gratuit et sans engagement ! Nous analysons votre besoin, vous conseillons, et vous fournissons un chiffrage détaillé. Aucune obligation de votre part."
                  }
                ].map((faq, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 rounded-2xl transition-all duration-300" />

                      <h4 className="relative font-bold text-gray-900 mb-3 flex items-start gap-2">
                        <span className="text-blue-600 text-xl flex-shrink-0">→</span>
                        <span>{faq.q}</span>
                      </h4>
                      <p className="relative text-gray-600 text-sm leading-relaxed pl-7">
                        {faq.a}
                      </p>
                    </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA ultra premium */}
          <motion.div
              className="relative text-center mt-20 p-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-3xl text-white shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <h3 className="relative text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h3>
            <p className="relative text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Notre équipe analyse vos besoins et conçoit une solution sur-mesure.
            </p>
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl group"
            >
              <SparklesIcon className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Consultation gratuite
              <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
  );
}

// Pricing Card Component
function PricingCard({ plan, isRecommended, handleClick }: {
  plan: typeof pricingPlans[0],
  isRecommended: boolean,
  handleClick: (name: string) => void
}) {
  return (
      <div className="relative group h-full">
        {/* Glow effect premium */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 ${
            isRecommended ? 'opacity-15' : ''
        }`} />

        {/* Card ultra premium */}
        <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 h-full flex flex-col overflow-hidden">

          {/* Gradient background subtil */}
          <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 rounded-3xl ${
              isRecommended
                  ? 'from-blue-50/70 via-indigo-50/50 to-blue-50/30'
                  : 'from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30'
          }`} />

          {/* Shine effect animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

          {/* Badge "Meilleur choix" ultra premium */}
          {isRecommended && (
              <div className="relative z-10 mb-4">
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 px-4 py-2 rounded-full border-2 border-amber-300 shadow-lg"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <StarIcon className="w-4 h-4 text-amber-600" />
                  <span>Meilleur choix</span>
                  <StarIcon className="w-4 h-4 text-amber-600" />
                </motion.div>
              </div>
          )}

          {/* Badge "Populaire" */}
          {plan.popular && !isRecommended && (
              <div className="relative z-10 mb-4">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-800 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 rounded-full border-2 border-pink-300 shadow-lg"
                >
                  <FireIcon className="w-4 h-4 text-pink-600 animate-pulse" />
                  <span>Populaire</span>
                </motion.div>
              </div>
          )}

          {/* Header compact */}
          <div className="relative z-10 flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1.5 rounded-full border border-blue-200 shadow-sm">
            {plan.category}
          </span>
            {plan.priceType === 'from' && (
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
              À partir de
            </span>
            )}
            {plan.priceType === 'fixed' && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Prix fixe
            </span>
            )}
            {plan.priceType === 'custom' && (
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
              Sur mesure
            </span>
            )}
          </div>

          {/* Icon premium avec glow */}
          <div className="relative z-10 mb-6">
            <div className="relative w-16 h-16">
              <motion.div
                  className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
                      isRecommended
                          ? 'bg-gradient-to-br from-blue-400 to-indigo-500 opacity-70 group-hover:opacity-90'
                          : 'bg-gradient-to-br from-blue-400 to-indigo-500 opacity-40 group-hover:opacity-60'
                  }`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-4xl filter drop-shadow-lg">{plan.icon}</span>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {plan.name}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
              {plan.description}
            </p>

            {/* Prix ultra premium */}
            <div className="mb-2">
              <div className={`text-4xl font-black mb-1 ${
                  isRecommended
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent'
                      : 'text-gray-900'
              }`}>
                {plan.displayPrice}
              </div>
              <div className="text-xs font-medium text-gray-500">
                {plan.duration}
              </div>
            </div>

            {/* Divider élégant */}
            <div className="relative h-px my-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Features - TOUT EN VERT ! */}
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 bg-gradient-to-br from-emerald-400 to-green-500 shadow-md transition-transform duration-300 hover:scale-110">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </span>
                  </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button ultra premium */}
          <div className="relative z-10 mt-auto">
            <motion.button
                onClick={() => handleClick(plan.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group/btn relative w-full overflow-hidden px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isRecommended
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl'
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-blue-400 hover:text-blue-600 shadow-md hover:shadow-lg'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">Choisir ce pack</span>
              <ArrowRightIcon className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
  );
}

// Slider Navigation Component
function SliderNavigation({ sliderRef }: { sliderRef: any }) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstance, setSliderInstance] = useState<any>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    setLoaded(true);
    setSliderInstance(slider);
    const onSlideChanged = (s: any) => setCurrentSlide(s.track.details.rel);
    slider.on("slideChanged", onSlideChanged);

    return () => slider.off("slideChanged", onSlideChanged);
  }, [sliderRef]);

  if (!loaded || !sliderInstance) return null;

  return (
      <div className="flex justify-center gap-4 mt-8">
        <button
            className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => sliderInstance.prev()}
            disabled={currentSlide === 0}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
            className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => sliderInstance.next()}
            disabled={currentSlide === sliderInstance.track.details.slides.length - 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  );
}
