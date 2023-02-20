import React, { useState } from 'react';
import Star from './icons/Star';
import { Container, Cover } from './IconStyles';

const StarButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Container>
      <Cover onClick={handleClick}>
        <Star isActive={isActive} />
      </Cover>
    </Container>
  );
};

export default StarButton;
