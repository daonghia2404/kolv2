export type TDragDropImagesProps = {
  value?: TDragDropImagesData[];
  disabled?: boolean;
  multiple?: boolean;
  maxCount?: number;
  description?: string;
  accept?: string;
  customChildren?: React.ReactNode;
  onChange?: (data?: TDragDropImagesData[]) => void;
};

export type TDragDropImagesData = any;
