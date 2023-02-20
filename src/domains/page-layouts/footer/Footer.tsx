import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Container,
  ContentContainer,
  Content,
  Nav,
  NavLink,
  Copyright,
} from './FooterStyles';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const tosText = t('Terms of Service');
  const policyText = t('Privacy Policy');
  const supportText = t('Support');
  const copyrightText = t('Copyright ');
  const companyNameText = t('Safer');

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Nav>
            <NavLink to="#">{tosText}</NavLink>
            <NavLink to="#">{policyText}</NavLink>
            <NavLink to="#">{supportText}</NavLink>
          </Nav>
          <Copyright>
            &copy; {copyrightText} {new Date().getFullYear()} {companyNameText}
          </Copyright>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Header;
