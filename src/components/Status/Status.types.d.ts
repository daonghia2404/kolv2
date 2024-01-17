import { EIconColor, EIconName } from '@/components/Icon';
import { EStatusStyleType } from '@/components/Status/Status.enums';

export type TStatusProps = {
  title?: string;
  styleType?: EStatusStyleType;
  iconName?: EIconName;
  iconColor?: EIconColor;
};
