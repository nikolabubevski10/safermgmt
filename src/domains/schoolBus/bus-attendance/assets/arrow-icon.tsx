import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
  margin-left: 4px;
`;

const ArrowIcon: React.FC = () => (
  <IconWrapper>
    <svg
      width="9"
      height="11"
      viewBox="0 0 9 11"
      fill="#233948"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.500456"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.10295 4.05379C8.3208 4.3474 8.2966 4.76406 8.03033 5.03033L7.94621 5.10295C7.6526 5.3208 7.23594 5.2966 6.96967 5.03033L5.25 3.31159V9.75C5.25 10.1642 4.91421 10.5 4.5 10.5C4.08579 10.5 3.75 10.1642 3.75 9.75V3.31159L2.03033 5.03033L1.94621 5.10295C1.6526 5.3208 1.23594 5.2966 0.96967 5.03033C0.676777 4.73744 0.676777 4.26256 0.96967 3.96967L3.96967 0.96967L4.05379 0.897052C4.3474 0.679197 4.76406 0.703403 5.03033 0.96967L8.03033 3.96967L8.10295 4.05379Z"
        fill="#233948"
      />
    </svg>
  </IconWrapper>
);

export default ArrowIcon;
