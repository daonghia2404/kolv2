export type TTabsProps = {
  options?: TTabOption[];
  defaultKey?: string;
  onKeyChange?: (key: string) => void;
};

export type TTabOption = {
  key: string;
  title: string;
  children: React.ReactNode;
};
