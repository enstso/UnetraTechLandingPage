import './globals.css'
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'Unetra Tech',
  description: 'Site de prestations réseau & sécurité',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <ClientWrapper>
        {children}
      </ClientWrapper>
    </html>
  );
}
