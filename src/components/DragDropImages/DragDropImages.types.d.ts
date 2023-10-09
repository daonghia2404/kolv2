export type TDragDropImagesProps = {
  value?: TDragDropImagesData[];
  onChange?: (data?: TDragDropImagesData[]) => void;
  disabled?: boolean;
  multiple?: boolean;
  maxCount?: number;
  description?: string;
};

export type TDragDropImagesData = any;
