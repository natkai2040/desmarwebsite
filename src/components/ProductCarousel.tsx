'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function ProductCarousel() {
  const t = useTranslations('Our-Products');
  const [selected, setSelected] = useState(0);

  const prev = () => setSelected((selected - 1 + 3) % 3);
  const next = () => setSelected((selected + 1) % 3);

  const products = [
    {
      key: 'spraydry',
      img: '/product-images/spray_dry_powder_combo.png',
      alt: "Container of Yucca Schidigera Spray Dry",
      title: t('spray-dry-title'),
      bullet: t('spray-dry-levels-short'),
      p1: t('spray-dry-p1'),
      p2: t('spray-dry-p2'),
      linkText: t('spray-dry-inquire-link'),
    },
    {
      key: 'fiber',
      img: '/product-images/bulkbag_combo.png',
      alt: "Bulkbag of Yucca Schidigera Fiber",
      title: t('fiber-powder-title'),
      bullet: t('fiber-powder-tds-levels'),
      p1: t('fiber-powder-p1'),
      p2: t('fiber-powder-p2'),
      linkText: t('fiber-powder-inquire-link'),
    },
    {
      key: 'extract',
      img: '/product-images/container_big_official_combo.png',
      alt: "Industrial Container of Yucca Schidigera Extract",
      title: t('concentrate-extract-title'),
      bullet: t('concentrate-extract-brix-levels'),
      p1: t('concentrate-extract-p1'),
      p2: t('concentrate-extract-p2'),
      linkText: t('concentrate-extract-inquire-link'),
    },
  ];

  const product = products[selected];

  return (
    <div className="flex flex-col items-center my-8">
      {/* Image Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-2xl h-[400px]">
        {/* Left */}
        <button
          onClick={prev}
          className="absolute left-0 z-999 p-2 desmar_light_bg bg-opacity-70 rounded-full shadow hover:bg-opacity-100 transition cursor-pointer"
          aria-label="Previous"
        >
          <FaChevronLeft size={28} />
        </button>

        {/* Image */}
        <div className="flex w-full items-center justify-center relative">
          {products.map((prod, idx) => {
            const pos = idx - selected;
            let style = "absolute transition-all duration-500";
            if (pos === 0) {
              style += " left-1/2 -translate-x-1/2 scale-100 opacity-100 z-20";
            } else if (pos === -1 || (pos === products.length - 1 && selected === 0)) {
              style += " left-1/4 -translate-x-1/2 scale-75 opacity-40 z-10";
            } else if (pos === 1 || (pos === -(products.length - 1) && selected === products.length - 1)) {
              style += " left-3/4 -translate-x-1/2 scale-75 opacity-40 z-10";
            } else {
              style += " opacity-0 pointer-events-none";
            }
            return (
              <Image
                key={prod.key}
                src={prod.img}
                alt={prod.alt}
                width={350}
                height={350}
                className={style + " rounded-lg shadow-lg"}
                style={{ maxHeight: 350, maxWidth: 350 }}
                priority={pos === 0}
              />
            );
          })}
        </div>

        {/* Right */}
        <button
          onClick={next}
          className="absolute right-0 z-999 p-2 desmar_light_bg bg-opacity-70 rounded-full shadow hover:bg-opacity-100 transition cursor-pointer"
          aria-label="Next"
        >
          <FaChevronRight size={28} />
        </button>
      </div>

      {/* Info below carousel */}
      <div className="section_desmar desmar_light_brown_bg px-8 mt-8 product-info-fade w-full max-w-6xl">
        <h2 className="subheading_desmar desmar_text_brown text-center">{product.title}</h2>
        <div className="interesting_text_desmar">▸ {product.bullet}</div>
        <div className="side_by_side_container_desmar">
          <div className="w-full ">
            <p>{product.p1}</p>
            <p>{product.p2}</p>
            <Link href="/contact-us" className="button_link desmar_brown_bg mt-8">
              ▷ {product.linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
