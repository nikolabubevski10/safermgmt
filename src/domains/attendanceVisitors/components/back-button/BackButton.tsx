import React from 'react';
import { Svg, Container } from './BackButtonStyles';

interface Props {
  onClick: () => void;
}

const BackButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Svg viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5 1.5L1.5 12.5L12.5 23.5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Container>
  );
};

export default BackButton;
