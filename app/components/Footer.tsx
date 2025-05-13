'use client';

import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  /* Gestion bouton Back-to-top */
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);
  useEffect(()=>scrollY.on('change',y=>setShowTop(y>600)),[scrollY]);

  return (
    <>
      <motion.footer
        className="relative py-10 bg-slate-900 text-center text-xs md:text-sm text-slate-400 overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
      >
        {/* Halo doux */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
                          bg-indigo-500/20 blur-3xl" />
        </div>

        {/* Ligne lumineuse */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px
                        bg-gradient-to-r from-transparent via-indigo-500 to-transparent
                        animate-pulse opacity-60" />

        <div className="max-w-6xl mx-auto px-6 lg:px-24 relative z-10">
          © {new Date().getFullYear()}{' '}
          <span className="footer-brand font-semibold hover:brightness-125 transition">
            Unetra Tech
          </span>{' '}
          – Tous droits réservés.
        </div>
      </motion.footer>

      {/* Back-to-top button */}
      <button
        id="toTop"
        className={`group rounded-full p-3 bg-indigo-600 hover:bg-indigo-700 transition shadow-lg ${showTop?'show':''}`}
        onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
        aria-label="Revenir en haut"
      >
        <ChevronUpIcon className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition" />
      </button>
    </>
  );
}
