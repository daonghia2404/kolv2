import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8 15.6896C13.8 14.6696 12.9895 13.8463 12 13.8463C11.0105 13.8463 10.2 14.6696 10.2 15.6896C10.2 16.3801 10.5609 16.9663 11.1009 17.2792V19.3801C11.1009 19.8896 11.5052 20.3106 12.0009 20.3106C12.4966 20.3106 12.9009 19.8896 12.9009 19.3801V17.2792C13.44 16.9663 13.8 16.3801 13.8 15.6896ZM21 12.0001V21.2253C21 22.7549 19.7843 24.0001 18.3 24.0001H5.7C4.21662 24.0001 3 22.7549 3 21.2253V12.0001C3 10.4715 4.2157 9.22534 5.7 9.22534H18.3C19.7843 9.22534 21 10.4715 21 12.0001Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.3002 8.31047H15.6002V7.30523C15.6002 5.61047 15.135 2.77477 12.0002 2.77477C10.6836 2.77477 9.84306 3.29274 9.30891 4H6.24805C7.1779 1.49555 9.23662 0 12.0002 0C15.8255 0 18.3002 2.86523 18.3002 7.30523V8.31047Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
