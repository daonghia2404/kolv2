import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import Checkbox from '@/components/Checkbox';

import { TStepCategoriesServicesProps } from './StepCategoriesServices.types';

const StepCategoriesServices: React.FC<TStepCategoriesServicesProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepCategoriesServices">
      <Form
        form={form}
        layout="vertical"
        className="StepCategoriesServices-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 1.2rem' }}>
          Categories & Services
        </div>
        <div className="ProfileLayout-body-description" style={{ fontWeight: 400, marginBottom: '4rem' }}>
          First category free, additional categories +10 credits
        </div>

        <div
          className="ProfileLayout-body-subtitle flex items-center"
          style={{ columnGap: '1rem', marginBottom: '2rem' }}
        >
          Categories
          <span
            className="ProfileLayout-body-description cursor-pointer"
            style={{ fontWeight: 400, textDecoration: 'underline' }}
            onClick={(): void => {
              const dataChanged = {
                '1': true,
                '2': true,
                '3': true,
                '4': true,
                '5': true,
                '6': true,
                '7': true,
                '8': true,
              };
              form.setFieldsValue(dataChanged);
              setFormValues({ ...formValues, ...dataChanged });
            }}
          >
            Select All
          </span>
        </div>
        <Row gutter={[20, 10]} style={{ marginBottom: '4rem' }}>
          {[
            { value: '1', label: 'She seeks him' },
            { value: '2', label: 'He seeks her' },
            { value: '3', label: 'SexParty/Swinger' },
            { value: '4', label: 'Webcam' },
            { value: '5', label: 'Transsexual' },
            { value: '6', label: 'Domina/BDSM' },
            { value: '7', label: 'Escort Service' },
            { value: '8', label: 'Massages' },
          ].map((item) => (
            <Col key={item.value} span={12} sm={{ span: 8 }} md={{ span: 6 }}>
              <Form.Item name={item.value}>
                <Checkbox label={item.label} lighten />
              </Form.Item>
            </Col>
          ))}
        </Row>

        <div
          className="ProfileLayout-body-subtitle flex items-center"
          style={{ columnGap: '1rem', marginBottom: '2rem' }}
        >
          Service
          <span
            className="ProfileLayout-body-description cursor-pointer"
            style={{ fontWeight: 400, textDecoration: 'underline' }}
            onClick={(): void => {
              const dataChanged = {
                '9': true,
                '10': true,
                '11': true,
                '12': true,
                '13': true,
                '14': true,
                '15': true,
                '16': true,
                '17': true,
                '18': true,
                '19': true,
                '20': true,
                '21': true,
                '22': true,
                '23': true,
                '24': true,
                '25': true,
                '26': true,
              };
              form.setFieldsValue(dataChanged);
              setFormValues({ ...formValues, ...dataChanged });
            }}
          >
            Select All
          </span>
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

export default StepCategoriesServices;
