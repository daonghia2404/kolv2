/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';

import ImageHighLightLineTop from '@/assets/images/image-highlight-line-top.png';
import ImageHighLightLineBottom from '@/assets/images/image-highlight-line-bottom.png';
import IconRankV from '@/assets/icons/icon-rank-v.svg';
import IconFlagJp from '@/assets/icons/icon-flag-jp.svg';
import ImageModel3 from '@/assets/images/image-model-3.png';
import ImageModel8 from '@/assets/images/image-model-8.png';
import ImageModel10 from '@/assets/images/image-model-10.png';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { THighlightKolProps } from './HighlightKol.types.d';

const HighlightKol: React.FC<THighlightKolProps> = () => {
  return (
    <div className="HighlightKol">
      <div className="HighlightKol-line top">
        <Image src={ImageHighLightLineTop} alt="" />
      </div>
      <div className="HighlightKol-line bottom">
        <Image src={ImageHighLightLineBottom} alt="" />
      </div>
      <div className="HighlightKol-wrapper">
        <Row gutter={[48, 48]} wrap={false} align="middle">
          <Col>
            <div className="HighlightKol-images flex items-center">
              <div className="HighlightKol-images-item">
                <Image src={ImageModel3} alt="" />
              </div>
              <div className="HighlightKol-images-item">
                <Image src={ImageModel8} alt="" />
              </div>
              <div className="HighlightKol-images-item">
                <Image src={ImageModel10} alt="" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="HighlightKol-info">
              <h4 className="HighlightKol-info-name flex items-center">
                Cathay
                <div className="HighlightKol-info-rank">
                  <Image src={IconRankV} alt="" />
                </div>
              </h4>
              <div className="HighlightKol-info-detail">
                <Row gutter={[24, 24]}>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">
                      27 years old
                      <div className="HighlightKol-info-detail-item-icon">
                        <Image src={IconFlagJp} alt="" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">
                      <div className="HighlightKol-info-detail-item-icon">
                        <Icon name={EIconName.RuleHalfCircle} color={EIconColor.HEATHER} />
                      </div>
                      w: 44kg
                    </div>
                  </Col>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">
                      <div className="HighlightKol-info-detail-item-icon">
                        <Icon
                          name={EIconName.ArrowVertical}
                          color={EIconColor.HEATHER}
                          style={{ transform: 'scale(0.9)' }}
                        />
                      </div>
                      h: 169cm
                    </div>
                  </Col>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">BWH: 90-60-90 cm</div>
                  </Col>
                </Row>
              </div>
              <p className="HighlightKol-info-description">
                I'm Cathay, content creator and influencer with a passion for exploring and sharing unique life
                experiences. My focus revolves around showcasing culture, travel, food, and lifestyle through my lens.
                With a proven track record of creating engaging content and connecting naturally with my audience, I'm
                excited to collaborate with you. I believe my creativity can ignite interest in your brand or product...
              </p>
              <div className="HighlightKol-info-link flex justify-end">
                <Button
                  title="View detail"
                  iconName={EIconName.ArrowRightShort}
                  iconColor={EIconColor.RADICAL_RED}
                  styleType={EButtonStyleType.TEXT_RED}
                  reverse
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="HighlightKol-sponsored flex items-center">
          <Icon name={EIconName.Lightning} color={EIconColor.HEATHER} />
          Sponsored by XXXX
        </div>
      </div>
    </div>
  );
};

export default HighlightKol;
