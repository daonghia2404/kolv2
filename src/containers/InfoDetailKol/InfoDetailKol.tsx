import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import IconRankV from '@/assets/icons/icon-rank-v.svg';

import { TInfoDetailKolProps } from './InfoDetailKol.types.d';

const InfoDetailKol: React.FC<TInfoDetailKolProps> = () => {
  return (
    <div className="InfoDetailKol">
      <div className="InfoDetailKol-wrapper">
        <div className="InfoDetailKol-header">
          <div className="InfoDetailKol-name flex items-center">
            Valentina
            <div className="InfoDetailKol-rank">
              <Image src={IconRankV} alt="" />
              <span>Verified profile</span>
            </div>
          </div>
          <div className="InfoDetailKol-description flex items-center" style={{ marginBottom: '1rem' }}>
            <Rate value={5} disabled />
            2,656 ratings - No Report
          </div>
          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Birthday} color={EIconColor.HEATHER} />
            26 years old
          </div>
        </div>
        <div className="InfoDetailKol-body">
          <div className="InfoDetailKol-body-item flex items-center flex-wrap">
            <Icon name={EIconName.PlusCircle} color={EIconColor.HEATHER} />
            <strong>h:</strong> 169cm
            <span style={{ opacity: 0.4 }}>{` ------ `}</span>
            <strong>w:</strong> 44kg
            <span style={{ opacity: 0.4 }}>{` ------ `}</span>
            <strong>BWH:</strong> 90-60-90 cm
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Gender} color={EIconColor.HEATHER} />
            <strong>Gender:</strong> Female
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.User} color={EIconColor.HEATHER} />
            <strong>Ethnic:</strong> Latin
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.World} color={EIconColor.HEATHER} />
            <strong>Nation:</strong> Italia
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.MapMarker} color={EIconColor.HEATHER} />
            <strong>Address:</strong> Milan 20122, Italy
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Language} color={EIconColor.HEATHER} />
            <strong>Language:</strong> Chinese, English
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Bubbles} color={EIconColor.HEATHER} />
            <strong>Communication:</strong> Phone, SMS, WhatsApp, VK
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Mail} color={EIconColor.HEATHER} />
            <strong>Email:</strong> valentina21131@gmail.com
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Tattoo} color={EIconColor.HEATHER} />
            <strong>Tattoo:</strong> No tattoo, No piercings
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Drink} color={EIconColor.HEATHER} />
            <strong>Alcohol:</strong> Occasinally
          </div>

          <div className="InfoDetailKol-body-item flex items-center">
            <Icon name={EIconName.Smoke} color={EIconColor.HEATHER} />
            <strong>Smoke:</strong> Never
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailKol;
