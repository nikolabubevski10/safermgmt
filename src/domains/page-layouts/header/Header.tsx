import React from 'react';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../../globals';
import {
  Container,
  LogoContainer,
  LogoSpanDark,
  LogoText,
  TopNavText,
  StyledLink,
} from './HeaderStyles';
import { useTranslation } from 'react-i18next';

import Logo from './components/logo/Logo';

interface Props {
  shouldShowNav?: boolean;
  openContactModal?: () => void;
}

const contactText = 'Contact Us';
const loginText = 'Log In';

const Header: React.FC<Props> = ({
  shouldShowNav = true,
  openContactModal,
}: Props) => {
  const location = useLocation();
  const isOnLoginPage = PATHS.login === location.pathname;
  const isOnForgotPassword = PATHS.forgotPassword === location.pathname;

  const { t } = useTranslation();

  const tContactText = t(contactText);
  const tLoginText = t(loginText);

  const handleOpen = () => {
    if (openContactModal) {
      openContactModal();
    } else return;
  };

  return (
    <Container>
      <StyledLink to={PATHS.home}>
        <LogoContainer>
          <Logo />
          <LogoText>
            Safer<LogoSpanDark>Management</LogoSpanDark>
          </LogoText>
        </LogoContainer>
      </StyledLink>

      {shouldShowNav && (
        <>
          <TopNavText onClick={handleOpen}>{tContactText}</TopNavText>
          <TopNavText
            isActive={isOnLoginPage}
            className={
              isOnLoginPage || isOnForgotPassword ? 'desktop' : 'undefined'
            }
          >
            <StyledLink to={PATHS.login}>{tLoginText}</StyledLink>
          </TopNavText>
        </>
      )}
    </Container>
  );
};

export default Header;
