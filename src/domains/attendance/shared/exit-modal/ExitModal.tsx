import React, { useState } from 'react';

import ForgotPasswordForm from './components/forgot-password-form/ForgotPasswordForm';
import ReauthenticateForm from './components/reauthenticate-form/ReauthenticateForm';

import { Container, Modal, Overlay } from './ExitModalStyles';

interface Props {
  onClose: () => void;
  shouldShow: boolean;
}

const ExitModal: React.FC<Props> = ({ onClose, shouldShow }: Props) => {
  const [isForgotPasswordSuccessful, setIsForgotPasswordSuccessful] = useState(
    false,
  );
  const [
    shouldShowForgotPasswordForm,
    setShouldShowForgotPasswordForm,
  ] = useState(false);

  return (
    <Container id="exit-modal" shouldShow={shouldShow}>
      <Overlay onClick={onClose} />

      <Modal>
        {!shouldShowForgotPasswordForm ? (
          <ReauthenticateForm
            isForgotPasswordSuccessful={isForgotPasswordSuccessful}
            onClose={onClose}
            setShouldShowForgotPasswordForm={() =>
              setShouldShowForgotPasswordForm(true)
            }
          />
        ) : (
          <ForgotPasswordForm
            onClose={onClose}
            onSuccess={() => setIsForgotPasswordSuccessful(true)}
            setShouldShowForgotPasswordForm={() =>
              setShouldShowForgotPasswordForm(false)
            }
          />
        )}
      </Modal>
    </Container>
  );
};

export default ExitModal;
