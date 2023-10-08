import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import classNames from 'classnames';

import { TPaginationProps } from '@/components/Pagination/Pagination.types';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconName } from '@/components/Icon';

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
        return <Button iconName={EIconName.ArrowLeftShort} size="small" styleType={EButtonStyleType.OUTER_SPACE} />;
      case 'next':
        return <Button iconName={EIconName.ArrowRightShort} size="small" styleType={EButtonStyleType.OUTER_SPACE} />;
      default:
        return originalElement;
    }
  };
  return (
    <div className={classNames('Pagination flex items-center', className)}>
      <AntdPagination
        current={page}
        pageSize={pageSize}
        total={total}
        hideOnSinglePage={hideOnSinglePage}
        showLessItems={showLessItems}
        showQuickJumper={false}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
