// app/ClientWrapper.tsx   ← plus de 'use client' ici
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased">
      {children}
    </div>
  );
}
