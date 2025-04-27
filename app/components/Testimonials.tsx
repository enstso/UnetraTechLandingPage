"use client";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Sophie Dupont",
    role: "PDG, TechInnovate",
    quote: "Cette solution a complètement transformé notre productivité d'équipe.",
    rating: 5,
  },
  {
    name: "Marc Leblanc",
    role: "Directeur Marketing, GlobalMedia",
    quote: "Intuitif, puissant et vraiment révolutionnaire pour notre stratégie.",
    rating: 5,
  },
  {
    name: "Émilie Tremblay",
    role: "Responsable Produit, StartupHub",
    quote: "Un outil qui répond précisément à nos besoins de coordination.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      aria-label="Témoignages des clients"
      className="py-20 bg-gray-50 px-6 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Ce Que Nos Clients Disent
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <p className="italic text-gray-600 mb-6">
                "{testimonial.quote}"
              </p>

              <footer className="mt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
