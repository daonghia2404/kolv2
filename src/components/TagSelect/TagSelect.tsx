import React from 'react';
import { Col, Row } from 'antd';

import Tag from '@/components/Tag/Tag';

import { TTagSelectProps } from './TagSelect.types.d';

const TagSelect: React.FC<TTagSelectProps> = ({ options = [], value, onChange }) => {
  return (
    <div className="TagSelect">
      <Row gutter={[12, 12]}>
        {options.map((option) => {
          return (
            <Col key={option.value}>
              <Tag
                title={option.label}
                active={value?.value === option.value}
                onClick={(): void => onChange?.(option)}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TagSelect;
