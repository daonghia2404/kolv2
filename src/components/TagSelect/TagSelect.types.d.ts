import { TSelectOption } from '@/components/Select';

export type TTagSelectProps = {
  value?: TSelectOption;
  onChange?: (data: TSelectOption) => void;
  options?: TSelectOption[];
};
