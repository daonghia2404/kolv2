import React from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import TagSelect from '@/components/TagSelect';

import { TStepBodyProps } from './StepBody.types';

const StepBody: React.FC<TStepBodyProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  return (
    <div className="StepBody">
      <div className="StepBody-wrapper">
        <div className="AuthLayout-card-header">
          <div className="AuthLayout-card-title">Almost done...!</div>
          <div className="AuthLayout-card-description">Remember! More info - more booking</div>
        </div>
        <div className="AuthLayout-card-body">
          <Form form={form} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="dob" label="DoB" required>
                  <DatePicker placeholder="Select date" />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="weight" label="Weight">
                  <Input placeholder="Enter your weight" numberic suffix="cm" />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="height" label="Height">
                  <Input placeholder="Enter your height" numberic suffix="cm" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="burst" label="Bust">
                  <TagSelect
                    options={[
                      { value: 'a', label: 'A' },
                      { value: 'b', label: 'B' },
                      { value: 'c', label: 'C' },
                      { value: 'd', label: 'D' },
                      { value: 'e', label: 'E' },
                      { value: 'f', label: 'F' },
                      { value: 'g', label: 'G' },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="waist" label="Waist">
                  <Input placeholder="Enter your waist" numberic suffix="cm" />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="hip" label="Hip">
                  <Input placeholder="Enter your hip" numberic suffix="cm" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="title" label="Title">
                  <TagSelect
                    options={[
                      { value: '1', label: 'Option 1' },
                      { value: '2', label: 'Option 2' },
                      { value: '3', label: 'Option 3' },
                    ]}
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

export default StepBody;
