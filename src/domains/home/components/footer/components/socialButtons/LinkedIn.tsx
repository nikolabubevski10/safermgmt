import React from 'react';
import { Svg } from './SocialButtonsStyles';

interface Props {
  width: number;
  height: number;
}

const LinkedIn: React.FC<Props> = ({ width, height }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.504112"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.1615C0 0.96825 0.96825 0 2.1615 0C3.354 0 4.32225 0.96825 4.323 2.1615C4.323 3.35475 3.35475 4.34325 2.1615 4.34325C0.96825 4.34325 0 3.35475 0 2.1615ZM17.9955 18V17.9993H18V11.3977C18 8.16825 17.3048 5.6805 13.5292 5.6805C11.7142 5.6805 10.4963 6.6765 9.999 7.62075H9.9465V5.982H6.36675V17.9993H10.0942V12.0487C10.0942 10.482 10.3912 8.967 12.3315 8.967C14.2432 8.967 14.2717 10.755 14.2717 12.1493V18H17.9955ZM0.297 5.98275H4.029V18H0.297V5.98275Z"
      />
    </Svg>
  );
};

export default LinkedIn;
