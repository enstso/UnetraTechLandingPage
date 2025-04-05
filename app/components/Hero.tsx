"use client"
import { motion } from "framer-motion"
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <motion.section id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center bg-background px-6 lg:px-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Transformez Votre Entreprise Avec Notre Solution Innovante
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-8"
        >
          Une plateforme qui simplifie votre workflow et booste votre productivité
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-8 py-3 rounded-full text-lg 
          flex items-center mx-auto space-x-2 hover:bg-blue-700 transition"
        >
          <span>Commencer Maintenant</span>
          <ChevronRightIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.section>
  );
}
