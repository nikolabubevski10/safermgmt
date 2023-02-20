import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Container,
  TopContainer,
  InnerTopContainer,
  ErrorMessage,
  Label,
  InputContainer,
  Input,
} from './InputStyles';

interface Props {
  error?: string;
  label: string;
  name: string;
  disabled?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  type: 'email' | 'text' | 'password' | 'number';
  value: string | number;
}

const InputComponent: React.FC<Props> = ({
  error,
  label,
  name,
  onChange,
  placeholder = '...',
  type,
  value,
  disabled,
}: Props) => {
  const { t } = useTranslation();

  const tLabel = t(label);
  const tError = error && t(error);
  const tPlaceholder = t(placeholder);

  return (
    <Container>
      <TopContainer>
        <Label>{tLabel}</Label>

        {error && (
          <InnerTopContainer>
            <ErrorMessage>{tError}</ErrorMessage>
          </InnerTopContainer>
        )}
      </TopContainer>

      <InputContainer>
        <Input
          error={tError}
          hasIcon={type === 'password'}
          name={name}
          onChange={onChange}
          placeholder={tPlaceholder}
          type={type}
          value={value}
          disabled={disabled}
        />
      </InputContainer>
    </Container>
  );
};

export default InputComponent;
