import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Select from '@/components/Select';

import { TStepInformationProps } from './StepInformation.types';

const StepInformation: React.FC<TStepInformationProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepInformation">
      <Form
        form={form}
        layout="vertical"
        className="StepInformation-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="BuyCredits-title" style={{ margin: '7.6rem 0 1.2rem' }}>
          Your Billing Information
        </div>

        <div className="ProfileLayout-body-description" style={{ fontWeight: 400, marginBottom: '4rem' }}>
          The in formation comes from your settings. However, you are welcome to change them.
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="firstName" label="First name">
              <Input
                placeholder="Enter your first name"
                prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
              />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="lastName" label="Last name">
              <Input
                placeholder="Enter your last name"
                prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="street" label="Street">
              <Input placeholder="Your address" suffix={<Icon name={EIconName.Map} color={EIconColor.LYNCH} />} />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="streetNumber" label="Street number">
              <Input placeholder="Your street number" />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="zipCode" label="Zip code">
              <Input placeholder="Zip code" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="country" label="Country" required>
              <Select placeholder="Select country" options={[]} />
            </Form.Item>
          </Col>
        </Row>

        <div className="BuyCredits-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Previous" size="large" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
          <Button title="Next step" size="large" styleType={EButtonStyleType.RED} htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default StepInformation;
