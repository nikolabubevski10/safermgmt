import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { DeliveryDays } from '../../../state/assets/types';
import {
  setPreScreenFormChecks,
  changeOrgPreScreenFields,
  changePreScreenDeleveryDaysCheck,
} from '../../../state/OrganizationsActions';
import Card from '../card/Card';
import Input from '../input/Input';
import TextArea from '../text-area/TextArea';
import DayDropDown from './components/daydrop-down/DayDropDown';
import {
  Container,
  CheckContainer,
  CardWrapper,
  CardRow,
  FormData,
  InputWrapper,
} from './PreScreenStyles';
import CustomTimePicker from './components/custom-time-picker/CustomTimePicker';

const PreScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const tStaffPreScreen = t('Staff pre-screen');
  const tStudentPreScreen = t('Student pre-screen');
  const tSendToGuardian = t('Send to guardian');
  const tCustomPreScreen = t('Custom pre-screen');
  const tEmailEnabled = t('Email enabled');
  const tSmsEnabled = t('SMS enabled');
  const tEditSurveyResponse = t('Edit survey response');
  const tDeliveryPriority = t('Delivery Priority');
  const tMaxBodyTemp = t('Max Body Temp (°F)');
  const tDeliveryTime = t('Delivery Time');
  const tDeliveryDays = t('Delivery Days');
  const tPreScreenSmsMessage = t('Pre-Screen SMS Message');
  const tPreScreenEmailTemplateID = t('Pre-Screen Email Template ID');
  const tPreScreenEmailMessage = t('Pre-Screen Email Message');

  const organizationsStore = useAppSelector(
    ({ organizations }) => organizations,
  );

  const { organizationPreScreenWithChanges } = organizationsStore;

  const handleActiveChange = (status: boolean, name: string) => {
    dispatch(setPreScreenFormChecks(!status, name));
  };

  const handleOrgPreScreenInputsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch(changeOrgPreScreenFields(e));
  };

  const handleCheckChange = (days: DeliveryDays) => {
    const day = days.day;
    const status = !days.active;
    dispatch(changePreScreenDeleveryDaysCheck(day, status));
  };

  return (
    <Container>
      <CheckContainer>
        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.staffPreScreen,
                'staffPreScreen',
              )
            }
          >
            <Card isActive={organizationPreScreenWithChanges.staffPreScreen}>
              {tStaffPreScreen}
            </Card>
          </CardWrapper>

          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.studentPreScreen,
                'studentPreScreen',
              )
            }
          >
            <Card isActive={organizationPreScreenWithChanges.studentPreScreen}>
              {tStudentPreScreen}
            </Card>
          </CardWrapper>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.sendToGuardian,
                'sendToGuardian',
              )
            }
          >
            <Card isActive={organizationPreScreenWithChanges.sendToGuardian}>
              {tSendToGuardian}
            </Card>
          </CardWrapper>
        </CardRow>

        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.customPreScreen,
                'customPreScreen',
              )
            }
          >
            <Card isActive={organizationPreScreenWithChanges.customPreScreen}>
              {tCustomPreScreen}
            </Card>
          </CardWrapper>

          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.emailEnabled,
                'emailEnabled',
              )
            }
          >
            <Card isActive={organizationPreScreenWithChanges.emailEnabled}>
              {tEmailEnabled}
            </Card>
          </CardWrapper>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.smsEnabled,
                'smsEnabled',
              )
            }
          >
            <Card isActive={organizationPreScreenWithChanges.smsEnabled}>
              {tSmsEnabled}
            </Card>
          </CardWrapper>
        </CardRow>

        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPreScreenWithChanges.editSurveyResponse,
                'editSurveyResponse',
              )
            }
          >
            <Card
              isActive={organizationPreScreenWithChanges.editSurveyResponse}
            >
              {tEditSurveyResponse}
            </Card>
          </CardWrapper>
        </CardRow>
      </CheckContainer>
      <FormData>
        <InputWrapper>
          <Input
            value={organizationPreScreenWithChanges.deliveryPriority}
            onChange={handleOrgPreScreenInputsChange}
            name="deliveryPriority"
            type="number"
            isValid={true}
            isHighlighted={false}
            label={tDeliveryPriority}
            longWidth={false}
            widthIs={124}
          />
          <Input
            value={organizationPreScreenWithChanges.maxBodyTemp}
            name="maxBodyTemp"
            onChange={handleOrgPreScreenInputsChange}
            isValid={true}
            type="number"
            label={tMaxBodyTemp}
            isHighlighted={false}
            longWidth={false}
            widthIs={146}
          />
          <CustomTimePicker label={tDeliveryTime} />
          <DayDropDown
            handleCheckChange={handleCheckChange}
            label={tDeliveryDays}
          />
        </InputWrapper>

        <InputWrapper>
          <TextArea
            value={organizationPreScreenWithChanges.emailTemplateId}
            name="emailTemplateId"
            onChange={handleOrgPreScreenInputsChange}
            isValid={true}
            label={tPreScreenEmailTemplateID}
            isHighlighted={false}
          />

          <TextArea
            value={organizationPreScreenWithChanges.emailMessage}
            name="emailMessage"
            onChange={handleOrgPreScreenInputsChange}
            isValid={true}
            label={tPreScreenEmailMessage}
            isHighlighted={false}
          />
          <TextArea
            value={organizationPreScreenWithChanges.smsMessage}
            name="smsMessage"
            onChange={handleOrgPreScreenInputsChange}
            isValid={true}
            label={tPreScreenSmsMessage}
            isHighlighted={false}
          />
        </InputWrapper>
      </FormData>
    </Container>
  );
};

export default PreScreen;
