import React from 'react';
import { Col, Form, Row } from 'antd';

import { TStepInfoProps } from './StepInfo.types';
import Input from '@/components/Input';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import Select from '@/components/Select';
import Tag from '@/components/Tag';

const StepInfo: React.FC<TStepInfoProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  return (
    <div className="StepInfo">
      <div className="StepInfo-wrapper">
        <div className="AuthLayout-card-header">
          <div className="AuthLayout-card-title">It’s all about you!</div>
          <div className="AuthLayout-card-description">Help customers easy to find you</div>
        </div>
        <div className="AuthLayout-card-body">
          <Form form={form} layout="vertical">
            <Row gutter={[24, 24]}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="country" label="Born country" required>
                  <Select placeholder="Select country" options={[]} />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="liveInCountry" label="Live-in country" required>
                  <Select placeholder="Select live-in country" options={[]} />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="sex" label="Sex">
                  <Select placeholder="Select sex" options={[]} />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="marrieStatus" label="Marrie status">
                  <Select placeholder="Select marrie status" options={[]} />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="address" label="Address">
                  <Input
                    placeholder="Enter your address"
                    suffix={<Icon name={EIconName.Map} color={EIconColor.PALE_SKY} />}
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="professional" label="Professional">
                  <Input placeholder="Enter professional" />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Row gutter={[12, 12]}>
                  <Col flex={1}>
                    <Form.Item name="language" label="Language" required>
                      <Select placeholder="Select Language" options={[]} />
                    </Form.Item>
                  </Col>
                  <Col style={{ marginTop: '3rem' }}>
                    <Button
                      iconName={EIconName.Plus}
                      iconColor={EIconColor.PALE_SKY}
                      styleType={EButtonStyleType.SHARK}
                    />
                  </Col>
                  <Col span={24}>
                    <Row gutter={[12, 12]}>
                      <Col>
                        <Tag active title="English" closeable />
                      </Col>
                      <Col>
                        <Tag active title="French" closeable />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item name="ethnic" label="Ethnic" required>
                  <Select placeholder="Select ethnic" options={[]} />
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

export default StepInfo;
