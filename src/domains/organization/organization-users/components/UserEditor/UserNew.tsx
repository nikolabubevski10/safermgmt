import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import { useAppSelector } from '../../../../../state/hooks';
import { Container, Title, Header } from '../../OrganizationUsersStyles';
import ConfirmDenyModal from '../../../shared/confirm-deny-modal/ConfirmDenyModal';
import Spinner from '../../../shared/spinner/Spinner';
import {
  TitleWrapper,
  UserProfile,
  ProfileImg,
  LogoWrapper,
  UploadBtn,
  Input,
  FormData,
  InputTitle,
  ErrorMsg,
  InputWrapper,
  SpinnerContainer,
} from './UserEditorStyles';
import useForm from '../../../../../hooks/useForm';
import yupNewUserFormSchema from './schemas/yupNewUserFormSchema';
import Button from '../Button/Button';
import {
  createUserAccount,
  getPhoneTypes,
  getSecurityRoles,
} from '../../OrganizationUsersActions';
import Select from './components/SelectInput/SelectInput';

import BackIcon from '../../assets/back-icon';
import avatar from '../../assets/mockAvatar.jpg';
import UploadIcon from '../../assets/upload-icon';
import { Theme } from '../../../../../assets/styles';
import { useEffect } from 'react';
import DropDown from './dropDown/dropDown';
import { IAccessLevel } from '../../types';

interface IUserEditProps {
  toggleEdit: (id?: string) => void;
  currentUser: IUser;
  handleSave: (
    name: string,
    email: string,
    phone: string,
    accessLevel: IAccess,
    id: string,
  ) => void;
  isNew: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  organization: {
    [key: string]: boolean;
  };
  accessLevel: IAccess;
}

export interface IAccess {
  Reader: boolean;
  Checkpoint: boolean;
  Admin: boolean;
  'Medical Admin': boolean;
  Driver: boolean;
  item?: string;
}

