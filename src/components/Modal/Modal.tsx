import React from 'react';
import { Modal as AntdModal, ModalProps } from 'antd';
import classNames from 'classnames';

import { TModalProps } from '@/components/Modal/Modal.types';
import Button, { EButtonStyleType } from '@/components/Button';

const AntdModalModify: React.FC<ModalProps & { children?: React.ReactNode }> = AntdModal;

const Modal: React.FC<TModalProps> = ({
  visible,
  title,
  centered,
  width,
  className,
  children,
  loading,
  showActions,
  cancelButton,
  confirmButton,
  zIndex,
  maskStyle,
  onClose,
  onSubmit,
  titleActionOk,
  titleActionCancel,
}) => {
  return (
    <AntdModalModify
      className={classNames('Modal', className)}
      footer={null}
      title={null}
      closable={false}
      visible={visible}
      width={width}
      centered={centered}
      zIndex={zIndex}
      onCancel={loading ? undefined : onClose}
      maskStyle={maskStyle}
    >
      <div className="Modal-wrapper">
        <div className="Modal-body">
          {title && (
            <div className="Modal-header">
              <div className="Modal-header-title">{title}</div>
            </div>
          )}

          {children}

          {showActions && (
            <div className="Modal-actions flex justify-center">
              <Button
                title={titleActionOk || "Đồng ý"}
                styleType={EButtonStyleType.RED}
                disabled={loading}
                onClick={onSubmit}
                {...confirmButton}
              />
              <Button
                title={titleActionCancel || "Huỷ bỏ"}
                styleType={EButtonStyleType.OUTLINE_RED}
                disabled={loading}
                onClick={onClose}
                {...cancelButton}
              />
            </div>
          )}
        </div>
      </div>
    </AntdModalModify>
  );
};

export default Modal;
