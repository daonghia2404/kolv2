import React from 'react';
import classNames from 'classnames';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import moment from 'moment';
import { EFormat } from '@/common/enums';

import { TServicesProps } from './Services.types';
import { Col, Row } from 'antd';
import { getArrayFrom0To } from '@/utils/functions';

const Services: React.FC<TServicesProps> = () => {
  return (
    <div className="Services">
      <div className="Services-wrapper">
        <Row gutter={[32, 32]}>
          {getArrayFrom0To(21).map((item) => (
            <Col key={item} span={12} sm={{ span: 8 }}>
              <div className="Services-item flex items-center">
                <div className="Services-item-icon">
                  <Icon name={EIconName.Gender} color={EIconColor.HEATHER} />
                </div>
                <div className="Services-item-info">
                  <div className="Services-item-info-title">Service {item}</div>
                  <div className="Services-item-info-description">Description about service</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
