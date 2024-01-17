import React from 'react';
import { Col, Form, Row } from 'antd';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import Button, { EButtonStyleType } from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Switch from '@/components/Switch';

const Settings = () => {
  const [form] = Form.useForm();
  return (
    <div className="Settings">
      <div className="Settings-wrapper">
        <Form form={form} layout="vertical">
          <div className="ProfileLayout-body-title">Settings</div>
          <Row gutter={[18, 18]}>
            <Col span={19}>
              <Form.Item name="username" rules={[validationRules.required()]}>
                <Input
                  placeholder="Enter your username"
                  prefix={<Icon name={EIconName.UserKey} color={EIconColor.LYNCH} />}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Button title="Not changeable" disabled styleType={EButtonStyleType.OUTLINE_LYNCH} />
            </Col>
            <Col span={19}>
              <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
                <Input
                  placeholder="Enter your email"
                  prefix={<Icon name={EIconName.Mail2} color={EIconColor.LYNCH} />}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Button
                title="Edit"
                styleType={EButtonStyleType.OUTLINE_RED}
                iconName={EIconName.Pencil}
                iconColor={EIconColor.RADICAL_RED}
              />
            </Col>
            <Col span={19}>
              <Form.Item name="password" rules={[validationRules.required()]}>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  prefix={<Icon name={EIconName.Lock} color={EIconColor.LYNCH} />}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Button
                title="Edit"
                styleType={EButtonStyleType.OUTLINE_RED}
                iconName={EIconName.Pencil}
                iconColor={EIconColor.RADICAL_RED}
              />
            </Col>
          </Row>

          <div className="ProfileLayout-body-title" style={{ marginTop: '2.4rem' }}>
            General Settings
          </div>
          <div
            className="ProfileLayout-body-description flex items-center justify-between"
            style={{ marginBottom: '2rem' }}
          >
            Notificationper E-Mail before the listing expire (24hours)
            <Form.Item name="notification">
              <Switch />
            </Form.Item>
          </div>
          <div className="ProfileLayout-body-description flex items-center justify-between">
            Receive Newsletter
            <Form.Item name="newsletter">
              <Switch />
            </Form.Item>
          </div>

          <div className="ProfileLayout-body-title" style={{ marginTop: '2.4rem' }}>
            Delete Account
          </div>
          <div className="ProfileLayout-body-description">
            If you delete your account, all your photos and videos will be irrevocably deleted. Your existing credits
            will expire and cannot be refunded. If you create a new account, you will also have to verify yourself
            again.
          </div>
          <div className="Settings-delete-btn" style={{ maxWidth: '48rem', marginTop: '2.4rem' }}>
            <Button
              title="Yes, I am sure and would like to delete the account"
              iconName={EIconName.Trash2}
              iconColor={EIconColor.RADICAL_RED}
              styleType={EButtonStyleType.OUTLINE_RED}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Settings;

Settings.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
