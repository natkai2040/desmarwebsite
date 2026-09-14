'use client'
//[locale]/page.tsx

import {Link} from '@/i18n/navigation';
import Image from "next/image";
import { useState, useEffect } from "react";
import HeroSlideshow from '@/components/HeroSlideshow';
import PopupCard from "@/components/PopupCard";
import { useTranslations } from 'next-intl'

export default function MainPage() {
  const [showPopup, setShowPopup] = useState(false);
  const t = useTranslations('Homepage')
  const [hasTriggered, setHasTriggered] = useState(false); // only trigger once

  // show popup when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / scrollHeight) * 100;

      if (scrollPercent > 50 && !hasTriggered) {
        setShowPopup(true);
        setHasTriggered(true); // prevent re-trigger
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);
  
  return (
    <div className="">
      {showPopup && (
        <div className="fixed bottom-4 right-4 z-500">
          <PopupCard onClose={() => setShowPopup(false)} />
        </div>
      )}
      <HeroSlideshow>
        <div className="absolute z-10 inset-0 flex flex-col justify-center items-start p-8">
          <h1 className="heading_desmar desmar_text_white text-shadow-sm text-left mb-8 desmar_text_shadow">
            {t('hero-title')}
          </h1>
          <h2 className="ml-0 italic text-xl desmar_text_white text-shadow-sm font-bold text-left mb-8 desmar_text_shadow">
            {t('hero-subtitle')}
          </h2>
        </div>
      </HeroSlideshow>
      <div className="middle_column">
        <div className="section_desmar">
          <h2 className="subheading_desmar desmar_text_brown">{t('who-we-are-title')}</h2>
          <p>
            {t('who-we-are-p1')}
            <br/>
            {t('who-we-are-p2')}
          </p>
          <Link href="/about-us">{t('about-us-link')}</Link><br/>
        </div>
        
        
        <div className="section_desmar desmar_light_brown_bg desmar_text_brown">
          <h2 className="subheading_desmar desmar_text_brown">{t('our-products-title')}</h2>
          <div className="interesting_text_desmar">
            ▸ <span className="font-bold">{t('our-products-spray-dry')}</span> {t('spray-dry-details-maltodextrin')}
            <br/><br/>
            ▸ <span className="font-bold">{t('our-products-spray-dry')}</span> {t('spray-dry-details-cyclodextrin')}
            <br/><br/>
            ▸ <span className="font-bold">{t('our-products-fiber')}</span> {t('fiber-details')}<br/>
            <br/>
            ▸ <span className="font-bold">{t('our-products-extract')}</span> {t('extract-details')}<br/>
            <br/>
            ▸ {t('our-products-orders')}<br/>
          </div>
          <div className="side_by_side_container_desmar">
            <Link href="/our-products" className="button_link bg-[#749772]">▷ {t('more-product-info-link')}</Link>
            <Link href="/contact-us" className="button_link bg-[#9D6F2A]">▷ {t('order-from-us-link')}</Link>
          </div>
        </div>
        
        <div className="section_desmar side_by_side_container_desmar">

          <div className="md:w-1/3 w-7/8 flex flex-col items-center mx-[2%] relative overflow-hidden">
            <div className="fuzzy_border_square_image"> 
              <Image src="/agriculture-field22.jpg"
              alt="Plants on a Farm"
              width={1740} height={1320}
              className="h-full w-full object-cover" 
              />
              <Link href="/about-yucca-schidigera#agriculture" className="button_link absolute bg-[#609D5C] left-1/2 bottom-4 -translate-x-1/2">▷ {t('agriculture-link')}</Link>
            </div>
            <div className="tiny_italics">
              {/* Photo by <a href="https://unsplash.com/@chenyanhui?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">chen yanhui</a> on <a href="https://unsplash.com/photos/a-group-of-green-plants-growing-in-a-body-of-water-RC90yHCsu7E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
            </div>
          </div>
          
          <div className="md:w-1/3 w-7/8 flex flex-col items-center mx-[2%] relative overflow-hidden">
            <div className="fuzzy_border_square_image">
              <Image src="/pigs-marek-piwnicki2.jpg"
              alt="White Pig on Brown Soil"
              width={1984} height={1318}
              className="h-full w-full object-cover"
              />
              <Link href="/about-yucca-schidigera#livestock" className="button_link absolute bg-[#a18760] left-1/2 bottom-4 -translate-x-1/2">▷ {t('livestock-link')}</Link>
            </div>
            <div className="tiny_italics">
              {/* Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Marek Piwnicki</a> on <a href="https://unsplash.com/photos/white-pig-on-brown-soil-PUVVsYJPh78?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
            </div>
          </div>
          
          <div className="md:w-1/3 w-7/8 flex flex-col items-center mx-[2%] relative overflow-hidden">
            <div className="fuzzy_border_square_image">
              <Image src="/clear-bottle-nataliya-melnychuk3.jpg"
              alt="Clear Makeup Bottle"
              width={2000} height={2500}
              className="h-full w-full object-cover "
              />
              <Link href="/about-yucca-schidigera#cosmetics" className="button_link absolute bg-[#C18FC2] left-1/2 bottom-4 -translate-x-1/2">▷ {t('cosmetics-link')}</Link>
            </div>
            <div className="tiny_italics">
              {/* Photo by <a href="https://unsplash.com/@natinati?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Nataliya Melnychuk</a> on <a href="https://unsplash.com/photos/clear-glass-bottle-on-white-textile-tnWjbdPmk1M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
            </div>
          </div>
        </div>
        <div className="section_desmar center_vertical_container_desmar desmar_light_brown_bg">
          <Image src="/yucca3.png" alt="Yucca Schidigera" width={1060} height={533} className="w-3/4 mx-auto my-5" />
          <Link href="/about-yucca-schidigera" className="button_link bg-[#749772]">▷ {t('about-yucca-link')}</Link>
        </div>
      </div>
      
    </div>
  );
}
