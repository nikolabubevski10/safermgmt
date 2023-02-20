import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from './FormLinkStyles';

interface Props {
  children: string;
  to: string;
}

const FormLink: React.FC<Props> = ({ children, to }: Props) => {
  const { t } = useTranslation();

  const text = t(children);

  return (
    <Container to={to}>
      <Text>{text}</Text>
    </Container>
  );
};

export default FormLink;
