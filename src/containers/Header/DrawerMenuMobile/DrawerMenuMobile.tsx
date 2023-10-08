import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Col, Drawer, Row } from 'antd';
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

import { TDrawerMenuMobileProps } from './DrawerMenuMobile.types';

const DrawerMenuMobile: React.FC<TDrawerMenuMobileProps> = ({ isLogged, visible, onClose }) => {
  const { asPath } = useRouter();

  return (
    <Drawer
      visible={visible}
      onClose={onClose}
      className="DrawerMenuMobile"
      placement="left"
      closeIcon={<Icon name={EIconName.X} color={EIconColor.LYNCH} />}
    >
      <div className="DrawerMenuMobile-wrapper">
        <ul className="Header-list">
          {dataHeaderMenu.map((item) => (
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
                <div className="Header-account flex items-center">
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
                    <div className="Header-account-info-description">Role</div>
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
                />
              </Col>
            </>
          ) : (
            <>
              <Col span={24}>
                <Input placeholder="Username" prefix={<Icon name={EIconName.UserKey} color={EIconColor.PALE_SKY} />} />
              </Col>
              <Col span={24}>
                <Input
                  type="password"
                  placeholder="Password"
                  showVisiblePassword={false}
                  prefix={<Icon name={EIconName.Lock} color={EIconColor.PALE_SKY} />}
                />
              </Col>

              <Col span={24}>
                <Button
                  title="Login"
                  styleType={EButtonStyleType.RED}
                  iconName={EIconName.Unlock}
                  iconColor={EIconColor.WHITE}
                  reverse
                />
              </Col>
              <Col span={24}>
                <Button title="Signup" styleType={EButtonStyleType.OUTLINE_RED} />
              </Col>
            </>
          )}
        </Row>
      </div>
    </Drawer>
  );
};

export default DrawerMenuMobile;
