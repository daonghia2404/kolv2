import React from 'react';
import { Col, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import InfoDetailKol from '@/containers/InfoDetailKol';
import GalleryKol, { EGalleryKolView } from '@/containers/GalleryKol';

import { TStepReviewProps } from './StepReview.types';

const StepReview: React.FC<TStepReviewProps> = ({ onPrev, onNext }) => {
  return (
    <div className="StepReview">
      <div className="StepReview-wrapper">
        <div className="AuthLayout-card-header">
          <div className="AuthLayout-card-title">Review your informations</div>
        </div>
        <div className="AuthLayout-card-body">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <GalleryKol view={EGalleryKolView.REVIEW} />
              <InfoDetailKol />
            </Col>
            <Col span={12}>
              <Button title="Previous" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
            </Col>
            <Col span={12}>
              <Button title="Done!" styleType={EButtonStyleType.RED} onClick={onNext} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default StepReview;
