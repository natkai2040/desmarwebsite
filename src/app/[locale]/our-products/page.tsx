"use client"
import Link from 'next/link';
import Image from 'next/image';
import ProductCarousel from '@/components/ProductCarousel';
import { useTranslations } from 'next-intl'


export default function Our_Products() {
  const t = useTranslations('Our-Products') 

  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[200px]">
        <Image
          src="/hero-images/yucca-hero-logs-4.jpg"
          alt="Yucca Logs"
          fill
          className="object-cover object-[center_20%]"
          priority 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text_light_desmar text-center z-10 ">
          <div className="w-full bg-[#2d200c99]">
            <h1 className="heading_desmar desmar_text_white desmar_text_shadow">
              {t('yucca-schidigera-products-title')}
            </h1>
            <div className='interesting_text_desmar_white desmar_text_shadow'>
              {t('interesting-text-leading-suppliers')}
            </div>
          </div>
          
        </div>
      </div>

      
      <div className="middle_column">
        <div className="section_desmar desmar_light_brown_bg">
          {t('desmar-description-p1')}
          <br/>
          <br/>
          {t('desmar-description-p2')}
        </div>
      </div>

      <div className="relative w-full h-[250px] md:h-[150px]">
        <Image
          src="/sunray_through_joshua_tree_explore_with_josh.jpg"
          alt="Sunray through Joshua Tree"
          fill
          className="object-cover object-[center_40%]"
          priority // if above-the-fold
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-12 z-10">
          <h2 className="desmar_text_white subheading_desmar desmar_text_shadow">
            {t('splash-premium-yucca')}
          </h2>
          <h2 className="desmar_text_white subheading_desmar desmar_text_shadow ml-12">
            {t('splash-pure-power')}
          </h2>
        </div>
        {/* <div className="tiny_italics">
          Photo by <a href="https://unsplash.com/@explorewithjoshua?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Explore with Joshua</a> on <a href="https://unsplash.com/photos/brown-leafless-tree-on-brown-field-during-daytime-mErSbLOqSJk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div> */}
      </div>

      <ProductCarousel/>
      <h1 className="heading_desmar desmar_text_brown text-center">{t('all-products-info')}</h1>

      <div className="middle_column">
      {/* Section below Carousel: All product info */}
        <div className="section_desmar desmar_light_brown_bg mt-2">
          <h2 className="subheading_desmar desmar_text_brown text-center scroll-mt-24" id="yucca-spray-dry">{t('spray-dry-title')}</h2>

          <div className="side_by_side_container_desmar mt-2">
            <div className="w-full md:w-3/4">

              <div className="interesting_text_desmar">

                ▸ {t('spray-dry-maltodextrin-various')}
                <br/><br/>
                ▸ {t('spray-dry-cyclodextrin-various')}
              </div>
              <p>
                {t('spray-dry-p1')}
                <br/><br/>
                {t('spray-dry-p2')}
              </p>
              <div className="bg-[#e8d2b0] px-8 my-4 py-2 shadow-md rounded">
                <div className="py-2">
                  <div className="font-bold">
                    {t('feed-industry')}:
                  </div>
                  <ul>
                    <li>▸ {t('spray-dry-maltodextrin-30')}</li>
                    <li>▸ {t('spray-dry-maltodextrin-50')}</li>
                    <li>▸ {t('spray-dry-maltodextrin-67')}</li>
                  </ul>
                </div>
                <div className=" py-2">
                  <div className="font-bold ">
                    {t('pharmaceutical-grade')}:
                  </div>
                  <ul>
                    <li>▸ {t('spray-dry-cyclodextrin-10')}<br/></li>
                    <li>▸ {t('spray-dry-cyclodextrin-15')}<br/></li>
                    <li>▸ {t('spray-dry-cyclodextrin-20')}</li>
                  </ul>
                </div>
                <div>
                  <p className="italic">{t('COA-technical')}</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/4 shrink-1">
              <div className="items-center md:flex-col flex-row flex w-full gap-4 mt-2">
                <div className="md:w-full w-1/2">
                  <Image
                    src="/powder_unedited.png"
                    alt="Yucca Schidigera Spray Dried Powder"
                    width={1203}
                    height={1303}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-full w-1/2">
                  <Image
                    src="/product-images/spray_dry_powder_combo.png"
                    alt="Yucca Schidigera Spray Dried Powder and Container"
                    width={360}
                    height={388}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="side_by_side_container_start_desmar mt-4">
            <div className="w-full md:w-1/2">
              <hr></hr>
              <h2 className="subheading_desmar">
                {t('spray-dry-key-benefits')}
              </h2>
              <ul>
                <li>▸ {t('spray-dry-key-benefits-ammonia')}</li>
                <li>▸ {t('spray-dry-key-benefits-feed')}</li>
                <li>▸ {t('spray-dry-key-benefits-gut')}</li>
                <li>▸ {t('spray-dry-key-benefits-odor')}</li>
                <li>▸ {t('spray-dry-key-benefits-eco')}</li>
                <li>▸ {t('spray-dry-key-benefits-natural')}</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <hr></hr>
              <h2 className="subheading_desmar">
                {t('spray-dry-product-features')}
              </h2>
              <ul>
                <li>▸ <span className="font-bold">{t('form')}</span>: {t('form-spray-dry')}</li>
                <li>▸ <span className="font-bold">{t('color')}</span>: {t('color-spray-dry')}</li>
                <li>▸ <span className="font-bold">{t('solubility')}</span>: {t('solubility-spray-dry')}</li>
                <li>▸ <span className="font-bold">{t('saponin-content')}</span>: {t('saponin-content-spray-dry')}</li>
                <li>▸ <span className="font-bold">{t('packaging')}</span>: {t('packaging-spray-dry')}</li>
              </ul>
            </div>
          </div>


          <div className="side_by_side_container_start_desmar mt-4">
              <div className="w-full md:w-1/2">
                <hr></hr>
                <h2 className="subheading_desmar">
                  {t('spray-dry-applications')}
                </h2>
                {t('spray-dry-applications-p1')}:
                <ul>
                  <li>▸ {t('spray-dry-feed')}</li>
                  <li>▸ {t('spray-dry-pet')}</li>
                  <li>▸ {t('spray-dry-odor')}</li>
                  <li>▸ {t('spray-dry-soil')}</li>
                  <li>▸ {t('spray-dry-pharmaceutical')}</li>
                  <li>▸ {t('spray-dry-cosmetics')}</li>
                </ul>
                {t('spray-dry-applications-p2')}
              </div>

              <div className="w-full md:w-1/2">
                <hr></hr>
                <h2 className="subheading_desmar">
                  {t('spray-dry-why-choose')}
                </h2>
                  <p>
                  {t('spray-dry-why-choose-p1')}
                  </p> 
                  <p>
                  {t('spray-dry-why-choose-p2')}
                  </p>
                </div>

          </div>

          <div className="mt-4">
            <div className="italic">
              {t('spray-dry-sample')}
            </div>
            <Link href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ {t('spray-dry-inquire-link')}</Link>
            <p className='italic desmar_text_brown'>
              {t('spray-dry-approved')}
            </p>
          </div>

        </div>

        <div className="section_desmar desmar_light_brown_bg mt-2">
          <h2 className="subheading_desmar desmar_text_brown text-center scroll-mt-24" id="yucca-extract">{t('concentrate-extract-title')}</h2>
        
          <div className="side_by_side_container_desmar">
            <div className=" w-full md:w-1/2">
              <div className="interesting_text_desmar">▸ {t('concentrate-extract-brix-levels')}</div>

              {t('concentrate-extract-p1')}
              <br/>
              <br/>
              {t('concentrate-extract-p2')}
              <br/>
              <Link href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ {t('concentrate-extract-inquire-link')}</Link>
            </div>
            
            <div className="items-center flex-row flex w-full gap-4 md:w-1/2">
              <div className="w-3/4">
                <Image
                  src="/palette_jack2.jpg"
                  alt="Yucca Schidigera Extract Container"
                  width={2854}
                  height={1776}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-1/4">
                <Image
                  src="/product-images/nontransparent-bottle.jpeg"
                  alt="Yucca Schidigera Extract Sample"
                  width={1042}
                  height={2450}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
        
        <div className="section_desmar desmar_light_brown_bg  mt-2">
          <h2 className="subheading_desmar desmar_text_brown text-center scroll-mt-24" id="yucca-fiber">{t('fiber-powder-title')}</h2>
          <div className="side_by_side_container_desmar">
            <div className="w-full md:w-1/2">
              <div className="interesting_text_desmar">▸ {t('fiber-powder-tds-levels')}</div>
              {t('fiber-powder-p1')}
              <br/>
              <br/>
              {t('fiber-powder-p2')}
              <br/>
              <Link href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ {t('fiber-powder-inquire-link')}</Link>
            </div>

            <div className="items-center flex-row flex w-full gap-4 md:w-1/2">
              <div className="w-1/4">
                <Image
                  src="/yucca_powder.jpg"
                  alt="Yucca Schidigera Powder Bag"
                  width={684}
                  height={912}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-3/4">
                <Image
                  src="/supersacks-in-warehouse.jpg"
                  alt="Yucca Schidigera Supersacks in a Warehouse"
                  width={4032}
                  height={3024}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}