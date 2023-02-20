import React, { useState } from 'react';
import Flag from './icons/Flag';
import { Container, Cover } from './IconStyles';

const FlagButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <Cover onClick={handleClick}>
        <Flag isActive={isActive} />
      </Cover>
    </Container>
  );
};

export default FlagButton;
