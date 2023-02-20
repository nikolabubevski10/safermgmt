import React from 'react';
import { Container, MenuButton } from './MenuStyles';
import { useTranslation } from 'react-i18next';
import views from '../../../state/assets/views';
import { useAppDispatch, useAppSelector } from '../../../../../../state/hooks';
import { setView } from '../../../state/OrgStudentsActions';

const infoText = 'Info';
const contactText = 'Contacts';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const tInfoText = t(infoText);
  const tContactsText = t(contactText);

  const { view } = useAppSelector(({ orgStudents }) => orgStudents);
  const isInInfoView = view === views.info;
  const isInContactView = view === views.contacts;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElem = e.target as HTMLButtonElement;
    dispatch(setView(buttonElem.value));
  };

  return (
    <Container>
      <MenuButton
        isActive={isInInfoView}
        value={views.info}
        onClick={handleButtonClick}
      >
        {tInfoText}
      </MenuButton>
      <MenuButton
        isActive={isInContactView}
        value={views.contacts}
        onClick={handleButtonClick}
      >
        {tContactsText}
      </MenuButton>
    </Container>
  );
};

export default Menu;
