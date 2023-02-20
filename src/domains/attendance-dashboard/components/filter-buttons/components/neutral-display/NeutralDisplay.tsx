import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  NeutralBackground,
  AmountContainer,
  Label,
  NeutralContentContainer,
} from './NeutralDisplayStyles';

interface Props {
  onClick?: React.MouseEventHandler;
  label: string;
  amount: string;
}

const NeutralDisplay: React.FC<Props> = ({ amount, label, onClick }: Props) => {
  const { t } = useTranslation();

  const tLabel = t(label);

  return (
    <Container onClick={onClick}>
      <NeutralBackground />
      <NeutralContentContainer>
        <AmountContainer>{amount}</AmountContainer>
        <Label>{tLabel}</Label>
      </NeutralContentContainer>
    </Container>
  );
};

export default NeutralDisplay;
