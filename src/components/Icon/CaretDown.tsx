import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2999 17.3L3.1999 9.2C2.7999 8.8 2.7999 8.2 3.1999 7.8C3.3999 7.6 3.6499 7.5 3.8999 7.5H20.0499C20.5999 7.5 21.0499 7.95 21.0499 8.5C21.0499 8.75 20.9499 9 20.7499 9.2L12.6999 17.3C12.2999 17.7 11.6999 17.7 11.2999 17.3Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
