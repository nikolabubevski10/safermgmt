import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from './FormLinkStyles';

interface Props {
  children: string;
  onClick: () => void;
}

const FormLink: React.FC<Props> = ({ children, onClick }: Props) => {
  const { t } = useTranslation();

  const text = t(children);

  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};

export default FormLink;
