import React from 'react';
import { Col, Form, Row } from 'antd';

import SEO from '@/components/SEO';
import AuthLayout from '@/layouts/AuthLayout';
import Input from '@/components/Input';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div className="Login">
      <div className="Login-wrapper">
        <div className="AuthLayout-card">
          <div className="AuthLayout-card-header">
            <div className="AuthLayout-card-title">Welcome back</div>
            <div className="AuthLayout-card-description">Please login to continue</div>
          </div>
          <div className="AuthLayout-card-body">
            <Form form={form} layout="vertical">
              <Row gutter={[24, 24]}>
                <Col span={24}>
                  <Form.Item name="username">
                    <Input
                      placeholder="Username"
                      prefix={<Icon name={EIconName.UserCheck} color={EIconColor.PALE_SKY} />}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="password">
                    <Input
                      type="password"
                      placeholder="Password"
                      prefix={<Icon name={EIconName.Lock} color={EIconColor.PALE_SKY} />}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    title="Login"
                    iconColor={EIconColor.WHITE}
                    iconName={EIconName.Unlock}
                    styleType={EButtonStyleType.RED}
                    reverse
                    htmlType="submit"
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <AuthLayout>{page}</AuthLayout>
    </>
  );
};
