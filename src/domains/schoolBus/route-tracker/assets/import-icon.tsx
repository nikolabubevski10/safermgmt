import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
  margin-right: 9px;
`;

const ImportIcon: React.FC = () => (
  <IconWrapper>
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.26083 0.5C6.49958 0.5 6.72565 0.585009 6.89328 0.723999L6.97202 0.797852L9.81641 3.64264C9.98608 3.80276 10.0953 4.01756 10.123 4.25104L10.13 4.3692V12.0225C10.13 12.7899 9.54343 13.4216 8.79468 13.4932L8.6525 13.5H1.47751C0.710144 13.5 0.0784379 12.9134 0.0067749 12.1647L0 12.0225V1.97748C0 1.21011 0.586578 0.578438 1.33533 0.506775L1.47751 0.5H6.26083ZM5.26099 2.49799H1.99799V11.501H8.13101V5.36798L6.73917 5.36835C5.9718 5.36835 5.3401 4.78177 5.26843 4.03302L5.26169 3.89081L5.26099 2.49799Z"
        fill="#F6C000"
      />
    </svg>
  </IconWrapper>
);

export default ImportIcon;
