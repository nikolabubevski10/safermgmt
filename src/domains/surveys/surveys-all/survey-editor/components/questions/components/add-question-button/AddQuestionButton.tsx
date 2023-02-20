import React from 'react';
import { useTranslation } from 'react-i18next';
import { Svg, Container, Text } from './AddQuestionButtonStyles';

const addText = 'Add Question';

interface Props {
  onClick: React.MouseEventHandler;
}

const AddSurveyButton: React.FC<Props> = ({ onClick }: Props) => {
  const { t } = useTranslation();
  const tAddText = t(addText);
  return (
    <Container onClick={onClick}>
      <Svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 0.5C5.94772 0.5 5.5 0.947715 5.5 1.5V6H1C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H5.5V12.5C5.5 13.0523 5.94772 13.5 6.5 13.5C7.05228 13.5 7.5 13.0523 7.5 12.5V8H12C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6H7.5V1.5C7.5 0.947715 7.05228 0.5 6.5 0.5Z"
        />
      </Svg>
      <Text>{tAddText}</Text>
    </Container>
  );
};

export default AddSurveyButton;
