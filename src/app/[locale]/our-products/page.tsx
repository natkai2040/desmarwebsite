import { buildMetadata } from '@/lib/metadata';
import OurProductsClient from './OurProductsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata(locale, 'ourProducts', '/our-products');
}

export default function Page() {
  return <OurProductsClient />;
}