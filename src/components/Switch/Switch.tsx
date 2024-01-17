import React from 'react';
import { Switch as AntdSwitch } from 'antd';

import { TSwitchProps } from './Switch.types.d';

const Switch: React.FC<TSwitchProps> = ({ value, onChange }) => {
  return (
    <div className="Switch">
      <AntdSwitch checked={value} onChange={(e): void => onChange?.(!value)} />
    </div>
  );
};

export default Switch;
