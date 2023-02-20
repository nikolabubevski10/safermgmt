import React from 'react';
import { Check } from './icons';
import {
  Container,
  IconContainer,
  Number,
  IcoExclamation,
} from './AmountStyles';
import { FilterType } from 'domains/schoolBus/route-tracker/types';

export interface Props {
  icon: 'check' | 'times';
  number: number;
  type?: FilterType;
}

const Amount: React.FC<Props> = ({
  icon,
  number,
  type = FilterType.Nutral,
}: Props) => {
  let amountIcon;
  if (icon === 'check') amountIcon = <Check />;
  if (icon === 'times') amountIcon = <IcoExclamation />;

  return (
    <Container type={type}>
      <IconContainer>{amountIcon}</IconContainer>

      <Number>{number}</Number>
    </Container>
  );
};

export default Amount;
