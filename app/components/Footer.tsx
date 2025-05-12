'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="relative py-6 bg-slate-900 text-center text-xs md:text-sm text-slate-500 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Ligne lumineuse animée */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse opacity-50" />

      <div className="max-w-6xl mx-auto px-6 lg:px-24 z-10 relative">
        © {new Date().getFullYear()}{' '}
        <span className="font-semibold text-white hover:text-indigo-400 transition">
          Unetra Tech
        </span>. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
