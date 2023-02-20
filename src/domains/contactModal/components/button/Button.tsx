import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './ButtonStyles';

export interface Props {
  children: string;
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
}

const Button: React.FC<Props> = ({ children, onClick }: Props) => {
  const { t } = useTranslation();

  const text = t(children);

  return (
    <Container onClick={onClick} type="submit">
      {text}
    </Container>
  );
};

export default Button;
