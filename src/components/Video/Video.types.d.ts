import { TooltipPlacement } from 'antd/lib/tooltip';
import { StaticImageData } from 'next/image';

export type TVideoProps = {
  src?: string;
  thumbnail?: string | StaticImageData;
  placement?: TooltipPlacement | 'center';
  objectFit?: 'cover' | 'contain';
  disabled?: boolean;
};
