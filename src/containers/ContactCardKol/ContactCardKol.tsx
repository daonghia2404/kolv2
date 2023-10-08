import React from 'react';

import { TContactCardKolProps } from './ContactCardKol.types.d';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

const ContactCardKol: React.FC<TContactCardKolProps> = () => {
  return (
    <div className="ContactCardKol">
      <div className="ContactCardKol-wrapper">
        <div className="ContactCardKol-header">
          <div className="ContactCardKol-header-title">Contact Valentina</div>
        </div>

        <div className="ContactCardKol-body">
          <div className="ContactCardKol-phone">+41 76 619 7684</div>
          <div className="ContactCardKol-description flex items-center justify-center" style={{ fontWeight: 500 }}>
            <Icon name={EIconName.Verify} color={EIconColor.RADICAL_RED} />
            SMS akzeptier 1
          </div>

          <div className="ContactCardKol-btn">
            <Button
              title="WhatsApp"
              iconName={EIconName.WhatsApp}
              iconColor={EIconColor.WHITE}
              styleType={EButtonStyleType.RED}
              size="large"
            />
            <div className="ContactCardKol-btn-verify">
              <Icon name={EIconName.Verify} color={EIconColor.WHITE} />
            </div>
          </div>
          <div className="ContactCardKol-btn">
            <Button
              title="Call"
              iconName={EIconName.Phone}
              iconColor={EIconColor.WHITE}
              styleType={EButtonStyleType.RED}
              size="large"
            />
            <div className="ContactCardKol-btn-verify">
              <Icon name={EIconName.Verify} color={EIconColor.WHITE} />
            </div>
          </div>
          <div className="ContactCardKol-btn">
            <Button
              title="SMS"
              iconName={EIconName.Sms}
              iconColor={EIconColor.WHITE}
              styleType={EButtonStyleType.RED}
              size="large"
            />
            <div className="ContactCardKol-btn-verify">
              <Icon name={EIconName.Verify} color={EIconColor.WHITE} />
            </div>
          </div>

          <div className="ContactCardKol-address">
            <div className="ContactCardKol-subtitle">Address</div>
            <div className="ContactCardKol-description">
              Via Dante Alighieri, 10
              <br />
              20121 Milano (MI)
              <br />
              Italy
            </div>
          </div>

          <div className="ContactCardKol-btn">
            <Button
              title="Google Map"
              iconName={EIconName.MapMarker}
              iconColor={EIconColor.WHITE}
              styleType={EButtonStyleType.BLUE}
              size="large"
            />
            <div className="ContactCardKol-btn-verify">
              <Icon name={EIconName.Verify} color={EIconColor.WHITE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCardKol;
