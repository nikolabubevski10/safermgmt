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
  SubTitleContainer,
  SignatureContainer,
} from './SignatureModalStyles';
import DemoSignature from './assets/images/signature.svg';

interface Props {
  onClose: () => void;
  shouldShow: boolean;
}

const headerText = 'Signature';

const SignatureModal = React.forwardRef<HTMLDivElement, Props>(
  (
    { onClose, shouldShow }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const { t } = useTranslation();
    const tHeaderText = t(headerText);
    const tSubheaderText = t('Damion McKenzie’s signature');
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
            <SubTitleContainer>{tSubheaderText}</SubTitleContainer>
            <SignatureContainer>
              <img src={DemoSignature} alt="signature" />
            </SignatureContainer>
          </Content>
        </Modal>
      </Container>
    );
  },
);

SignatureModal.displayName = 'SignatureModal';

export default SignatureModal;
