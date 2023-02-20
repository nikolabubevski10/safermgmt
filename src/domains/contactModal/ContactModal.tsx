import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { submitContactUsForm, clearError } from './ContactModalActions';

import Button from './components/button/Button';
import CloseButton from './components/closeButton/CloseButton';
import Input from './components/input/Input';
import Success from './components/success/Success';
import Notification from './components/notification/Notification';
import {
  Modal,
  Container,
  Subheading,
  TopContainer,
  InnerTopContainer,
  LeftColumn,
  RightColumn,
  ColumnContainer,
  BottomContainer,
  Overlay,
  Form,
  FormGroup,
  NotificationContainer,
  SuccessContainer,
} from './ContactModalStyles';

interface FormData {
  email: string;
  fullName: string;
  message: string;
  organization: string;
}
interface Props {
  onClose: () => void;
  shouldShow: boolean;
}

const headerText = 'Contact Us';
const subHeaderText = `Use the form
below to get in touch directly with
our team`;
const mustBeFilledText = 'Must be filled';
const sendMessageText = 'Send message';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContactModal = React.forwardRef<any, Props>(
  (
    { onClose, shouldShow }: Props,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.ForwardedRef<any>,
  ): JSX.Element => {
    const dispatch = useAppDispatch();

    const homeError = useAppSelector(({ contact }) => contact.error);
    const isLoading = useAppSelector(({ contact }) => contact.isLoading);

    const [isMessageSent, setIsMessageSent] = useState(false);

    const [error, setError] = useState<string>('');
    const [formData, setFormData] = useState<FormData>({
      email: '',
      fullName: '',
      message: '',
      organization: '',
    });
    const [formErrors, setFormErrors] = useState({
      email: '',
      fullName: '',
      message: '',
      organization: '',
    });

    const { t } = useTranslation();
    const tHeaderText = t(headerText);
    const tSubheadertext = t(subHeaderText);
    const tSendButtonText = !isLoading ? t(sendMessageText) : t('Loading...');
    const tMustBeFilledtext = t(mustBeFilledText);

    useEffect(() => {
      dispatch(clearError());
    }, []);

    useEffect(() => {
      setError(t(homeError));
    }, [homeError]);

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
        ...(!formData.fullName && { fullName: mustBeFilledText }),
        ...(!formData.message && { message: mustBeFilledText }),
        ...(!formData.organization && { organization: mustBeFilledText }),
      });

      if (
        !formData.email ||
        !formData.fullName ||
        !formData.message ||
        !formData.organization
      ) {
        return;
      }

      const { success } = await dispatch(
        submitContactUsForm({
          email: formData.email,
          fullName: formData.fullName,
          message: formData.message,
          organization: formData.organization,
        }),
      );

      if (success) {
        setIsMessageSent(true);
      }
    };

    return (
      <Container id="contact-modal" shouldShow={shouldShow}>
        <Overlay onClick={onClose} />

        <Modal isMessageSent={isMessageSent} ref={ref}>
          {isMessageSent ? (
            <SuccessContainer>
              <Success onClick={onClose} />
            </SuccessContainer>
          ) : (
            <Form onSubmit={handleSubmit}>
              <TopContainer>
                <h2>{tHeaderText}</h2>
                <InnerTopContainer>
                  <CloseButton
                    onClick={onClose}
                    isMessageSent={isMessageSent}
                  />
                </InnerTopContainer>
              </TopContainer>

              <Subheading>{tSubheadertext}</Subheading>

              {error && (
                <NotificationContainer>
                  <Notification type="error">{error}</Notification>
                </NotificationContainer>
              )}

              <ColumnContainer>
                <LeftColumn>
                  <FormGroup>
                    <Input
                      error={formErrors.fullName}
                      label="Full Name"
                      name="fullName"
                      onChange={handleChange}
                      type="text"
                      value={formData.fullName}
                    />
                  </FormGroup>
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
                      error={formErrors.organization}
                      label="Organization"
                      name="organization"
                      onChange={handleChange}
                      type="text"
                      value={formData.organization}
                    />
                  </FormGroup>
                </LeftColumn>
                <RightColumn>
                  <FormGroup>
                    <Input
                      error={formErrors.message}
                      label="Message"
                      maxLength={7000}
                      name="message"
                      onChange={handleChange}
                      type="textarea"
                      value={formData.message}
                    />
                  </FormGroup>
                </RightColumn>
              </ColumnContainer>
              <BottomContainer>
                <Button>{tSendButtonText}</Button>
              </BottomContainer>
            </Form>
          )}
        </Modal>
      </Container>
    );
  },
);

ContactModal.displayName = 'ContactModal';

export default ContactModal;
