import React from 'react';
import { useTranslation } from 'react-i18next';

import CloseButton from './components/closeButton/CloseButton';
import {
  Modal,
  Container,
  Content,
  TopContainer,
  InnerTopContainer,
  Overlay,
  Status,
  StatusContainer,
  StatusDate,
} from './ContactModalStyles';

interface Props {
  onClose: () => void;
  shouldShow: boolean;
}

const headerText = 'Contact';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContactModal = React.forwardRef<any, Props>(
  (
    { onClose, shouldShow }: Props,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.ForwardedRef<any>,
  ): JSX.Element => {
    const { t } = useTranslation();
    const tHeaderText = t(headerText);

    return (
      <Container id="contact-modal" shouldShow={shouldShow}>
        <Overlay onClick={onClose} />

        <Modal ref={ref}>
          <Content>
            <TopContainer>
              <h2>{tHeaderText}</h2>
              <InnerTopContainer>
                <CloseButton onClick={onClose} />
              </InnerTopContainer>
            </TopContainer>

            <StatusContainer isComplete={false}>
              <Status>Profile incomplete</Status>
              <StatusDate>17 May 2021</StatusDate>
            </StatusContainer>
          </Content>
        </Modal>
      </Container>
    );
  },
);

ContactModal.displayName = 'ContactModal';

export default ContactModal;
