import { SizeType } from 'antd/lib/config-provider/SizeContext';

import { EIconColor, EIconName } from '@/components/Icon';
import { ETagType } from '@/components/Tag/Tag.enums';

export type TTagProps = {
  closeable?: boolean;
  title?: string;
  size?: SizeType;
  active?: boolean;
  type?: ETagType;
  onClick?: () => void;
  iconName?: EIconName;
  iconColor?: EIconColor;
};
