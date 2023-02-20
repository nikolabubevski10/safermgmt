import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Overlay,
  Modal,
  MainActionButton,
  LightActionButton,
  ButtonContainer,
  TopContainer,
  Inner,
} from './ConfirmDenyModalStyles';
import CloseButton from './components/closeButton/CloseButton';
import Spinner from './components/spinner/Spinner';

interface Props {
  isLoading?: boolean;
  shouldShow: boolean;
  closeModal: (e: React.MouseEvent) => void;
  onConfirm: (e: React.MouseEvent) => void;
  onDeny?: (e: React.MouseEvent) => void;
  prompt: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ConfirmDenyModal: React.FC<Props> = ({
  isLoading = false,
  shouldShow,
  closeModal,
  onConfirm,
  onDeny,
  prompt,
  confirmLabel = 'Yes',
  cancelLabel = 'No',
}: Props) => {
  const { t } = useTranslation();
  const tQuestion = t(prompt);
  const tYes = t(confirmLabel);
  const tNo = t(cancelLabel);
  return (
    <Container shouldShow={shouldShow}>
      <Overlay onClick={closeModal} />
      <Modal>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TopContainer>
              <CloseButton onClick={closeModal} />
            </TopContainer>
            <Inner>
              <p>{tQuestion}</p>
              <ButtonContainer>
                <MainActionButton onClick={onConfirm}>{tYes}</MainActionButton>
                {onDeny && (
                  <LightActionButton onClick={onDeny}>{tNo}</LightActionButton>
                )}
              </ButtonContainer>
            </Inner>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default ConfirmDenyModal;
