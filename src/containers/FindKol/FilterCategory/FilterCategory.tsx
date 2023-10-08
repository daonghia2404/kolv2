import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Select from '@/components/Select';
import MultipleCheckboxCollapse, { TMultipleCheckboxCollapseData } from '@/components/MultipleCheckboxCollapse';
import {
  dataFilterCategoryOptions,
  findChildrenOfOptions,
} from '@/components/MultipleCheckboxCollapse/MultipleCheckboxCollapse.data';

import { TFilterCategoryProps } from './FilterCategory.types';

const FilterCategory: React.FC<TFilterCategoryProps> = ({ onFilter }) => {
  const allOptionsFilter = findChildrenOfOptions({ key: 'default', children: dataFilterCategoryOptions });
  const [filterState, setFilterState] = useState<TMultipleCheckboxCollapseData[]>(allOptionsFilter);

  const isSelectAll = filterState.length === allOptionsFilter.length;

  const handleSelectAll = (): void => {
    if (isSelectAll) {
      setFilterState([]);
    } else {
      setFilterState(allOptionsFilter);
    }
  };

  useEffect(() => {
    onFilter?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return (
    <div className="FilterCategory">
      <div className="FilterCategory-wrapper">
        <div className="FilterCategory-header flex items-center">
          <div className="FilterCategory-header-icon">
            <Icon name={EIconName.Filter} color={EIconColor.FIORD} />
          </div>
          <div className="FilterCategory-header-title">Filter (4,635)</div>
          <div
            className={classNames('FilterCategory-header-all nowrap', { active: isSelectAll })}
            onClick={handleSelectAll}
          >
            Select All
          </div>
        </div>

        <div className="FilterCategory-body">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Select
                placeholder="Select location"
                options={[
                  { label: 'Location 1', value: '1' },
                  { label: 'Location 2', value: '2' },
                  { label: 'Location 3', value: '3' },
                ]}
                onChange={onFilter}
              />
            </Col>
            <Col span={24}>
              <Select
                placeholder="Select range"
                options={[
                  { label: 'Range 1', value: '1' },
                  { label: 'Range 2', value: '2' },
                  { label: 'Range 3', value: '3' },
                ]}
                onChange={onFilter}
              />
            </Col>
            <Col span={24}>
              <MultipleCheckboxCollapse value={filterState} onChange={setFilterState} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
