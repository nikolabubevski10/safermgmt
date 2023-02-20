import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../../state/hooks';
import { ContentContainer } from '../../page-layouts';
import Footer from './components/footer/Footer';
import Header from '../../page-layouts/header/Header';
import { Container, Heading, Text } from './SecretPageStyles';

const SecretPage: React.FC = () => {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);

  const { t } = useTranslation();

  const headingLabel = t('Secret Page 🤫');
  const isAuthenticatedLabel = t('isAuthenticated');
  const isAuthenticatedText = t(JSON.stringify(isAuthenticated));

  return (
    <>
      <Header shouldShowNav={false} />

      <ContentContainer>
        <Container>
          <Heading>{headingLabel}</Heading>

          <Text>
            {isAuthenticatedLabel}: {isAuthenticatedText}
          </Text>
        </Container>
      </ContentContainer>

      <Footer />
    </>
  );
};

export default SecretPage;
