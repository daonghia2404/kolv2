import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3C6.994 3 3 6.994 3 12C3 17.006 6.994 21 12 21C17.006 21 21 17.006 21 12C21 6.994 17.006 3 12 3ZM11.134 6.521C11.37 6.285 11.572 6.128 11.955 6.128C12.383 6.094 12.776 6.296 12.934 6.6C13.114 6.814 13.215 7.286 13.17 7.568C13.17 7.646 13.114 8.175 13.091 8.321L12.776 12.315C12.776 12.709 12.697 13.102 12.54 13.406C12.461 13.642 12.225 13.8 11.91 13.8C11.7889 13.7986 11.6711 13.76 11.5726 13.6896C11.4741 13.6191 11.3995 13.5202 11.359 13.406C11.201 13.012 11.123 12.697 11.123 12.315L10.909 8.4C10.83 7.691 10.83 7.927 10.83 7.534C10.83 7.151 10.909 6.836 11.134 6.521ZM12.866 17.558C12.6544 17.761 12.3722 17.8736 12.079 17.872C11.764 17.872 11.449 17.794 11.212 17.558C11.0872 17.4367 10.988 17.2914 10.9205 17.131C10.853 16.9705 10.8185 16.7981 10.819 16.624C10.819 16.309 10.898 15.994 11.134 15.758C11.37 15.521 11.685 15.364 12 15.364C12.315 15.364 12.63 15.521 12.866 15.757C13.102 15.994 13.181 16.309 13.181 16.624C13.17 17.006 13.091 17.321 12.866 17.558Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;