import React from 'react';
import { Container, MenuButton } from './MenuStyles';
import { useTranslation } from 'react-i18next';
import views from '../../../state/assets/views';
import { useAppDispatch } from '../../../../../../state/hooks';
import { setView } from '../../../state/SurveysActions';

interface Props {
  view: string;
}

const generalText = 'General';
const questionsText = 'Questions';
const screeningText = 'Screening';

const Menu: React.FC<Props> = ({ view }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const tGeneralText = t(generalText);
  const tQuestionsText = t(questionsText);
  const tScreeningText = t(screeningText);
  const isInGeneralView = view === views.general;
  const isInQuestionsView = view === views.questions;
  const isInScreeningView = view === views.screening;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElem = e.target as HTMLButtonElement;
    dispatch(setView(buttonElem.value));
  };

  return (
    <Container>
      <MenuButton
        isActive={isInGeneralView}
        value={views.general}
        onClick={handleButtonClick}
      >
        {tGeneralText}
      </MenuButton>
      <MenuButton
        isActive={isInQuestionsView}
        value={views.questions}
        onClick={handleButtonClick}
      >
        {tQuestionsText}
      </MenuButton>
      <MenuButton
        isActive={isInScreeningView}
        value={views.screening}
        onClick={handleButtonClick}
      >
        {tScreeningText}
      </MenuButton>
    </Container>
  );
};

export default Menu;
