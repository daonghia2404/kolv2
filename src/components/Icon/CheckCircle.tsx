import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="17" height="17" rx="8.5" fill="#D1FADF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.1098 5.23443L7.03817 10.129L5.69234 8.6911C5.44442 8.45735 5.05484 8.44318 4.77151 8.64152C4.49526 8.84693 4.41734 9.20818 4.58734 9.4986L6.18109 12.0911C6.33692 12.3319 6.60609 12.4807 6.91067 12.4807C7.20109 12.4807 7.47734 12.3319 7.63317 12.0911C7.88817 11.7582 12.7544 5.95693 12.7544 5.95693C13.3919 5.30526 12.6198 4.73152 12.1098 5.22735V5.23443Z"
        fill={"#12B76A"}
      />
    </svg>
  );
};

export default Svg;
