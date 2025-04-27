"use client";
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
    
    // Validation simple
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
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setFormStatus('Erreur lors de l\'envoi du message. Réessayez plus tard.');
      }
    } catch (error) {
      console.error('Erreur d\'envoi', error);
      setFormStatus('Erreur de connexion, veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            placeholder="Nom"
            className="w-full bg-slate-900 p-3 rounded border border-slate-700 focus:outline-none focus:border-brand"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full bg-slate-900 p-3 rounded border border-slate-700 focus:outline-none focus:border-brand"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
          />
          <motion.textarea
            placeholder="Votre message"
            className="w-full bg-slate-900 p-3 rounded border border-slate-700 focus:outline-none focus:border-brand"
            rows={5}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            value={formData.message}
          />
          <motion.button
            type="submit"
            className="bg-brand text-white py-3 px-6 rounded hover:bg-blue-400 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            disabled={isSubmitting} // Disable while submitting
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </motion.button>
        </form>
        {/* Feedback Message */}
        {formStatus && (
          <motion.div
            className={`mt-6 text-lg ${formStatus.includes('succès') ? 'text-green-400' : 'text-red-400'}`}
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
