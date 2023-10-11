import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';
import Image from 'next/image';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';
import Video from '@/components/Video';

import { TViewGalleryModalProps } from './ViewGalleryModal.types';

const ViewGalleryModal: React.FC<TViewGalleryModalProps> = ({
  visible,
  defaultIndex = 0,
  dataCarousel = [],
  onClose,
}) => {
  const [carouselRef, setCarouselRef] = useState<Slider>();
  const [currentIndexSlide, setCurrentIndexSlide] = useState<number>(defaultIndex);
  const currentSlideData = dataCarousel[currentIndexSlide];

  useEffect(() => {
    if (visible) {
      setCurrentIndexSlide(defaultIndex);
      carouselRef?.slickGoTo?.(defaultIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, defaultIndex]);

  // useEffect(() => {
  //   carouselRef?.slickGoTo?.(currentIndexSlide);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentIndexSlide]);

  return (
    <Modal
      className="ViewGalleryModal"
      visible={visible}
      centered
      closeable={false}
      maskStyle={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
    >
      <div className="ViewGalleryModal-wrapper flex flex-col">
        <div className="ViewGalleryModal-view">
          {currentSlideData.video ? (
            <Video src={currentSlideData?.video} thumbnail={currentSlideData?.image} placement="center" objectFit="contain" />
          ) : (
            <Image src={currentSlideData?.image} alt="" />
          )}
          
        </div>
        <div className="ViewGalleryModal-list">
          <Carousels
            variableWidth
            infinite={false}
            arrows={false}
            dots={false}
            autoplay={false}
            // focusOnSelect
            onInit={setCarouselRef}
            // onBeforeChange={(oldIndex, newIndex): void => setCurrentIndexSlide(newIndex)}
          >
            {dataCarousel.map((item, index) => (
              <div
                key={index}
                className={classNames('ViewGalleryModal-list-item', { active: index === currentIndexSlide })}
                onClick={(): void => setCurrentIndexSlide(index)}
              >
                {item.video ? (
                  <Video src={item.video} thumbnail={item.image} placement="center" objectFit="contain" disabled />
                ) : (
                  <Image src={item.image} alt="" />
                )}
              </div>
            ))}
          </Carousels>
        </div>
      </div>
      <div className="ViewGalleryModal-action">
        <div className="ViewGalleryModal-action-btn flex items-center justify-center close" onClick={onClose}>
          <Icon name={EIconName.X} color={EIconColor.LYNCH} />
        </div>
        <div
          className="ViewGalleryModal-action-btn flex items-center justify-center arrow"
          onClick={(): void => {
            carouselRef?.slickNext?.();
          }}
        >
          <Icon name={EIconName.ArrowRightShort} color={EIconColor.LYNCH} />
        </div>
        <div
          className="ViewGalleryModal-action-btn flex items-center justify-center arrow"
          onClick={(): void => {
            carouselRef?.slickPrev?.();
          }}
        >
          <Icon name={EIconName.ArrowLeftShort} color={EIconColor.LYNCH} />
        </div>
      </div>
    </Modal>
  );
};

export default ViewGalleryModal;
