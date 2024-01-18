import { ECreditCardType } from '@/components/CreditCard';
import { TSelectOption } from '@/components/Select';

export type TPlanCardProps = {
  type?: ECreditCardType;
  active?: boolean;
  credits?: number;
  title?: string;
  features?: TSelectOption[];
  onClick?: () => void;
};
