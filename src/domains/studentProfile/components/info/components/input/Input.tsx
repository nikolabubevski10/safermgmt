import React from 'react';
import { Container, TextInput, Label, Overlay } from './InputStyles';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../types';

interface Props {
  label: string;
  name: string;
  isHighlighted?: boolean;
  isValid?: boolean;
  register?: UseFormRegister<IFormValues>;
  isDisabled?: boolean;
}

const Input: React.FC<Props> = ({
  label,
  isValid = true,
  isHighlighted = false,
  isDisabled = false,
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        type="text"
        isValid={isValid}
        isDisabled={isDisabled}
        isHighlighted={isHighlighted}
      />
      <Overlay isDisabled={isDisabled} />
    </Container>
  );
};

export default Input;
