"use client"
  import { useTranslations } from 'next-intl'
  

export default function Contact_Us() {
  const t = useTranslations('Contact-Us')

  return (
    <div>

      <div className="middle_column">

        <div className="section_desmar">
          <h1 className="heading_desmar desmar_text_brown">{t('contact-us-title')}</h1>
          <div className='interesting_text_desmar text-center'>
            {t('interesting-text-reach-out')}
          </div>
          <p>
            {t('details')} <br/>
            {t('or-visit')}
          </p>
        </div>
        <div className="section_desmar desmar_light_brown_bg">
          <div className="side_by_side_container_desmar">
            <div className="h-1/3 md:w-1/3 w-full">
              <p><span className="font-bold">{t('email-title')}</span>: info@desmarglobal.com</p>
              <p><span className="font-bold">{t('phone-number-title')}</span>: (909) 770 9655</p>
              <p>
              Desmar Global Inc. Headquarters<br></br>
              450 South Lone Hill Ave, Suite A, <br></br>
              San Dimas, California 91773<br></br>
              United States
              </p>
            </div>
            <div className="h-1/3 md:w-1/3 w-full border-t-2 pt-6 mt-2
            md:border-l-2 md:border-t-0 border-[#FFFFFF] md:mt-0 md:pt-0 md:pl-6 md:ml-2"
            >
              <span className="font-bold">{t('hours-title')}</span><br></br>
              <span className="font-bold">{t('monday-title')}</span><br></br>
              09:00 am - 05:00 pm<br></br>
              <span className="font-bold">{t('tuesday-title')}</span><br></br>
              09:00 am - 05:00 pm<br></br>
              <span className="font-bold">{t('wednesday-title')}</span><br></br>
              09:00 am - 05:00 pm
            </div>
            <div className="h-1/3 md:w-1/3 w-full">
              <span className="font-bold">{t('thursday-title')}</span><br></br>
              09:00 am - 05:00 pm<br></br>
              <span className="font-bold">{t('friday-title')}</span><br></br>
              09:00 am - 05:00 pm<br></br>
              <span className="font-bold">{t('saturday-title')}</span><br></br>
              {t('hours-closed')}<br></br>
              <span className="font-bold">{t('sunday-title')}</span><br></br>
              {t('hours-closed')}
            </div>
          </div>
        </div>
        <div className="section_desmar bg-[#F8F6D1]">
          <h2 className="subheading_desmar desmar_text_brown">
            {t('contact-form-title')}
          </h2>
          <p>{t('contact-form-prompt')}</p>
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="e544ccf9-04f9-474b-aae9-69ff3e4bd0e8"></input>
            <div className="form-group">
              <label htmlFor="name">{t('contact-form-name')}: *</label><br/>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">{t('contact-form-company')}: *</label><br/>
              <input type="text" id="company" name="company" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact-form-email')}: *</label><br/>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact-form-phone')} ({t('contact-form-optional')})</label><br/>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact-form-leave-us-a-message')} ({t('contact-form-optional')})</label><br/>
              <textarea id="message" name="message" rows={4}></textarea>
            </div>
            <p>{t('contact-form-product-of-interest')} ({t('contact-form-select-multiple')}) ({t('contact-form-optional')})</p>
            <div className="form-group">
              <label>
                <input type="checkbox" name="product" value="Yucca Spray Dry" />
                {t('contact-form-yucca-spray-dry')}
              </label><br/>
              <label>
                <input type="checkbox" name="product" value="Yucca Concentrate/Extract" />
                {t('contact-form-yucca-concentrate-extract')}
              </label><br/>
              <label>
                <input type="checkbox" name="product" value="Yucca Fiber/Powder" />
                {t('contact-form-yucca-fiber-powder')}
              </label><br/>
            </div>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
            <button type="submit" className="submit-button bg-[#749772]">{t('contact-form-submit-button')}</button>
            <p className="font-bold">{t('contact-form-we-will-respond')}</p>
          </form>
        </div>

      </div>
    </div>
  );
}