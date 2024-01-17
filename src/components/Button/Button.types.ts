import { ButtonType } from 'antd/lib/button';
import { ButtonHTMLType } from 'antd/lib/button/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

import { CSSProperties } from 'react';

import { EIconColor, EIconName } from '@/components/Icon';

import { EButtonStyleType } from './Button.enums';

export type TButtonProps = {
  className?: string;
  title?: string;
  type?: ButtonType;
  htmlType?: ButtonHTMLType;
  size?: SizeType;
  styleType?: EButtonStyleType;
  danger?: boolean;
  link?: string;
  iconName?: EIconName;
  iconColor?: EIconColor;
  secondIconName?: EIconName;
  secondIconColor?: EIconColor;
  reverse?: boolean;
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  badge?: React.ReactNode;
  badgeColor?: EIconColor;
  badgeTextColor?: EIconColor;
  style?: CSSProperties;
  onClick?: () => void;
};
