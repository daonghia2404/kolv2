import { StaticImageData } from 'next/image';

export type TKolCardProps = {
  image?: string | StaticImageData;
  name?: string;
  rank?: string | StaticImageData;
  age?: number;
  country?: string | StaticImageData;
  weight?: number;
  height?: number;
  hideInfo?: boolean;
  topPick?: boolean;
  promotion?: boolean;
  horizontal?: boolean;
  description?: string;
  loading?: boolean;
  online?: boolean;
  video?: string;
  onClick?: () => void;
};
