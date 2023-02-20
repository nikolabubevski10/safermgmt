import React from 'react';
import { Container } from './DatePickerToggleStyles';

interface Props {
  isOpen: boolean;
}

const DatePickerToggle: React.FC<Props> = ({ isOpen }: Props) => {
  return (
    <Container>
      {isOpen ? (
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L7 7.5L13 1.5"
            stroke="#0C3F62"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.5L7 1.5L13 7.5"
            stroke="#0C3F62"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Container>
  );
};

export default DatePickerToggle;
