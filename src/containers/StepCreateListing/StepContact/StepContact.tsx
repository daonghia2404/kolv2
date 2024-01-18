import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Switch from '@/components/Switch';
import Select from '@/components/Select';

import { TStepContactProps } from './StepContact.types';

const StepContact: React.FC<TStepContactProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepContact">
      <Form
        form={form}
        layout="vertical"
        className="StepContact-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 1.2rem' }}>
          Contact information
        </div>
        <div className="ProfileLayout-body-description" style={{ fontWeight: 400, marginBottom: '4rem' }}>
          More information, more booking
        </div>

        <div className="ProfileLayout-body-subtitle" style={{ marginBottom: '1.6rem' }}>
          Call number
        </div>

        <Row className="StepContact-mobile" gutter={[24, 24]} style={{ marginBottom: '4rem' }}>
          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <div className="ProfileLayout-body-description" style={{ fontWeight: 400, width: '5rem' }}>
                  Prefix
                </div>
              </Col>
              <Col>
                <Form.Item name="prefix" style={{ width: '13rem' }}>
                  <Input placeholder="+1" prefix={<Icon name={EIconName.FlagUsa} />} />
                </Form.Item>
              </Col>
              <Col>
                <div className="ProfileLayout-body-description" style={{ fontWeight: 400 }}>
                  Number
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="phoneNumber">
                  <Input
                    placeholder="Enter your phone number"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
              <Col>
                <div className="ProfileLayout-body-description" style={{ fontWeight: 400 }}>
                  Receive SMS?
                </div>
              </Col>
              <Col>
                <Form.Item name="receiveSMS">
                  <Switch />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <Form.Item name="isTelegram" style={{ width: '5rem' }}>
                  <Switch />
                </Form.Item>
              </Col>
              <Col>
                <div
                  className="ProfileLayout-body-description flex items-center"
                  style={{ columnGap: '1rem', fontWeight: 400, width: '13rem' }}
                >
                  <Icon
                    name={EIconName.Telegram}
                    style={{ width: '3.2rem', height: '3.2rem', flex: '0 0 3.2rem', maxWidth: '3.2rem' }}
                  />
                  Telegram
                </div>
              </Col>
              <Col>
                <div className="ProfileLayout-body-description" style={{ fontWeight: 400 }}>
                  Number
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="phoneNumberTelegram">
                  <Input
                    placeholder="Enter your phone number"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <Form.Item name="isWhatApps" style={{ width: '5rem' }}>
                  <Switch />
                </Form.Item>
              </Col>
              <Col>
                <div
                  className="ProfileLayout-body-description flex items-center"
                  style={{ columnGap: '1rem', fontWeight: 400, width: '13rem' }}
                >
                  <Icon
                    name={EIconName.WhatApps}
                    style={{ width: '3.2rem', height: '3.2rem', flex: '0 0 3.2rem', maxWidth: '3.2rem' }}
                  />
                  Whats App
                </div>
              </Col>
              <Col>
                <div className="ProfileLayout-body-description" style={{ fontWeight: 400 }}>
                  Number
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="phoneNumber">
                  <Input
                    placeholder="Enter your phone number"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="ProfileLayout-body-subtitle" style={{ marginBottom: '1.6rem' }}>
          Address
        </div>

        <Row gutter={[20, 20]} style={{ marginBottom: '4rem' }}>
          <Col span={24}>
            <Form.Item name="street" label="Street">
              <Input placeholder="Your address" suffix={<Icon name={EIconName.Map} color={EIconColor.LYNCH} />} />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="location" label="Location">
              <Select placeholder="Your location" />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item name="zipCode" label="Zip code">
              <Input placeholder="Zip code" />
            </Form.Item>
          </Col>
        </Row>

        <div className="ProfileLayout-body-subtitle" style={{ marginBottom: '1.6rem' }}>
          Social link
        </div>

        <Row gutter={[24, 24]} className="StepContact-socials">
          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <div
                  className="ProfileLayout-body-description flex items-center"
                  style={{ columnGap: '1rem', fontWeight: 400, width: '13rem' }}
                >
                  <Icon
                    name={EIconName.Website}
                    style={{ width: '3.2rem', height: '3.2rem', flex: '0 0 3.2rem', maxWidth: '3.2rem' }}
                  />
                  Website
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="website">
                  <Input
                    placeholder="Enter your website"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <div
                  className="ProfileLayout-body-description flex items-center"
                  style={{ columnGap: '1rem', fontWeight: 400, width: '13rem' }}
                >
                  <Icon
                    name={EIconName.OnlyFan}
                    style={{ width: '3.2rem', height: '3.2rem', flex: '0 0 3.2rem', maxWidth: '3.2rem' }}
                  />
                  OnlyFan
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="onlyfan">
                  <Input
                    placeholder="Enter your OnlyFan username"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <div
                  className="ProfileLayout-body-description flex items-center"
                  style={{ columnGap: '1rem', fontWeight: 400, width: '13rem' }}
                >
                  <Icon
                    name={EIconName.Twitter}
                    style={{ width: '3.2rem', height: '3.2rem', flex: '0 0 3.2rem', maxWidth: '3.2rem' }}
                  />
                  X (Twitter)
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="twitter">
                  <Input
                    placeholder="Enter your X username"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row gutter={[20, 20]} wrap={false} align="middle">
              <Col>
                <div
                  className="ProfileLayout-body-description flex items-center"
                  style={{ columnGap: '1rem', fontWeight: 400, width: '13rem' }}
                >
                  <Icon
                    name={EIconName.Instagram}
                    style={{ width: '3.2rem', height: '3.2rem', flex: '0 0 3.2rem', maxWidth: '3.2rem' }}
                  />
                  Instagram
                </div>
              </Col>
              <Col flex={1}>
                <Form.Item name="instagram">
                  <Input
                    placeholder="Enter your Instagram username"
                    prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="CreateListing-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Previous" size="large" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
          <Button title="Next step (Total 25 credit)" size="large" styleType={EButtonStyleType.RED} htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default StepContact;
