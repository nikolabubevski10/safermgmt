import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { PATHS } from '../../../../../globals';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { clearError, login } from '../../../AuthActions';

import {
  Button,
  FormHeader,
  FormLink,
  Input,
  Notification,
} from '../../../components/form';
import Heading from '../../../components/heading';
import Paragraph from '../../../components/paragraph';

import {
  Container,
  FormHeaderContainer,
  FormHeaderParagraphContainer,
  NotificationContainer,
  FormGroups,
  FormGroup,
  FormLinks,
} from './FormStyles';

interface FormProps {
  state?: {
    forgotPassword?: boolean;
    resetPassword?: boolean;
  };
}

interface FormData {
  email: string;
  password: string;
}

const Form: React.FC<FormProps> = ({ state }: FormProps) => {
  const dispatch = useAppDispatch();

  const authError = useAppSelector(({ auth }) => auth.error);
  const isLoading = useAppSelector(({ auth }) => auth.isLoading);

  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(clearError());
  }, []);

  useEffect(() => {
    setError(t(authError));
  }, [authError]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: mustBeFilledText });
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();

    dispatch(clearError());

    setFormErrors({
      ...formErrors,
      ...(!formData.email && { email: mustBeFilledText }),
      ...(!formData.password && { password: mustBeFilledText }),
    });

    if (!formData.email || !formData.password) {
      return;
    }

    dispatch(
      login({
        email: formData.email,
        password: formData.password,
      }),
    );
  };

  const { t } = useTranslation();
  const buttonText = !isLoading ? t('Log in') : t('Loading...');
  const forgortPasswordText = t('Forgot password?');
  const headingText = t('Log In');
  const mustBeFilledText = t('Must be filled');
  const paragraphText = t('Enter your details below');
  const resetLinkText = t(
    'If you have an account, we’ll email you a reset link.',
  );
  const resetPasswordText = t('Your password was successfully updated');

  return (
    <Container onSubmit={handleSubmit}>
      <FormHeaderContainer>
        <FormHeader>
          <Heading>{headingText}</Heading>
          <FormHeaderParagraphContainer>
            <Paragraph>{paragraphText}</Paragraph>
          </FormHeaderParagraphContainer>
        </FormHeader>
      </FormHeaderContainer>

      {error && (
        <NotificationContainer>
          <Notification type="error">{error}</Notification>
        </NotificationContainer>
      )}

      {state?.forgotPassword && (
        <NotificationContainer>
          <Notification type="success">{resetLinkText}</Notification>
        </NotificationContainer>
      )}

      {state?.resetPassword && (
        <NotificationContainer>
          <Notification type="success">{resetPasswordText}</Notification>
        </NotificationContainer>
      )}

      <FormGroups>
        <FormGroup>
          <Input
            error={formErrors.email}
            label="Email"
            name="email"
            onChange={handleChange}
            type="email"
            value={formData.email}
          />
        </FormGroup>

        <FormGroup>
          <Input
            error={formErrors.password}
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={formData.password}
          />
        </FormGroup>

        <FormGroup>
          <FormLinks>
            <FormLink to={PATHS.forgotPassword}>{forgortPasswordText}</FormLink>
          </FormLinks>
        </FormGroup>

        <FormGroup>
          <Button>{buttonText}</Button>
        </FormGroup>
      </FormGroups>
    </Container>
  );
};

export default Form;
