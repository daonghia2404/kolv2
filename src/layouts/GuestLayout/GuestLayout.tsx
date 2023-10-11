import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import { TGuestLayoutProps } from './GuestLayout.types';

const GuestLayout: React.FC<TGuestLayoutProps> = ({ children }) => {
  const [isShowBtnOnTop, setIsShowBtnOnTop] = useState<boolean>(false);
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerScrollShowBtnOnTop = (): void => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 240) {
        setIsShowBtnOnTop(true);
      } else {
        setIsShowBtnOnTop(false);
      }
    });
  };

  useEffect(() => {
    triggerScrollShowBtnOnTop();
  }, []);

  return (
    <div className="GuestLayout">
      <div className="GuestLayout-header">
        <Header />
      </div>
      <div className="GuestLayout-body">{children}</div>
      <div className="GuestLayout-footer">
        <Footer />
      </div>
      <div className={classNames('GuestLayout-ontop', { visible: isShowBtnOnTop })}>
        <Button
          iconName={EIconName.AngleDown}
          styleType={EButtonStyleType.RED}
          iconColor={EIconColor.WHITE}
          onClick={(): void => {
            isShowBtnOnTop && scrollToTop();
          }}
        />
      </div>
    </div>
  );
};

export default GuestLayout;
