import React from 'react';
import classNames from 'classnames';

import Icon from '@/components/Icon';

import { TStatusProps } from './Status.types.d';

const Status: React.FC<TStatusProps> = ({ title, styleType, iconName, iconColor }) => {
  return (
    <div className={classNames('Status flex items-center', styleType)}>
      {iconName && (
        <div className="Status-icon">
          <Icon name={iconName} color={iconColor} />
        </div>
      )}
      {title && <div className="Status-label">{title}</div>}
    </div>
  );
};

export default Status;
