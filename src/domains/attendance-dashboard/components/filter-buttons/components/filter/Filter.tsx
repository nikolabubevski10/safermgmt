import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconEnum, TypeEnum } from './types';

import Amount from './components/amount/Amount';
import { AmountContainer, Container, Input, Label } from './FilterStyles';

export interface Props {
  amount: number;
  icon: keyof typeof IconEnum;
  isChecked: boolean;
  label: string;
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
  type: keyof typeof TypeEnum;
}

const Filter: React.FC<Props> = ({
  amount,
  icon,
  isChecked,
  label,
  onClick,
  type = TypeEnum.positive,
}: Props) => {
  const { t } = useTranslation();

  const tLbael = t(label);

  return (
    <Container onClick={onClick}>
      <AmountContainer>
        <Amount icon={icon} number={amount} type={type} />
      </AmountContainer>

      <Label onClick={onClick}>{tLbael}</Label>

      <Input checked={isChecked} name={label} readOnly />
    </Container>
  );
};

export default Filter;
