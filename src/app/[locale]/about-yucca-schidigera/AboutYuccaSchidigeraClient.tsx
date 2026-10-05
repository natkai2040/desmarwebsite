"use client"

// import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl'

export default function About_Yucca_Schidigera() {
  const t = useTranslations('About-Yucca')
  return (
    <div>
      <div className="middle_column">

        <div className="section_desmar">
          <div className="side_by_side_container_desmar">
            <div className="w-full md:w-3/4">
              <h1 className="heading_desmar desmar_text_brown text-center">{t('what-is-yucca-title')}</h1>
              <div className='interesting_text_desmar text-center'>
                {t('interesting-text-botanical-gem')}
              </div>
              <p>
                {t('main-p1')}
              </p>
              <p>
                {t('main-p2')}
              </p>
              <p>
                {t('main-p3')}
              </p>
            </div>
            <Image src="/yucca_tree.jpg"
              alt="Yucca Schidigera Plant"
              width={812} height={1158}
              className="w-1/2 md:w-1/4"
            />
          </div>
        </div>
        
        <div className="section_desmar desmar_light_brown_bg">
          <h2 className="subheading_desmar desmar_text_brown">
            {t('where-grown-title')}
          </h2>
          <p>
            {t('where-grown-description')}
          </p>
        </div>
        <div className="section_desmar">
          <h1 className="heading_desmar desmar_text_brown text-center">
            {t('uses-title')}
          </h1>
        </div>

        <div className="section_desmar bg-[#609D5C]">
          <div className="side_by_side_container_desmar">
            <div className="h-2/3 md:w-2/3 desmar_text_white">
              <h2 className="subheading_desmar text-[#283D27] scroll-mt-24" id="agriculture">
                {t('yucca-for-agriculture-title')}
              </h2>
              <p>
                {
                  t.rich('yucca-for-agriculture-p', {
                    br: () => (<><br/><br/></>),
                    biostimulant_study: (chunks) => <a
                      href="https://www.researchgate.net/publication/366995455_Use_of_Yucca_Yucca_schidigera_Extracts_as_Biostimulants_to_Promote_Germination_and_Early_Vigor_and_as_Natural_Fungicides"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                    saponin_link: (chunks) => <a
                      href="https://journal-inflammation.biomedcentral.com/articles/10.1186/1476-9255-3-6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                    antifungal_study_1: (chunks) => <a
                      href="https://www.researchgate.net/publication/366995455_Use_of_Yucca_Yucca_schidigera_Extracts_as_Biostimulants_to_Promote_Germination_and_Early_Vigor_and_as_Natural_Fungicides"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,                
                    antifungal_study_2: (chunks) => <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0926669007000374"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                  })
                }
              </p>
              <h3 className="subsubheading_desmar text-[#283D27]">{t('yucca-for-agriculture-further-reading')}</h3>
              <ul className="unordered-list-desmar">
                <li>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9865292/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('fungicide-link')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.federalregister.gov/documents/2000/09/29/00-24946/yucca-extract-exemption-from-the-requirement-of-a-tolerance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {t('government-link')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-1/3 md:w-1/3">
              <Image src="/agriculture-field22.jpg"
              alt="Plants on a Farm"
              width={1740} height={1320}
              className="h-full w-full object-cover rounded-2xl shadow-inner-white"
              />
            </div>
          </div>
        </div>

        <div className="section_desmar bg-[#a18760]">
          <div className="side_by_side_container_desmar">
            <div className="h-2/3 md:w-2/3 desmar_text_white">
              <h2 className="subheading_desmar text-[#614418] scroll-mt-24" id="livestock">
                {t('yucca-for-livestock-title')}
              </h2>
              <p>
                {
                  t.rich('yucca-for-livestock-p', {
                    br: () => (<><br/><br/></>),
                    reduce_ammonia: (chunks) => <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S016788091100096X"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                    reduce_methane: (chunks) => <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0959652619329440"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                    poultry: (chunks) => <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4774811/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,                
                    aquaculture: (chunks) => <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/B9780323916622000090"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                    waterborne_ammonia: (chunks) => <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7825398/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >{chunks}</a>,
                  })
                }
              </p>
              <h3 className="subsubheading_desmar text-[#614418]">{t('yucca-for-livestock-further-reading')}</h3>
              <ul className="unordered-list-desmar">
                <li> 
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0959652619329440"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('yucca-for-livestock-greenhouse-link')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-1/3 md:w-1/3">
              <Image 
              src="/pigs-marek-piwnicki2.jpg"
              alt="White Pig on Brown Soil"
              width={1984} height={1318}
              className="rounded-2xl shadow-inner-white"/>
            </div>
          </div>
        </div>

        <div className="section_desmar bg-[#C18FC2]">
          <div className="side_by_side_container_desmar">
            <div className="h-2/3 md:w-2/3 desmar_text_white">
              <h2 className="subheading_desmar text-[#5C225D] scroll-mt-24" id="cosmetics">
                {t('yucca-for-cosmetics-title')}
              </h2>
              <p>
                {
                  t.rich('yucca-for-cosmetics-p', {
                      br: () => (<><br/><br/></>)
                  })
                }
              </p>
              <h3 className="subsubheading_desmar text-[#5C225D]">{t('yucca-for-cosmetics-further-reading')}</h3>
              <ul className="unordered-list-desmar">
                <li>
                  <a
                      href="https://cosmileeurope.eu/inci/detail/17039/yucca-schidigera-leaf-root-stem-extract/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      {t('yucca-for-cosmetics-cosmile-link')}  
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-1/3 md:w-1/3">
              <Image 
                src="/clear-bottle-nataliya-melnychuk3.jpg"
                alt="Clear Makeup Bottle"
                width={2000} height={2500}
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-inner-white"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}