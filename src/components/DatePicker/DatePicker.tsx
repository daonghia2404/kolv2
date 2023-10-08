import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import classNames from 'classnames';

import { EFormat } from '@/common/enums';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TDatePickerProps } from './DatePicker.types';

const DatePicker: React.FC<TDatePickerProps> = ({
  className,
  value,
  placeholder,
  disabled,
  disabledDate,
  onChange,
}) => {
  return (
    <div className={classNames('DatePicker', className)}>
      <AntdDatePicker
        format={EFormat['DD/MM/YYYY']}
        dropdownClassName="DatePicker-dropdown"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        disabledDate={disabledDate}
        suffixIcon={<Icon name={EIconName.Calendar} color={EIconColor.LYNCH} />}
      />
    </div>
  );
};

export default DatePicker;
