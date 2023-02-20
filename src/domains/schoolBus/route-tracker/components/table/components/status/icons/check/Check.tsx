import React from 'react';
import { Path1, Svg } from './CheckStyles';

const CheckIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
      <Path1
        clipRule="evenodd"
        d="M9.5 0C4.2619 0 0 4.2619 0 9.5C0 14.7381 4.2619 19 9.5 19C14.7381 19 19 14.7381 19 9.5C19 4.2619 14.7381 0 9.5 0ZM14.4038 8.07692L8.85989 13.5659C8.4478 13.978 7.78846 14.0055 7.3489 13.5934L4.37088 10.9451C3.93132 10.533 3.90385 9.84615 4.28846 9.40659C4.70055 8.96703 5.38736 8.93956 5.82692 9.35165L8.03571 11.3132L12.8379 6.51099C13.2775 6.07143 13.9643 6.07143 14.4038 6.51099C14.8434 6.95055 14.8434 7.63736 14.4038 8.07692Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M9.5 0C4.2619 0 0 4.2619 0 9.5C0 14.7381 4.2619 19 9.5 19C14.7381 19 19 14.7381 19 9.5C19 4.2619 14.7381 0 9.5 0ZM14.4038 8.07692L8.85989 13.5659C8.4478 13.978 7.78846 14.0055 7.3489 13.5934L4.37088 10.9451C3.93132 10.533 3.90385 9.84615 4.28846 9.40659C4.70055 8.96703 5.38736 8.93956 5.82692 9.35165L8.03571 11.3132L12.8379 6.51099C13.2775 6.07143 13.9643 6.07143 14.4038 6.51099C14.8434 6.95055 14.8434 7.63736 14.4038 8.07692Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.15"
        fillRule="evenodd"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear"
          x1="9.5"
          x2="-9.5"
          y1="-9.5"
          y2="9.5"
        >
          <stop offset="0.000290329" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default CheckIcon;
