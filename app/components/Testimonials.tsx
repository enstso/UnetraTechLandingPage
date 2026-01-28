'use client';

import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const testimonials = [
  {
    name: "Hamadi Diallo",
    role: "Fondateur",
    company: "Hamadi Conciergerie",
    quote:
        "Avec leur solution sur mesure, la gestion de nouveaux biens est devenue ultra‑simple. Mon portefeuille a augmenté de 40% en 1 mois, et leur réactivité business a été décisive.",
    rating: 5,
    project: "Plateforme de gestion conciergerie",
    avatar: "HD",
    result: "+40% biens gérés"
  },
  {
    name: "Matei Ngangue",
    role: "Entrepreneur",
    company: "Le Désencombreur",
    quote:
        "Unetra Tech a conçu une app mobile parfaitement taillée pour nos clients. L'expérience utilisateur est top, la techno solide, et l'équipe force de proposition.",
    rating: 5,
    project: "App mobile Désencombreur",
    avatar: "MN",
    result: "4.8⭐"
  },
  {
    name: "Foumba Cissé",
    role: "Dirigeant",
    company: "ACIS Conseil",
    quote:
        "Grâce à Unetra Tech, nous avons pu externaliser notre support informatique clients. Résolution rapide des tickets, utilisateurs très satisfaits : un vrai gain de temps, zéro friction et beaucoup de professionnalisme.",
    rating: 5,
    project: "Support IT externalisé",
    avatar: "FC",
    result: "98% tickets résolus dans les délais"
  }
];

const stats = [
  { number: "100%", label: "À votre écoute, dès le premier contact" },
  { number: "100%", label: "Transparence et pédagogie" },
  { number: "1 seul objectif", label: "Votre succès digital" },
  { number: "0 coût caché", label: "Sérénité garantie" }
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Configuration du slider SANS LOOP
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.1, spacing: 20 },
    loop: false, // ✅ DÉSACTIVÉ : ne boucle plus
    mode: "snap",
    rubberband: false,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.1, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
      <section
          id="testimonials"
          className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
      >
        {/* Background decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        </div>

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
              Ils nous font <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">confiance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les retours d'expérience de nos clients et les résultats obtenus grâce à nos solutions IT
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Stats */}
          <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
          >
            {stats.map((stat, idx) => (
                <div key={idx} className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="mb-16">
            {isMobile ? (
                // ✅ SLIDER MOBILE : glissement tactile uniquement, sans loop
                <div ref={sliderRef} className="keen-slider">
                  {testimonials.map((testimonial, idx) => (
                      <div key={idx} className="keen-slider__slide">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                  ))}
                </div>
            ) : (
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                  {testimonials.map((testimonial, idx) => (
                      <motion.div key={idx} variants={item}>
                        <TestimonialCard testimonial={testimonial} />
                      </motion.div>
                  ))}
                </motion.div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
              className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à rejoindre nos clients satisfaits ?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Faites comme eux et confiez-nous vos projets les plus ambitieux.
              Notre équipe d'experts vous accompagne de A à Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 hover:text-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Démarrer mon projet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                  href="#about"
                  className="inline-flex items-center justify-center bg-blue-500/20 text-white hover:bg-blue-500/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-blue-400/30"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  );
}

// Composant TestimonialCard
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const { name, role, company, quote, rating, project, avatar, result } = testimonial;

  return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative">

        {/* Quote Icon avec ChatBubbleLeftRightIcon */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
          <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
            {avatar}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
            <p className="text-xs text-blue-600 font-medium">{company}</p>
          </div>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
          "{quote}"
        </blockquote>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Projet:</span>
            <span className="font-medium text-gray-700">{project}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Résultat:</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {result}
          </span>
          </div>
        </div>
      </div>
  );
}
