import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import { TTextAreaProps } from '@/components/TextArea/TextArea.types';

const { TextArea: AntdTextArea } = Input;

const TextArea: React.FC<TTextAreaProps> = ({
  className,
  size,
  editable,
  placeholder,
  autoSize,
  value,
  suffix,
  prefix,
  maxLength,
  showCount,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const changedValue = e.target.value;
    onChange?.(changedValue);
  };

  return (
    <div
      className={classNames('TextArea flex items-start', className, {
        'auto-size': autoSize,
        editable,
        affix: suffix || prefix,
      })}
    >
      {prefix && <div className="TextArea-prefix">{prefix}</div>}
      <AntdTextArea
        size={size}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoSize={autoSize}
        maxLength={maxLength}
        showCount={showCount}
      />
      {suffix && <div className="TextArea-suffix">{suffix}</div>}
    </div>
  );
};

export default TextArea;
