import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,  Francois_One } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next"


import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

//[locale]/layout.tsx
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';



export const metadata: Metadata = {
  title: "Desmar Global Incorporated",
  description: "The Number One Distributor of Yucca Schidigera",
  icons: {
    icon:'favicon.ico'
  }
};

//* FONTS */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const francoisOne = Francois_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-francois-one",
  display: "swap",
});

 


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${francoisOne.variable} antialiased`}>
        <NextIntlClientProvider>
          <Navbar/>
            <div className="desmar_light_bg">
            {children}
            </div>
          <Footer/>
        </NextIntlClientProvider>
        <Analytics/>
      </body>
    </html>
  );
}