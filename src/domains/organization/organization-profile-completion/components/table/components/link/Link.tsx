import React from 'react';
import { Container } from './LinkStyles';

export interface Props {
  children: string;
  onClick: () => void;
}

const Link: React.FC<Props> = ({ children, onClick }: Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Link;
