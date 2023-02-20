import React from 'react';

import { useTranslation } from 'react-i18next';
import { FilterType } from '../../types';

import Amount from './components/amount/Amount';
import { AmountContainer, Container, Input, Label } from './FilterStyles';

export interface Props {
  amount: number;
  isChecked: boolean;
  icon: 'check' | 'times';
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
  label: string;
  type?: FilterType;
}

const Filter: React.FC<Props> = ({
  amount,
  isChecked,
  icon,
  onClick,
  label,
  type = FilterType.Nutral,
}: Props) => {
  const { t } = useTranslation();

  const tLbael = t(label);

  const camelize = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };

  return (
    <Container onClick={onClick} type={type}>
      <AmountContainer>
        <Amount icon={icon} number={amount} type={type} />
      </AmountContainer>

      <Label onClick={onClick} htmlFor={camelize(label)}>
        {tLbael}
      </Label>

      <Input
        checked={isChecked}
        id={camelize(label)}
        name={camelize(label)}
        type="checkbox"
        value={''}
      />
    </Container>
  );
};

export default Filter;
