import React, { useState } from 'react';
import { ICourse } from '../../../../../state/types';
import RandomIcon from './components/random-icon/RandomIcon';
import { Container, CourseName } from './ClassButtonStyles';

interface Props {
  course: ICourse;
  courseName: string;
  isSelected: boolean;
  onClick: (course: ICourse) => void;
}

const ClassButton: React.FC<Props> = ({
  course,
  courseName,
  isSelected,
  onClick,
}: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const clickHandler = () => {
    onClick(course);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <Container
      isSelected={isSelected}
      onClick={clickHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RandomIcon
        isHovering={isHovering}
        isSelected={isSelected}
        courseName={courseName}
      />
      <CourseName isHovering={isHovering} isSelected={isSelected}>
        {courseName}
      </CourseName>
    </Container>
  );
};

export default ClassButton;
