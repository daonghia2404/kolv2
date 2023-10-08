import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_510_1391)">
        <circle cx="21.9766" cy="21.2266" r="21.0938" fill="white" fill-opacity="0.44" />
      </g>
      <path
        d="M31.7944 23.2854L15.9741 31.1956C15.773 31.296 15.5496 31.3434 15.3251 31.3332C15.1006 31.3231 14.8824 31.2557 14.6913 31.1375C14.5001 31.0192 14.3424 30.8541 14.233 30.6578C14.1237 30.4614 14.0663 30.2404 14.0664 30.0156V14.1953C14.0665 13.9707 14.1241 13.7498 14.2335 13.5536C14.343 13.3575 14.5007 13.1925 14.6918 13.0745C14.8829 12.9564 15.101 12.8891 15.3255 12.879C15.5499 12.8689 15.7731 12.9163 15.9741 13.0167L31.7944 20.9269C32.0131 21.0365 32.197 21.2048 32.3255 21.4129C32.454 21.6211 32.522 21.8608 32.522 22.1055C32.522 22.3501 32.454 22.5899 32.3255 22.798C32.197 23.0062 32.0131 23.1745 31.7944 23.2841V23.2854Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_510_1391"
          x="-2.63281"
          y="-3.38281"
          width="49.2188"
          height="49.2188"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.75781" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_1391" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_1391" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Svg;
