import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconEnum, TypeEnum } from './types';

import Amount from './components/amount/Amount';
import {
  AmountContainer,
  Container,
  Input,
  Label,
  NeutralBackground,
  NeutralBackgroundContainer,
  NeutralContentContainer,
} from './FilterStyles';

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
  type = TypeEnum.neutral,
}: Props) => {
  const { t } = useTranslation();

  const tLbael = t(label);

  const camelize = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  };

  if (type === TypeEnum.neutral)
    return (
      <NeutralBackgroundContainer onClick={onClick}>
        <NeutralBackground />
        <NeutralContentContainer>
          <AmountContainer>
            <Amount number={amount} type={type} />
          </AmountContainer>
          <Label onClick={onClick} htmlFor={camelize(label)}>
            {tLbael}
          </Label>
        </NeutralContentContainer>
      </NeutralBackgroundContainer>
    );

  return (
    <Container onClick={onClick}>
      <AmountContainer>
        <Amount icon={icon} number={amount} type={type} />
      </AmountContainer>

      <Label onClick={onClick} htmlFor={camelize(label)}>
        {tLbael}
      </Label>

      <Input checked={isChecked} id={camelize(label)} name={camelize(label)} />
    </Container>
  );
};

export default Filter;
