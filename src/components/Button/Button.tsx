import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { TButtonProps } from '@/components/Button/Button.types';
import Icon, { EIconColor } from '@/components/Icon';
import Loading from '@/components/Loading';

const Button: React.FC<TButtonProps> = ({
  className,
  size,
  iconName,
  iconColor,
  type,
  htmlType,
  title,
  danger,
  reverse,
  link,
  disabled,
  loading,
  styleType,
  badge,
  badgeColor,
  badgeTextColor,
  active,
  style,
  secondIconName,
  secondIconColor,
  onClick,
}) => {
  const router = useRouter();

  const handleClickButton = (): void => {
    if (link) router.push(link);
    else onClick?.();
  };

  return (
    <div
      className={classNames('Button', className, styleType, { active, 'only-icon': !title && iconName })}
      style={style}
    >
      <AntdButton
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled || loading}
      >
        <div
          className="Button-wrapper flex items-center justify-center"
          style={{ flexDirection: reverse ? 'row-reverse' : undefined }}
        >
          {loading ? (
            <Loading size={size === 'small' ? 18 : undefined} color={EIconColor.WHITE} />
          ) : (
            <>
              {iconName && (
                <div className="Button-icon">
                  <Icon name={iconName} color={iconColor} />
                </div>
              )}
              {title && <span className="Button-title">{title}</span>}
              {secondIconName && (
                <div className="Button-icon">
                  <Icon name={secondIconName} color={secondIconColor} />
                </div>
              )}
            </>
          )}

          {badge && (
            <div className="Button-badge" style={{ color: badgeTextColor, background: badgeColor }}>
              {badge}
            </div>
          )}
        </div>
      </AntdButton>
    </div>
  );
};

export default Button;
