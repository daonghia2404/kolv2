import React from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

import { TStepWelcomeProps } from './StepWelcome.types';

const StepWelcome: React.FC<TStepWelcomeProps> = ({ onNext }) => {
  const [form] = Form.useForm();
  return (
    <div className="StepWelcome">
      <div className="StepWelcome-wrapper">
        <div className="AuthLayout-card-header">
          <div className="AuthLayout-card-title">Let’s start with your name</div>
          <div className="AuthLayout-card-description">
            Please fill in the details below so that we can get in contact with you about Product Name
          </div>
        </div>
        <div className="AuthLayout-card-body">
          <Form form={form} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="name">
                  <Input
                    placeholder="Enter your name"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button title="Next step" styleType={EButtonStyleType.RED} onClick={onNext} />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StepWelcome;
