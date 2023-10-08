import React from 'react';
import Image from 'next/image';

import ImageHighLightLineTop from '@/assets/images/image-highlight-line-top.png';
import ImageHighLightLineBottom from '@/assets/images/image-highlight-line-bottom.png';
import ImageAdPlaceholder from '@/assets/images/image-ad-placeholder.png';

import { TAdBlockProps } from './AdBlock.types.d';

const AdBlock: React.FC<TAdBlockProps> = () => {
  return (
    <div className="AdBlock">
      <div className="AdBlock-line top">
        <Image src={ImageHighLightLineTop} alt="" />
      </div>
      <div className="AdBlock-line bottom">
        <Image src={ImageHighLightLineBottom} alt="" />
      </div>

      <div className="AdBlock-image">
        <Image src={ImageAdPlaceholder} alt="" />
      </div>
    </div>
  );
};

export default AdBlock;
