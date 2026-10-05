// lib/metadata.ts
import { getTranslations } from 'next-intl/server';

const ogLocale: Record<string, string> = {
  en: 'en_US', es: 'es_ES', 'zh-Hans': 'zh_CN', 'zh-Hant': 'zh_TW',
};

export async function buildMetadata(
  locale: string,
  key: string,
  path = '',
  absoluteTitle = false
) {
  const t = await getTranslations({ locale, namespace: `Metadata.${key}` });
  const title = t('title');
  const description = t('description');
  const url = `/${locale}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Desmar Global Inc',
      locale: ogLocale[locale],
      type: 'website',
    },
  };
}