"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const plans = [
  "Pack Start",
  "Pack Pro",
  "Surveillance",
  "Pack Développement",
  "Audit & Optimisation",
  "Pack Sur Mesure",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedPack: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    // 1) au montage, lire localStorage
    const stored = localStorage.getItem("selectedPack");
    if (stored && plans.includes(stored)) {
      setFormData((f) => ({ ...f, selectedPack: stored }));
    }

    // 2) écouter la sélection d'un pack
    const onPlan = (e: Event) => {
      const pack = (e as CustomEvent).detail as string;
      if (plans.includes(pack)) {
        setFormData((f) => ({ ...f, selectedPack: pack }));
      }
    };
    window.addEventListener("planSelected", onPlan);

    return () => window.removeEventListener("planSelected", onPlan);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setFormStatus("Tous les champs doivent être remplis.");
      return;
    }
    setIsSubmitting(true);
    setFormStatus("");
    try {
      const r = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (r.ok) {
        setFormStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", phone:"",message: "", selectedPack: "" });
        localStorage.removeItem("selectedPack");
      } else {
        setFormStatus("Erreur lors de l’envoi. Réessayez.");
      }
    } catch {
      setFormStatus("Erreur de connexion, veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-slate-900 text-white overflow-hidden"
    >
      {/* halos décoratifs */}
      <div className="absolute -top-24 -left-32 w-80 h-80 bg-indigo-500/30 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-purple-600/25 blur-3xl rounded-full -z-10 animate-pulse delay-500" />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <motion.h2
          className="gradient-text text-3xl md:text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Parlons de votre projet
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Nom */}
          <motion.div
            className="input-neon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <input
              type="text"
              placeholder="Nom"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </motion.div>

          {/* Email */}
          <motion.div
            className="input-neon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </motion.div>
          {/* Téléphone */}
          <motion.div
            className="input-neon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <input
              type="tel"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </motion.div>
          {/* Sélecteur de pack */}
          <motion.div
            className="input-neon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <select
              className="w-full bg-slate-800 p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={formData.selectedPack}
              onChange={(e) =>
                setFormData({ ...formData, selectedPack: e.target.value })
              }
            >
              <option value="" disabled>
                Sélectionnez un pack (optionnel)
              </option>
              {plans.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </motion.div>
          {/* Message */}
          <motion.div
            className="input-neon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <textarea
              rows={5}
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </motion.div>

          {/* Bouton */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="btn-gradient shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {isSubmitting ? "Envoi en cours…" : "Envoyer"}
          </motion.button>
        </form>

        {/* Feedback */}
        {formStatus && (
          <motion.p
            className={`mt-8 text-base font-medium ${
              formStatus.includes("succès") ? "text-green-400" : "text-red-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {formStatus}
          </motion.p>
        )}
      </div>
    </section>
  );
}
