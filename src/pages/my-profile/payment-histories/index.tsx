import React, { useState } from 'react';
import Image from 'next/image';

import LogoMasterCard from '@/assets/images/logo-mastercard.svg';
import SEO from '@/components/SEO';
import ProfileLayout from '@/layouts/ProfileLayout';
import Table from '@/components/Table';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Status, { EStatusStyleType } from '@/components/Status';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';

const PaymentHistories = () => {
  const [getPaymentHistoriesParamsRequest, setGetPaymentHistoriesParamsRequest] = useState<any>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const columns = [
    {
      key: 'paymentAt',
      dataIndex: 'paymentAt',
      title: 'Payment At',
      sorter: true,
      className: 'nowrap',
      render: (): React.ReactElement => <>06/04/23 1:12 PM</>,
    },
    {
      key: 'amount',
      dataIndex: 'amount',
      title: 'Amount (CHF)',
      className: 'nowrap',
      render: (): React.ReactElement => <>60.00</>,
    },
    {
      key: 'creditCard',
      dataIndex: 'creditCard',
      title: 'Credit Card',
      className: 'nowrap',
      render: (): React.ReactElement => (
        <div className="PaymentHistories-card flex items-center">
          <div className="PaymentHistories-card-icon">
            <Image src={LogoMasterCard} alt="" />
          </div>
          XXXX XXXX XXXX 2360
        </div>
      ),
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: 'Status',
      sorter: true,
      className: 'nowrap',
      render: (): React.ReactElement => (
        <Status title="Success" styleType={EStatusStyleType.SUCCESS} iconName={EIconName.CheckCircle} />
      ),
    },
    {
      key: 'invoice',
      dataIndex: 'invoice',
      title: 'Invoice',
      className: 'text-center',
      render: (): React.ReactElement => (
        <Button
          className="PaymentHistories-btn"
          title="Download"
          iconName={EIconName.Invoice}
          iconColor={EIconColor.HEATHER}
          styleType={EButtonStyleType.TRANSPARENT}
        />
      ),
    },
  ];

  const handlePaginationChange = (page: number, pageSize: number, sort?: string): void => {
    setGetPaymentHistoriesParamsRequest({
      ...getPaymentHistoriesParamsRequest,
      page,
      pageSize,
      sort: sort || getPaymentHistoriesParamsRequest?.sort,
    });
  };

  return (
    <div className="PaymentHistories">
      <div className="ProfileLayout-body-title">My Payment History</div>
      <div className="PaymentHistories-wrapper">
        <Table
          columns={columns}
          dataSources={[1, 2, 3, 4, 5, 6, 7, 8]}
          page={getPaymentHistoriesParamsRequest.page}
          pageSize={getPaymentHistoriesParamsRequest.pageSize}
          total={144}
          onPaginationChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default PaymentHistories;

PaymentHistories.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <ProfileLayout>{page}</ProfileLayout>
    </>
  );
};
