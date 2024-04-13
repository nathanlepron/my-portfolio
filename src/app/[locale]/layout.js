import { Container } from '@mui/material'
import Header from '../components/header/Header'
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import './globals.css'
import '../assets/css/fonts.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default function LocaleLayout({
  children,
  params: { locale }
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className='app-content'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale}/>
          <Container>
            {children}
          </Container>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}