import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Select from '@/components/Select';

import { TStepPaymentProps } from './StepPayment.types';
import Checkbox from '@/components/Checkbox';

const StepPayment: React.FC<TStepPaymentProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepPayment">
      <Form
        form={form}
        layout="vertical"
        className="StepPayment-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="BuyCredits-title" style={{ margin: '7.6rem 0 1.2rem' }}>
          Payment Information
        </div>

        <div
          className="ProfileLayout-body-description flex items-center"
          style={{ fontWeight: 400, marginBottom: '4rem', columnGap: '1.2rem' }}
        >
          <Icon
            name={EIconName.ShieldSsl}
            color={EIconColor.RADICAL_RED}
            style={{ width: '2.4rem', height: '2.4rem' }}
          />
          Your credit card details are secure thanks to SSL encryption. We do not store any data.
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="cardName" label="Name on card">
              <Input
                placeholder="Enter your card name"
                prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
              />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="cardNumber" label="Card number">
              <Input placeholder="Enter your card number" prefix={<Icon name={EIconName.MasterCard} />} />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Row gutter={[16, 16]} wrap={false} align="top">
              <Col flex={1}>
                <Form.Item name="month" label="Expire date">
                  <Input placeholder="Month" />
                </Form.Item>
              </Col>
              <Col>
                <span style={{ fontSize: '1.6rem', color: EIconColor.LYNCH, display: 'block', marginTop: '3.8rem' }}>
                  /
                </span>
              </Col>
              <Col flex={1} style={{ marginTop: '2.95rem' }}>
                <Form.Item name="year">
                  <Input placeholder="Year" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="cvv" label="CVV code">
              <Input placeholder="Your CVV private code" />
            </Form.Item>
          </Col>
        </Row>

        <div className="BuyCredits-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Previous" size="large" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
          <Button
            title="BUY 200 CREDITS (+50 BONUS)"
            size="large"
            styleType={EButtonStyleType.RED}
            htmlType="submit"
            iconName={EIconName.Coin}
          />
        </div>

        <div className="BuyCredits-accept flex justify-center" style={{ marginTop: '2.4rem' }}>
          <Form.Item name="accept">
            <Checkbox
              lighten
              label={
                <span style={{ color: EIconColor.HEATHER }}>
                  By making a purchase, you accept out General{' '}
                  <a style={{ color: EIconColor.HEATHER, textDecoration: 'underline' }} href="#">
                    Term and Conditionals
                  </a>{' '}
                  and Our{' '}
                  <a style={{ color: EIconColor.HEATHER, textDecoration: 'underline' }} href="#">
                    Privacy Policy
                  </a>
                </span>
              }
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default StepPayment;
