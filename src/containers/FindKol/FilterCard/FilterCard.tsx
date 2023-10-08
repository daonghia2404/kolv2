import React, { useState } from 'react';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import Input from '@/components/Input';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import KolCard from '@/components/KolCard';
import AdBlock from '@/components/AdBlock';
import { Paths } from '@/routers/constants';

import { ETypeLayout } from './FilterCard.enums';
import { TFilterCardProps } from './FilterCard.types';
import { getArrayFrom0To } from '@/utils/functions';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const FilterCard: React.FC<TFilterCardProps> = ({ data = [], loading, onOpenFilter }) => {
  const router = useRouter();
  const [typeLayout, setTypeLayout] = useState<ETypeLayout>(ETypeLayout.LIST);

  return (
    <div className="FilterCard">
      <div className="FilterCard-wrapper">
        <div className="FilterCard-header">
          <Row wrap={false}>
            <MediaQuery maxWidth={991}>
              <Col style={{ marginRight: '1.2rem' }}>
                <Button
                  iconName={EIconName.Filter}
                  iconColor={EIconColor.RADICAL_RED}
                  styleType={EButtonStyleType.OUTLINE_RED}
                  onClick={onOpenFilter}
                />
              </Col>
            </MediaQuery>
            <Col flex={1} style={{ marginRight: '1.2rem' }}>
              <Input
                placeholder="Search by name..."
                prefix={<Icon name={EIconName.Search} color={EIconColor.PALE_SKY} />}
              />
            </Col>
            <Col>
              <Button
                className={classNames('FilterCard-header-layout-btn', { active: typeLayout === ETypeLayout.GRID })}
                iconName={EIconName.Grid}
                iconColor={EIconColor.LYNCH}
                styleType={EButtonStyleType.TRANSPARENT}
                onClick={(): void => setTypeLayout(ETypeLayout.GRID)}
              />
            </Col>
            <Col>
              <Button
                className={classNames('FilterCard-header-layout-btn', { active: typeLayout === ETypeLayout.LIST })}
                iconName={EIconName.List}
                iconColor={EIconColor.LYNCH}
                styleType={EButtonStyleType.TRANSPARENT}
                onClick={(): void => setTypeLayout(ETypeLayout.LIST)}
              />
            </Col>
            <Col>
              <Button
                iconName={EIconName.SortAZ}
                iconColor={EIconColor.LYNCH}
                styleType={EButtonStyleType.TRANSPARENT}
              />
            </Col>
          </Row>
        </div>

        <div className="FilterCard-body">
          {typeLayout === ETypeLayout.GRID && (
            <div className="FilterCard-grid">
              <Row gutter={[16, 16]}>
                {data.map((item: any) => {
                  const isAd = item.ad;

                  return isAd ? (
                    <Col key={item.id} span={24} sm={{ span: 16 }} md={{ span: 12 }}>
                      <AdBlock />
                    </Col>
                  ) : (
                    <Col key={item.id} span={12} sm={{ span: 8 }} md={{ span: 6 }}>
                      <div className="FilterCard-grid-item">
                        <KolCard
                          {...item}
                          hideInfo
                          onClick={(): void => {
                            router.push(Paths.ProfileDetail('1'));
                          }}
                        />
                      </div>
                    </Col>
                  );
                })}

                {loading && (
                  <>
                    {getArrayFrom0To(4).map((item) => (
                      <Col key={item} span={12} sm={{ span: 8 }} md={{ span: 6 }}>
                        <div className="FilterCard-grid-item">
                          <KolCard loading />
                        </div>
                      </Col>
                    ))}
                  </>
                )}
              </Row>
            </div>
          )}

          {typeLayout === ETypeLayout.LIST && (
            <div className="FilterCard-list">
              <Row gutter={[16, 16]}>
                {data
                  .filter((item: any) => !item.ad)
                  .map((item: any) => {
                    return (
                      <Col key={item.id} span={24} md={{ span: 12 }}>
                        <div className="FilterCard-list-item">
                          <KolCard
                            {...item}
                            horizontal
                            onClick={(): void => {
                              router.push(Paths.ProfileDetail('1'));
                            }}
                          />
                        </div>
                      </Col>
                    );
                  })}

                {loading && (
                  <>
                    {getArrayFrom0To(4).map((item) => (
                      <Col key={item} span={24} md={{ span: 12 }}>
                        <div className="FilterCard-list-item">
                          <KolCard horizontal loading />
                        </div>
                      </Col>
                    ))}
                  </>
                )}
              </Row>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
