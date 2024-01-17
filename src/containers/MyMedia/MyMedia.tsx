import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';

import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import ImageKolGallery1 from '@/assets/images/image-kol-gallery-1.png';
import ImageKolGallery2 from '@/assets/images/image-kol-gallery-2.png';
import ImageKolGallery3 from '@/assets/images/image-kol-gallery-3.png';
import ImageKolGallery4 from '@/assets/images/image-kol-gallery-4.png';
import Video from '@/components/Video';

import { TMyMediaProps } from './MyMedia.types.d';

const MyMedia: React.FC<TMyMediaProps> = () => {
  const dataImages = [
    { image: ImageKolGallery2 },
    { image: ImageKolGallery3 },
    { image: ImageKolGallery1, video: '/static/videos/video-sample.mp4' },
    { image: ImageKolGallery4 },
    { image: ImageKolGallery1 },
    { image: ImageKolGallery2 },
    { image: ImageKolGallery3 },
  ];

  return (
    <div className="MyMedia">
      <div className="MyMedia-filter flex items-center justify-between">
        <div className="MyMedia-filter-title">My media</div>
        <div className="MyMedia-filter-action flex items-center">
          <Button
            className="active"
            title="All media (3)"
            iconName={EIconName.Grid}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TRANSPARENT}
            size="small"
          />

          <Button
            title="Photo (2)"
            iconName={EIconName.Photo}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TRANSPARENT}
            size="small"
          />

          <Button
            title="Video (1)"
            iconName={EIconName.Video}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TRANSPARENT}
            size="small"
          />
        </div>
      </div>

      <div className="MyMedia-list">
        <Row gutter={[24, 24]}>
          {dataImages.map((item, index) => {
            return (
              <Col key={index} span={item.video ? 24 : 12} sm={{ span: item.video ? 12 : 6 }}>
                <div className={classNames('MyMedia-list-item')} onClick={(): void => {}}>
                  <div className="MyMedia-list-item-overlay flex items-center justify-center">
                    <div className="MyMedia-list-item-overlay-remove flex items-center">
                      <Icon name={EIconName.Trash} color={EIconColor.TORCH_RED} />
                      Delete
                    </div>
                  </div>
                  {item.video ? (
                    <Video src={item.video} thumbnail={item.image} placement="center" objectFit="contain" disabled />
                  ) : (
                    <Image src={item.image} alt="" />
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default MyMedia;
