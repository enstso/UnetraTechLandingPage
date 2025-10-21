"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { motion } from "framer-motion";
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
} from "@heroicons/react/24/outline";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    title: "Réseaux Wi-Fi Pro",
    desc: "Conception et déploiement de réseaux sans fil performants, sécurisés et évolutifs pour entreprises.",
    icon: WifiIcon,
    category: "Infrastructure",
    highlight: "UniFi & Cisco"
  },
  {
    title: "Cybersécurité",
    desc: "Audits, firewall, VPN, monitoring : sécurisez vos infrastructures, débusquez les vulnérabilités et protégez vos données.",
    icon: LockClosedIcon,
    category: "Sécurité",
    highlight: "Audit & Protection"
  },
  {
    title: "Développement Web",
    desc: "Applications web modernes, APIs sur mesure, intégrations connectées à tous vos outils métiers.",
    icon: CodeBracketIcon,
    category: "Développement",
    highlight: "React, Node.js"
  },
  {
    title: "Applications Mobile",
    desc: "Apps natives iOS/Android et solutions cross-platform conçues pour votre métier.",
    icon: DevicePhoneMobileIcon,
    category: "Développement",
    highlight: "Native & Cross-platform"
  },
  {
    title: "Logiciels Desktop",
    desc: "Applications Windows, macOS et Linux performantes pour automatiser vos processus.",
    icon: ComputerDesktopIcon,
    category: "Développement",
    highlight: "Multi-plateforme"
  },
  {
    title: "Solutions Cloud",
    desc: "Migration, déploiement et gestion avancée d'infrastructure cloud : AWS, Azure, Google Cloud.",
    icon: CloudIcon,
    category: "Infrastructure",
    highlight: "Multi-cloud"
  },
  {
    title: "Administration Système",
    desc: "Gestion de serveurs, Active Directory, sauvegardes, monitoring et performance.",
    icon: ServerStackIcon,
    category: "Infrastructure",
    highlight: "Linux & Windows"
  },
  {
    title: "DevOps & Automatisation",
    desc: "CI/CD, Docker/K8s, Infrastructure as Code, pipelines et monitoring moderne.",
    icon: CpuChipIcon,
    category: "DevOps",
    highlight: "CI/CD Pipeline"
  },
  {
    title: "Support sur mesure",
    desc: "Assistance technique réactive : tickets, mises à jour, maintenance préventive, selon vos SLA.",
    icon: WrenchScrewdriverIcon,
    category: "Support",
    highlight: "SLA personnalisé"
  },
  {
    title: "Audit & Conseil",
    desc: "Audits techniques globaux, sécurité, roadmap IT et recommandations précise – votre feuille de route numérique.",
    icon: DocumentMagnifyingGlassIcon,
    category: "Conseil",
    highlight: "Expertise approfondie"
  },
  {
    title: "Missions Sur Mesure",
    desc: "Accompagnement personnalisé : architecture, pilotage projet, solutions adaptées à vos défis spécifiques.",
    icon: SquaresPlusIcon,
    category: "Conseil",
    highlight: "100% personnalisé"
  },
];

const categories = [
  "Tous",
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
                  className="flex flex-wrap justify-center gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
              >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
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
              <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  key={activeCategory}
              >
                {filteredServices.map((service, idx) => (
                    <motion.div key={`${service.title}-${idx}`} variants={item}>
                      <ServiceCard service={service} />
                    </motion.div>
                ))}
              </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
              className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Besoin d'une solution personnalisée&nbsp;?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Notre équipe analyse vos besoins et conçoit une solution vraiment sur-mesure pour votre SI.
            </p>
            <a
                href="#contact"
                className="inline-flex items-center bg-white text-blue-600 hover:text-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Discuter de mon projet
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
  );
}

// Service Card
function ServiceCard({ service }: { service: typeof services[0] }) {
  const { title, desc, icon: Icon, category, highlight } = service;

  return (
      <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">

        {/* Category badge */}
        <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {category}
        </span>
          <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
          {highlight}
        </span>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-6 flex justify-end">
          <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300">
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
  );
}

// Navigation du slider (inchangé)
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