const UserNew: React.FC<IUserEditProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isUserCreated, setIsUserCreated] = useState<boolean>(false);
  const newUserId: string = useAppSelector(
    ({ organizationUsers }) => organizationUsers.newAccountId,
  );
  const isUserLoading: boolean = useAppSelector(
    ({ organizationUsers }) => organizationUsers.isUserAccountLoading,
  );

  const districtId: string = useAppSelector(
    ({ navigation }) => navigation.currentDistrictId,
  ) as string;
  const schools = useAppSelector(({ navigation }) => navigation.schools);
  const securityRoles: IAccessLevel[] = useAppSelector(
    ({ organizationUsers }) => organizationUsers.securityRoles,
  );

  const phoneTypes = useAppSelector(
    ({ organizationUsers }) => organizationUsers.phoneTypes,
  );

  const [schoolId, setSchoolId] = useState<string>('');

  const [phoneTypeId, setPhoneTypeId] = useState<string>('');

  const [accessLevel, setAccessLevel] = useState<IAccessLevel[]>(securityRoles);

  const { form, handleInputChange, isValidForm, clearForm } = useForm(
    yupNewUserFormSchema,
  );

  useEffect(() => {
    dispatch(getPhoneTypes());
    dispatch(getSecurityRoles());
  }, []);

  useEffect(() => setAccessLevel(securityRoles), [securityRoles]);

  useEffect(() => {
    if (schools.length) {
      setSchoolId(schools[0].id);
    }
  }, [schools]);

  useEffect(() => {
    if (phoneTypes.length) {
      setPhoneTypeId(phoneTypes[0].id as string);
    }
  }, [phoneTypes]);

  useEffect(() => {
    if (newUserId) {
      setIsUserCreated(true);
    }
  }, [newUserId]);

  const onFormSubmit = () => {
    if (isValidForm) {
      dispatch(
        createUserAccount({
          districtId,
          email: form.email.text,
          name: {
            first: form.firstName.text,
            last: form.lastName.text,
          },

          phone: {
            phone: form.phoneNumber.text,
            phoneTypeId: phoneTypeId,
          },
          password: form.password.text,
          schoolId,
          accessRoles: accessLevel
            .filter((role) => role.isActive)
            .map(({ id, name }) => ({ id: id as string, name })),
        }),
      );
    }
  };

  const handleAccessChange = (name: string, status: boolean) => {
    const newAccessLevel = accessLevel.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          isActive: !status,
        };
      }
      return item;
    });

    setAccessLevel(newAccessLevel);
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <button onClick={() => history.push('/school/organization/users')}>
            <BackIcon />
          </button>
          <Title>New User</Title>
        </TitleWrapper>
        <Button onClick={onFormSubmit}>Create User</Button>
      </Header>
      <UserProfile>
        <LogoWrapper>
          <ProfileImg src={avatar} alt="avatar" />
          <UploadBtn>
            <UploadIcon />
          </UploadBtn>
        </LogoWrapper>
      </UserProfile>

      {!isUserLoading ? (
        <FormData>
          <InputWrapper>
            <InputTitle>First Name</InputTitle>
            <Input
              type="text"
              value={form?.firstName?.text || ''}
              name="firstName"
              onChange={handleInputChange}
              error={!form?.firstName?.isValid}
            />
            {!form?.firstName?.isValid && <ErrorMsg>Must be filled</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Last Name</InputTitle>
            <Input
              type="text"
              value={form?.lastName?.text || ''}
              name="lastName"
              onChange={handleInputChange}
              error={!form?.lastName?.isValid}
            />
            {!form?.lastName?.isValid && <ErrorMsg>Must be filled</ErrorMsg>}
          </InputWrapper>

          <InputWrapper>
            <InputTitle>Password</InputTitle>
            <Input
              type="password"
              value={form?.password?.text || ''}
              name="password"
              onChange={handleInputChange}
              error={!form?.password?.isValid}
            />
            {!form?.password?.isValid && <ErrorMsg>Invalid Password</ErrorMsg>}
          </InputWrapper>

          <InputWrapper>
            <InputTitle>Email</InputTitle>
            <Input
              type="text"
              value={form?.email?.text}
              name="email"
              onChange={handleInputChange}
              error={!form?.email?.isValid}
            />
            {!form?.email?.isValid && <ErrorMsg>Invalid Email</ErrorMsg>}
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Phone Type</InputTitle>
            <DropDown
              value={phoneTypeId}
              list={phoneTypes.map(({ id, name }) => ({
                value: id as string,
                label: name,
              }))}
              onChange={setPhoneTypeId}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Phone Number</InputTitle>
            <PhoneInput
              specialLabel=""
              country={'us'}
              disableCountryCode={true}
              value={form?.phoneNumber?.text}
              inputProps={{ name: 'phoneNumber', onChange: handleInputChange }}
              inputStyle={{
                fontFamily: Theme.fontNormal,
                fontSize: Theme.fontSizeLarge,
                lineHeight: '19px',
                color: Theme.secondaryFontDark,
                border: !form?.phoneNumber?.isValid
                  ? `1px solid ${Theme.secondaryRed}`
                  : `1px solid ${Theme.secondaryGrayMedium}`,
                backgroundColor: Theme.secondaryGrayLight,
                borderRadius: Theme.borderRadiusLarge,
                padding: Theme.inputPadding,
                outline: 'none',
                width: '18.75rem',
                marginBottom: '1.55rem',
                paddingRight: '2rem',
              }}
            />
            {!form?.phoneNumber?.isValid && (
              <ErrorMsg>Invalid Phone Number</ErrorMsg>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Organization</InputTitle>
            <DropDown
              value={schoolId}
              list={schools.map(({ id, name }) => ({
                value: id as string,
                label: name,
              }))}
              onChange={setSchoolId}
            />
          </InputWrapper>
          <Select
            title={'Access level'}
            value={accessLevel}
            handleAccessChange={handleAccessChange}
          />
        </FormData>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}

      <ConfirmDenyModal
        shouldShow={isUserCreated}
        closeModal={() => {
          clearForm();
          setIsUserCreated(false);
        }}
        onConfirm={() => {
          setIsUserCreated(false);
          history.push(`/school/organization/users/edit/${newUserId}`);
        }}
        prompt="You’ve successfully created a new user"
        confirmLabel="Ok"
      />
    </Container>
  );
};

export default UserNew;
