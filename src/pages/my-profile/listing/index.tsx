import React, { useState } from 'react';

import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import Table from '@/components/Table';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Switch from '@/components/Switch';

const Listing = () => {
  const [getListingParamsRequest, setGetListingParamsRequest] = useState<any>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const columns = [
    {
      key: 'action',
      dataIndex: 'action',
      title: 'Action',
      className: 'nowrap',
      render: (): React.ReactElement => (
        <div className="Listing-action flex items-center" style={{ columnGap: '2rem' }}>
          <div className="flex items-center" style={{ columnGap: '.8rem', lineHeight: 1 }}>
            <Switch />
            Active?
          </div>
          <div className="flex items-center">
            <Button
              title="Push (-8 Credit)"
              styleType={EButtonStyleType.OUTLINE_RED}
              size="small"
              iconName={EIconName.Coin}
              secondIconName={EIconName.Fire}
              secondIconColor={EIconColor.RADICAL_RED}
              reverse
            />
          </div>
          <div className="flex items-center">
            <Button
              title="Edit"
              styleType={EButtonStyleType.TEXT_HEATHER}
              size="small"
              iconName={EIconName.Pencil}
              iconColor={EIconColor.HEATHER}
            />
          </div>
        </div>
      ),
    },
    {
      key: 'id',
      dataIndex: 'id',
      title: 'ID',
      className: 'nowrap',
      render: (): React.ReactElement => <>13081</>,
    },
    {
      key: 'totalClick',
      dataIndex: 'totalClick',
      title: 'Total Click',
      className: 'nowrap',
      render: (): React.ReactElement => <>13081</>,
    },
    {
      key: 'content',
      dataIndex: 'content',
      title: 'Content',
      className: 'text-center',
      width: 1,
      render: (): React.ReactElement => (
        <div className="Listing-action flex items-center">
          <Button
            title="4"
            reverse
            iconName={EIconName.Photo}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TEXT_HEATHER}
            size="small"
          />
          <Button
            title="1"
            reverse
            iconName={EIconName.Video}
            iconColor={EIconColor.HEATHER}
            styleType={EButtonStyleType.TEXT_HEATHER}
            size="small"
          />
        </div>
      ),
    },
  ];

  const handlePaginationChange = (page: number, pageSize: number, sort?: string): void => {
    setGetListingParamsRequest({
      ...getListingParamsRequest,
      page,
      pageSize,
      sort: sort || getListingParamsRequest?.sort,
    });
  };

  return (
    <div className="Listing">
      <div className="ProfileLayout-body-title">My Listing</div>
      <div className="Listing-wrapper">
        <Table
          columns={columns}
          dataSources={[1, 2, 3, 4, 5, 6, 7, 8]}
          page={getListingParamsRequest.page}
          pageSize={getListingParamsRequest.pageSize}
          total={144}
          onPaginationChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default Listing;

Listing.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
