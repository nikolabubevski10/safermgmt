import React, { useState } from 'react';
import {
  Container,
  QuestionsContainer,
  BoldSubText,
  SubText,
  BottomContainer,
  ErrorMessage,
} from './QuestionsStyles';
import { TQuestion } from '../../../../types';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../../../state/hooks';
import AddQuestionButton from './components/add-question-button/AddQuestionButton';
import EmptyQuestionsIcon from './components/empty-questions-icon/EmptyQuestionsIcon';
import Question from './components/question/Question';
import { addQuestion } from '../../../state/SurveysActions';

interface Props {
  isEmpty: boolean;
  questions: TQuestion[];
  currentQuestionSequence: number | null;
  questionUnderEdit: string;
}

const noQuestionsText = 'No questions yet';
const clickToAddText = `Click 'add question' to start`;

const Questions: React.FC<Props> = ({
  isEmpty,
  questions,
  currentQuestionSequence,
  questionUnderEdit,
}: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const tNoQuestionsText = t(noQuestionsText);
  const tClickToAddText = t(clickToAddText);
  const tErrorMessage = t(errorMessage);

  const handleAddQuestionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addQuestion(questions.length));
  };

  const sortedBySequence = [...questions].sort(
    (a, b) => a.sequence - b.sequence,
  );

  return (
    <Container>
      <QuestionsContainer isEmpty={isEmpty}>
        {isEmpty ? (
          <>
            <EmptyQuestionsIcon />
            <BoldSubText>{tNoQuestionsText}</BoldSubText>
            <SubText>{tClickToAddText}</SubText>
          </>
        ) : (
          sortedBySequence.map((question, i) => (
            <Question
              key={i}
              i={i}
              question={question}
              currentQuestionSequence={currentQuestionSequence}
              questionUnderEdit={questionUnderEdit}
              setErrorMessage={setErrorMessage}
            />
          ))
        )}
      </QuestionsContainer>
      <BottomContainer>
        <AddQuestionButton onClick={handleAddQuestionClick} />
        <ErrorMessage>{tErrorMessage}</ErrorMessage>
      </BottomContainer>
    </Container>
  );
};

export default Questions;
