"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero content */}
      <div className="max-w-4xl text-center space-y-8 z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
        >
          Transformez votre entreprise
          <br />
          avec une solution <span className="shimmer-text">innovante</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-300"
        >
          Une plateforme puissante pour simplifier vos workflows
          <br className="hidden md:block" />
          et booster durablement votre productivité.
        </motion.p>

        <motion.a
          href="#features"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-flex items-center bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 hover:brightness-110 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
        >
          <span>Commencer Maintenant</span>
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </motion.a>
      </div>
    </motion.section>
  );
}
