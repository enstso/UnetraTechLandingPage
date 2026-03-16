"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  selectedPack: string;
  projectTimeline: string;
  budget: string;
};

const planGroups = [
  {
    label: "Intervention",
    options: ["Dépannage Express", "Réseau Pro PME"],
  },
  {
    label: "Support",
    options: ["Support Ponctuel", "Pack Support 10h", "Pack Support 25h"],
  },
  {
    label: "Sécurité",
    options: ["Audit Flash Sécurité", "Protection Continue"],
  },
  {
    label: "Maintenance",
    options: ["Maintenance Essentielle", "Maintenance Avancée", "IT Externalisé"],
  },
  {
    label: "Cloud",
    options: ["Migration Cloud Start", "Administration Cloud"],
  },
  {
    label: "IA",
    options: ["Pack IA Business"],
  },
  {
    label: "Web",
    options: ["Site Vitrine Business"],
  },
];

const contactMethods = [
  {
    icon: PhoneIcon,
    label: "Appelez-nous",
    value: "+33 6 46 57 46 36",
    link: "tel:+33646574636",
    description: "Pour les urgences et blocages critiques",
    available: "Lun-Ven 9h-18h",
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "contact-unetratech@gmail.com",
    link: "mailto:contact-unetratech@gmail.com",
    description: "Réponse sous 24h ouvrées",
    available: "7j/7",
  },
  {
    icon: MapPinIcon,
    label: "Zone d'intervention",
    value: "Paris et Île-de-France",
    link: "#",
    description: "Intervention sur site ou à distance",
    available: "Sur rendez-vous",
  },
  {
    icon: CalendarDaysIcon,
    label: "Audit offert",
    value: "Diagnostic de 30 min",
    link: "#",
    description: "Sans engagement",
    available: "En visio",
  },
];

const trustItems = [
  {
    icon: ShieldCheckIcon,
    text: "Sécurité et sauvegarde intégrées dès le démarrage",
  },
  {
    icon: WrenchScrewdriverIcon,
    text: "Support réactif avec suivi concret des incidents",
  },
  {
    icon: CheckBadgeIcon,
    text: "Tarifs transparents et proposition adaptée à votre budget",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    text: "Accompagnement humain avec un interlocuteur unique",
  },
];

