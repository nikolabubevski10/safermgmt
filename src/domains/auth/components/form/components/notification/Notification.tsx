import React from 'react';
import { useTranslation } from 'react-i18next';

import { Error, Success } from './components/icons';

import { Container, IconContainer, Text } from './NotificationStyles';

interface Props {
  children: string;
  type: 'error' | 'success';
}

const Message: React.FC<Props> = ({ children, type }: Props) => {
  const { t } = useTranslation();

  const text = t(children);

  let icon;
  if (type === 'error') icon = <Error />;
  if (type === 'success') icon = <Success />;

  return (
    <Container type={type}>
      <IconContainer>{icon}</IconContainer>

      <Text type={type}>{text}</Text>
    </Container>
  );
};

export default Message;
