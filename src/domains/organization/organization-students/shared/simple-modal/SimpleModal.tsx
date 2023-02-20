import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Overlay,
  Modal,
  MainActionButton,
  ButtonContainer,
  TopContainer,
  Inner,
} from './SimpleModalStyles';
import CloseButton from './components/closeButton/CloseButton';

interface Props {
  shouldShow: boolean;
  closeModal: (e: React.MouseEvent) => void;
  onConfirm: (e: React.MouseEvent) => void;
  prompt: string;
}

const ok = 'ok';

const SimpleModal: React.FC<Props> = ({
  shouldShow,
  closeModal,
  onConfirm,
  prompt,
}: Props) => {
  const { t } = useTranslation();
  const tQuestion = t(prompt);
  const tOk = t(ok);
  return (
    <Container shouldShow={shouldShow}>
      <Overlay onClick={closeModal} />
      <Modal>
        <TopContainer>
          <CloseButton onClick={closeModal} />
        </TopContainer>
        <Inner>
          <p>{tQuestion}</p>
          <ButtonContainer>
            <MainActionButton onClick={onConfirm}>{tOk}</MainActionButton>
          </ButtonContainer>
        </Inner>
      </Modal>
    </Container>
  );
};

export default SimpleModal;
