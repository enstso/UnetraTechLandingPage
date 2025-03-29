"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-slate-800 text-center px-4 pt-20">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        L’excellence réseau pour les pros
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-slate-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Wi-Fi, sécurité, vidéosurveillance & support avec l’expertise UniFi. Particuliers, PME, écoles.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block bg-brand text-white px-6 py-3 rounded-md shadow-md"
      >
        Demander un audit gratuit
      </motion.a>
    </section>
  )
}
