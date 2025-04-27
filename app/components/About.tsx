"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Qui sommes-nous ?
        </motion.h2>

        <motion.p
          className="text-lg text-slate-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Unetra Tech est une entreprise spécialisée dans l’infrastructure réseau et la cybersécurité.  
          Nous accompagnons les PME, commerces, établissements scolaires et particuliers exigeants dans l’optimisation de leur connectivité grâce à l’écosystème UniFi (Ubiquiti).
        </motion.p>

        {/* Ajouter une image ou illustration ici */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src="/images/illustration.png"  // Remplacer avec l'image ou illustration réelle
            alt="Notre expertise en réseau et cybersécurité"
            className="mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
