import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TKolCardProps } from './KolCard.types.d';
import Button, { EButtonStyleType } from '@/components/Button';
import { Skeleton } from 'antd';

const KolCard: React.FC<TKolCardProps> = ({
  loading,
  image,
  name,
  rank,
  age,
  country,
  weight,
  height,
  hideInfo,
  topPick,
  promotion,
  horizontal,
  description,
  onClick,
}) => {
  return (
    <div className={classNames('KolCard', { 'hide-info': hideInfo, horizontal })} onClick={onClick}>
      {loading ? (
        <div className="KolCard-loading">
          <Skeleton active paragraph={false} />
        </div>
      ) : (
        <>
          {topPick && (
            <div className="KolCard-badge flex items-center justify-center">
              <Icon name={EIconName.ThumbUp} color={EIconColor.WHITE} />
              Top Picks
            </div>
          )}

          {promotion && (
            <div className="KolCard-badge promotion flex items-center justify-center">
              <Icon name={EIconName.Lightning} color={EIconColor.WHITE} />
              Promotion
            </div>
          )}

          <div className="KolCard-image">{image && <Image src={image} alt="" />}</div>
          <div className="KolCard-play">
            <Icon name={EIconName.PlayCircle} />
          </div>
          <div className="KolCard-info flex flex-col justify-end">
            {!horizontal && (
              <>
                <div className="KolCard-info-overlay light" />
                <div className="KolCard-info-overlay dark" />
              </>
            )}

            <div className="KolCard-info-wrapper">
              <div className="KolCard-name flex items-center">
                {name}
                <div className="KolCard-rank">{rank && <Image src={rank} alt="" />}</div>
              </div>

              <div className="KolCard-age flex items-center">
                {age} years old
                <div className="KolCard-country">{country && <Image src={country} alt="" />}</div>
              </div>

              <div className="KolCard-detail flex items-center flex-wrap" style={{ rowGap: '0.8rem' }}>
                <div className="KolCard-detail-item flex items-center">
                  <Icon name={EIconName.RuleHalfCircle} color={EIconColor.WHITE} />
                  w: {weight}kg
                </div>

                <div className="KolCard-detail-item flex items-center">
                  <Icon name={EIconName.ArrowVertical} color={EIconColor.WHITE} style={{ transform: 'scale(0.9)' }} />
                  h: {height}cm
                </div>
              </div>

              {horizontal && description && (
                <p className="KolCard-description" style={{ margin: '2.4rem 0' }}>
                  {description}
                </p>
              )}

              {horizontal && (
                <div className="KolCard-btn flex">
                  <Button
                    title="View portfolio"
                    reverse
                    iconName={EIconName.ArrowRightShort}
                    iconColor={EIconColor.RADICAL_RED}
                    styleType={EButtonStyleType.TEXT_RED}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default KolCard;
