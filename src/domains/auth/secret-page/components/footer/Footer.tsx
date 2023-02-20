import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  A,
  Container,
  Inner1,
  Inner2,
  Inner3,
  FooterText,
  FooterButton,
  InnerColumn,
  SocialButtonsContainer,
} from './FooterStyles';
import Facebook from './components/socialButtons/Facebook';
import LinkedIn from './components/socialButtons/LinkedIn';
import { PATHS } from '../../../../../globals';

const copyrightText = '© Copyright 2021 Safer Management, Inc.';
const privacyText = 'Privacy Policy';
const supportText = 'Support';
const href =
  'mailto:sales@safermgmt.com;fred@safermgmt.com?subject=Support Request&body=message%20goes%20here';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const tCopyrightText = t(copyrightText);
  const tPrivacyText = t(privacyText);
  const tSupportText = t(supportText);

  return (
    <Container>
      <Inner1>
        <FooterText>{tCopyrightText}</FooterText>
      </Inner1>
      <InnerColumn>
        <Inner2>
          <Link
            to={PATHS.privacyPolicy}
            style={{ textDecoration: 'none', paddingRight: '30px' }}
          >
            <FooterButton>{tPrivacyText}</FooterButton>
          </Link>
          <A href={href}>
            <FooterButton>{tSupportText}</FooterButton>
          </A>
        </Inner2>
        <Inner3>
          <SocialButtonsContainer>
            <A
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.facebook.com/Safer-Management-Inc-101136105230838/?ref=page_internal"
            >
              <Facebook width={18} height={18} />
            </A>

            <A
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/company/safermgt"
            >
              <LinkedIn width={18} height={18} />
            </A>
          </SocialButtonsContainer>
        </Inner3>
      </InnerColumn>
    </Container>
  );
};

export default Footer;
