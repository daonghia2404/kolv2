import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 17.5H10.5L12.5 15.5H18M6 17.5V15L13.88 7.15C14.07 6.95 14.39 6.95 14.59 7.15L16.35 8.91C16.55 9.11 16.55 9.42 16.35 9.62L8.47 17.5M19 3.5H5C3.89 3.5 3 4.39 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H19C20.1 21.5 21 20.6 21 19.5V5.5C21 4.39 20.1 3.5 19 3.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
