import Link from 'next/link';
import { MdClose } from "react-icons/md";
import { useTranslations } from 'next-intl'



interface PopupCardProps {
  onClose: () => void;
}

export default function PopupCard({ onClose }: PopupCardProps) {
  const t = useTranslations('PopupCard')

  return (
    <div className="relative bg-[#F8F6D1] px-4 py-4 rounded-lg shadow-lg max-w-md">
        <div className="close_button_desmar absolute -right-0.5" onClick={() => onClose()}>
        <MdClose height={10} width={10}/>
        </div>
        <h2 className="subheading_desmar">
            {t('interested')}
        </h2>
        <p>
            {t('lets-talk')}
            <br></br>
            {t('contact-us-at')}
            <br></br>
            {t('or-use-form')}
        </p>
        <Link href="/contact-us" className="button_link desmar_brown_bg">
          {t('contact-form-link')}
        </Link>
    </div>
  );
}