import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  min-width: 15px;
`;

export const CheckedBox: React.FC = () => {
  return (
    <Svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="14"
        height="14"
        rx="3.5"
        fill="#0071BC"
        stroke="#0071BC"
      />
      <path
        d="M12.6876 3.80427C12.3053 3.40836 11.6744 3.39738 11.2785 3.77974C11.2702 3.78774 11.262 3.79592 11.254 3.80427L5.96389 9.09439L3.68893 6.81943C3.29302 6.43707 2.66213 6.44804 2.27977 6.84395C1.90674 7.23017 1.90674 7.84243 2.27977 8.22865L5.25931 11.2082C5.6485 11.5973 6.27933 11.5973 6.66847 11.2082L12.6631 5.21349C13.059 4.83107 13.07 4.20018 12.6876 3.80427Z"
        fill="white"
      />
    </Svg>
  );
};

export const UncheckedBox: React.FC = () => {
  return (
    <Svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="14"
        height="14"
        rx="3.5"
        fill="#0071BC"
        fillOpacity="0.05"
        stroke="#0071BC"
      />
    </Svg>
  );
};
