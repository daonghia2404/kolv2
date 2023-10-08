export type TStepsProps = {
  value?: TStepsOption;
  options?: TStepsOption[];
  onChange?: (data: TStepsOption) => void;
};

export type TStepsOption = {
  id: string;
  title?: string;
  children?: React.ReactNode;
};
