"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-24"
    >
      {/* Fond animé néon */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Qui sommes-nous ?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Chez <span className="text-indigo-400 font-semibold">Unetra Tech</span>, nous concevons, sécurisons et faisons évoluer les systèmes IT d'aujourd’hui et de demain.  
          Notre mission : offrir à chaque client une infrastructure robuste, intelligente et évolutive — du réseau à l’applicatif.
        </motion.p>

        <motion.p
          className="mt-6 text-lg md:text-xl italic text-indigo-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Connecter. Protéger. Automatiser. Performer.
        </motion.p>
      </div>

      {/* Image stylée */}
      <motion.div
        className="mt-20 px-0 md:px-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.img
          src="/illustration.png"
          alt="Illustration Unetra Tech"
          className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl max-h-[480px] object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}
