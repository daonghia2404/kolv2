import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TTagProps } from './Tag.types.d';

const Tag: React.FC<TTagProps> = ({ iconName, iconColor, title, active, closeable, size, type, onClick }) => {
  return (
    <div
      className={classNames('Tag flex items-center', size, type, { active, 'cursor-pointer': onClick })}
      onClick={onClick}
    >
      {iconName && (
        <div className="Tag-icon">
          <Icon name={iconName} color={iconColor} />
        </div>
      )}
      {title && <div className="Tag-title">{title}</div>}
      {closeable && (
        <div className="Tag-close">
          <Icon name={EIconName.X} color={EIconColor.RADICAL_RED} />
        </div>
      )}
    </div>
  );
};

export default Tag;
