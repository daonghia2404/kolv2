import React from 'react';

import { TNeedSupportProps } from './NeedSupport.types';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const NeedSupport: React.FC<TNeedSupportProps> = () => {
  return (
    <div className="NeedSupport">
      <div className="NeedSupport-wrapper">
        <div className="NeedSupport-header">
          <div className="NeedSupport-header-title">Need support?</div>
        </div>

        <div className="NeedSupport-body">
          <div className="NeedSupport-item flex items-center">
            <div className="NeedSupport-item-icon">
              <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
            </div>
            <div className="NeedSupport-item-info">
              <div className="NeedSupport-item-info-title">+4184 333 9255</div>
              <div className="NeedSupport-item-info-description">Mo-Fr from 08:00-19:00</div>
            </div>
          </div>

          <div className="NeedSupport-item flex items-center">
            <div className="NeedSupport-item-icon">
              <Icon name={EIconName.Mail2} color={EIconColor.WHITE} />
            </div>
            <div className="NeedSupport-item-info">
              <div className="NeedSupport-item-info-title">Support@6fuxxx.ch</div>
              <div className="NeedSupport-item-info-description">Mo-So from 08:00-19:00</div>
            </div>
          </div>

          <div className="NeedSupport-item flex items-center">
            <div className="NeedSupport-item-icon">
              <Icon name={EIconName.WhatsApp} color={EIconColor.WHITE} />
            </div>
            <div className="NeedSupport-item-info">
              <div className="NeedSupport-item-info-title">+4179 555 2233</div>
              <div className="NeedSupport-item-info-description">Support 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedSupport;
