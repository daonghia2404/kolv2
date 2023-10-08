import React from 'react';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';
import CarouselKolCards from '@/containers/CarouselKolCards';
import HighlightKol from '@/containers/HighlightKol';
import FindKol from '@/containers/FindKol';

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="Home-wrapper">
          <CarouselKolCards />
          <HighlightKol />
          <FindKol />
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <GuestLayout>{page}</GuestLayout>
    </>
  );
};
