import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="white" fill-opacity="0.01" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4ZM14 13.807L16.37 14.954C16.655 15.092 17 14.904 17 14.611V9.389C17 9.096 16.655 8.908 16.37 9.046L14 10.194V13.807ZM8 9H12C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15H8C7.44772 15 7 14.5523 7 14V10C7 9.44772 7.44772 9 8 9Z"
        fill={color}
        className="fill"
      />
    </svg>
  );
};

export default Svg;
