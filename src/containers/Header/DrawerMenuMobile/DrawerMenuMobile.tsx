import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Col, Drawer, DrawerProps, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

import { removeParam } from '@/utils/functions';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { dataHeaderMenu } from '@/containers/Header/Header.data';
import ImageAvatar from '@/assets/images/image-avatar.png';
import IconRankV from '@/assets/icons/icon-rank-v.svg';
import Avatar from '@/components/Avatar';
import Button, { EButtonStyleType } from '@/components/Button';
import Input from '@/components/Input';
import { Paths } from '@/routers/constants';
import { useTrans } from '@/utils/hooks';

import { TDrawerMenuMobileProps } from './DrawerMenuMobile.types';

const DrawerModify: React.FC<DrawerProps & { children?: React.ReactNode }> = Drawer;

const DrawerMenuMobile: React.FC<TDrawerMenuMobileProps> = ({
  isLogged,
  dataLocation,
  visible,
  onLogin,
  onLogout,
  onClose,
}) => {
  const router = useRouter();
  const trans = useTrans();
  const { asPath } = useRouter();

  return (
    <DrawerModify
      visible={visible}
      onClose={onClose}
      className="DrawerMenuMobile"
      placement="left"
      closeIcon={<Icon name={EIconName.X} color={EIconColor.LYNCH} />}
    >
      <div className="DrawerMenuMobile-wrapper">
        <ul className="Header-list">
          {dataHeaderMenu(dataLocation).map((item) => (
            <li
              key={item.id}
              className={classNames('Header-list-item', {
                active: item.activePaths.includes(removeParam(asPath)),
              })}
            >
              <Link href={item.link} onClick={onClose}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="DrawerMenuMobile-line" />

        <Row gutter={isLogged ? [24, 24] : [8, 12]} align="middle">
          {isLogged ? (
            <>
              <Col flex={1}>
                <div
                  className="Header-account flex items-center"
                  onClick={(): void => {
                    router.push(Paths.MyAccount);
                  }}
                >
                  <div className="Header-account-avatar">
                    <Avatar size={44} image={ImageAvatar} />
                  </div>
                  <div className="Header-account-info">
                    <div className="Header-account-info-title flex items-center">
                      Nahi
                      <div className="Header-account-info-rank">
                        <Image src={IconRankV} alt="" />
                      </div>
                    </div>
                    <div className="Header-account-info-description">{trans?.header?.role}</div>
                  </div>
                  <div className="Header-account-arrow">
                    <Icon name={EIconName.CaretDown} color={EIconColor.LYNCH} />
                  </div>
                </div>
              </Col>
              <Col>
                <Button
                  styleType={EButtonStyleType.OUTLINE_RED}
                  iconName={EIconName.Logout}
                  iconColor={EIconColor.RADICAL_RED}
                  onClick={onLogout}
                />
              </Col>
            </>
          ) : (
            <>
              <Col span={24}>
                <Input
                  placeholder={trans?.header?.username}
                  prefix={<Icon name={EIconName.UserKey} color={EIconColor.PALE_SKY} />}
                />
              </Col>
              <Col span={24}>
                <Input
                  type="password"
                  placeholder={trans?.header?.password}
                  showVisiblePassword={false}
                  prefix={<Icon name={EIconName.Lock} color={EIconColor.PALE_SKY} />}
                />
              </Col>

              <Col span={24}>
                <Button
                  title={trans?.header?.login}
                  styleType={EButtonStyleType.RED}
                  iconName={EIconName.Unlock}
                  iconColor={EIconColor.WHITE}
                  reverse
                  onClick={onLogin}
                />
              </Col>
              <Col span={24}>
                <Button title={trans?.header?.signup} styleType={EButtonStyleType.OUTLINE_RED} link={Paths.SignUp} />
              </Col>
            </>
          )}
        </Row>
      </div>
    </DrawerModify>
  );
};

export default DrawerMenuMobile;
