import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './GeneralStyles';
import Input from './components/input/Input';
import { useAppDispatch, useAppSelector } from '../../../../../../state/hooks';
import {
  onHeaderTextInputChange,
  onNameInputChange,
} from '../../../state/SurveysActions';

interface Props {
  nameInputValue: string;
  headerTextInputValue: string;
}

const input1Text = 'Survey Name';
const input2Text = 'Header Text';
const notUniqueMessage =
  'This survey name is not unique. Please pick a unique name';

const General: React.FC<Props> = ({
  nameInputValue,
  headerTextInputValue,
}: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { surveysHistory, surveyWithChanges } = useAppSelector(
    ({ surveys }) => surveys,
  );
  const surveys = surveysHistory[0] || [];

  const hasUniqueName =
    surveys.filter((survey) => {
      return (
        survey.name === surveyWithChanges.name &&
        survey.id !== surveyWithChanges.id
      );
    }).length === 0;

  const tInput1Text = t(input1Text);
  const tInput2Text = t(input2Text);
  const tNotUniqueMessage = t(notUniqueMessage);
  const nameInputIsValid = nameInputValue.length > 0;

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(onNameInputChange(e));
  const handleHeaderTextInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => dispatch(onHeaderTextInputChange(e));

  return (
    <Container>
      <Input
        value={nameInputValue}
        onChange={handleNameInputChange}
        isValid={nameInputIsValid}
        isHighlighted={!hasUniqueName}
        label={tInput1Text}
      />
      <Input
        value={headerTextInputValue}
        onChange={handleHeaderTextInputChange}
        isValid={true}
        label={tInput2Text}
        isHighlighted={false}
      />
      {!hasUniqueName && <p>{tNotUniqueMessage}</p>}
    </Container>
  );
};

export default General;
