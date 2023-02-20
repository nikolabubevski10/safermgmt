import React from 'react';
import { Container, SurveyName, EndContainer } from './SurveyCardStyles';
import { ISurvey } from '../../../../types';
import ToggleSwitch from './components/toggleSwitch/ToggleSwitch';
import OptionsButton from './components/options-button/OptionsButton';
import {
  toggleSurveyVisibility,
  setSurveyIdUnderEdit,
} from '../../../state/SurveysActions';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../../../state/hooks';

interface Props {
  survey: ISurvey;
  handleDeleteClick: (id: string) => void;
}

const SurveyCard: React.FC<Props> = ({ survey, handleDeleteClick }: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const name = survey.name || '';
  const isActive = !!survey.isActive;
  const id = survey.id || '';

  const deleteClickHandler = () => handleDeleteClick(survey.id);
  const handleToggleSwitchClick = () => {
    dispatch(toggleSurveyVisibility(id));
  };

  const handleEditClick = () => {
    dispatch(setSurveyIdUnderEdit(id));
    history.push(id);
  };

  return (
    <Container>
      <SurveyName onClick={handleEditClick}>{name}</SurveyName>
      <EndContainer>
        <ToggleSwitch isOn={isActive} onClick={handleToggleSwitchClick} />
        <OptionsButton
          editClick={handleEditClick}
          deleteClick={deleteClickHandler}
        />
      </EndContainer>
    </Container>
  );
};

export default SurveyCard;
