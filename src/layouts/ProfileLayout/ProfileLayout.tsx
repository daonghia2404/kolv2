import React from 'react';
import dynamic from 'next/dynamic';

import GuestLayout from '@/layouts/GuestLayout';
import SideBar from '@/containers/SideBar';
import NeedSupport from '@/containers/NeedSupport';

import { TProfileLayoutProps } from './ProfileLayout.types';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const ProfileLayout: React.FC<TProfileLayoutProps> = ({ children }) => {
  return (
    <GuestLayout isLoggedDefault>
      <div className="ProfileLayout">
        <div className="container">
          <div className="ProfileLayout-wrapper flex">
            <div className="ProfileLayout-wrapper-item">
              <SideBar />

              <MediaQuery minWidth={1201}>
                <NeedSupport />
              </MediaQuery>
            </div>

            <div className="ProfileLayout-wrapper-item">
              <div className="ProfileLayout-body">{children}</div>
            </div>

            <MediaQuery maxWidth={1200}>
              <div className="ProfileLayout-wrapper-item">
                <NeedSupport />
              </div>
            </MediaQuery>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ProfileLayout;
