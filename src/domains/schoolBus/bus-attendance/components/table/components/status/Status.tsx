import React from 'react';
import { Check, Times } from './icons';
import { Container } from './StatusStyles';

export interface Props {
  status: boolean;
}

const Status: React.FC<Props> = ({ status }: Props) => {
  const icon = status ? <Check /> : <Times />;

  return <Container>{icon}</Container>;
};

export default Status;
