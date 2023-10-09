import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import DropdownMenu, { TDropdownMenuItem } from '@/components/DropdownMenu';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import FlagGm from '@/assets/icons/icon-flag-germany.png';
import FlagEn from '@/assets/icons/icon-flag-en.svg';
import { ELocale } from '@/common/enums';

import { TSelectLanguageProps } from './SelectLanguage.types.d';

const SelectLanguage: React.FC<TSelectLanguageProps> = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguge = (lang: string) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  const dataLanguageOptions = [
    {
      label: 'English',
      value: ELocale.EN,
      iconImage: FlagEn,
      active: locale === ELocale.EN,
    },
    {
      label: 'Deutsch',
      value: ELocale.DE,
      iconImage: FlagGm,
      active: locale === ELocale.DE,
    },
  ];

  const activeLanguage = dataLanguageOptions.find((option) => option.value === locale);

  return (
    <div className="SelectLanguage">
      <DropdownMenu
        options={dataLanguageOptions}
        onClickMenuItem={(option): void => {
          changeLanguge(option.value);
        }}
      >
        <div className="SelectLanguage-wrapper flex items-center">
          <div className="SelectLanguage-title">{activeLanguage?.label}</div>
          {activeLanguage?.iconImage && (
            <div className="SelectLanguage-flag">
              <Image src={activeLanguage?.iconImage} alt="" />
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
