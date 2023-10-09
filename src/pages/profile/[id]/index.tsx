import React from 'react';
import { Col, Row } from 'antd';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';
import CarouselKolCards from '@/containers/CarouselKolCards';
import ContactCardKol from '@/containers/ContactCardKol';
import TabsKol from '@/containers/TabsKol';
import InfoDetailKol from '@/containers/InfoDetailKol';
import GalleryKol, { EGalleryKolView } from '@/containers/GalleryKol';

const ProfileDetail = () => {
  return (
    <div className="ProfileDetail">
      <div className="container">
        <div className="ProfileDetail-wrapper">
          <Row gutter={[32, 32]}>
            <Col span={24}>
              <Row gutter={[32, 32]} className="ProfileDetail-row">
                <Col span={16}>
                  <GalleryKol view={EGalleryKolView.DETAIL} />
                </Col>
                <Col span={8}>
                  <InfoDetailKol />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[32, 32]} className="ProfileDetail-row">
                <Col span={8}>
                  <ContactCardKol />
                </Col>
                <Col span={16}>
                  <TabsKol />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <CarouselKolCards />
      </div>
    </div>
  );
};

export default ProfileDetail;

ProfileDetail.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <GuestLayout>{page}</GuestLayout>
    </>
  );
};
