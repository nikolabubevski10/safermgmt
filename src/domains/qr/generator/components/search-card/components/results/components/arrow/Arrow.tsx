import React from 'react';
import { Path, Svg } from './ArrowStyles';

interface Props {
  isSorted: boolean;
  isSortedDesc: boolean;
}

const ArrowIcon: React.FC<Props> = ({ isSorted, isSortedDesc }: Props) => {
  return (
    <Svg
      height="11"
      isSortedDesc={isSortedDesc}
      viewBox="0 0 9 11"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M8.10295 7.19621C8.3208 6.9026 8.2966 6.48594 8.03033 6.21967L7.94621 6.14705C7.6526 5.9292 7.23594 5.9534 6.96967 6.21967L5.25 7.93841V1.5C5.25 1.08579 4.91421 0.75 4.5 0.75C4.08579 0.75 3.75 1.08579 3.75 1.5V7.93841L2.03033 6.21967L1.94621 6.14705C1.6526 5.9292 1.23594 5.9534 0.96967 6.21967C0.676777 6.51256 0.676777 6.98744 0.96967 7.28033L3.96967 10.2803L4.05379 10.3529C4.3474 10.5708 4.76406 10.5466 5.03033 10.2803L8.03033 7.28033L8.10295 7.19621Z"
        fillRule="evenodd"
        isSorted={isSorted}
      />
    </Svg>
  );
};

export default ArrowIcon;
