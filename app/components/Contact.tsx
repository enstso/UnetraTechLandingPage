'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Tous les champs doivent être remplis.');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Erreur lors de l\'envoi du message. Réessayez plus tard.');
      }
    } catch (error) {
      setFormStatus('Erreur de connexion, veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Fond animé néon */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1), duration: 0.6 }}
            >
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field === 'name' ? 'Nom' : 'Email'}
                  className="w-full bg-slate-800 p-3 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-brand transition"
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              ) : (
                <textarea
                  placeholder="Votre message"
                  rows={5}
                  className="w-full bg-slate-800 p-3 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-brand transition"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full bg-brand text-white py-3 px-6 rounded-md hover:bg-indigo-500 transition shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </motion.button>
        </form>

        {formStatus && (
          <motion.div
            className={`mt-6 text-lg font-medium ${
              formStatus.includes('succès') ? 'text-green-400' : 'text-red-400'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {formStatus}
          </motion.div>
        )}
      </div>
    </section>
  );
}
