import React from 'react';
import { Svg } from './TriangleStyles';

interface Props {
  down?: boolean;
  isActive?: boolean;
  left?: boolean;
  up?: boolean;
  right?: boolean;
}

const Triangle: React.FC<Props> = ({
  down = false,
  isActive = false,
  left = false,
  up = false,
}: Props) => {
  return (
    <Svg
      down={down}
      isActive={isActive}
      left={left}
      up={up}
      viewBox="0 0 25.495 19.724"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M 10.192 1.315 C 11.445 -0.438 14.051 -0.438 15.304 1.315 L 24.905 14.757 C 26.39 16.836 24.904 19.724 22.35 19.724 L 3.147 19.724 C 0.592 19.724 -0.894 16.836 0.591 14.757 L 10.192 1.315 Z"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default Triangle;
