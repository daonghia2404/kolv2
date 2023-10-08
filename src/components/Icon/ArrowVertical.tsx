import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_510_769)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.66407 3.23652L6.01962 1.87583L6.22248 1.67206L6.42565 1.87583L7.78089 3.23652L7.37487 3.64013L6.50982 2.77175V11.0098L7.37487 10.1411L7.78089 10.545L6.42565 11.9057L6.22248 12.1095L6.01962 11.9057L4.66407 10.545L5.0701 10.1411L5.93514 11.0098V2.77175L5.0701 3.64013L4.66407 3.23652ZM2.92188 12.4689H9.52309V13.0433H2.92188V12.4689ZM2.92188 0.738281H9.52309V1.31235H2.92188V0.738281Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_510_769">
          <rect width="12.3047" height="12.3047" fill={color} transform="translate(0.0703125 0.738281)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
