import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Hide, Show } from './components/icons';

import {
  Container,
  TopContainer,
  InnerTopContainer,
  ErrorMessage,
  Label,
  InputContainer,
  Input,
  InputIcon,
} from './InputStyles';

interface Props {
  error?: string;
  label: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  type: 'email' | 'text' | 'password';
  value: string;
}

const InputComponent: React.FC<Props> = ({
  error,
  label,
  name,
  onChange,
  placeholder = '...',
  type,
  value,
}: Props) => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShouldShowPassword(!shouldShowPassword);
  };

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
          type={type === 'password' && shouldShowPassword ? 'text' : type}
          value={value}
        />

        {type === 'password' && (
          <InputIcon onClick={handleTogglePassword}>
            {shouldShowPassword ? <Show /> : <Hide />}
          </InputIcon>
        )}
      </InputContainer>
    </Container>
  );
};

export default InputComponent;
