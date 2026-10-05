import { buildMetadata } from '@/lib/metadata';
import HomepageClient from './HomepageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata(locale, 'home', '', true);
}

export default function Page() {
  return <HomepageClient />;
}