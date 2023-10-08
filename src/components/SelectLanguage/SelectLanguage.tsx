import React, { useState } from 'react';
import Image from 'next/image';

import DropdownMenu, { TDropdownMenuItem } from '@/components/DropdownMenu';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import FlagJp from '@/assets/icons/icon-flag-jp.svg';
import FlagEn from '@/assets/icons/icon-flag-en.svg';

import { TSelectLanguageProps } from './SelectLanguage.types.d';

const SelectLanguage: React.FC<TSelectLanguageProps> = () => {
  const [stateValue, setStateValue] = useState<TDropdownMenuItem>({
    label: 'English',
    value: 'en',
    iconImage: FlagEn,
  });

  const dataLanguageOptions = [
    {
      label: 'English',
      value: 'en',
      iconImage: FlagEn,
      active: stateValue?.value === 'en',
    },
    {
      label: '日本',
      value: 'jp',
      iconImage: FlagJp,
      active: stateValue?.value === 'jp',
    },
  ];

  return (
    <div className="SelectLanguage">
      <DropdownMenu options={dataLanguageOptions} onClickMenuItem={setStateValue}>
        <div className="SelectLanguage-wrapper flex items-center">
          <div className="SelectLanguage-title">{stateValue.label}</div>
          {stateValue.iconImage && (
            <div className="SelectLanguage-flag">
              <Image src={stateValue.iconImage} alt="" />
            </div>
          )}

          <div className="SelectLanguage-arrow">
            <Icon name={EIconName.AngleDown} color={EIconColor.LYNCH} />
          </div>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default SelectLanguage;
