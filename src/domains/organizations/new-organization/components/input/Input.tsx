import React from 'react';
import { Container, TextInput, Label } from './InputStyles';

interface Props {
  label: string;
  name: string;
  type?: string;
  isHighlighted: boolean;
  longWidth: boolean;
  isValid: boolean;
  value: string | number;
  widthIs?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeleftMargin?: boolean;
}

const Input: React.FC<Props> = ({
  label,
  value,
  name,
  type,
  onChange,
  isValid,
  longWidth,
  isHighlighted,
  widthIs,
  removeleftMargin,
}: Props) => {
  const typeIs = type ? type : 'text';
  const isLeftRemove = removeleftMargin ? removeleftMargin : false;
  return (
    <Container removeleftMargin={isLeftRemove}>
      <Label>{label}</Label>
      <TextInput
        value={value}
        type={typeIs}
        placeholder="..."
        name={name}
        onChange={onChange}
        isValid={isValid}
        isHighlighted={isHighlighted}
        longWidth={longWidth}
        widthIs={widthIs}
      />
    </Container>
  );
};

export default Input;
