"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { motion, AnimatePresence } from "framer-motion";
import {
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
  SquaresPlusIcon,
  ChevronDownIcon,
  SparklesIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const services = [
  // ===== 6 SERVICES PRIORITAIRES (affichés d'abord sur "Tous") =====
  {
    id: "service-developpement",
    title: "Sites Vitrines Premium",
    desc: "Sites web modernes, rapides et optimisés SEO. Design sur-mesure, responsive, performant et pensé pour convertir vos visiteurs en clients.",
    icon: ComputerDesktopIcon,
    category: "Développement",
    highlight: "SEO optimisé",
    badge: "Recommandé",
    priority: true
  },
  {
    id: "service-cloud",
    title: "Solutions Cloud",
    desc: "Migration, déploiement et gestion avancée d'infrastructure cloud : AWS, Azure, Google Cloud.",
    icon: CloudIcon,
    category: "Cloud",
    highlight: "Multi-cloud",
    badge: "Expertise",
    priority: true
  },
  {
    id: "service-reseaux",
    title: "Réseaux Wi-Fi Pro",
    desc: "Conception et déploiement de réseaux sans fil performants, sécurisés et évolutifs pour entreprises.",
    icon: WifiIcon,
    category: "Infrastructure",
    highlight: "UniFi & Cisco",
    priority: true
  },
  {
    id: "service-securite",
    title: "Audit de Sécurité",
    desc: "Audits techniques approfondis, tests d'intrusion, analyse de vulnérabilités et recommandations actionnables pour durcir votre SI.",
    icon: DocumentMagnifyingGlassIcon,
    category: "Sécurité",
    highlight: "Pentest inclus",
    badge: "Essentiel",
    priority: true
  },
  {
    id: "service-devops",
    title: "DevOps & Automatisation",
    desc: "CI/CD, Docker/K8s, Infrastructure as Code, pipelines et monitoring moderne.",
    icon: CpuChipIcon,
    category: "DevOps",
    highlight: "Terraform & K8s",
    priority: true
  },
  {
    id: "service-support",
    title: "Support Technique Premium",
    desc: "Assistance réactive par tickets, hotline dédiée, maintenance préventive et SLA personnalisé adapté à vos besoins métiers.",
    icon: WrenchScrewdriverIcon,
    category: "Support",
    highlight: "SLA sur-mesure",
    priority: true
  },

  // ===== SERVICES ADDITIONNELS =====
  {
    id: "service-developpement-web",
    title: "Développement Web",
    desc: "Applications web modernes, APIs sur mesure, intégrations connectées à tous vos outils métiers.",
    icon: CodeBracketIcon,
    category: "Développement",
    highlight: "React, Node.js",
    priority: false
  },
  {
    id: "service-developpement-mobile",
    title: "Applications Mobile",
    desc: "Apps natives iOS/Android et solutions cross-platform conçues pour votre métier.",
    icon: DevicePhoneMobileIcon,
    category: "Développement",
    highlight: "Native & Cross-platform",
    priority: false
  },
  {
    id: "service-developpement-desktop",
    title: "Logiciels Desktop",
    desc: "Applications Windows, macOS et Linux performantes pour automatiser vos processus.",
    icon: SquaresPlusIcon,
    category: "Développement",
    highlight: "Multi-plateforme",
    priority: false
  },
  {
    id: "service-infrastructure",
    title: "Administration Système",
    desc: "Gestion de serveurs, Active Directory, sauvegardes, monitoring et performance.",
    icon: ServerStackIcon,
    category: "Infrastructure",
    highlight: "Linux & Windows",
    priority: false
  },
  {
    id: "service-securite-protection",
    title: "Protection Avancée",
    desc: "Déploiement de firewall nouvelle génération, VPN sécurisés, monitoring 24/7 et réponse aux incidents pour protéger vos données critiques.",
    icon: ShieldCheckIcon,
    category: "Sécurité",
    highlight: "Monitoring 24/7",
    priority: false
  },
  {
    id: "service-support-surmesure",
    title: "Support Sur Mesure",
    desc: "Accompagnement IT personnalisé : astreinte weekend, support dédié 24/7, intervention on-site, contrat flexible selon vos contraintes.",
    icon: WrenchScrewdriverIcon,
    category: "Support",
    highlight: "100% flexible",
    priority: false
  },
  {
    id: "service-conseil",
    title: "Audit & Conseil",
    desc: "Audits techniques globaux, sécurité, roadmap IT et recommandations précises – votre feuille de route numérique.",
    icon: DocumentMagnifyingGlassIcon,
    category: "Conseil",
    highlight: "100% personnalisé",
    priority: false
  },
  {
    id: "service-conseil-mission",
    title: "Missions Sur Mesure",
    desc: "Accompagnement personnalisé : architecture, pilotage projet, solutions adaptées à vos défis spécifiques.",
    icon: LightBulbIcon,
    category: "Conseil",
    highlight: "Sur-mesure",
    priority: false
  },
];

const categories = [
  "Tous",
  "Développement",
  "Cloud",
  "Infrastructure",
  "Sécurité",
  "DevOps",
  "Support",
  "Conseil"
];

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showAll, setShowAll] = useState(false);

  // ✅ CONFIGURATION CORRIGÉE DU SLIDER
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.1, spacing: 20 },
    loop: false,
    mode: "snap",
    rubberband: false,
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

  // ✅ FORCER LA MISE À JOUR DU SLIDER QUAND LA CATÉGORIE CHANGE
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [activeCategory, instanceRef]);

  // ✅ ÉCOUTEUR D'ÉVÉNEMENT POUR LES CLICS DU FOOTER
  useEffect(() => {
    const handleCategoryFromFooter = (e: Event) => {
      const category = (e as CustomEvent).detail as string;
      setActiveCategory(category);
      setShowAll(false);
    };

    window.addEventListener('serviceCategorySelected', handleCategoryFromFooter);

    return () => window.removeEventListener('serviceCategorySelected', handleCategoryFromFooter);
  }, []);

  const filteredServices = activeCategory === "Tous"
      ? services
      : services.filter(service => service.category === activeCategory);

  const displayedServices = isMobile
      ? filteredServices
      : (activeCategory === "Tous"
          ? (showAll ? filteredServices : filteredServices.filter(s => s.priority))
          : filteredServices);

  const hasMoreServices = !isMobile && activeCategory === "Tous" && filteredServices.length > displayedServices.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);

    setTimeout(() => {
      const servicesGrid = document.getElementById('services-grid');
      if (servicesGrid) {
        servicesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
      <section
          id="services"
          className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background decorative */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services IT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions haut de gamme pour accélérer votre transformation digitale et sécuriser votre SI.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Category Filter - SCROLLABLE HORIZONTAL SUR MOBILE */}
          <motion.div
              className={`mb-12 ${isMobile ? '-mx-4 px-4' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={`${isMobile ? 'overflow-x-auto scrollbar-hide' : 'flex flex-wrap justify-center'} flex gap-3`}>
              <div className={`flex gap-3 ${isMobile ? 'w-max' : ''}`}>
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                            activeCategory === category
                                ? 'text-white shadow-lg shadow-blue-200'
                                : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                    >
                      {activeCategory === category && (
                          <>
                            <motion.div
                                layoutId="activeServiceTab"
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40" />
                          </>
                      )}
                      <span className="relative z-10">{category}</span>
                    </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Grid/Slider */}
          {isMobile ? (
              // ✅ KEY POUR FORCER LE REMOUNT
              <div className="relative" key={activeCategory}>
                <div ref={sliderRef} className="keen-slider">
                  {filteredServices.map((service, idx) => (
                      <div key={`${service.id}-${idx}`} className="keen-slider__slide">
                        <ServiceCard service={service} />
                      </div>
                  ))}
                </div>
                {/* ✅ PASSER instanceRef au lieu de sliderInstance */}
                <SliderNavigation instanceRef={instanceRef} />
              </div>
          ) : (
              <>
                <motion.div
                    id="services-grid"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-mt-32"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    key={`${activeCategory}-${showAll}`}
                >
                  <AnimatePresence mode="popLayout">
                    {displayedServices.map((service, idx) => (
                        <motion.div
                            key={`${service.title}-${idx}`}
                            variants={item}
                            layout
                            id={service.id}
                            className="scroll-mt-24"
                        >
                          <ServiceCard service={service} />
                        </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {hasMoreServices && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                      <button
                          onClick={() => setShowAll(!showAll)}
                          className="group relative inline-flex items-center gap-3 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <SparklesIcon className="w-5 h-5 text-blue-500" />
                        <span>{showAll ? 'Voir moins de services' : 'Découvrir tous nos services'}</span>
                        <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
                      </button>
                    </motion.div>
                )}
              </>
          )}

          {/* CTA Section */}
          <motion.div
              className="text-center mt-20 p-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />

            <h3 className="text-3xl font-bold mb-4 relative z-10">Besoin d'une solution personnalisée&nbsp;?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto relative z-10">
              Notre équipe analyse vos besoins et conçoit une solution vraiment sur-mesure pour votre SI.
            </p>
            <a
                href="#contact"
                className="relative z-10 inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              Discuter de mon projet
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes shine {
            from {
              transform: translateX(-100%) skewX(-12deg);
            }
            to {
              transform: translateX(200%) skewX(-12deg);
            }
          }
          .animate-shine {
            animation: shine 3s infinite;
          }
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

// Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  const { title, desc, icon: Icon, category, highlight, badge } = service;

  return (
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 h-full flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-500 rounded-3xl" />

        {badge && (
            <div className="relative z-10 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
              <SparklesIcon className="w-3.5 h-3.5" />
              {badge}
            </span>
            </div>
        )}

        <div className="relative z-10 flex items-center justify-between mb-6">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            {category}
          </span>
          <span className="text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
            {highlight}
          </span>
        </div>

        <div className="relative z-10 w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 group-hover:scale-125 transition-all duration-500" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
        </div>

        <div className="relative z-10 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            {desc}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex justify-end">
          <div className="w-11 h-11 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-500 group-hover:to-indigo-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-xl">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
  );
}

// ✅ Slider Navigation Component CORRIGÉ
function SliderNavigation({ instanceRef }: { instanceRef: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  useEffect(() => {
    if (!instanceRef.current) return;

    const slider = instanceRef.current;

    // ✅ Initialiser les valeurs
    setCurrentSlide(slider.track.details.rel);
    setMaxSlide(slider.track.details.slides.length - 1);

    // ✅ Écouter les changements
    const updateSlide = () => {
      setCurrentSlide(slider.track.details.rel);
    };

    slider.on("slideChanged", updateSlide);
    slider.on("updated", updateSlide);

    return () => {
      // ✅ SANS UTILISER .off() qui n'existe pas
      // Le nettoyage se fera automatiquement
    };
  }, [instanceRef]);

  if (!instanceRef.current) return null;

  return (
      <div className="flex justify-center gap-4 mt-8">
        <button
            className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
            className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => instanceRef.current?.next()}
            disabled={currentSlide >= maxSlide}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  );
}
