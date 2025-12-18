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
  // ===== SERVICES PRIORITAIRES (affichés d'abord) =====
  {
    title: "Sites Vitrines Premium",
    desc: "Sites web modernes, rapides et optimisés SEO. Design sur-mesure, responsive, performant et pensé pour convertir vos visiteurs en clients.",
    icon: ComputerDesktopIcon,
    category: "Développement",
    highlight: "SEO optimisé",
    badge: "Recommandé",
    priority: true
  },
  {
    title: "Architecture Cloud",
    desc: "Conception, migration et optimisation d'infrastructures cloud multi-providers : AWS, Azure, Google Cloud. Scalabilité et haute disponibilité garanties.",
    icon: CloudIcon,
    category: "Cloud",
    highlight: "Multi-cloud",
    badge: "Expertise",
    priority: true
  },
  {
    title: "Audit de Sécurité",
    desc: "Audits techniques approfondis, tests d'intrusion, analyse de vulnérabilités et recommandations actionnables pour durcir votre SI.",
    icon: DocumentMagnifyingGlassIcon,
    category: "Sécurité",
    highlight: "Pentest inclus",
    badge: "Essentiel",
    priority: true
  },
  {
    title: "Applications Web",
    desc: "Développement d'applications web modernes avec React/Next.js, APIs REST/GraphQL et intégrations avancées à vos outils métiers.",
    icon: CodeBracketIcon,
    category: "Développement",
    highlight: "React & Node.js",
    priority: true
  },
  {
    title: "Infrastructure Réseau",
    desc: "Design et déploiement de réseaux Wi-Fi professionnels UniFi/Cisco, VLANs, segmentation sécurisée et monitoring avancé.",
    icon: WifiIcon,
    category: "Infrastructure",
    highlight: "UniFi & Cisco",
    priority: true
  },
  {
    title: "Support Technique Premium",
    desc: "Assistance réactive par tickets, hotline dédiée, maintenance préventive et SLA personnalisé adapté à vos besoins métiers.",
    icon: WrenchScrewdriverIcon,
    category: "Support",
    highlight: "SLA sur-mesure",
    priority: true
  },

  // ===== SERVICES ADDITIONNELS (révélés au clic) =====
  {
    title: "Protection Avancée",
    desc: "Déploiement de firewall nouvelle génération, VPN sécurisés, monitoring 24/7 et réponse aux incidents pour protéger vos données critiques.",
    icon: LockClosedIcon,
    category: "Sécurité",
    highlight: "Monitoring 24/7",
    priority: false
  },
  {
    title: "Applications Mobile",
    desc: "Apps natives iOS/Android ou cross-platform (React Native, Flutter) conçues pour offrir une expérience utilisateur exceptionnelle.",
    icon: DevicePhoneMobileIcon,
    category: "Développement",
    highlight: "Native & Cross",
    priority: false
  },
  {
    title: "Administration Système",
    desc: "Gestion complète de serveurs Linux/Windows, Active Directory, automatisation, sauvegardes et monitoring proactif de performance.",
    icon: ServerStackIcon,
    category: "Infrastructure",
    highlight: "Linux & Windows",
    priority: false
  },
  {
    title: "DevOps & CI/CD",
    desc: "Pipelines CI/CD automatisés, Docker/Kubernetes, Infrastructure as Code (Terraform), déploiements zero-downtime et monitoring moderne.",
    icon: CpuChipIcon,
    category: "DevOps",
    highlight: "Terraform & K8s",
    priority: false
  },
  {
    title: "Logiciels sur Mesure",
    desc: "Applications desktop Windows/macOS/Linux et solutions métier personnalisées pour automatiser vos processus complexes.",
    icon: SquaresPlusIcon,
    category: "Développement",
    highlight: "Multi-plateforme",
    priority: false
  },
  {
    title: "Support Sur Mesure",
    desc: "Accompagnement IT personnalisé : astreinte weekend, support dédié 24/7, intervention on-site, contrat flexible selon vos contraintes.",
    icon: WrenchScrewdriverIcon,
    category: "Support",
    highlight: "100% flexible",
    priority: false
  },
  {
    title: "Conseil Stratégique IT",
    desc: "Accompagnement long-terme : audit global SI, roadmap technologique, architecture d'entreprise et pilotage de transformation digitale.",
    icon: DocumentMagnifyingGlassIcon,
    category: "Conseil",
    highlight: "Vision 360°",
    priority: false
  },
];

const categories = [
  "Tous",
  "Cloud",
  "Infrastructure",
  "Développement",
  "Sécurité",
  "DevOps",
  "Support",
  "Conseil"
];

export default function Features() {
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

  const filteredServices = activeCategory === "Tous"
      ? services
      : services.filter(service => service.category === activeCategory);

  // Services à afficher (6 premiers si showAll=false, tous sinon)
  const displayedServices = showAll
      ? filteredServices
      : filteredServices.filter(s => s.priority);

  const hasMoreServices = filteredServices.length > displayedServices.length;

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

          {/* Category Filter - Desktop only */}
          {!isMobile && (
              <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
              >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setShowAll(false); // Reset à 6 services quand on change de catégorie
                        }}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                                : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                    >
                      {category}
                    </button>
                ))}
              </motion.div>
          )}

          {/* Services Grid/Slider */}
          {isMobile ? (
              <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                  {services.map((service, idx) => (
                      <div key={idx} className="keen-slider__slide">
                        <ServiceCard service={service} />
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
                    {displayedServices.map((service, idx) => (
                        <motion.div
                            key={`${service.title}-${idx}`}
                            variants={item}
                            layout
                        >
                          <ServiceCard service={service} />
                        </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Bouton "Voir plus" */}
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
                        <span>Découvrir tous nos services</span>
                        <ChevronDownIcon className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
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
            {/* Effet de brillance animé */}
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
        `}</style>
      </section>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  const { title, desc, icon: Icon, category, highlight, badge } = service;

  return (
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 h-full flex flex-col overflow-hidden">

        {/* Effet gradient au hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-500 rounded-3xl" />

        {/* Badge subtil en haut */}
        {badge && (
            <div className="relative z-10 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
              <SparklesIcon className="w-3.5 h-3.5" />
              {badge}
            </span>
            </div>
        )}

        {/* Category + Highlight */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            {category}
          </span>
          <span className="text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
            {highlight}
          </span>
        </div>

        {/* Icon avec effet glow premium */}
        <div className="relative z-10 w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 group-hover:scale-125 transition-all duration-500" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            {desc}
          </p>
        </div>

        {/* Arrow premium */}
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

// Slider Navigation Component (inchangé)
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
