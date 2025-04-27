export default function Footer() {
  return (
    <footer className="py-6 bg-slate-900 text-center text-xs md:text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Unetra Tech</span>. Tous droits réservés.
      </div>
    </footer>
  );
}
