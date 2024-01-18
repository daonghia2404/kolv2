import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import Checkbox from '@/components/Checkbox';

import { TStepInformationProps } from './StepInformation.types';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

const StepInformation: React.FC<TStepInformationProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepInformation">
      <Form
        form={form}
        layout="vertical"
        className="StepInformation-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 1.2rem' }}>
          Listing information
        </div>
        <div
          className="ProfileLayout-body-description flex items-start"
          style={{ fontWeight: 400, marginBottom: '4rem', columnGap: '1rem' }}
        >
          <Icon
            name={EIconName.Info}
            color={EIconColor.LYNCH}
            style={{ width: '2.4rem', height: '2.4rem', flex: '0 0 2.4rem', maxWidth: '2.4rem' }}
          />
          Sex without rubber / AO advertisement are prohibited under the GTC and will be deleted. All advertiserments
          are checked manually before going live. Ilegal practices that violate Swiss law will result in a block
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="title" label="Listing Title (is displayed to visitors)">
              <Input
                placeholder="Enter your title"
                prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                suffix={`${formValues?.title?.length || 0}/300`}
                maxLength={300}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="name" label="Your name (is displayed to visitors)">
              <Input
                placeholder="Enter your name"
                prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                suffix={`${formValues?.name?.length || 0}/30`}
                maxLength={30}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="stories" label="About you (is displayed to visitors)">
              <TextArea
                placeholder="Your stories...."
                prefix={<Icon name={EIconName.PencilSquare} color={EIconColor.LYNCH} />}
                suffix={`${formValues?.stories?.length || 0}/1300`}
                maxLength={1300}
              />
            </Form.Item>
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

export default StepInformation;
