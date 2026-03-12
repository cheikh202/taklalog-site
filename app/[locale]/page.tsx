import {setRequestLocale} from 'next-intl/server';
import HomePage from '../../components/HomePage';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}, {locale: 'ar'}];
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return <HomePage />;
}
