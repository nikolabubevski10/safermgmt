import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import TextArea from '../text-area/TextArea';
import {
  setProfileSetupFormChecks,
  changeOrgProfileSetupFields,
} from '../../../state/OrganizationsActions';
import Card from '../card/Card';
import {
  Container,
  CheckContainer,
  CardWrapper,
  CardRow,
  FormData,
  InputWrapper,
} from './ProfileSetupStyles';

const ProfileSetup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const tProfileSetup = t('Profile setup');
  const tStaffProfileSetup = t('Staff profile setup');
  const tSendProfileSetupToGuardian = t('Send profile setup to guardian');
  const tProfileSmsMessage = t('Profile Setup SMS Message');
  const tProfileEmailTemplateID = t('Profile Setup Email Template ID');
  const tProfileEmailMessage = t('Profile Setup Email Message');

  const organizationsStore = useAppSelector(
    ({ organizations }) => organizations,
  );

  const { organizationProfileSetupWithChanges } = organizationsStore;

  const handleActiveChange = (status: boolean, name: string) => {
    dispatch(setProfileSetupFormChecks(!status, name));
  };

  const handleInputsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(changeOrgProfileSetupFields(e));
  };

  return (
    <Container>
      <CheckContainer>
        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationProfileSetupWithChanges.profileSetup,
                'profileSetup',
              )
            }
          >
            <Card isActive={organizationProfileSetupWithChanges.profileSetup}>
              {tProfileSetup}
            </Card>
          </CardWrapper>

          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationProfileSetupWithChanges.staffProfileSetup,
                'staffProfileSetup',
              )
            }
          >
            <Card
              isActive={organizationProfileSetupWithChanges.staffProfileSetup}
            >
              {tStaffProfileSetup}
            </Card>
          </CardWrapper>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationProfileSetupWithChanges.sendProfileSetupToGuardian,
                'sendProfileSetupToGuardian',
              )
            }
          >
            <Card
              isActive={
                organizationProfileSetupWithChanges.sendProfileSetupToGuardian
              }
            >
              {tSendProfileSetupToGuardian}
            </Card>
          </CardWrapper>
        </CardRow>
      </CheckContainer>

      <FormData>
        <InputWrapper>
          <TextArea
            value={organizationProfileSetupWithChanges.smsMessage}
            name="smsMessage"
            onChange={handleInputsChange}
            isValid={true}
            label={tProfileSmsMessage}
            isHighlighted={false}
          />

          <TextArea
            value={organizationProfileSetupWithChanges.emailTemplateId}
            name="emailTemplateId"
            onChange={handleInputsChange}
            isValid={true}
            label={tProfileEmailTemplateID}
            isHighlighted={false}
          />

          <TextArea
            value={organizationProfileSetupWithChanges.emailMessage}
            name="emailMessage"
            onChange={handleInputsChange}
            isValid={true}
            label={tProfileEmailMessage}
            isHighlighted={false}
          />
        </InputWrapper>
      </FormData>
    </Container>
  );
};

export default ProfileSetup;
