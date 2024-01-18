import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import { ECreditCardType } from '@/components/CreditCard';
import PlanCard from '@/components/PlanCard';

import { TStepPlanProps } from './StepPlan.types';

const StepPlan: React.FC<TStepPlanProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepPlan">
      <Form
        form={form}
        layout="vertical"
        className="StepPlan-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 4rem' }}>
          Choose your plan
        </div>

        <div className="CreateListing-card" style={{ marginBottom: '4rem' }}>
          <Row gutter={[20, 20]}>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }}>
              <PlanCard
                active={formValues?.planType === ECreditCardType.BRONZE}
                type={ECreditCardType.BRONZE}
                credits={0}
                title="Basic"
                features={[
                  { value: '1', label: '1 Day' },
                  { value: '2', label: '3 Photos' },
                  { value: '3', label: '1 Region' },
                ]}
                onClick={(): void => {
                  const dataChanged = {
                    planType: ECreditCardType.BRONZE,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }}>
              <PlanCard
                active={formValues?.planType === ECreditCardType.SILVER}
                type={ECreditCardType.SILVER}
                credits={15}
                title="Standard"
                features={[
                  { value: '1', label: '1 Day' },
                  { value: '2', label: 'Max Photos' },
                  { value: '3', label: 'All Region' },
                ]}
                onClick={(): void => {
                  const dataChanged = {
                    planType: ECreditCardType.SILVER,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }}>
              <PlanCard
                active={formValues?.planType === ECreditCardType.RED}
                type={ECreditCardType.RED}
                credits={15}
                title="Premium"
                features={[
                  { value: '1', label: '7 Days' },
                  { value: '2', label: 'Max Photos' },
                  { value: '3', label: 'All Region' },
                ]}
                onClick={(): void => {
                  const dataChanged = {
                    planType: ECreditCardType.RED,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
            <Col span={24} sm={{ span: 12 }} lg={{ span: 6 }}>
              <PlanCard
                active={formValues?.planType === ECreditCardType.GOLD}
                type={ECreditCardType.GOLD}
                credits={15}
                title="Enterprise"
                features={[
                  { value: '1', label: '30 Days' },
                  { value: '2', label: 'Max Photos' },
                  { value: '3', label: 'All Region' },
                ]}
                onClick={(): void => {
                  const dataChanged = {
                    planType: ECreditCardType.GOLD,
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              />
            </Col>
          </Row>
        </div>

        <div className="CreateListing-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Next step (Total 15 credit)" size="large" styleType={EButtonStyleType.RED} htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default StepPlan;
