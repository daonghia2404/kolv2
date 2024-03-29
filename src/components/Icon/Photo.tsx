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
        d="M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4ZM10.667 8.667C10.667 9.77157 9.77156 10.667 8.66699 10.667C7.56242 10.667 6.66699 9.77157 6.66699 8.667C6.66699 7.56243 7.56242 6.667 8.66699 6.667C9.77156 6.667 10.667 7.56243 10.667 8.667ZM6.66699 17.333L9.33299 14.667L10.6664 15.9999L14.667 12L17.333 14.933V17.333H6.66699Z"
        fill={color}
        className="fill"
      />
    </svg>
  );
};

export default Svg;
