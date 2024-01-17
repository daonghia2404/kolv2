import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

import { TPaginationProps } from '@/components/Pagination/Pagination.types';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const Pagination: React.FC<TPaginationProps> = ({
  page,
  pageSize,
  total = 0,
  showLessItems,
  hideOnSinglePage,
  className,
  onChange,
}) => {
  const itemRender = (
    currentPage: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode,
  ): React.ReactNode => {
    switch (type) {
      case 'prev':
        return (
          <Button
            title="Previous"
            iconName={EIconName.ArrowLeftShort}
            iconColor={EIconColor.PALE_SKY}
            size="small"
            styleType={EButtonStyleType.TEXT_PALE_SKY}
          />
        );
      case 'next':
        return (
          <Button
            title="Next"
            iconName={EIconName.ArrowRightShort}
            iconColor={EIconColor.PALE_SKY}
            size="small"
            styleType={EButtonStyleType.TEXT_PALE_SKY}
            reverse
          />
        );
      default:
        return originalElement;
    }
  };

  const props = {
    current: page,
    pageSize: pageSize,
    total: total,
    hideOnSinglePage: hideOnSinglePage,
    showQuickJumper: false,
    showSizeChanger: false,
    itemRender: itemRender,
    onChange: onChange,
  };

  return (
    <div className={classNames('Pagination', className)}>
      <MediaQuery maxWidth={575}>
        <AntdPagination {...props} showLessItems />
      </MediaQuery>

      <MediaQuery minWidth={576}>
        <AntdPagination {...props} showLessItems={showLessItems} />
      </MediaQuery>
    </div>
  );
};

export default Pagination;
