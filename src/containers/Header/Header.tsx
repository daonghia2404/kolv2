import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { Paths } from '@/routers/constants';
import Logo from '@/assets/images/logo.svg';
import { removeParam } from '@/utils/functions';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import ImageAvatar from '@/assets/images/image-avatar.png';
import IconRankV from '@/assets/icons/icon-rank-v.svg';
import Avatar from '@/components/Avatar';
import DrawerMenuMobile from '@/containers/Header/DrawerMenuMobile';
import { useModalState } from '@/utils/hooks';

import { THeaderProps } from './Header.types.d';
import { dataHeaderChildPageMenu, dataHeaderMenu } from './Header.data';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const Header: React.FC<THeaderProps> = () => {
  const router = useRouter();
  const { asPath } = router;
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [drawerMenuMobileState, handleOpenDrawerMenuMobile, handleCloseDrawerMenuMobile] = useModalState();

  const dataLocation = {
    id: router?.query?.id,
  };

  const detailPage = dataHeaderChildPageMenu(dataLocation).find((item) =>
    item.activePaths.includes(removeParam(asPath)),
  );
  const isAuthPage = ['login', 'sign-up'].includes(detailPage?.id as string);
  const isLoginPage = isAuthPage && (detailPage?.id as string) === 'login';
  const isSignUpPage = isAuthPage && (detailPage?.id as string) === 'sign-up';

  return (
    <header className="Header">
      <div className="container">
        <div className="Header-wrapper">
          <Row align="middle" justify="space-between" wrap={false}>
            {detailPage ? (
              <div className="Header-subtitle flex items-center">
                <Button
                  iconName={EIconName.ArrowLeftShort}
                  iconColor={EIconColor.LYNCH}
                  styleType={EButtonStyleType.OUTER_SPACE}
                  onClick={(): void => {
                    router.push(detailPage.backPath);
                  }}
                />
                {detailPage?.title}
              </div>
            ) : (
              <>
                <Col>
                  <Row gutter={[8, 8]} wrap={false}>
                    <Col>
                      <div className="Header-logo">
                        <Link href={Paths.Home}>
                          <Image src={Logo} alt="" />
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <MediaQuery minWidth={992}>
                  <Col>
                    <ul className="Header-list flex items-center">
                      {dataHeaderMenu.map((item) => (
                        <li
                          key={item.id}
                          className={classNames('Header-list-item', {
                            active: item.activePaths.includes(removeParam(asPath)),
                          })}
                        >
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </MediaQuery>
              </>
            )}

            <MediaQuery minWidth={992}>
              <Col>
                <Row gutter={isLogged ? [24, 24] : [8, 8]} wrap={false} align="middle">
                  {isLogged ? (
                    <>
                      <Col>
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
                      {!isAuthPage && (
                        <>
                          <Col>
                            <Input
                              placeholder="Username"
                              prefix={<Icon name={EIconName.UserKey} color={EIconColor.PALE_SKY} />}
                            />
                          </Col>
                          <Col>
                            <Input
                              type="password"
                              placeholder="Password"
                              showVisiblePassword={false}
                              prefix={<Icon name={EIconName.Lock} color={EIconColor.PALE_SKY} />}
                            />
                          </Col>

                          <Col>
                            <Button
                              title="Login"
                              styleType={EButtonStyleType.RED}
                              iconName={EIconName.Unlock}
                              iconColor={EIconColor.WHITE}
                              reverse
                              onClick={(): void => setIsLogged(true)}
                            />
                          </Col>
                          <Col>
                            <Button title="Signup" styleType={EButtonStyleType.OUTLINE_RED} link={Paths.SignUp} />
                          </Col>
                        </>
                      )}

                      {isSignUpPage && (
                        <Button
                          title="Login"
                          styleType={EButtonStyleType.OUTLINE_RED}
                          iconName={EIconName.Unlock}
                          iconColor={EIconColor.RADICAL_RED}
                          reverse
                          link={Paths.Login}
                        />
                      )}

                      {isLoginPage && (
                        <Button title="Signup" styleType={EButtonStyleType.OUTLINE_RED} link={Paths.SignUp} />
                      )}
                    </>
                  )}
                </Row>
              </Col>
            </MediaQuery>

            <MediaQuery maxWidth={991}>
              <Col>
                <Button
                  iconName={EIconName.Menu}
                  iconColor={EIconColor.RADICAL_RED}
                  styleType={EButtonStyleType.OUTLINE_RED}
                  onClick={handleOpenDrawerMenuMobile}
                />
              </Col>
            </MediaQuery>
          </Row>
        </div>
      </div>

      <MediaQuery maxWidth={991}>
        <DrawerMenuMobile isLogged={isLogged} {...drawerMenuMobileState} onClose={handleCloseDrawerMenuMobile} />
      </MediaQuery>
    </header>
  );
};

export default Header;
