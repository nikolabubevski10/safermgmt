import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICourse } from '../../../state/types';
import ClassButton from './components/class-button/ClassButton';
import {
  ButtonText,
  Container,
  CourseContainer,
  MainActionButton,
} from './ClassSelectionStyles';
import { Prompt } from 'react-router-dom';

interface Props {
  courses: ICourse[];
  handleClassSelection: (course: ICourse | null) => void;
  isReauthenticated: boolean;
}

const buttonText = 'Launch';
const promptMessage = 'Are you sure you want to leave this page?';

const ClassSelection: React.FC<Props> = ({
  courses,
  handleClassSelection,
  isReauthenticated,
}: Props) => {
  const { t } = useTranslation();

  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const tButtonText = t(buttonText);
  const tPromptMessage = t(promptMessage);

  const getIsSelected = (course: ICourse) =>
    course.id === (selectedCourse ? selectedCourse.id : null);

  const handleClick = () => {
    handleClassSelection(selectedCourse);
  };

  return (
    <Container>
      <Prompt when={!isReauthenticated} message={tPromptMessage} />
      <CourseContainer>
        {courses.map((course, i) => (
          <ClassButton
            course={course}
            courseName={course.name}
            isSelected={getIsSelected(course)}
            key={i}
            onClick={setSelectedCourse}
          />
        ))}
      </CourseContainer>

      {selectedCourse && (
        <MainActionButton onClick={handleClick}>
          <ButtonText>{tButtonText}</ButtonText>
        </MainActionButton>
      )}
    </Container>
  );
};

export default ClassSelection;
