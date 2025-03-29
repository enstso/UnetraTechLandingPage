"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nom"
            className="w-full bg-slate-900 p-3 rounded border border-slate-700 focus:outline-none focus:border-brand"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-slate-900 p-3 rounded border border-slate-700 focus:outline-none focus:border-brand"
          />
          <textarea
            placeholder="Votre message"
            className="w-full bg-slate-900 p-3 rounded border border-slate-700 focus:outline-none focus:border-brand"
            rows={5}
          />
          <button
            type="submit"
            className="bg-brand text-white py-3 px-6 rounded hover:bg-blue-400 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
