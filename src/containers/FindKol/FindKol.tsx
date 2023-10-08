import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Row, Col, Drawer } from 'antd';
import dynamic from 'next/dynamic';

import FilterCategory from '@/containers/FindKol/FilterCategory';
import FilterCard from '@/containers/FindKol/FilterCard';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { useIntersectionObserver, useModalState } from '@/utils/hooks';
import { dataFindKolCards } from '@/containers/FindKol/FilterCard/FilterCard.data';

import { TFindKolProps } from './FindKol.types.d';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const FindKol: React.FC<TFindKolProps> = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const loadMoreEntry = useIntersectionObserver(loadMoreRef, {});
  const isVisibleLoadMoreEntry = !!loadMoreEntry?.isIntersecting;

  const [drawerFilterMobileState, handleOpenDrawerFilterMobile, handleCloseDrawerFilterMobile] = useModalState();
  const [loading, setLoading] = useState<boolean>(true);
  const [kolDataState, setKolDataState] = useState<any>([]);

  const getData = useCallback((isFetchNew?: boolean): void => {
    if (isFetchNew) setKolDataState([]);
    setLoading(true);
    setTimeout(() => {
      setKolDataState((prevState) => (isFetchNew ? dataFindKolCards : [...prevState, ...dataFindKolCards]));
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isVisibleLoadMoreEntry && !loading) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisibleLoadMoreEntry]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="FindKol">
      <div className="FindKol-wrapper">
        <Row gutter={[32, 32]}>
          <Col span={8} className="FindKol-filter-category">
            <FilterCategory
              onFilter={(): void => {
                getData(true);
              }}
            />
          </Col>
          <Col span={24} lg={{ span: 16 }}>
            <FilterCard data={kolDataState} loading={loading} onOpenFilter={handleOpenDrawerFilterMobile} />
          </Col>
          <Col span={8} className="FindKol-filter-category" />
          <Col span={24} lg={{ span: 16 }}>
            <div className="FindKol-loadmore flex items-center justify-center" ref={loadMoreRef}>
              Scroll down to load more
              <Icon name={EIconName.DoubleAngleDown} color={EIconColor.LYNCH} />
            </div>
          </Col>
        </Row>
      </div>

      <MediaQuery maxWidth={991}>
        <Drawer
          {...drawerFilterMobileState}
          placement="right"
          className="FindKol-filter-category-mobile"
          closable={false}
          onClose={handleCloseDrawerFilterMobile}
        >
          <FilterCategory onFilter={(): void => getData(true)} />
        </Drawer>
      </MediaQuery>
    </div>
  );
};

export default FindKol;
