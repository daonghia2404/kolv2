import React from 'react';

import Header from '@/containers/Header';
import Footer from '@/containers/Footer';

import { TGuestLayoutProps } from './GuestLayout.types';

const GuestLayout: React.FC<TGuestLayoutProps> = ({ children }) => {
  return (
    <div className="GuestLayout">
      <div className="GuestLayout-header">
        <Header />
      </div>
      <div className="GuestLayout-body">{children}</div>
      <div className="GuestLayout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default GuestLayout;
