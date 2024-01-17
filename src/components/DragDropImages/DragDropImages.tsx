import React from 'react';
import { Col, Row, Upload } from 'antd';
import { DraggerProps, UploadChangeParam } from 'antd/lib/upload';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TDragDropImagesProps } from './DragDropImages.types.d';

const { Dragger } = Upload;
const DraggerModify: React.FC<DraggerProps & { children?: React.ReactNode }> = Dragger;

const DragDropImages: React.FC<TDragDropImagesProps> = ({
  value = [],
  multiple,
  description,
  accept = '.png,.jpg,.jpeg,.heic',
  maxCount,
  disabled,
  customChildren,
  onChange,
}) => {
  const isSingleUpload = !multiple && maxCount === 1;

  const handleUploadVideo = async (dataChanged: UploadChangeParam): Promise<void> => {
    const files = dataChanged?.fileList?.map((antFile) => antFile.originFileObj);
    onChange?.(isSingleUpload ? files : [...value, ...files]);
  };

  const handleRemoveImage = (fileIndex: number): void => {
    const newData = value.filter((_, index) => index !== fileIndex);
    onChange?.(newData);
  };

  return (
    <div className="DragDropImages">
      {value.length > 0 && (
        <div className="DragDropImages-list">
          <Row gutter={[16, 16]}>
            {value.map((file: any, fileIndex: number) => (
              <Col key={fileIndex}>
                <div className={classNames('DragDropImages-list-item', { single: isSingleUpload })}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={URL.createObjectURL(file)} alt="" />
                  <div className="DragDropImages-list-item-close" onClick={(): void => handleRemoveImage(fileIndex)}>
                    <Icon name={EIconName.X} color={EIconColor.WHITE} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}

      <DraggerModify
        fileList={[]}
        accept={accept}
        multiple={multiple}
        onChange={handleUploadVideo}
        disabled={disabled}
        maxCount={maxCount}
      >
        {customChildren ? (
          customChildren
        ) : (
          <div className="DragDropImages-wrapper">
            <div className="DragDropImages-icon">
              <Icon name={EIconName.Upload} color={EIconColor.LYNCH} />
            </div>
            <div className="DragDropImages-title">Select a file or drag and drop here</div>
            <div className="DragDropImages-description">{description}</div>
          </div>
        )}
      </DraggerModify>
    </div>
  );
};

export default DragDropImages;
