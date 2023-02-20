import React from 'react';
import { Path1, Svg } from './TimesStyles';

const TimesIcon: React.FC = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
    >
      <Path1
        fill="#FC473F"
        fillRule="evenodd"
        d="M0 9.5C0 4.262 4.262 0 9.5 0S19 4.262 19 9.5 14.738 19 9.5 19 0 14.738 0 9.5zm10.607.633a1.107 1.107 0 01-2.209.114l-.006-.114V5.366a1.107 1.107 0 012.209-.113l.006.113v4.767zm-1.892 2.712a1.11 1.11 0 111.57 1.57 1.11 1.11 0 01-1.57-1.57z"
        clipRule="evenodd"
      ></Path1>
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.15"
        fillRule="evenodd"
        d="M0 9.5C0 4.262 4.262 0 9.5 0S19 4.262 19 9.5 14.738 19 9.5 19 0 14.738 0 9.5zm10.607.633a1.107 1.107 0 01-2.209.114l-.006-.114V5.366a1.107 1.107 0 012.209-.113l.006.113v4.767zm-1.892 2.712a1.11 1.11 0 111.57 1.57 1.11 1.11 0 01-1.57-1.57z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="9.5"
          x2="-9.5"
          y1="-9.5"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.01"></stop>
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default TimesIcon;
