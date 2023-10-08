import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.58594 12.4999L10.293 21.207L11.7073 19.7928L5.41436 13.4999L22.0002 13.4999L22.0002 11.4999L5.41437 11.4999L11.7073 5.20703L10.293 3.79282L1.58594 12.4999Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
