import React from 'react';
import { Container, Inner, TextInput } from './QuestionStyles';
import { TQuestion } from '../../../../../../types';
import { useAppDispatch } from '../../../../../../../../state/hooks';
import CancelButton from './components/cancel-button/CancelButton';
import CheckButton from './components/check-button/CheckButton';
// import GrabIcon from './components/grab-icon/GrabIcon';
import OptionsButton from './components/options-button/OptionsButton';
import ToggleSwitch from './components/toggle-switch/ToggleSwitch';
import {
  deleteQuestion,
  onQuestionChange,
  selectQuestion,
  setCurrentQuestionSequence,
  setQuestionUnderEdit,
  toggleQuestionVisibility,
  updateQuestion,
} from '../../../../../state/SurveysActions';

interface Props {
  i: number;
  currentQuestionSequence: number | null;
  question: TQuestion;
  questionUnderEdit: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Question: React.FC<Props> = ({
  i,
  question,
  currentQuestionSequence,
  questionUnderEdit,
  setErrorMessage,
}: Props) => {
  const isFirst = i === 0;
  const isSelected = currentQuestionSequence === question.sequence;
  const isValid = questionUnderEdit.length > 0;
  const value = isSelected ? questionUnderEdit : question.text;
  const dispatch = useAppDispatch();
  const handleToggleClick = () =>
    dispatch(toggleQuestionVisibility(question.sequence));
  const handleDelete = () => dispatch(deleteQuestion(question.sequence));
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setErrorMessage('question must be filled');
    } else {
      setErrorMessage('');
    }
    dispatch(onQuestionChange(e));
  };
  const cancel = () => {
    dispatch(setQuestionUnderEdit(question.text));
    dispatch(setCurrentQuestionSequence(null));
  };
  const save = () => {
    if (questionUnderEdit === '') return;
    dispatch(updateQuestion());
  };
  const select = () =>
    dispatch(selectQuestion(question.sequence, question.text));

  return (
    <Container isSelected={isSelected} isValid={isValid}>
      <Inner isFirst={isFirst} isSelected={isSelected}>
        <TextInput
          value={value}
          onChange={handleOnChange}
          disabled={!isSelected}
        />
        {!isSelected ? (
          <>
            <ToggleSwitch
              isOn={question.isActive}
              onClick={handleToggleClick}
            />
            <OptionsButton deleteClick={handleDelete} editClick={select} />
          </>
        ) : (
          <>
            <CheckButton onMouseDown={save} />
            <CancelButton onClick={cancel} />
          </>
        )}
      </Inner>
    </Container>
  );
};

export default Question;
