import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type TAvatarProps = {
  image?: any;
  size?: number;
  className?: string;
  name?: string;
  textSize?: SizeType;
  shape?: 'circle' | 'square';
  onClick?: () => void;
};
