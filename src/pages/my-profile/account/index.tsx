import React, { useState } from 'react';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import Select, { TSelectOption } from '@/components/Select';
import { Col, Row } from 'antd';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import AreaChart from '@/components/AreaChart';

const Account = () => {
  const dataFilterTypeOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  const [filterType, setFilterType] = useState<TSelectOption | undefined>(dataFilterTypeOptions[0]);

  const dataSources = [
    { date: 'Mon', value: 2 },
    { date: 'Tue', value: 3 },
    { date: 'Wed', value: 2 },
    { date: 'Thu', value: 4 },
    { date: 'Fri', value: 2 },
    { date: 'Sat', value: 3 },
    { date: 'Sun', value: 2 },
  ];

  return (
    <div className="Account">
      <div className="Account-wrapper">
        <div className="ProfileLayout-body-title flex items-center justify-between">
          My Statics
          <Select
            value={filterType}
            onChange={(dataChanged): void => setFilterType(dataChanged || undefined)}
            options={dataFilterTypeOptions}
          />
        </div>
        <div className="Account-overview">
          <Row gutter={[24, 24]}>
            <Col span={24} sm={{ span: 8 }}>
              <div className="Account-overview-card flex flex-col items-center justify-center">
                <div className="Account-overview-card-title">Profile Clicks</div>
                <div className="Account-overview-card-value">1.963</div>
              </div>
            </Col>
            <Col span={24} sm={{ span: 8 }}>
              <div className="Account-overview-card flex flex-col items-center justify-center">
                <div className="Account-overview-card-title">1st Place Pushes</div>
                <div className="Account-overview-card-value">9</div>
              </div>
            </Col>
            <Col span={24} sm={{ span: 8 }}>
              <div className="Account-overview-card flex flex-col items-center justify-center">
                <div className="Account-overview-card-title">Active Listing</div>
                <div className="Account-overview-card-value">1</div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="Account-chart">
          <AreaChart
            xField="date"
            yField="value"
            data={dataSources}
            configs={{
              interaction: {
                tooltip: {
                  render: (e: any, options: any): React.ReactNode => {
                    return (
                      <div className="Account-chart-tooltip flex items-center justify-center">
                        {options?.items?.[0]?.value} clicks
                      </div>
                    );
                  },
                },
              },
            }}
          />
        </div>

        <div className="ProfileLayout-body-title" style={{ margin: '4rem 0' }}>
          My Active Listing
        </div>
        <div className="ProfileLayout-body-subtitle">Listing Title</div>
        <div className="ProfileLayout-body-description" style={{ margin: '1rem 0' }}>
          ID 13082 | Active since: 02.01.2024-18:30
        </div>
        <div className="Account-listing" style={{ marginBottom: '4rem' }}>
          <Row gutter={[24, 24]}>
            <Col span={24} md={{ span: 9 }}>
              <div className="Account-listing-card flex flex-col items-center justify-center text-center">
                <div className="Account-listing-card-title">Total Clicks</div>
                <div className="Account-listing-card-value">1.963</div>
              </div>
            </Col>
            <Col span={24} md={{ span: 9 }}>
              <div className="Account-listing-card flex flex-col items-center justify-center text-center">
                <div className="Account-listing-card-title">Time On Site</div>
                <div className="Account-listing-card-value">19s</div>
              </div>
            </Col>
            <Col span={24} md={{ span: 6 }}>
              <div className="Account-listing-card-action flex flex-col items-center justify-between">
                <Button
                  title="Edit"
                  styleType={EButtonStyleType.OUTLINE_LYNCH}
                  size="small"
                  iconName={EIconName.Pencil}
                  iconColor={EIconColor.LYNCH}
                />
                <Button
                  title="Detail"
                  styleType={EButtonStyleType.OUTLINE_LYNCH}
                  size="small"
                  iconName={EIconName.Eye}
                  iconColor={EIconColor.LYNCH}
                />
                <Button
                  title="Push (-8 Credit)"
                  styleType={EButtonStyleType.OUTLINE_RED}
                  size="small"
                  iconName={EIconName.Fire}
                  iconColor={EIconColor.RADICAL_RED}
                  secondIconName={EIconName.Coin}
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="ProfileLayout-body-subtitle">Listing Title</div>
        <div className="ProfileLayout-body-description" style={{ margin: '1rem 0' }}>
          ID 13082 | Active since: 02.01.2024-18:30
        </div>
        <div className="Account-listing">
          <Row gutter={[24, 24]}>
            <Col span={24} md={{ span: 9 }}>
              <div className="Account-listing-card flex flex-col items-center justify-center text-center">
                <div className="Account-listing-card-title">Total Clicks</div>
                <div className="Account-listing-card-value">1.963</div>
              </div>
            </Col>
            <Col span={24} md={{ span: 9 }}>
              <div className="Account-listing-card flex flex-col items-center justify-center text-center">
                <div className="Account-listing-card-title">Time On Site</div>
                <div className="Account-listing-card-value">19s</div>
              </div>
            </Col>
            <Col span={24} md={{ span: 6 }}>
              <div className="Account-listing-card-action flex flex-col items-center justify-between">
                <Button
                  title="Edit"
                  styleType={EButtonStyleType.OUTLINE_LYNCH}
                  size="small"
                  iconName={EIconName.Pencil}
                  iconColor={EIconColor.LYNCH}
                />
                <Button
                  title="Detail"
                  styleType={EButtonStyleType.OUTLINE_LYNCH}
                  size="small"
                  iconName={EIconName.Eye}
                  iconColor={EIconColor.LYNCH}
                />
                <Button
                  title="Push (-8 Credit)"
                  styleType={EButtonStyleType.OUTLINE_RED}
                  size="small"
                  iconName={EIconName.Fire}
                  iconColor={EIconColor.RADICAL_RED}
                  secondIconName={EIconName.Coin}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Account;

Account.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
