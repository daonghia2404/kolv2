import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import MyMedia from '@/containers/MyMedia';

import { TStepPhotoVideoProps } from './StepPhotoVideo.types';

const StepPhotoVideo: React.FC<TStepPhotoVideoProps> = ({ onPrev, onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {
    onNext?.(formValues);
  };

  return (
    <div className="StepPhotoVideo">
      <Form
        form={form}
        layout="vertical"
        className="StepPhotoVideo-wrapper"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <div className="CreateListing-title" style={{ margin: '2.4rem 0 1.2rem' }}>
          Photo / Videos
        </div>
        <div className="ProfileLayout-body-description" style={{ fontWeight: 400, marginBottom: '4rem' }}>
          Choose from your existing & approved photos/videos
        </div>

        <div className="StepPhotoVideo-main">
          <MyMedia
            selector
            value={formValues?.selected}
            onChange={(data): void => {
              const dataChanged = {
                selected: data,
              };
              form.setFieldsValue(dataChanged);
              setFormValues({ ...formValues, ...dataChanged });
            }}
          />
        </div>

        <div className="CreateListing-submit flex items-center" style={{ marginTop: '4rem', columnGap: '2rem' }}>
          <Button title="Previous" size="large" styleType={EButtonStyleType.OUTLINE_RED} onClick={onPrev} />
          <Button title="Next step (Total 25 credit)" size="large" styleType={EButtonStyleType.RED} htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

export default StepPhotoVideo;
