import { buildMetadata } from '@/lib/metadata';
import AboutUsClient from './AboutUsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata(locale, 'aboutUs', '/about-us');
}

export default function Page() {
  return <AboutUsClient />;
}