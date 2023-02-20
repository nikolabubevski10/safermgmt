import React from 'react';

import { Container } from './FormHeaderStyles';

interface Props {
  children: React.ReactNode;
}

const FormHeader: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default FormHeader;
