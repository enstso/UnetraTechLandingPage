'use client';

import { motion } from "framer-motion";
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-background px-6 lg:px-24"
    >
      <div className="max-w-4xl text-center space-y-6">
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Transformez Votre Entreprise<br className="hidden md:block" /> Avec Notre Solution Innovante
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600"
        >
          Une plateforme qui simplifie votre workflow<br className="hidden md:block" />et booste votre productivité.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <span>Commencer Maintenant</span>
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </motion.button>
      </div>
    </motion.section>
  );
}
