import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import CreditCard, { ECreditCardType } from '@/components/CreditCard';

import { TStepAmountProps } from './StepAmount.types';

const StepAmount: React.FC<TStepAmountProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepAmount">
      <Form
        form={form}
        layout="vertical"
        className="StepAmount-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="BuyCredits-title" style={{ margin: '7.6rem 0 4rem' }}>
          Choose how many credit
          <br />
          you want to buy
        </div>

        <div className="BuyCredits-card" style={{ marginBottom: '4rem' }}>
          <Row gutter={[20, 20]}>
            <Col span={24} sm={{ span: 12 }} md={{ span: 6 }}>
              <CreditCard
                active={formValues?.creditType === ECreditCardType.BRONZE}
                type={ECreditCardType.BRONZE}
                title="20CHF = 20CREDITS"
                bonus="NO BONUS"
                onClick={(): void => {
                  const dataChanged = {
                    creditType: ECreditCardType.BRONZE,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
            <Col span={24} sm={{ span: 12 }} md={{ span: 6 }}>
              <CreditCard
                active={formValues?.creditType === ECreditCardType.SILVER}
                type={ECreditCardType.SILVER}
                title="50CHF = 60CREDITS"
                bonus="BONUS 10 CREDITS"
                onClick={(): void => {
                  const dataChanged = {
                    creditType: ECreditCardType.SILVER,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
            <Col span={24} sm={{ span: 12 }} md={{ span: 6 }}>
              <CreditCard
                active={formValues?.creditType === ECreditCardType.RED}
                type={ECreditCardType.RED}
                title="100 CHF = 130 CREDITS"
                bonus="BONUS 30 CREDITS"
                onClick={(): void => {
                  const dataChanged = {
                    creditType: ECreditCardType.RED,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
            <Col span={24} sm={{ span: 12 }} md={{ span: 6 }}>
              <CreditCard
                active={formValues?.creditType === ECreditCardType.GOLD}
                type={ECreditCardType.GOLD}
                title="200 CHF = 250 CREDITS"
                bonus="BONUS 50 CREDITS"
                onClick={(): void => {
                  const dataChanged = {
                    creditType: ECreditCardType.GOLD,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
          </Row>
        </div>

        <div className="BuyCredits-amount">
          <Row gutter={[12, 12]} align="middle">
            <Col>
              <div className="ProfileLayout-body-description" style={{ fontWeight: 400 }}>
                Or enter amount
              </div>
            </Col>
            <Col flex={1}>
              <Form.Item name="amount">
                <Input placeholder="Enter your amount" suffix="CHF" numberic numberWithSeperator useNumber />
              </Form.Item>
            </Col>
            <Col>
              <div
                className="ProfileLayout-body-description flex items-center"
                style={{ columnGap: '0.4rem', fontWeight: 400 }}
              >
                = <span style={{ fontWeight: 700, color: EIconColor.RADICAL_RED }}>0</span> Credits (
                <span style={{ fontWeight: 700, color: EIconColor.RADICAL_RED }}>0</span> Free)
                <Icon name={EIconName.Coin} style={{ width: '2rem', height: '2rem', marginLeft: '.8rem' }} />
              </div>
            </Col>
          </Row>
        </div>

        <div className="BuyCredits-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Next step" size="large" styleType={EButtonStyleType.RED} htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default StepAmount;
