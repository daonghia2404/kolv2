import React from 'react';

import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_724_8585)">
        <rect width="24" height="24" rx="12" fill="#1A47B8" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-1.22643 0H-4.80078V4L25.2055 24L28.7992 24V20L-1.22643 0Z"
          fill="white"
        />
        <path d="M-3.60862 0L28.7992 21.6567V24H27.635L-4.80078 2.32089V0H-3.60862Z" fill="#F93939" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.5992 0H28.7992V4C28.7992 4 8.0149 17.3249 -1.60078 24H-4.80078V20L25.5992 0Z"
          fill="white"
        />
        <path d="M28.7992 0H27.714L-4.80078 21.6753V24H-3.60862L28.7992 2.33842V0Z" fill="#F93939" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.41854 0H16.6078V7.40291H28.7992V16.5922H16.6078V24H7.41854V16.5922H-4.80078V7.40291H7.41854V0Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.34659 0H14.6518V9.23077H28.7992V14.7692H14.6518V24H9.34659V14.7692H-4.80078V9.23077H9.34659V0Z"
          fill="#F93939"
        />
      </g>
      <defs>
        <clipPath id="clip0_724_8585">
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
