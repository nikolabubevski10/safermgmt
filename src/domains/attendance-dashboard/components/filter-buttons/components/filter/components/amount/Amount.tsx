import React from 'react';
import { Check, Times } from './icons';
import { Container, IconContainer, Number } from './AmountStyles';
import { IconEnum, TypeEnum } from '../../types';

export interface Props {
  icon?: keyof typeof IconEnum;
  number: number;
  type?: keyof typeof TypeEnum;
}

const Amount: React.FC<Props> = ({
  icon = IconEnum.check,
  number,
  type = TypeEnum.positive,
}: Props) => {
  let amountIcon;

  if (icon === IconEnum.check) amountIcon = <Check />;
  if (icon === IconEnum.times) amountIcon = <Times />;

  return (
    <Container type={type}>
      <IconContainer>{amountIcon}</IconContainer>
      <Number>{number}</Number>
    </Container>
  );
};

export default Amount;
