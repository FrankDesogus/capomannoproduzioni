import { Metadata } from 'next';
import 'styles/globals.css';
import { Inter } from 'next/font/google';
import { IubendaProvider, IubendaCookieSolutionBannerConfigInterface, i18nDictionaries } from '@mep-agency/next-iubenda';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:8000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
};

const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
  "siteId": 3680591,
  "cookiePolicyId": 64244273,
  lang: 'it',

  // See https://www.iubenda.com/en/help/1205-how-to-configure-your-cookie-solution-advanced-guide
};


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={inter.className}>
        <IubendaProvider bannerConfig={iubendaBannerConfig}>
          <main className="relative">{props.children}</main>
        </IubendaProvider>
      </body>
    </html>
  );
}
