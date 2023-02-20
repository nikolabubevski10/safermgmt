import React from 'react';
import desktopBackground from '../assets/desktopBg.png';
import mobileBackground from '../assets/mobileBg.png';
import { ContentContainer } from '../../page-layouts';
import Header from '../../page-layouts/header/Header';
import useContactModal from '../../contactModal/useContactModal';
import ContactModal from '../../contactModal/ContactModal';
import Form from './components/form/Form';
import {
  DesktopBackground,
  MobileBackground,
  Container,
} from '../shared/SharedStyles';
import { FormContainer } from './ForgotPasswordStyles';
import DotGroup1 from '../shared/dotGroup1/DotGroup1';
import DotGroup2 from '../shared/dotGroup2/DotGroup2';

const ForgotPassword: React.FC = () => {
  const {
    shouldShowContactModal,
    openContactModal,
    closeContactModal,
    contactModalRef,
  } = useContactModal();

  return (
    <Container>
      <ContactModal
        onClose={closeContactModal}
        ref={contactModalRef}
        shouldShow={shouldShowContactModal}
      />
      <DesktopBackground src={desktopBackground} />
      <MobileBackground src={mobileBackground} />
      <DotGroup1 />
      <DotGroup2 />
      <Header openContactModal={openContactModal} />
      <ContentContainer>
        <FormContainer>
          <Form />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default ForgotPassword;
