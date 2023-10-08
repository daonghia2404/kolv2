import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.4141 12.5001L13.707 3.79297L12.2927 5.20718L18.5856 11.5001L1.99985 11.5001L1.99985 13.5001L18.5856 13.5001L12.2927 19.793L13.707 21.2072L22.4141 12.5001Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
