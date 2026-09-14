"use client"
import { PiPlantFill, PiSealCheckFill, PiStarFill, PiGlobeHemisphereWestFill, PiHandshakeFill} from "react-icons/pi";
// import Link from 'next/link';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';

  import { useTranslations } from 'next-intl'

export default function About_Us() {
  const t = useTranslations('About-Us')

  return (
    <div>
      <div className="section_desmar">
        <h1 className="heading_desmar desmar_text_brown text-center">{t('about-desmar-title')}</h1>
        <div className='interesting_text_desmar text-center font-semibold'>
            {t('trusted-supplier')}
        </div>
      </div>
      <div className="section_desmar desmar_light_brown_bg ">
        <div className='interesting_text_desmar text-center'>
          {t('interesting-text-largest-supplier')}
          <br/><br/>
          {t('interesting-text-our-commitment')}
        </div>
      </div>

      <div className="middle_column">
        <div className="section_desmar side_by_side_container_desmar">
          <div className="md:w-3/4">
            <h2 className="subheading_desmar desmar_text_brown">
                  {t('who-we-are')}
            </h2>
            <p>
              {t('who-we-are-p1')}
              <br/><br/>
              {t('who-we-are-p2')}
            </p>
          </div>
          <div className="md:w-1/4">
            <Image src="/DesmarLogo-02 flag.jpg" alt="Desmar Global Inc. Logo" width={1206} height={1526} className="width-1/3"/>
          </div>
        </div>
        
        <div className="section_desmar desmar_light_brown_bg">
          <h2 className="subheading_desmar desmar_text_brown">
              {t('our-commitment')}
          </h2>
          <p>
            {t('our-commitment-p1')}
            <br/><br/>
            {t('our-commitment-p2')}
          </p>
        </div>

        <div className="section_desmar">
          <h2 className="subheading_desmar desmar_text_brown">
            {t('our-mission')}
          </h2>
          <p>
            {t('our-mission-p1')}
            <br /><br />
            {t('our-mission-p2')}
          </p>
        </div>
      </div>
      <div className="relative w-full h-[700px] md:h-[500px] "> {/* Adjust height as needed */}
        <Image
          src="/baja-california-josue-michael2.jpg"
          alt="Baja California background"
          fill
          priority
          className="object-cover object-[center_40%] z-0"
        />

        <div className="relative z-10 w-full h-full flex items-center justify-center py-30">
          <div className="section_desmar bg-[#EEE2CA] px-4">
            <h2 className="subheading_desmar desmar_text_brown">
                  {t('why-partner')}
            </h2>
            <div className="space-y-4 m-2 interesting_text_desmar">
              <div className="flex gap-2">
                <span>
                  < PiGlobeHemisphereWestFill className="mt-1" />
                </span>
                <span>
                  <span className="font-bold not-italic">{t('why-partner-global')}</span>: {t('why-partner-global-details')}
                </span>
              </div>

              <div className="flex gap-2">
                
                <span>
                  < PiSealCheckFill className="mt-1" />
                </span>
                <span>
                  <span className="font-bold not-italic">{t('why-partner-quality')}</span>: {t('why-partner-quality-details')}
                </span>
              </div>

              <div className="flex gap-2">
                
                <PiPlantFill className="mt-1" />
                <span>
                  <span className="font-bold not-italic">{t('why-partner-sustainable')}</span>: {t('why-partner-sustainable-details')}
                </span>
              </div>

              <div className="flex gap-2">
                
                <span>
                  < PiStarFill className="mt-1" />
                </span>
                <span>
                  <span className="font-bold not-italic">{t('why-partner-experience')}</span>: {t('why-partner-experience-details')}
                </span>
              </div>

              <div className="flex gap-2">
                
              <span>
                  < PiHandshakeFill  className="mt-1" />
                </span>
                <span>
                  <span className="font-bold not-italic">{t('why-partner-partnerships')}</span>: {t('why-partner-partnerships-details')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle_column">
        <div className="section_desmar">
          <h2 className="subheading_desmar desmar_text_brown">
                {t('our-vision')}
          </h2>
          <p>
            {t('our-vision-p1')}
          </p>
        </div>
        <div className="section_desmar ">
          <h2 className="subheading_desmar desmar_text_brown">
            {t('connect-with-us')}
          </h2>
          <p>
            {t('connect-with-us-p1')}
          </p>
          <Link href="/contact-us" className="button_link bg-[#9D6F2A]">▷ {t('contact-us')}</Link>
        </div>
      </div>

        {/* Optional: Image credit */}
        {/* 
        <div className="absolute bottom-2 right-2 text-xs text-white z-10">
          Photo by <a className="underline" href="https://unsplash.com/@josuemichelphotography">Josue Michel</a> on <a className="underline" href="https://unsplash.com/photos/green-and-white-flowers-on-bicycle-DJabuBuUdQU">Unsplash</a>
        </div> 
        */}
    </div>
  );
}