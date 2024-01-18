import { ECreditCardType } from '@/components/CreditCard/CreditCard.enums';

export type TCreditCardProps = {
  type?: ECreditCardType;
  title?: string;
  bonus?: string;
  active?: boolean;
  onClick?: () => void;
};
