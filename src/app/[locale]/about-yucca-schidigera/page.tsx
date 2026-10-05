import { buildMetadata } from '@/lib/metadata';
import AboutYuccaSchidigeraClient from './AboutYuccaSchidigeraClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata(locale, 'aboutProduct', '/about-yucca-schidigera');
}

export default function Page() {
  return <AboutYuccaSchidigeraClient />;
}