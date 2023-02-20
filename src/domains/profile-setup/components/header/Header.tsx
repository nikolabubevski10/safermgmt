import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  LogoContainer,
  LogoText,
  LogoSpanDark,
} from './HeaderStyles';
import Logo from './components/logo/Logo';

const headerText = 'Profile Setup';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const tHeaderText = t(headerText);
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <LogoText>
          Safer <LogoSpanDark>Management</LogoSpanDark>
        </LogoText>
      </LogoContainer>
      <h1>{tHeaderText}</h1>
    </Container>
  );
};

export default Header;
