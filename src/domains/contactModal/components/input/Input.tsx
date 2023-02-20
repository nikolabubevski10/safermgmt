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
  TextArea,
} from './InputStyles';

export interface Props {
  error?: string;
  label: string;
  maxLength?: number;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  type: 'email' | 'text' | 'textarea' | 'password';
  value: string;
}

const InputComponent: React.FC<Props> = ({
  error,
  label,
  maxLength,
  name,
  onChange,
  placeholder = '...',
  type,
  value,
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
        {type === 'textarea' ? (
          <Input
            as={TextArea}
            error={tError}
            maxLength={maxLength || undefined}
            name={name}
            onChange={onChange}
            placeholder={tPlaceholder}
            type={type}
            value={value}
          />
        ) : (
          <Input
            error={tError}
            maxLength={maxLength || undefined}
            name={name}
            onChange={onChange}
            placeholder={tPlaceholder}
            type={type}
            value={value}
          />
        )}
      </InputContainer>
    </Container>
  );
};

export default InputComponent;
