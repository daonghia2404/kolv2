import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0004 21L16.6504 16.65"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M11 8V14" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 11H14" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default Svg;