const faqItems = [
  {
    q: "Sous quel délai recevons-nous une réponse ?",
    a: "Nous répondons sous 24h ouvrées avec une première qualification et une proposition de créneau d'échange.",
  },
  {
    q: "L'audit et le devis sont-ils gratuits ?",
    a: "Oui. L'audit initial et le devis sont gratuits et sans engagement.",
  },
  {
    q: "Intervenez-vous uniquement en Île-de-France ?",
    a: "Nous intervenons sur site en Île-de-France et à distance partout en France.",
  },
  {
    q: "Pouvez-vous reprendre une infrastructure déjà en place ?",
    a: "Oui. Nous réalisons un diagnostic de l'existant puis un plan de transition progressif pour éviter les interruptions.",
  },
  {
    q: "Proposez-vous des contrats mensuels ?",
    a: "Oui. Nos offres de maintenance et d'administration cloud sont conçues pour un suivi mensuel récurrent.",
  },
  {
    q: "Comment choisir entre dépannage ponctuel et contrat ?",
    a: "Le dépannage résout l'urgence. Le contrat ajoute la prévention, la supervision et la continuité pour réduire les pannes futures.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
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
    if (stored) {
      setFormData((f) => ({ ...f, selectedPack: stored }));
    }

    const onPlan = (e: Event) => {
      const pack = (e as CustomEvent).detail as string;
      setFormData((f) => ({ ...f, selectedPack: pack }));
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
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          selectedPack: "",
          projectTimeline: "",
          budget: "",
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formStatus) {
      setFormStatus("");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
      <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Demandez votre
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> audit gratuit</span>
            {" "}à Paris et en Île-de-France
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Transformons vos urgences IT en organisation fiable, sécurisée et prévisible pour votre entreprise.
          </p>
          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          <motion.div
            className="space-y-7 lg:col-span-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.link}
                  className="block rounded-2xl border border-slate-100 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{method.label}</p>
                      <p className="font-medium text-blue-600">{method.value}</p>
                      <p className="mt-1 text-sm text-gray-600">{method.description}</p>
                      <span className="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {method.available}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h3 className="text-xl font-bold">Pourquoi nous confier votre IT ?</h3>
              <div className="mt-4 space-y-3">
                {trustItems.map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-sm text-blue-100">
                    <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900">Parlez-nous de votre besoin</h3>
              <p className="mt-2 text-gray-600">Réponse personnalisée sous 24h ouvrées.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Nom complet *"
                    type="text"
                    value={formData.name}
                    placeholder="Jean Dupont"
                    onChange={(value) => handleInputChange("name", value)}
                    required
                  />
                  <Field
                    label="Email professionnel *"
                    type="email"
                    value={formData.email}
                    placeholder="jean@entreprise.com"
                    onChange={(value) => handleInputChange("email", value)}
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Téléphone *"
                    type="tel"
                    value={formData.phone}
                    placeholder="01 23 45 67 89"
                    onChange={(value) => handleInputChange("phone", value)}
                    required
                  />
                  <Field
                    label="Entreprise"
                    type="text"
                    value={formData.company}
                    placeholder="Nom de votre entreprise"
                    onChange={(value) => handleInputChange("company", value)}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service souhaité</label>
                    <select
                      value={formData.selectedPack}
                      onChange={(e) => handleInputChange("selectedPack", e.target.value)}
                      className={`w-full rounded-lg border px-4 py-3 text-gray-900 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formData.selectedPack ? "border-blue-300 bg-blue-50" : "border-gray-300"
                      }`}
                    >
                      <option value="">Sélectionnez un service</option>
                      {planGroups.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {formData.selectedPack && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-emerald-700">
                        <CheckCircleIcon className="h-4 w-4" />
                        Offre préremplie depuis la section tarifs
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Délai souhaité</label>
                    <select
                      value={formData.projectTimeline}
                      onChange={(e) => handleInputChange("projectTimeline", e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Quand souhaitez-vous commencer ?</option>
                      <option value="Urgent (moins d'1 mois)">Urgent (moins d'1 mois)</option>
                      <option value="Court terme (1-3 mois)">Court terme (1-3 mois)</option>
                      <option value="Moyen terme (3-6 mois)">Moyen terme (3-6 mois)</option>
                      <option value="Long terme (plus de 6 mois)">Long terme (plus de 6 mois)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Budget approximatif</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Quel est votre budget approximatif ?</option>
                    <option value="< 5 000€">Moins de 5 000€</option>
                    <option value="5 000€ - 15 000€">5 000€ - 15 000€</option>
                    <option value="15 000€ - 30 000€">15 000€ - 30 000€</option>
                    <option value="30 000€ - 50 000€">30 000€ - 50 000€</option>
                    <option value="> 50 000€">Plus de 50 000€</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Décrivez votre projet *</label>
                  <textarea
                    rows={5}
                    placeholder="Contexte, problèmes rencontrés, objectifs, contraintes techniques..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-500"
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </motion.button>

                <p className="text-center text-sm text-gray-500">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                </p>
              </form>

              {formStatus && (
                <motion.div
                  className={`mt-6 flex items-start gap-3 rounded-lg border p-4 ${
                    formStatus === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formStatus === "success" ? (
                    <>
                      <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Message envoyé</p>
                        <p className="mt-1 text-sm">Merci. Nous revenons vers vous sous 24h ouvrées.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <ExclamationCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Erreur lors de l'envoi</p>
                        <p className="mt-1 text-sm">Veuillez vérifier les informations saisies puis réessayer.</p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg sm:p-10">
            <h3 className="text-center text-2xl font-bold text-gray-900">Questions fréquentes</h3>
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {faqItems.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <h4 className="text-lg font-semibold text-gray-900">{faq.q}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  value,
  placeholder,
  onChange,
  required = false,
}: {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    </div>
  );
}
