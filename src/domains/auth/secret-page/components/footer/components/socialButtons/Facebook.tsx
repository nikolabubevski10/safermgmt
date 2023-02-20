import React from 'react';
import { Svg } from './SocialButtonsStyles';

interface Props {
  width: number;
  height: number;
}
// 18 18
const Facebook: React.FC<Props> = ({ width, height }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.504112"
        d="M4 0C1.79086 0 0 1.79086 0 4L0 14C0 16.2091 1.79086 18 4 18H9.46753V10.987H7.12987V8.2987H9.46753V6.31169C9.3088 4.51466 10.5997 2.91389 12.3896 2.68831H12.974C13.6774 2.66895 14.3811 2.70805 15.0779 2.80519V5.25974H13.5584C12.3896 5.25974 12.2727 5.84416 12.2727 6.54545V8.2987H14.961L14.6104 10.987H12.2727V18H14C16.2092 18 18.0001 16.2091 18 13.9999L17.9997 3.99989C17.9997 1.79079 16.2088 0 13.9997 0H4Z"
      />
    </Svg>
  );
};

export default Facebook;
