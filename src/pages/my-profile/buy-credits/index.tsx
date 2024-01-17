import React, { useState } from 'react';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';

const BuyCredits = () => {
  return <div className="BuyCredits"></div>;
};

export default BuyCredits;

BuyCredits.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
