import React from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import DragDropImages from '@/components/DragDropImages';
import Select from '@/components/Select';

import { TStepIdCardProps } from './StepIdCard.types';

const StepIdCard: React.FC<TStepIdCardProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  return (
    <div className="StepIdCard">
      <div className="StepIdCard-wrapper">
        <div className="AuthLayout-card-header">
          <div className="AuthLayout-card-title">We need to verify your ID</div>
          <div className="AuthLayout-card-description">Confirming your Identity for security</div>
        </div>
        <div className="AuthLayout-card-body">
          <Form form={form} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="type" label="Document type" required>
                  <Select placeholder="Select document type" options={[]} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="image">
                  <DragDropImages maxCount={1} description="JPG, PNG or PDF, file size no more than 10MB" />
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

export default StepIdCard;
