import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Col, Row } from 'antd';

import { Paths } from '@/routers/constants';
import Logo from '@/assets/images/logo.svg';
import { dataFooterMenu } from '@/containers/Footer/Footer.data';
import { removeParam } from '@/utils/functions';
import SelectLanguage from '@/components/SelectLanguage';

import { TFooterProps } from './Footer.types.d';

const Footer: React.FC<TFooterProps> = () => {
  const { asPath } = useRouter();

  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          <div className="Footer-logo">
            <Link href={Paths.Home}>
              <Image src={Logo} alt="" />
            </Link>
          </div>

          <Row align="middle" justify="space-between" className="Footer-main">
            <Col>
              <p style={{ maxWidth: '34.5rem' }} className="Footer-description">
                Join millions of people who organize work and life with Logoxxx
              </p>
            </Col>
            <Col>
              <Row gutter={[48, 24]} align="middle" className="Footer-main">
                <Col>
                  <ul className="Footer-list flex items-center">
                    {dataFooterMenu.map((item) => (
                      <li
                        className={classNames('Footer-list-item', {
                          active: (item.activePaths as string[]).includes(removeParam(asPath)),
                        })}
                        key={item.id}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <SelectLanguage />
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="Footer-copyright">
            <p className="Footer-description">Copyright © 202X by Logoxxx</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
