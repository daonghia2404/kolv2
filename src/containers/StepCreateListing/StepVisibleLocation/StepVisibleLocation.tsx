import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import Checkbox from '@/components/Checkbox';

import { TStepVisibleLocationProps } from './StepVisibleLocation.types';

const StepVisibleLocation: React.FC<TStepVisibleLocationProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepVisibleLocation">
      <Form
        form={form}
        layout="vertical"
        className="StepVisibleLocation-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 1.2rem' }}>
          Where will your information be visible?
        </div>
        <div className="ProfileLayout-body-description" style={{ fontWeight: 400, marginBottom: '4rem' }}>
          First location free, additional categories +10 credits
        </div>

        <Row gutter={[20, 10]} style={{ marginBottom: '4rem' }}>
          {[
            { value: '9', label: 'Aargau' },
            { value: '10', label: 'Appenzell' },
            { value: '11', label: 'Bern' },
            { value: '12', label: 'BaselStadt' },
            { value: '13', label: 'Basel Land' },
            { value: '14', label: 'Fribourg' },
            { value: '15', label: 'Genf' },
            { value: '16', label: 'Glarus' },
            { value: '17', label: 'Graubünden' },
            { value: '18', label: 'Jura' },
            { value: '19', label: 'Luzern' },
            { value: '20', label: 'Neuenburg' },
            { value: '21', label: 'Thurgau' },
            { value: '22', label: 'Tessin' },
            { value: '23', label: 'Uri' },
            { value: '24', label: 'Zug' },
            { value: '25', label: 'ZürichCity' },
            { value: '26', label: 'ZürichUmgebung' },
          ].map((item) => (
            <Col key={item.value} span={12} sm={{ span: 8 }} md={{ span: 6 }}>
              <Form.Item name={item.value}>
                <Checkbox label={item.label} lighten />
              </Form.Item>
            </Col>
          ))}
        </Row>

        <div className="CreateListing-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Previous" size="large" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
          <Button title="Next step (Total 25 credit)" size="large" styleType={EButtonStyleType.RED} htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default StepVisibleLocation;
