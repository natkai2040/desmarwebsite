import { buildMetadata } from '@/lib/metadata';
import ContactUsClient from './ContactUsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata(locale, 'contactUs', '/contact-us');
}

export default function Page() {
  return <ContactUsClient />;
}