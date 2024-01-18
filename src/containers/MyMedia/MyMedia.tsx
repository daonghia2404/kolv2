import React, { useState } from 'react';
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

const MyMedia: React.FC<TMyMediaProps> = ({ selector, value = [], onChange }) => {
  const dataImages = [
    { id: 1, image: ImageKolGallery2 },
    { id: 2, image: ImageKolGallery3 },
    { id: 3, image: ImageKolGallery1, video: '/static/videos/video-sample.mp4' },
    { id: 4, image: ImageKolGallery4 },
    { id: 5, image: ImageKolGallery1 },
    { id: 6, image: ImageKolGallery2 },
    { id: 7, image: ImageKolGallery3 },
  ];

  const [showingData, setShowingData] = useState(dataImages);
  const showingDataImages = dataImages?.filter((item) => item.image && !item.video);
  const showingDataVideos = dataImages?.filter((item) => item.video);

  const isFilterPhotoOnly = showingData?.every((item) => item.image && !item.video);
  const isFilterVideoOnly = showingData?.every((item) => item.video);

  const handleSelectItem = (data: any): void => {
    const isExisted = value?.find((item: any) => item.id === data.id);
    if (isExisted) {
      const newData = value?.filter((item: any) => item.id !== data.id);
      onChange?.(newData);
    } else {
      const newData = [...value, data];
      onChange?.(newData);
    }
  };

  return (
    <div className="MyMedia">
      <div className="MyMedia-filter flex items-center justify-between">
        {selector ? (
          <div className="MyMedia-filter-title">
            Selected <span>{value?.filter((item: any) => !item.video).length || 0} Photos</span> &{' '}
            <span>{value?.filter((item: any) => item.video).length || 0} Video</span>
          </div>
        ) : (
          <div className="MyMedia-filter-title">My media</div>
        )}

        <div className="MyMedia-filter-action flex items-center">
          <Button
            className={classNames({ active: !isFilterPhotoOnly && !isFilterVideoOnly })}
            title={`All media (${dataImages.length})`}
            iconName={EIconName.Grid}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TRANSPARENT}
            size="small"
            onClick={(): void => setShowingData(dataImages)}
          />

          <Button
            className={classNames({ active: isFilterPhotoOnly })}
            title={`Photo (${showingDataImages.length})`}
            iconName={EIconName.Photo}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TRANSPARENT}
            size="small"
            onClick={(): void => setShowingData(dataImages.filter((item) => !item.video))}
          />

          <Button
            className={classNames({ active: isFilterVideoOnly })}
            title={`Video (${showingDataVideos.length})`}
            iconName={EIconName.Video}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TRANSPARENT}
            size="small"
            onClick={(): void => setShowingData(dataImages.filter((item) => item.video))}
          />
        </div>
      </div>

      <div className="MyMedia-list">
        <Row gutter={[24, 24]}>
          {showingData.map((item) => {
            return (
              <Col key={item.id} span={item.video ? 24 : 12} sm={{ span: item.video ? 12 : 6 }}>
                <div
                  className={classNames('MyMedia-list-item', {
                    active: value?.map((subItem: any) => subItem.id)?.includes(item.id),
                  })}
                >
                  {selector ? (
                    <div
                      className="MyMedia-list-item-overlay flex items-center justify-center"
                      onClick={(): void => handleSelectItem(item)}
                    >
                      <div className="MyMedia-list-item-overlay-remove flex items-center">
                        <Icon name={EIconName.HandFinger} color={EIconColor.TORCH_RED} />
                        Select
                      </div>
                    </div>
                  ) : (
                    <div className="MyMedia-list-item-overlay flex items-center justify-center">
                      <div className="MyMedia-list-item-overlay-remove flex items-center">
                        <Icon name={EIconName.Trash} color={EIconColor.TORCH_RED} />
                        Delete
                      </div>
                    </div>
                  )}

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

      <div className="MyMedia-view-more flex justify-center">
        <Button
          title="View more"
          iconName={EIconName.AngleDown}
          iconColor={EIconColor.HEATHER}
          styleType={EButtonStyleType.TEXT_HEATHER}
          onClick={(): void => setShowingData([...showingData, ...dataImages])}
        />
      </div>
    </div>
  );
};

export default MyMedia;
