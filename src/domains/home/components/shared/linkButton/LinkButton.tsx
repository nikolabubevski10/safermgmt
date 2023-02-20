import React from 'react';
import { Container, LinkText } from './LinkButtonStyles';
import Triangle from '../triangle/Triangle';

interface Props {
  text: string;
}

const LinkButton: React.FC<Props> = ({ text }: Props) => {
  return (
    <Container>
      <LinkText>{text}</LinkText>
      <Triangle light />
    </Container>
  );
};

export default LinkButton;
