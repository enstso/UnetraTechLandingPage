"use client";

const testimonials = [
  {
    name: "Marie, Directrice d'école",
    quote: "Unetra Tech a transformé notre Wi-Fi et notre sécurité réseau. Ultra pro.",
  },
  {
    name: "Théo, restaurateur",
    quote: "Installation rapide, service au top. Je recommande à 100%.",
  },
  {
    name: "Cédric, gérant PME",
    quote: "Le pack Pro m'a permis de sécuriser tout mon réseau avec un super support.",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Ils nous font confiance</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl shadow-md">
              <p className="italic mb-4">"{t.quote}"</p>
              <span className="text-sm text-brand font-semibold">– {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
