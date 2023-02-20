import React from 'react';
import { Check, Times } from './icons';
import { Container, IconContainer, Number } from './AmountStyles';

export interface Props {
  icon: 'check' | 'times';
  number: number;
  type?: 'negative' | 'neutral' | 'positive';
}

const Amount: React.FC<Props> = ({ icon, number, type = 'neutral' }: Props) => {
  let amountIcon;
  if (icon === 'check') amountIcon = <Check />;
  if (icon === 'times') amountIcon = <Times />;

  return (
    <Container type={type}>
      <IconContainer>{amountIcon}</IconContainer>

      <Number>{number}</Number>
    </Container>
  );
};

export default Amount;
