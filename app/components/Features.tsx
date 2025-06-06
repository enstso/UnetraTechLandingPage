"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

/* Animation container pour le stagger */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    title: "Wi-Fi Professionnel",
    desc: "Conception et déploiement de réseaux sans fil stables, sécurisés et multi-SSID pour les environnements exigeants.",
    icon: WifiIcon,
  },
  {
    title: "Cybersécurité",
    desc: "Protection du SI : firewall, segmentation, VPN, surveillance réseau et politiques de sécurité.",
    icon: LockClosedIcon,
  },
  {
    title: "Vidéosurveillance IP",
    desc: "Installation de systèmes UniFi Protect performants avec accès distant sécurisé.",
    icon: VideoCameraIcon,
  },
  {
    title: "Support & Maintenance",
    desc: "Assistance utilisateurs, supervision infra, correctifs et mises à jour régulières.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Dev. Web & API",
    desc: "Applications web et interfaces métiers sur mesure, connectées à vos outils.",
    icon: CodeBracketIcon,
  },
  {
    title: "Dev. Mobile",
    desc: "Applications mobiles Android/iOS sur mesure pour usages clients ou métiers.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Dev. Desktop",
    desc: "Applications Windows, macOS, Linux adaptées à vos besoins métiers.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Infrastructure Cloud",
    desc: "Déploiement, migration et gestion d’infrastructures cloud (AWS, Azure, OVH…).",
    icon: CloudIcon,
  },
  {
    title: "Administration Systèmes",
    desc: "Linux/Windows, Active Directory, sauvegardes, haute dispo, performances.",
    icon: ServerStackIcon,
  },
  {
    title: "Automatisation & DevOps",
    desc: "CI/CD, Ansible, pipelines, IaC, conteneurs Docker/K8s.",
    icon: CpuChipIcon,
  },
  {
    title: "Audit & Documentation",
    desc: "Audit code, infra, sécurité + recommandations concrètes.",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: "Missions sur mesure",
    desc: "Tout type de mission infra ou dev selon vos besoins spécifiques.",
    icon: SquaresPlusIcon,
  },
];

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.2, spacing: 15 },
    loop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="features"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-24 overflow-hidden"
    >
      {/* Halo décoratifs */}
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full bg-indigo-500 opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-600 opacity-20 blur-3xl -z-10" />

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-20 gradient-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Nos Fonctionnalités Clés
      </motion.h2>

      {isMobile ? (
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div key={idx} className="keen-slider__slide min-h-[280px] px-4">
                <div
                  className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl text-center border border-slate-700
                          hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-slate-300 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <ArrowButtons sliderRef={sliderRef} />
        </div>
      ) : (
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="card-feature bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl text-center border border-slate-700
                         hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <Icon className="w-14 h-14 mx-auto mb-6 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );

  function ArrowButtons({ sliderRef }: { sliderRef: any }) {
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
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <button
          className="pointer-events-auto bg-slate-700/70 hover:bg-slate-600 text-white p-2 rounded-full shadow-md transition
                   disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={() => sliderInstance.prev()}
          disabled={currentSlide === 0}
          aria-label="Slide précédente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="pointer-events-auto bg-slate-700/70 hover:bg-slate-600 text-white p-2 rounded-full shadow-md transition
                   disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={() => sliderInstance.next()}
          disabled={
            currentSlide === sliderInstance.track.details.slides.length - 1
          }
          aria-label="Slide suivante"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  }
}
