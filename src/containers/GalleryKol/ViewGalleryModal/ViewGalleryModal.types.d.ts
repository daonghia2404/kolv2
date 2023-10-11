import { StaticImageData } from 'next/image';

export type TViewGalleryModalProps = {
  visible: boolean;
  defaultIndex?: number;
  dataCarousel?: { image: string | StaticImageData; video?: string }[];
  onClose?: () => void;
};
