'use client'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <body className="bg-slate-900 text-white antialiased">
      {children}
    </body>
  );
}
