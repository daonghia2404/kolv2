import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { Drawer, DrawerProps } from 'antd';

import Avatar from '@/components/Avatar';
import ImageAvatar from '@/assets/images/image-avatar.png';
import IconRankV from '@/assets/icons/icon-rank-v.svg';
import { dataSideBarMenu } from '@/containers/SideBar/SideBar.data';
import { removeParam } from '@/utils/functions';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import { Paths } from '@/routers/constants';

import { TSideBarProps } from './SideBar.types.d';
import { useModalState } from '@/utils/hooks';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const DrawerModify: React.FC<DrawerProps & { children?: React.ReactNode }> = Drawer;

const SideBar: React.FC<TSideBarProps> = () => {
  const router = useRouter();
  const { asPath } = router;
  const [drawerMenuMobileState, handleOpenDrawerMenuMobile, handleCloseDrawerMenuMobile] = useModalState();

  const renderSideBarMenu = (
    <div className="SideBar-menu">
      {dataSideBarMenu().map((item) => (
        <div
          key={item.key}
          className={classNames('SideBar-menu-item flex items-center', {
            active: item.activePaths.includes(removeParam(asPath)),
          })}
          onClick={(): void => {
            if (item.link) {
              router.push(item.link);
              handleCloseDrawerMenuMobile();
            }
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );

  return (
    <div className="SideBar">
      <div className="SideBar-account flex items-center">
        <div className="SideBar-account-avatar">
          <Avatar image={ImageAvatar} size={44} />
          <div className="SideBar-account-avatar-verify">
            <Image src={IconRankV} alt="" />
          </div>
        </div>
        <div className="SideBar-account-info">
          <div className="SideBar-account-info-title flex items-center">
            <span>Welcome, Valentina</span>
            <div className="SideBar-account-info-verify">
              <Image src={IconRankV} alt="" />
            </div>
          </div>
          <div
            className="SideBar-account-info-description flex items-center cursor-pointer"
            onClick={(): void => {
              router.push(Paths.BuyCredits);
            }}
          >
            460 Credits
            <div className="SideBar-account-info-credits">
              <Icon name={EIconName.Coin} />
            </div>
          </div>
        </div>
        <MediaQuery maxWidth={1200}>
          <div className="SideBar-account-menu">
            <Button
              iconName={EIconName.Gear}
              iconColor={EIconColor.RADICAL_RED}
              styleType={EButtonStyleType.TRANSPARENT}
              onClick={handleOpenDrawerMenuMobile}
            />
          </div>
        </MediaQuery>
      </div>
      <MediaQuery minWidth={1201}>{renderSideBarMenu}</MediaQuery>

      <MediaQuery maxWidth={1200}>
        <DrawerModify
          className="DrawerSideBarMobile"
          {...drawerMenuMobileState}
          placement="left"
          closeIcon={<Icon name={EIconName.X} color={EIconColor.LYNCH} />}
          onClose={handleCloseDrawerMenuMobile}
        >
          {renderSideBarMenu}
        </DrawerModify>
      </MediaQuery>
    </div>
  );
};

export default SideBar;
