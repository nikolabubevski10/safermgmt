import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PATHS } from '../../../../../globals';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { clearError, forgotPassword } from '../../../AuthActions';

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
  ButtonContainer,
  Container,
  FormHeaderContainer,
  FormHeaderParagraphContainer,
  NotificationContainer,
  FormGroups,
  FormGroup,
  FormLinks,
} from './FormStyles';

interface FormData {
  email: string;
}

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const authError = useAppSelector(({ auth }) => auth.error);
  const isLoading = useAppSelector(({ auth }) => auth.isLoading);

  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();

    dispatch(clearError());

    setFormErrors({
      ...formErrors,
      ...(!formData.email && { email: mustBeFilledText }),
    });

    if (!formData.email) {
      return;
    }

    const { success } = await dispatch(
      forgotPassword({
        email: formData.email,
      }),
    );

    if (success) {
      history.push(PATHS.login, {
        forgotPassword: true,
      });
    }
  };

  const { t } = useTranslation();

  const buttonText = !isLoading ? t('Reset password') : t('Loading...');
  const headingText = t('Forgot Password');
  const loginText = t('Back to Log in');
  const mustBeFilledText = t('Must be filled');
  const paragraphText = t('We’ll help you reset it and get back on track');

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
          <ButtonContainer>
            <Button>{buttonText}</Button>
          </ButtonContainer>
        </FormGroup>

        <FormGroup>
          <FormLinks>
            <FormLink to={PATHS.login}>{loginText}</FormLink>
          </FormLinks>
        </FormGroup>
      </FormGroups>
    </Container>
  );
};

export default Form;
