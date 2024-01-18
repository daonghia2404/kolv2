import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';
import classNames from 'classnames';

import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TStepPublishProps } from './StepPublish.types';

const StepPublish: React.FC<TStepPublishProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepPublish">
      <Form
        form={form}
        layout="vertical"
        className="StepPublish-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 1.2rem' }}>
          Publish options
        </div>
        <div className="ProfileLayout-body-description" style={{ fontWeight: 400, marginBottom: '4rem' }}>
          You can publish your ad immediately or schedule a time. Please note that every advertisement is checked by us
          before publication.
        </div>

        <div className="StepPublish-main" style={{ marginBottom: '4rem' }}>
          <Row gutter={[20, 20]}>
            <Col span={24} sm={{ span: 12 }} md={{ span: 6 }}>
              <div
                className={classNames('StepPublish-card flex flex-col', {
                  active: formValues?.publishType === 'now',
                })}
                onClick={(): void => {
                  const dataChanged = {
                    publishType: 'now',
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              >
                <div className="StepPublish-card-main">
                  <div className="StepPublish-card-coin">
                    <Icon name={EIconName.Fire} color={EIconColor.HEATHER} />
                  </div>
                  <div className="StepPublish-card-title">Publish now</div>
                </div>
              </div>
            </Col>
            <Col span={24} sm={{ span: 12 }} md={{ span: 6 }}>
              <div
                className={classNames('StepPublish-card flex flex-col', {
                  active: formValues?.publishType === 'schedule',
                })}
                onClick={(): void => {
                  const dataChanged = {
                    publishType: 'schedule',
                  };
                  form.setFieldsValue(dataChanged);
                  setFormValues({ ...formValues, ...dataChanged });
                }}
              >
                <div className="StepPublish-card-main">
                  <div className="StepPublish-card-coin">
                    <Icon name={EIconName.CalendarCheck} color={EIconColor.HEATHER} />
                  </div>
                  <div className="StepPublish-card-title">Schedule</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="CreateListing-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Previous" size="large" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
          <Button
            title="Save & Publish (Total 25 credit)"
            size="large"
            styleType={EButtonStyleType.RED}
            htmlType="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default StepPublish;
