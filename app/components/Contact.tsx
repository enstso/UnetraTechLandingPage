"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";

const plans = [
  "Pack Start",
  "Pack Pro",
  "Pack Cloud",
  "Heures Essentiel",
  "Heures Business",
  "Heures Premium",
  "Pack Développement",
  "Audit & Conseil",
  "Mission Sur Mesure",
];


const contactMethods = [
  {
    icon: PhoneIcon,
    label: "Appelez-nous",
    value: "+33 1 23 45 67 89",
    link: "tel:+33123456789",
    description: "Réponse immédiate pour les urgences",
    available: "Lun-Ven 9h-18h"
  },
  {
    icon: EnvelopeIcon,
    label: "Email professionnel",
    value: "contact@unetratech.com",
    link: "mailto:contact@unetratech.com",
    description: "Réponse garantie sous 24h",
    available: "7j/7"
  },
  {
    icon: MapPinIcon,
    label: "Zone d'intervention",
    value: "Paris & Île-de-France",
    link: "#",
    description: "Déplacements sur site possibles",
    available: "Sur rendez-vous"
  },
  {
    icon: CalendarDaysIcon,
    label: "Consultation gratuite",
    value: "Rendez-vous en ligne",
    link: "#",
    description: "Analyse de vos besoins",
    available: "30 min offertes"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    selectedPack: "",
    projectTimeline: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("selectedPack");
    if (stored && plans.includes(stored)) {
      setFormData((f) => ({ ...f, selectedPack: stored }));
    }

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
      setFormStatus("error");
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
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          selectedPack: "",
          projectTimeline: "",
          budget: ""
        });
        localStorage.removeItem("selectedPack");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (formStatus) setFormStatus("");
  };

  return (
      <section
          id="contact"
          className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background decorative */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Démarrons votre <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">projet ensemble</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Une question technique ? Un devis personnalisé ? Notre équipe d'experts vous accompagne à chaque étape
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Methods */}
            <motion.div
                className="lg:col-span-1 space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                    <motion.a
                        key={idx}
                        href={method.link}
                        className="group block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{method.label}</h3>
                          <p className="text-blue-600 font-medium mb-2">{method.value}</p>
                          <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {method.available}
                      </span>
                        </div>
                      </div>
                    </motion.a>
                ))}
              </div>

              {/* Trust Signals */}
              <motion.div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Pourquoi nous choisir ?</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "✓ Expertise technique reconnue depuis 2019",
                    "✓ Réponse garantie sous 24h ouvrées",
                    "✓ Devis gratuit et sans engagement",
                    "✓ Support technique inclus",
                    "✓ +50 projets réalisés avec succès"
                  ].map((benefit, idx) => (
                      <p key={idx} className="text-blue-100 text-sm">{benefit}</p>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Parlez-nous de votre projet</h3>
                <p className="text-gray-600 mb-8">Remplissez ce formulaire et recevez une réponse personnalisée sous 24h</p>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm">Nom complet *</label>
                      <input
                          type="text"
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm">Email professionnel *</label>
                      <input
                          type="email"
                          placeholder="jean@entreprise.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm">Téléphone *</label>
                      <input
                          type="tel"
                          placeholder="01 23 45 67 89"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm">Entreprise</label>
                      <input
                          type="text"
                          placeholder="Nom de votre entreprise"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm">Service souhaité</label>
                      <select
                          value={formData.selectedPack}
                          onChange={(e) => handleInputChange("selectedPack", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Sélectionnez un service</option>
                        {plans.map((pack) => (
                            <option key={pack} value={pack}>{pack}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium text-sm">Délai souhaité</label>
                      <select
                          value={formData.projectTimeline}
                          onChange={(e) => handleInputChange("projectTimeline", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Quand souhaitez-vous commencer ?</option>
                        <option value="Urgent (< 1 mois)">Urgent (moins d'1 mois)</option>
                        <option value="Court terme (1-3 mois)">Court terme (1-3 mois)</option>
                        <option value="Moyen terme (3-6 mois)">Moyen terme (3-6 mois)</option>
                        <option value="Long terme (> 6 mois)">Long terme (plus de 6 mois)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium text-sm">Budget approximatif</label>
                    <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Quel est votre budget approximatif ?</option>
                      <option value="< 5k€">Moins de 5 000€</option>
                      <option value="5k€ - 15k€">5 000€ - 15 000€</option>
                      <option value="15k€ - 30k€">15 000€ - 30 000€</option>
                      <option value="30k€ - 50k€">30 000€ - 50 000€</option>
                      <option value="> 50k€">Plus de 50 000€</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium text-sm">Décrivez votre projet *</label>
                    <textarea
                        rows={5}
                        placeholder="Expliquez-nous votre contexte, vos besoins, vos contraintes techniques, objectifs..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </div>
                    ) : (
                        "Envoyer ma demande"
                    )}
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                    Nous respectons votre vie privée et ne partageons pas vos données.
                  </p>
                </form>

                {/* Form Status */}
                {formStatus && (
                    <motion.div
                        className={`mt-6 p-4 rounded-lg flex items-start gap-3 ${
                            formStatus === "success"
                                ? "bg-green-50 border border-green-200 text-green-800"
                                : "bg-red-50 border border-red-200 text-red-800"
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                      {formStatus === "success" ? (
                          <>
                            <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold">Message envoyé avec succès !</p>
                              <p className="text-sm mt-1">Merci pour votre confiance. Notre équipe vous recontacte sous 24h ouvrées avec une proposition personnalisée.</p>
                            </div>
                          </>
                      ) : (
                          <>
                            <ExclamationCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold">Erreur lors de l'envoi</p>
                              <p className="text-sm mt-1">Veuillez vérifier vos informations et réessayer. En cas de problème, appelez-nous directement.</p>
                            </div>
                          </>
                      )}
                    </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Questions fréquentes</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    q: "Sous quel délai puis-je avoir une réponse ?",
                    a: "Nous nous engageons à vous répondre sous 24h ouvrées avec une première analyse et un devis personnalisé."
                  },
                  {
                    q: "Proposez-vous un devis gratuit ?",
                    a: "Oui, absolument ! Notre première consultation et notre devis détaillé sont entièrement gratuits et sans engagement."
                  },
                  {
                    q: "Intervenez-vous sur toute la France ?",
                    a: "Nous intervenons principalement en Île-de-France. Pour d'autres régions, nous étudions la faisabilité selon le projet."
                  },
                  {
                    q: "Quelles sont vos garanties ?",
                    a: "Tous nos projets incluent une garantie, un support technique et une documentation complète pour assurer votre sérénité."
                  }
                ].map((faq, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-lg">{faq.q}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
