import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 17.6855L13.875 14.0605M15.8333 9.35221C15.8333 13.0341 12.8486 16.0189 9.16667 16.0189C5.48477 16.0189 2.5 13.0341 2.5 9.35221C2.5 5.67031 5.48477 2.68555 9.16667 2.68555C12.8486 2.68555 15.8333 5.67031 15.8333 9.35221Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Svg;
