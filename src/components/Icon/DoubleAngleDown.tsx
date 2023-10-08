import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 12.1855L16 20.1855L24 12.1855"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 20.1855L16 28.1855L24 20.1855"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Svg;
