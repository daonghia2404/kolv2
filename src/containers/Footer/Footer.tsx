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
import { useTrans } from '@/utils/hooks';

const Footer: React.FC<TFooterProps> = () => {
  const trans = useTrans();
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
                {trans?.footer?.description}
              </p>
            </Col>
            <Col>
              <Row gutter={[48, 24]} align="middle" className="Footer-main">
                <Col>
                  <ul className="Footer-list flex items-center">
                    {dataFooterMenu({ trans }).map((item) => (
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
            <p className="Footer-description">{trans?.footer?.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
