"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
      <section
          id="about"
          className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
      >
        {/* Fond décoratif subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* En-tête */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À Propos d'<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Unetra Tech</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texte */}
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong className="text-gray-900">Unetra Tech</strong> est votre partenaire de confiance pour la
                  <span className="text-blue-600 font-semibold"> transformation digitale</span>.
                  Nous accompagnons les entreprises dans leur évolution technologique avec des solutions
                  innovantes et sur mesure.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Notre expertise couvre l'ensemble de l'écosystème IT : du développement d'applications
                  web modernes aux solutions cloud sécurisées, en passant par l'optimisation des
                  infrastructures et le conseil stratégique.
                </p>
              </div>

              {/* Points forts */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "🚀", title: "Innovation", desc: "Technologies de pointe" },
                  { icon: "🛡️", title: "Sécurité", desc: "Protection optimale" },
                  { icon: "⚡", title: "Performance", desc: "Solutions rapides" },
                  { icon: "🎯", title: "Sur mesure", desc: "Adaptées à vos besoins" }
                ].map((item, index) => (
                    <motion.div
                        key={item.title}
                        className="flex items-start gap-3 p-4 bg-white/70 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Statistiques & Visuel */}
            <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Statistiques */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Nos Résultats</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "50+", label: "Projets réalisés" },
                    { number: "15+", label: "Clients satisfaits" },
                    { number: "99%", label: "Taux de satisfaction" },
                    { number: "24/7", label: "Support technique" }
                  ].map((stat, index) => (
                      <motion.div
                          key={stat.label}
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                      </motion.div>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Notre Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  Accompagner chaque entreprise dans sa transformation digitale en proposant des
                  solutions technologiques fiables, évolutives et parfaitement adaptées à ses enjeux métier.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 mb-8">
              Prêt à transformer votre entreprise ?
            </p>
            <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discutons de votre projet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
  );
}
