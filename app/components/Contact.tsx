"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Gérer le succès
        alert('Message envoyé avec succès !');
      }
    } catch (error) {
      console.error('Erreur d\'envoi', error);
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
          >
            Envoyer
          </motion.button>
        </form>
      </div>
    </section>
  );
}
