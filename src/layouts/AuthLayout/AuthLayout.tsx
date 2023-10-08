import React from 'react';

import Header from '@/containers/Header';

import { TAuthLayoutProps } from './AuthLayout.types';

const AuthLayout: React.FC<TAuthLayoutProps> = ({ children }) => {
  return (
    <div className="AuthLayout">
      <div className="AuthLayout-header">
        <Header />
      </div>
      <div className="AuthLayout-body">
        <div className="container">
          <div className="AuthLayout-body-wrapper flex justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
