import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import "./globals.css"
import { Toaster } from '@/components/ui/sonner';
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
