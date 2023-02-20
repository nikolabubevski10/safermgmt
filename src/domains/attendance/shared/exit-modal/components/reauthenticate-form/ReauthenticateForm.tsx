import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../../../../state/hooks';
import { clearError, reauthenticate } from '../../../../../auth/AuthActions';

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
} from './ReauthenticateFormStyles';
import { PATHS } from '../../../../../../globals';
interface FormData {
  email: string;
  password: string;
}
interface Props {
  isForgotPasswordSuccessful: boolean;
  onClose: () => void;
  setShouldShowForgotPasswordForm: () => void;
}

const exitButtonText = 'Exit';
const forgotPasswordText = 'Forgot password?';
const forgotPasswordSuccessText =
  'If you have an account, we’ll email you a reset link.';
const headerText = 'Exit';
const mustBeFilledText = 'Must be filled';
const subHeaderText = `Please enter your details first`;

const ExitModal: React.FC<Props> = ({
  isForgotPasswordSuccessful,
  onClose,
  setShouldShowForgotPasswordForm,
}: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { t } = useTranslation();

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
  const [
    shouldShowForgotPasswordSuccess,
    setShouldShowForgotPasswordSuccess,
  ] = useState(isForgotPasswordSuccessful);

  const tExitButtonText = !isLoading ? t(exitButtonText) : t('Loading...');
  const tForgotPasswordText = t(forgotPasswordText);
  const tForgotPasswordSuccessText = t(forgotPasswordSuccessText);
  const tHeaderText = t(headerText);
  const tMustBeFilledtext = t(mustBeFilledText);
  const tSubheadertext = t(subHeaderText);

  useEffect(() => {
    dispatch(clearError());
  }, []);

  useEffect(() => {
    setError(t(authError));
  }, [authError]);

  useEffect(() => {
    setShouldShowForgotPasswordSuccess(isForgotPasswordSuccessful);
  }, [isForgotPasswordSuccessful]);

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
      ...(!formData.password && { password: mustBeFilledText }),
    });

    if (!formData.email || !formData.password) {
      return;
    }

    const { success } = await dispatch(
      reauthenticate({ email: formData.email, password: formData.password }),
    );

    if (success) {
      history.push(PATHS.home);
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

      {shouldShowForgotPasswordSuccess && !error && (
        <NotificationContainer>
          <Notification type="success">
            {tForgotPasswordSuccessText}
          </Notification>
        </NotificationContainer>
      )}

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
            <FormLink onClick={setShouldShowForgotPasswordForm}>
              {tForgotPasswordText}
            </FormLink>
          </FormLinks>
        </FormGroup>

        <FormGroup>
          <Button>{tExitButtonText}</Button>
        </FormGroup>
      </FormGroups>
    </Form>
  );
};

export default ExitModal;
