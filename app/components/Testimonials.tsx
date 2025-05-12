"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Hamadi Diallo",
    role: "Concierge / Co-hôte – Airbnb & Booking.com",
    quote:
      "Grâce à leur solution, j’ai trouvé plusieurs nouveaux biens à gérer. Un vrai hack qui m’a permis d’élargir mon portefeuille en 1 mois.",
    rating: 5,
  },
  {
    name: "Matei Ngangue",
    role: "Entrepreneur – Applications Mobiles",
    quote:
      "Ils ont conçu une app mobile sur mesure qui répond parfaitement aux besoins de mes utilisateurs. Réactifs et pros.",
    rating: 5,
  },
  {
    name: "Bruno Duartes",
    role: "Administrateur systèmes & réseau",
    quote:
      "Un partenaire de confiance sur des projets ambitieux. Leur polyvalence IT fait la différence.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      aria-label="Témoignages clients"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Ce Que Nos Clients Disent
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl shadow-md border border-slate-700 hover:shadow-lg hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                <p className="italic text-slate-300 mb-6">"{testimonial.quote}"</p>
              </div>

              <footer className="mt-auto pt-4 border-t border-slate-700">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Accroche finale */}
        <motion.p
          className="mt-16 text-center text-lg text-slate-300 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Faites comme eux, confiez-nous vos projets les plus ambitieux.
        </motion.p>
      </div>
    </motion.section>
  );
}
