import React from 'react';
import { Container, Path } from './TriangleStyles';

interface Props {
  light?: boolean;
  dark?: boolean;
}

const Triangle: React.FC<Props> = ({ light = false, dark = false }: Props) => {
  return (
    <Container>
      <svg
        width="7"
        height="9"
        viewBox="0 0 7 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          light={light}
          dark={dark}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.36077 3.68627C6.91912 4.08509 6.91912 4.91491 6.36077 5.31373L2.08124 8.37054C1.41937 8.84331 0.5 8.37018 0.5 7.55681L0.5 1.44319C0.5 0.629817 1.41937 0.156693 2.08124 0.629456L6.36077 3.68627Z"
        />
      </svg>
    </Container>
  );
};

export default Triangle;
