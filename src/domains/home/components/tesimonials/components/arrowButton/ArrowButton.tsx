import React from 'react';
import { Svg, Circle, Path } from './ArrowButtonStyles';

interface Props {
  left?: boolean;
  right?: boolean;
  onClick: () => void;
}

const ArrowButton: React.FC<Props> = ({
  left = true,
  right = false,
  onClick,
}: Props) => {
  const getTransformation = () => {
    if (left && !right) {
      return 'matrix(-1, 0, 0, -1, 30.5, 31.5)';
    } else if (right && !left) {
      return '';
    }
  };

  const transform = getTransformation();

  return (
    <Svg
      onClick={onClick}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="16" cy="16" r="15.25" strokeWidth="1.5" />
      <Path
        d="M13 10L19 16L13 22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={transform}
      />
    </Svg>
  );
};

export default ArrowButton;
