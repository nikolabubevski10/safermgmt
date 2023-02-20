import React from 'react';
import {
  BottomPanel,
  Container,
  MiddlePanel,
  TopPanel,
} from './ContentBoxStyles';

interface Props {
  children: React.ReactChild[] | React.ReactChild;
}

const ContentBox: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <TopPanel>{children}</TopPanel>
      <MiddlePanel />
      <BottomPanel />
    </Container>
  );
};

export default ContentBox;
