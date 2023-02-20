import React from 'react';
import { Container, TextInput, Label } from './InputStyles';

interface Props {
  label: string;
  isHighlighted: boolean;
  isValid: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  label,
  value,
  onChange,
  isValid,
  isHighlighted,
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        value={value}
        type="text"
        onChange={onChange}
        isValid={isValid}
        isHighlighted={isHighlighted}
      />
    </Container>
  );
};

export default Input;
