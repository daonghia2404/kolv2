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
        d="M7.00048 13H17.0005L18.0005 11H6.00048L7.00048 13ZM3.99348 6C3.44548 6 3.20348 6.405 3.44748 6.895L4.00048 8H20.0005L20.5535 6.895C20.8005 6.4 20.5555 6 20.0075 6H3.99348ZM10.7785 17.556C10.8514 17.6861 10.9566 17.7953 11.0839 17.8731C11.2112 17.9508 11.3564 17.9945 11.5055 18H12.4955C12.7745 18 13.1005 17.8 13.2225 17.556L14.0005 16H10.0005L10.7785 17.556Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
