import React from 'react';
import styled from 'styled-components';

const IconWarapper = styled.span`
  position: absolute;
  right: 15px;
  top: 45px;
`;

const TriangeIcon: React.FC = () => (
  <IconWarapper>
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.18627 1.13923C4.58509 0.580878 5.41491 0.580878 5.81373 1.13923L8.87054 5.41876C9.34331 6.08063 8.87018 7 8.05681 7L1.94319 7C1.12982 7 0.656693 6.08063 1.12946 5.41876L4.18627 1.13923Z"
        fill="#233948"
      />
    </svg>
  </IconWarapper>
);

export default TriangeIcon;
