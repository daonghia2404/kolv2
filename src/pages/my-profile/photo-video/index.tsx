import React from 'react';
import { Form } from 'antd';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import DragDropImages from '@/components/DragDropImages';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import Tabs from '@/components/Tabs';
import MyMedia from '@/containers/MyMedia';

const PhotoVideo = () => {
  const [form] = Form.useForm();

  const dataTabsPhotoVideo = [
    {
      key: 'approve',
      title: 'Approve (3)',
      children: <MyMedia />,
    },
    {
      key: 'disapproved',
      title: 'Disapproved (0)',
      children: <MyMedia />,
    },
  ];

  return (
    <div className="PhotoVideo">
      <div className="ProfileLayout-body-title">Upload Media</div>
      <div className="PhotoVideo-wrapper">
        <div className="PhotoVideo-form">
          <Form form={form} layout="vertical">
            <div className="PhotoVideo-upload">
              <Form.Item name="upload">
                <DragDropImages
                  accept=".png,.jpg,.jpeg,.heic,.mp4,.mov.avi"
                  multiple
                  customChildren={
                    <div className="PhotoVideo-upload-wrapper">
                      <div className="PhotoVideo-upload-title">Drag and drop multi files</div>
                      <div className="PhotoVideo-upload-description">Allowed Media: PNG,JPG,MP4,MOV,AVI</div>
                      <div className="PhotoVideo-upload-btn">
                        <Button
                          title="Or choose file"
                          size="large"
                          iconName={EIconName.Upload2}
                          iconColor={EIconColor.WHITE}
                          styleType={EButtonStyleType.RED}
                        />
                      </div>
                    </div>
                  }
                />
              </Form.Item>

              <div className="PhotoVideo-upload-hint">
                <p>
                  <strong>Disclaimer:</strong> we want 6fuxxx to be a save place. Pornographic content is note permitted
                  and will not accepted. Every upload is subject to manual check. Private parts must be pixelated
                  (breates are allowed unpixelated). You can also use our pixelation service when uploading.
                </p>
                <p>
                  Uploading content that violates swiss law (Child porn, anmal porn, violenci and mutilation) leads to
                  automatic blocking and reporting the police.
                </p>
              </div>
            </div>
          </Form>
        </div>

        <div className="PhotoVideo-tabs">
          <Tabs defaultKey="approve" options={dataTabsPhotoVideo} />
        </div>
      </div>
    </div>
  );
};

export default PhotoVideo;

PhotoVideo.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
