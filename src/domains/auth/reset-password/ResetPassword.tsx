import React from 'react';

import { ContentContainer } from '../../page-layouts';
import Header from '../../page-layouts/header/Header';
import Form from './components/form/Form';

import { Container, FormContainer } from './ResetPasswordStyles';

const ResetPassword: React.FC = () => {
  return (
    <>
      <ContentContainer justify="center">
        <Container>
          <Header shouldShowNav={false} />
          <FormContainer>
            <Form />
          </FormContainer>
        </Container>
      </ContentContainer>
    </>
  );
};

export default ResetPassword;
