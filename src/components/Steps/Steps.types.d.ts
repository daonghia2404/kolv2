export type TStepsProps = {
  value?: TStepsOption;
  options?: TStepsOption[];
  lineWidth?: string | number;
  onChange?: (data: TStepsOption) => void;
};

export type TStepsOption = {
  id: string;
  title?: string;
  children?: React.ReactNode;
};
