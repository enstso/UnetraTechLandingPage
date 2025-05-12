import './globals.css'
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'Unetra Tech',
  description: 'Solutions IT globales : réseaux, sécurité, cloud et développement sur mesure',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
