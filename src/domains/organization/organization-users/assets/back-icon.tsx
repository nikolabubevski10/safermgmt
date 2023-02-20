import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
  margin-right: 25px;
  padding-top: 3px;
  display: flex;
`;

const BackIcon: React.FC = () => (
  <IconWrapper>
    <svg
      width="14"
      height="25"
      viewBox="0 0 14 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 1.5L1.5 12.5L12.5 23.5"
        stroke="#0C3F62"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconWrapper>
);

export default BackIcon;
