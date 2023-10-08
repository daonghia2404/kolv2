import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Slider from 'react-slick';
import Image from 'next/image';

import ImageKolGallery1 from '@/assets/images/image-kol-gallery-1.png';
import ImageKolGallery2 from '@/assets/images/image-kol-gallery-2.png';
import ImageKolGallery3 from '@/assets/images/image-kol-gallery-3.png';
import Carousels from '@/components/Carousels';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { addZeroIfLessThanTen } from '@/utils/functions';
import ViewGalleryModal from '@/containers/GalleryKol/ViewGalleryModal';
import { useModalState } from '@/utils/hooks';

import { TGalleryKolProps } from './GalleryKol.types.d';

const GalleryKol: React.FC<TGalleryKolProps> = () => {
  const [carouselRef, setCarouselRef] = useState<Slider>();
  const [currentIndexSlide, setCurrentIndexSlide] = useState<number>(0);

  const [viewGalleryModalState, handleOpenViewGalleryModal, handleCloseViewGalleryModal] = useModalState();
  const dataCarousel = [
    ImageKolGallery1,
    ImageKolGallery2,
    ImageKolGallery3,
    ImageKolGallery1,
    ImageKolGallery2,
    ImageKolGallery3,
    ImageKolGallery1,
    ImageKolGallery2,
    ImageKolGallery3,
  ];

  const limitGalleryList = dataCarousel.slice(0, 4);
  const moreGalleryItem = dataCarousel.length - limitGalleryList.length;

  return (
    <div className="GalleryKol">
      <div className="GalleryKol-wrapper flex flex-col">
        <div className="GalleryKol-carousel">
          <Carousels
            infinite={false}
            arrows={false}
            dots={false}
            slidesToShow={1}
            onInit={setCarouselRef}
            onBeforeChange={(oldIndex, newIndex): void => setCurrentIndexSlide(newIndex)}
          >
            {dataCarousel.map((item, index) => (
              <div key={index} className="GalleryKol-carousel-item">
                <Image src={item} alt="" />
              </div>
            ))}
          </Carousels>
          <div className="GalleryKol-carousel-action flex items-center justify-center">
            <Button
              iconName={EIconName.ArrowLeftShort}
              iconColor={EIconColor.OSLO_GRAY}
              styleType={EButtonStyleType.TRANSPARENT}
              onClick={(): void => {
                carouselRef?.slickPrev?.();
              }}
            />
            <div className="GalleryKol-carousel-action-title">
              {addZeroIfLessThanTen(currentIndexSlide + 1)}/{addZeroIfLessThanTen(dataCarousel.length)}
            </div>
            <Button
              iconName={EIconName.ArrowRightShort}
              iconColor={EIconColor.OSLO_GRAY}
              styleType={EButtonStyleType.TRANSPARENT}
              onClick={(): void => {
                carouselRef?.slickNext?.();
              }}
            />
            <Button
              iconName={EIconName.ZoomIn}
              iconColor={EIconColor.OSLO_GRAY}
              styleType={EButtonStyleType.TRANSPARENT}
              onClick={(): void => handleOpenViewGalleryModal(undefined, { defaultIndex: currentIndexSlide })}
            />
          </div>
        </div>
        <div className="GalleryKol-list">
          <Row gutter={[24, 24]}>
            {limitGalleryList.map((item, index) => {
              const isMoreItem = index === 3 && moreGalleryItem > 0;

              return (
                <Col key={index} span={6}>
                  <div
                    className="GalleryKol-list-item"
                    onClick={(): void => handleOpenViewGalleryModal(undefined, { defaultIndex: index })}
                  >
                    <Image src={item} alt="" />
                    {isMoreItem && (
                      <div className="GalleryKol-list-item-overlay flex items-center justify-center nowrap">
                        +{moreGalleryItem} Photos
                      </div>
                    )}
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <ViewGalleryModal {...viewGalleryModalState} dataCarousel={dataCarousel} onClose={handleCloseViewGalleryModal} />
    </div>
  );
};

export default GalleryKol;
