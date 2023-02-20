import React from 'react';
import { Main, Container } from './ContentContainerStyles';

interface Props {
  children: React.ReactNode;
  justify?: 'center' | 'end' | 'start';
}

const ContentContainer: React.FC<Props> = ({ children, justify }: Props) => (
  <Main>
    <Container justify={justify}>{children}</Container>
  </Main>
);

export default ContentContainer;
