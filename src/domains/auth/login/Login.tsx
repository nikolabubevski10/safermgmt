import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import desktopBackground from '../assets/desktopBg.png';
import mobileBackground from '../assets/mobileBg.png';
import { useAppSelector } from '../../../state/hooks';
import { ContentContainer } from '../../page-layouts';
import Form from './components/form/Form';
import Header from '../../page-layouts/header/Header';
import DotGroup1 from '../shared/dotGroup1/DotGroup1';
import DotGroup2 from '../shared/dotGroup2/DotGroup2';
import {
  DesktopBackground,
  MobileBackground,
  Container,
} from '../shared/SharedStyles';
import { Frame, FormContainer } from './LoginStyles';
import useContactModal from '../../contactModal/useContactModal';
import ContactModal from '../../contactModal/ContactModal';
import { PATHS } from '../../../globals';

interface LocationState {
  destination?: string;
  forgotPassword?: boolean;
  resetPassword?: boolean;
}

const Login: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<LocationState>();

  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const user = useAppSelector(({ auth }) => auth.user);

  useEffect(() => {
    if (isAuthenticated && user) {
      history.push(state?.destination || PATHS.attendanceDashboard);
    }
  }, [isAuthenticated, user]);

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
      <Header openContactModal={openContactModal} />
      <ContentContainer>
        <DesktopBackground src={desktopBackground} />
        <MobileBackground src={mobileBackground} />
        <DotGroup1 />
        <DotGroup2 />
        <Frame>
          <FormContainer>
            <Form state={state} />
          </FormContainer>
        </Frame>
      </ContentContainer>
    </Container>
  );
};

export default Login;
