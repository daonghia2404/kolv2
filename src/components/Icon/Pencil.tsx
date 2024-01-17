import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2906 3.67063C15.5309 3.39653 15.8254 3.17522 16.1555 3.02069C16.4856 2.86615 16.8442 2.78173 17.2086 2.77277C17.573 2.76381 17.9353 2.83049 18.2726 2.96862C18.6099 3.10674 18.9149 3.3133 19.1684 3.57526C19.4218 3.83722 19.6182 4.14888 19.7451 4.49056C19.872 4.83225 19.9267 5.19654 19.9058 5.56044C19.8848 5.92433 19.7886 6.27992 19.6232 6.60476C19.4579 6.9296 19.227 7.21663 18.9451 7.44773L17.1416 9.25124L13.4133 5.5216L15.2774 3.65744L15.2906 3.67063ZM7.81948 18.572V18.5747H4.08984V14.8437L12.4812 6.45369L16.2095 10.1833L7.81948 18.572ZM1.45312 19.9102H22.5469V22.5469H1.45312V19.9102Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
