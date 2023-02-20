import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  FormData,
  InputWrapper,
  CheckContainer,
  CardWrapper,
} from './GeneralStyles';
import Input from '../input/Input';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import {
  changeOrgGeneralFields,
  setGeneralFormChecks,
} from '../../../state/OrganizationsActions';
import Card from '../card/Card';

const nameText = 'Name';
const awsText = 'AWS Source';
const emailText = 'Email';
const orgType = 'OrganizationType';
const awsSchoolId = 'AWS School ID';
const websiteURL = 'Website URL';
const address = 'Address';
const district = 'District';
const checkOutEnabled = 'Check-out enabled';
const rapidCheckInEnabled = 'Rapid check-in enabled';
const General: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const organizationsStore = useAppSelector(
    ({ organizations }) => organizations,
  );

  const { organizationWithChanges } = organizationsStore;

  const tNameText = t(nameText);
  const tAwsText = t(awsText);
  const tEmailText = t(emailText);
  const tOrgType = t(orgType);
  const tSchoolId = t(awsSchoolId);
  const tWebsiteURL = t(websiteURL);
  const tAddress = t(address);
  const tDistrict = t(district);
  const tCheckOutEnabled = t(checkOutEnabled);
  const tRapidCheckInEnabled = t(rapidCheckInEnabled);

  const handleOrgGeneralInputsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(changeOrgGeneralFields(e));
  };

  const handleActiveChange = (status: boolean, name: string) => {
    dispatch(setGeneralFormChecks(!status, name));
  };

  return (
    <Container>
      <FormData>
        <InputWrapper>
          <Input
            value={organizationWithChanges.name}
            onChange={handleOrgGeneralInputsChange}
            name="name"
            isValid={true}
            isHighlighted={false}
            label={tNameText}
            longWidth={false}
          />
          <Input
            value={organizationWithChanges.awsSource}
            name="awsSource"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tAwsText}
            isHighlighted={false}
            longWidth={false}
          />
          <Input
            value={organizationWithChanges.email}
            name="email"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tEmailText}
            isHighlighted={false}
            longWidth={false}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            value={organizationWithChanges.organizationType}
            name="organizationType"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tOrgType}
            isHighlighted={false}
            longWidth={false}
          />
          <Input
            value={organizationWithChanges.schoolId}
            name="schoolId"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tSchoolId}
            isHighlighted={false}
            longWidth={false}
          />
          <Input
            value={organizationWithChanges.webUrl}
            name="webUrl"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tWebsiteURL}
            isHighlighted={false}
            longWidth={false}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            value={organizationWithChanges.address}
            name="address"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tAddress}
            isHighlighted={false}
            longWidth={true}
          />
          <Input
            value={organizationWithChanges.district}
            name="district"
            onChange={handleOrgGeneralInputsChange}
            isValid={true}
            label={tDistrict}
            isHighlighted={false}
            longWidth={false}
          />
        </InputWrapper>
      </FormData>

      <CheckContainer>
        <CardWrapper
          onClick={() =>
            handleActiveChange(
              organizationWithChanges.checkOutEnabled,
              'checkOutEnabled',
            )
          }
        >
          <Card isActive={organizationWithChanges.checkOutEnabled}>
            {tCheckOutEnabled}
          </Card>
        </CardWrapper>

        <CardWrapper
          onClick={() =>
            handleActiveChange(
              organizationWithChanges.rapidCheckInEnabled,
              'rapidCheckInEnabled',
            )
          }
        >
          <Card isActive={organizationWithChanges.rapidCheckInEnabled}>
            {tRapidCheckInEnabled}
          </Card>
        </CardWrapper>
      </CheckContainer>
    </Container>
  );
};

export default General;
