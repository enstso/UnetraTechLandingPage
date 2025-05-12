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
      className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 lg:px-24 overflow-hidden"
    >
      {/* Fond animé */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl text-center space-y-8 z-10">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Transformez Votre Entreprise<br className="hidden md:block" />Avec Notre Solution Innovante
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-300"
        >
          Une plateforme puissante pour simplifier vos workflows<br className="hidden md:block" />et booster durablement votre productivité.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-md"
        >
          <span>Commencer Maintenant</span>
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </motion.button>
      </div>
    </motion.section>
  );
}
