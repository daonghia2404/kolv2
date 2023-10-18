import React from 'react';
import { Col, Row } from 'antd';
import TextFileContent from '@/components/TextFileContent';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';

const filename = 'Imprint.txt'; // Adjust the filename as needed

const StaticContent = () => {
  return (
    <div>
      <TextFileContent filename={filename} />
    </div>
  );
};

export default StaticContent;

StaticContent.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <GuestLayout>{page}</GuestLayout>
    </>
  );
};
