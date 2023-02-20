import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { clearError } from '../../../AuthActions';

import {
  Button,
  FormHeader,
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
  ButtonContainer,
} from './FormStyles';

interface FormData {
  password: string;
  confirmPassword: string;
}

const Form: React.FC = () => {
  const dispatch = useAppDispatch();

  const authError = useAppSelector(({ auth }) => auth.error);
  const isLoading = useAppSelector(({ auth }) => auth.isLoading);

  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({
    password: '',
    confirmPassword: '',
  });
  const [, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    dispatch(clearError());
  }, []);

  useEffect(() => {
    setError(t(authError));

    if (authError) {
      setSuccess(false);
    }
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();

    dispatch(clearError());
    setSuccess(false);

    setFormErrors({
      ...formErrors,
      ...(!formData.password && { password: mustBeFilledText }),
      ...(!formData.confirmPassword && { confirmPassword: mustBeFilledText }),
    });

    if (!formData.password || !formData.confirmPassword) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      return setError(passwordsMustMatchError);
    }

    if (formData.password.length < 5) {
      return setError(passwordsLengthError);
    }

    // TODO: handle reset
    console.log('TODO: reset password');

    // TODO: only redirect on reset success
    // history.push(PATHS.login, {
    //   resetPassword: true,
    // });
    console.log('TODO: redirect on reset password success');
  };

  const { t } = useTranslation();

  const buttonText = !isLoading ? t('Set new password') : t('Loading...');
  const headingText = t('New Password');
  const mustBeFilledText = t('Must be filled');
  const paragraphText = t('Make sure your password has at least 5 characters');
  const passwordsLengthError = t('Passwords must have at least 5 characters');
  const passwordsMustMatchError = t('Passwords must match');

  return (
    <Container onSubmit={handleSubmit}>
      <FormHeaderContainer>
        <FormHeader>
          <Heading align="center">{headingText}</Heading>
          <FormHeaderParagraphContainer>
            <Paragraph align="center">{paragraphText}</Paragraph>
          </FormHeaderParagraphContainer>
        </FormHeader>
      </FormHeaderContainer>

      {error && (
        <NotificationContainer>
          <Notification type="error">{error}</Notification>
        </NotificationContainer>
      )}

      <FormGroups>
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
          <Input
            error={formErrors.confirmPassword}
            label="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            value={formData.confirmPassword}
          />
        </FormGroup>

        <FormGroup align="center">
          <ButtonContainer>
            <Button>{buttonText}</Button>
          </ButtonContainer>
        </FormGroup>
      </FormGroups>
    </Container>
  );
};

export default Form;
