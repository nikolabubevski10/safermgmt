import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonContainer,
  Container,
  Heading,
  TopContainer,
  Subheading,
} from './SuccessStyles';
import Letter from './components/letter/Letter';
import CloseButton from '../closeButton/CloseButton';
import Button from '../button/Button';

const closeText = 'Close';
const headerText = 'Message Sent';
const messageText = `One of our team members will reach out to you shortly`;

interface Props {
  onClick: () => void;
}

const Success: React.FC<Props> = ({ onClick }: Props) => {
  const { t } = useTranslation();
  const tCloseText = t(closeText);
  const tHeaderText = t(headerText);
  const tMessageText = t(messageText);

  return (
    <Container>
      <TopContainer>
        <CloseButton onClick={onClick} isMessageSent={true} />
      </TopContainer>
      <Letter />
      <Heading>{tHeaderText}</Heading>
      <Subheading>{tMessageText}</Subheading>
      <ButtonContainer>
        <Button onClick={onClick}>{tCloseText}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Success;
