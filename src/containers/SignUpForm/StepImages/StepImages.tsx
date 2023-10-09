import React from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import DragDropImages from '@/components/DragDropImages';

import { TStepImagesProps } from './StepImages.types';

const StepImages: React.FC<TStepImagesProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  return (
    <div className="StepImages">
      <div className="StepImages-wrapper">
        <div className="AuthLayout-card-header">
          <div className="AuthLayout-card-title">Share your moments</div>
          <div className="AuthLayout-card-description">Beautiful images will make you shine brighter!</div>
        </div>
        <div className="AuthLayout-card-body">
          <Form form={form} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="images">
                  <DragDropImages
                    multiple
                    maxCount={10}
                    description="You can upload a maximum of 10 images, each in JPG, PNG, HEIC"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button title="Previous" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
              </Col>
              <Col span={12}>
                <Button title="Next step" styleType={EButtonStyleType.RED} onClick={onNext} />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StepImages;
