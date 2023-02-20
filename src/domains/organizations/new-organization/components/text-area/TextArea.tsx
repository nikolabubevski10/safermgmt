import React from 'react';
import { Container, TextAreaInput, Label } from './TextAreaStyles';

interface Props {
  label: string;
  name: string;
  isHighlighted: boolean;
  isValid: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  removeleftMargin?: boolean;
}

const TextArea: React.FC<Props> = ({
  label,
  value,
  name,
  onChange,
  isValid,
  isHighlighted,
  removeleftMargin,
}: Props) => {
  const isLeftRemove = removeleftMargin ? removeleftMargin : false;
  return (
    <Container removeleftMargin={isLeftRemove}>
      <Label>{label}</Label>
      <TextAreaInput
        value={value}
        placeholder="..."
        name={name}
        onChange={onChange}
        isValid={isValid}
        isHighlighted={isHighlighted}
      />
    </Container>
  );
};

export default TextArea;
