import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  LogoContainer,
  LogoText,
  LogoSpanDark,
} from './HeaderStyles';
import Logo from './components/logo/Logo';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }: Props) => {
  const { t } = useTranslation();
  const tTitle = t(title);
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <LogoText>
          Safer <LogoSpanDark>Management</LogoSpanDark>
        </LogoText>
      </LogoContainer>
      <h1>{tTitle}</h1>
    </Container>
  );
};

export default Header;
