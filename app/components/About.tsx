"use client";

import { motion } from "framer-motion";

export default function About() {
  /* Particules pseudo-aléatoires mais déterministes (pas d’erreur d’hydratation) */
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: (i * 47) % 100,
    y: (i * 83) % 100,
    d: ((i * 19) % 50) / 10 + 3, // durées 3 s – 8 s
    c: i % 2 ? "#6366f1" : "#3b82f6", // indigo ou bleu
  }));

  return (
    <section
      id="about"
      className="relative overflow-hidden text-white py-32 px-6 lg:px-24"
    >
      {/* --- FOND --- */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-900 via-[#14163b] to-[#1b093c]" />

      {/* halo elliptique bas */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 -z-20 w-[1100px] h-[600px] rounded-full
                      bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-blue-600/40 blur-3xl" />

      {/* halo rotatif */}
      <div className="absolute left-1/2 top-1/2 -z-20 w-[900px] h-[900px] rounded-full
                      bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 opacity-20 blur-3xl
                      animate-[rotate-halo_40s_linear_infinite]" />

      {/* particules */}
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.c,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.d * 0.3}s`,
          }}
        />
      ))}

      {/* --- CONTENU --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Qui sommes-nous&nbsp;?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Chez <span className="gradient-text font-semibold">Unetra&nbsp;Tech</span>,
          nous imaginons, sécurisons et optimisons les systèmes&nbsp;IT d’aujourd’hui et de demain.
          Notre objectif&nbsp;: déployer des infrastructures <em>robustes</em>,
          <em> évolutives</em> et <em> performantes</em>&nbsp;— du réseau jusqu’à l’applicatif.
        </motion.p>

        {/* baseline animée */}
        <motion.div
          className="mt-10 inline-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show:   { opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } },
          }}
        >
          <span
            className="gradient-text font-medium text-lg md:text-xl tracking-wide relative
                       before:content-[''] before:absolute before:-bottom-1 before:left-0
                       before:h-[2px] before:bg-gradient-to-r before:from-indigo-400 before:to-purple-500
                       before:rounded-full before:animate-[underline-grow_1.8s_ease-out_forwards]"
            style={{ animation: "sweep-gradient 6s linear infinite" }}
          >
            Connecter. Protéger. Automatiser. Performer.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
