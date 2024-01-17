import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Carousels from '@/components/Carousels';
import KolCard from '@/components/KolCard';
import { Paths } from '@/routers/constants';

import { TCarouselKolCardsProps } from './CarouselKolCards.types.d';
import { dataCarouselKolCards } from './CarouselKolCards.data';

const CarouselKolCards: React.FC<TCarouselKolCardsProps> = () => {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <div className="CarouselKolCards">
      <h2 className="CarouselKolCards-title">Top influencers/KOLs</h2>

      <div className="CarouselKolCards-main">
        <Carousels
          infinite
          dots={false}
          arrows
          autoplay
          slidesToShow={6}
          onDragging={setIsDragging}
          responsive={[
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {dataCarouselKolCards.map((item) => (
            <div key={item.id} className="CarouselKolCards-item">
              <KolCard
                {...item}
                onClick={(): void => {
                  if (!isDragging) router.push(Paths.ProfileDetail('1'));
                }}
              />
            </div>
          ))}
        </Carousels>
      </div>
    </div>
  );
};

export default CarouselKolCards;
