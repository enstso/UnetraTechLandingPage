"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

/* Stagger container / item */
const container = { hidden:{}, show:{ transition:{ staggerChildren:.12, delayChildren:.2 } } };
const item      = { hidden:{opacity:0, scale:.9}, show:{opacity:1, scale:1, transition:{duration:.5,ease:"easeOut"}} };

const testimonials = [
  { name:"Hamadi Diallo", role:"Concierge / Co-hôte – Airbnb & Booking.com",
    quote:"Grâce à leur solution, j’ai trouvé plusieurs nouveaux biens à gérer. Un vrai hack qui m’a permis d’élargir mon portefeuille en 1 mois.", rating:5 },
  { name:"Matei Ngangue", role:"Entrepreneur – Applications Mobiles",
    quote:"Ils ont conçu une app mobile sur mesure qui répond parfaitement aux besoins de mes utilisateurs. Réactifs et pros.", rating:5 },
  { name:"Bruno Duartes", role:"Administrateur systèmes & réseau",
    quote:"Un partenaire de confiance sur des projets ambitieux. Leur polyvalence IT fait la différence.", rating:4 },
];

export default function Testimonials(){
  return(
    <motion.section
      id="testimonials"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-24 overflow-hidden"
      variants={container} initial="hidden" whileInView="show" viewport={{once:true}}
    >
      {/* halos */}
      <div className="absolute -top-24 -left-32 w-80 h-80 bg-indigo-500/30 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-purple-600/25 blur-3xl rounded-full -z-10 animate-pulse delay-500" />

      <motion.h2
        className="gradient-text text-3xl md:text-4xl font-bold text-center mb-20"
        variants={item}
      >
        Ce que nos clients disent
      </motion.h2>

      <motion.div className="grid md:grid-cols-3 gap-10" variants={container}>
        {testimonials.map((t,idx)=>(
          <motion.blockquote
            key={idx} variants={item}
            className="card-testimonial bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700
                       hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300
                       flex flex-col justify-between min-h-[330px]"
          >
            <div>
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_,i)=>(
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 star-anim" style={{animationDelay:`${i*0.05}s`}} />
                ))}
              </div>
              <p className="italic text-slate-300 mb-6">“{t.quote}”</p>
            </div>

            <footer className="pt-4 border-t border-slate-700">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-slate-400">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>

      {/* accroche finale */}
      <motion.p
        className="mt-20 text-center text-lg gradient-text italic"
        variants={item}
      >
        Faites comme eux — confiez-nous vos projets les plus ambitieux.
      </motion.p>
    </motion.section>
  );
}
