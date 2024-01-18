import React from 'react';

import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="12" r="6.75" fill="#E80B26" />
      <circle cx="17" cy="12" r="6.75" fill="#F59D31" />
      <path
        d="M12.5 17.0311C13.881 15.7952 14.75 13.9991 14.75 11.9999C14.75 10.0008 13.881 8.20471 12.5 6.96875C11.119 8.20471 10.25 10.0008 10.25 11.9999C10.25 13.9991 11.119 15.7952 12.5 17.0311Z"
        fill="#FC6020"
      />
    </svg>
  );
};

export default Svg;
