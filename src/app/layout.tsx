import { Metadata } from 'next';
import 'styles/globals.css';
import IubendaScripts from './iubenda'; // Assicurati di aggiornare il percorso

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:8000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        {/* Non è necessario includere script inline qui */}
      </head>
      <body>
        <main className="relative">{props.children}</main>
        <IubendaScripts /> {/* Carica gli script iubenda */}
      </body>
    </html>
  );
}
