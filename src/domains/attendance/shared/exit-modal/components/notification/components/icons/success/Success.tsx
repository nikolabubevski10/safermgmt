import React from 'react';
import { Svg } from './SuccessStyles';

const SuccessIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.58897 3.58897 0 8 0C12.411 0 16 3.58897 16 8C16 12.411 12.411 16 8 16C3.58897 16 0 12.411 0 8ZM7.46096 11.4239L12.1296 6.80162C12.4997 6.43146 12.4997 5.85309 12.1296 5.48294C11.7594 5.11278 11.181 5.11278 10.8109 5.48294L6.76692 9.52689L4.90688 7.87507C4.53673 7.52805 3.95836 7.55119 3.61134 7.92134C3.28745 8.2915 3.31058 8.86987 3.68074 9.21689L6.18855 11.4471C6.5587 11.7941 7.11394 11.771 7.46096 11.4239Z"
      />
    </Svg>
  );
};

export default SuccessIcon;
