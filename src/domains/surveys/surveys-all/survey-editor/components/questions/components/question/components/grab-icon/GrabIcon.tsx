import React from 'react';
import { Svg } from './GrabIconStyles';

interface Props {
  onMouseDown: React.MouseEventHandler;
}

const GrabIcon: React.FC<Props> = ({ onMouseDown }: Props) => {
  return (
    <Svg
      onMouseDown={onMouseDown}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="15" height="2" rx="1" />
      <rect y="6.5" width="15" height="2" rx="1" />
      <rect y="13" width="15" height="2" rx="1" />
    </Svg>
  );
};

export default GrabIcon;
