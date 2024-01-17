import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Slider from 'react-slick';
import Image from 'next/image';
import classNames from 'classnames';

import ImageKolGallery1 from '@/assets/images/image-kol-gallery-1.png';
import ImageKolGallery2 from '@/assets/images/image-kol-gallery-2.png';
import ImageKolGallery3 from '@/assets/images/image-kol-gallery-3.png';
import ImageKolGallery4 from '@/assets/images/image-kol-gallery-4.png';
import Carousels from '@/components/Carousels';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { addZeroIfLessThanTen } from '@/utils/functions';
import ViewGalleryModal from '@/containers/GalleryKol/ViewGalleryModal';
import { useModalState } from '@/utils/hooks';
import Video from '@/components/Video';

import { TGalleryKolProps } from './GalleryKol.types.d';
import { EGalleryKolView } from './GalleryKol.enums';

const GalleryKol: React.FC<TGalleryKolProps> = ({ view }) => {
  const isViewReview = view === EGalleryKolView.REVIEW;
  const isViewDetail = view === EGalleryKolView.DETAIL;
  const maxLimitImage = isViewReview ? 3 : 4;

  const [carouselRef, setCarouselRef] = useState<Slider>();
  const [currentIndexSlide, setCurrentIndexSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [viewGalleryModalState, handleOpenViewGalleryModal, handleCloseViewGalleryModal] = useModalState();
  const dataCarousel = [
    { image: ImageKolGallery1, video: '/static/videos/video-sample.mp4' },
    { image: ImageKolGallery2 },
    { image: ImageKolGallery3 },
    { image: ImageKolGallery4 },
    { image: ImageKolGallery1 },
    { image: ImageKolGallery2 },
    { image: ImageKolGallery3 },
    { image: ImageKolGallery4 },
    { image: ImageKolGallery1 },
    { image: ImageKolGallery2 },
    { image: ImageKolGallery3 },
    { image: ImageKolGallery4 },
  ];

  const limitGalleryList = dataCarousel.slice(0, maxLimitImage);
  const moreGalleryItem = dataCarousel.length - limitGalleryList.length;

  return (
    <div className="GalleryKol">
      <div className="GalleryKol-wrapper flex flex-col">
        {isViewDetail && (
          <div className="GalleryKol-carousel">
            <Carousels
              infinite={false}
              arrows={false}
              dots={false}
              slidesToShow={1}
              onInit={setCarouselRef}
              onBeforeChange={(oldIndex, newIndex): void => setCurrentIndexSlide(newIndex)}
              onDragging={setIsDragging}
            >
              {dataCarousel.map((item, index) => (
                <div
                  key={index}
                  className="GalleryKol-carousel-item"
                  onClick={(): void => {
                    if (!isDragging) {
                      handleOpenViewGalleryModal(undefined, { defaultIndex: currentIndexSlide });
                    }
                  }}
                >
                  {item.video ? (
                    <Video src={item.video} thumbnail={item.image} placement="center" objectFit="contain" disabled />
                  ) : (
                    <Image src={item.image} alt="" />
                  )}
                </div>
              ))}
            </Carousels>
            <div className="GalleryKol-carousel-action flex items-center justify-center">
              <Button
                iconName={EIconName.ArrowLeftShort}
                iconColor={EIconColor.OSLO_GRAY}
                styleType={EButtonStyleType.TRANSPARENT}
                onClick={(): void => {
                  if (!isDragging) carouselRef?.slickPrev?.();
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
                  if (!isDragging) carouselRef?.slickNext?.();
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
        )}

        <div className="GalleryKol-list">
          <Row gutter={[24, 24]}>
            {limitGalleryList.map((item, index) => {
              const isMoreItem = index === maxLimitImage - 1 && moreGalleryItem > 0;

              return (
                <Col key={index} span={isViewReview ? 8 : 6}>
                  <div
                    className={classNames('GalleryKol-list-item', { review: isViewReview, detail: isViewDetail })}
                    onClick={(): void => handleOpenViewGalleryModal(undefined, { defaultIndex: index })}
                  >
                    {item.video ? (
                      <Video src={item.video} thumbnail={item.image} placement="center" objectFit="contain" disabled />
                    ) : (
                      <Image src={item.image} alt="" />
                    )}
                    {isMoreItem && (
                      <div
                        className={classNames('GalleryKol-list-item-overlay flex items-center justify-center nowrap', {
                          review: isViewReview,
                          detail: isViewDetail,
                        })}
                      >
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
