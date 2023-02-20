import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../../../../state/hooks';
import { clearError, forgotPassword } from '../../../../../auth/AuthActions';

import CloseButton from '../close-button/CloseButton';
import Button from '../button/Button';
import FormLink from '../form-link/FormLink';
import Input from '../input/Input';
import Notification from '../notification/Notification';
import {
  CloseButtonContainer,
  Form,
  FormGroup,
  FormGroups,
  FormHeader,
  FormHeaderContainer,
  FormHeaderParagraphContainer,
  FormLinks,
  Heading,
  NotificationContainer,
  Subheading,
} from './ForgotPasswordFormStyles';

interface FormData {
  email: string;
}
interface Props {
  onClose: () => void;
  onSuccess: () => void;
  setShouldShowForgotPasswordForm: () => void;
}

const exitButtonText = 'Reset password';
const loginText = 'Back to Log in';
const headerText = 'Forgot Password';
const mustBeFilledText = 'Must be filled';
const subHeaderText = `We’ll help you reset it and get back on track`;

const ExitModal: React.FC<Props> = ({
  onClose,
  onSuccess,
  setShouldShowForgotPasswordForm,
}: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const authError = useAppSelector(({ auth }) => auth.error);
  const isLoading = useAppSelector(({ auth }) => auth.isLoading);

  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  const tExitButtonText = !isLoading ? t(exitButtonText) : t('Loading...');
  const tFormLinkText = t(loginText);
  const tHeaderText = t(headerText);
  const tMustBeFilledtext = t(mustBeFilledText);
  const tSubheadertext = t(subHeaderText);

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
      setFormErrors({ ...formErrors, [e.target.name]: tMustBeFilledtext });
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
      forgotPassword({ email: formData.email }),
    );

    if (success) {
      onSuccess();
      setShouldShowForgotPasswordForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeaderContainer>
        <CloseButtonContainer>
          <CloseButton onClick={onClose} />
        </CloseButtonContainer>

        <FormHeader>
          <Heading>{tHeaderText}</Heading>
          <FormHeaderParagraphContainer>
            <Subheading>{tSubheadertext}</Subheading>
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
          <Button>{tExitButtonText}</Button>
        </FormGroup>

        <FormGroup>
          <FormLinks>
            <FormLink onClick={setShouldShowForgotPasswordForm}>
              {tFormLinkText}
            </FormLink>
          </FormLinks>
        </FormGroup>
      </FormGroups>
    </Form>
  );
};

export default ExitModal;
