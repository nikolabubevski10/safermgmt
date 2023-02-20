import React from 'react';
import { Circle, Svg } from './MoreStyles';

interface Props {
  isActive: boolean;
}

const MoreIcon: React.FC<Props> = ({ isActive }: Props) => {
  return (
    <Svg
      height="13"
      viewBox="0 0 3 13"
      width="3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="1.5" cy="1.5" isActive={isActive} r="1.5" />
      <Circle cx="1.5" cy="11.5" isActive={isActive} r="1.5" />
      <Circle cx="1.5" cy="6.5" isActive={isActive} r="1.5" />
    </Svg>
  );
};

export default MoreIcon;
