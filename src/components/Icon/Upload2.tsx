import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.91138 4.98438V11.9844H7.91138V4.98438H4.91138L8.91138 0.984375L12.9114 4.98438H9.91138Z"
        fill={color}
      />
      <path
        d="M15.9114 16.9844H1.91142C1.62442 16.9844 1.35142 16.8614 1.16142 16.6464C0.97142 16.4314 0.88342 16.1454 0.91842 15.8604L1.91842 7.86037C1.98142 7.35938 2.40742 6.98438 2.91142 6.98438H5.91142V8.98438H3.79442L3.04442 14.9844H14.7784L14.0284 8.98438H11.9114V6.98438H14.9114C15.4154 6.98438 15.8414 7.35938 15.9034 7.86037L16.9034 15.8604C16.9394 16.1454 16.8504 16.4314 16.6604 16.6464C16.4714 16.8614 16.1984 16.9844 15.9114 16.9844Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
