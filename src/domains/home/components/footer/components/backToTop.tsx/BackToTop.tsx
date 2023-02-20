import React from 'react';
import { Svg } from './BackToTopStyles';

interface Props {
  width: number;
  height: number;
}

const BackToTop: React.FC<Props> = ({ width, height }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <rect x="5" y="2" width="35" height="35" rx="10" fill="#0C3F62" />
      </g>
      <path
        d="M17.5 16L22.5 11L27.5 16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.75 11.75C21.75 11.3358 22.0858 11 22.5 11C22.9142 11 23.25 11.3358 23.25 11.75V27.25C23.25 27.6642 22.9142 28 22.5 28C22.0858 28 21.75 27.6642 21.75 27.25V11.75Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="45"
          height="45"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export default BackToTop;
