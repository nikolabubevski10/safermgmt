import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import ConfirmDenyModal from '../../../shared/confirm-deny-modal/ConfirmDenyModal';

import Spinner from '../../../shared/spinner/Spinner';
import { IAccessLevel, IUserAccount } from '../../types';
import { useAppSelector } from '../../../../../state/hooks';
import { IForm } from '../../../../../hooks/useForm';
import Button from '../Button/Button';
import useForm from '../../../../../hooks/useForm';
import yupEditUserFormSchema from './schemas/yupEditUserFormSchema';
import { forgotPassword } from '../../../../../domains/auth/AuthActions';
import {
  getUserAccount,
  updateUserAccount,
  getSecurityRoles,
  getPhoneTypes,
  updateUserAccountRole,
} from '../../OrganizationUsersActions';

import { Container, Title, Header } from '../../OrganizationUsersStyles';
import {
  TitleWrapper,
  UserProfile,
  ProfileImg,
  ProfileName,
  ProfileCompany,
  LogoWrapper,
  UploadBtn,
  Input,
  FormData,
  InputTitle,
  ErrorMsg,
  InputWrapper,
  ForgotPassword,
  SpinnerContainer,
} from './UserEditorStyles';

import BackIcon from '../../assets/back-icon';
import LockIcon from '../../assets/lock-icon';
import avatar from '../../assets/mockAvatar.jpg';
import UploadIcon from '../../assets/upload-icon';
import { Theme } from '../../../../../assets/styles';
import DropDown from './dropDown/dropDown';
import Select from './components/SelectInput/SelectInput';

interface IUserEditProps {
  toggleEdit: (id?: string) => void;
  currentUser: IUser;
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
  isActive: boolean;
  name: string;
  title: string;
}

const UserEditor: React.FC<IUserEditProps> = () => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user: IUserAccount | null = useAppSelector(
    ({ organizationUsers }) => organizationUsers.userAccount,
  );
  const isUserLoading: boolean = useAppSelector(
    ({ organizationUsers }) => organizationUsers.isUserAccountLoading,
  );
  const isSecurityRolesLoading: boolean = useAppSelector(
    ({ organizationUsers }) => organizationUsers.isSecurityRolesLoading,
  );
  const [isUserCreated, setIsUserCreated] = useState<boolean>(false);
  const newUserId: string = useAppSelector(
    ({ organizationUsers }) => organizationUsers.newAccountId,
  );

  const schools = useAppSelector(({ navigation }) => navigation.schools);
  const securityRoles: IAccessLevel[] = useAppSelector(
    ({ organizationUsers }) => organizationUsers.securityRoles,
  );
  console.log({ schools });

  const phoneTypes = useAppSelector(
    ({ organizationUsers }) => organizationUsers.phoneTypes,
  );

  const [phoneTypeId, setPhoneTypeId] = useState<string>('');
  const [schoolId, setSchoolId] = useState<string>('');

  useEffect(() => {
    dispatch(getPhoneTypes());
  }, []);

  useEffect(() => {
    if (phoneTypes.length) {
      if (user.phone) {
        setPhoneTypeId(user.phone.phoneType.id as string);
      } else {
        setPhoneTypeId(phoneTypes[0].id as string);
      }
    }
  }, [phoneTypes, user]);

  useEffect(() => {
    if (newUserId) {
      setIsUserCreated(true);
    }
  }, [newUserId]);

  const [initialForm, setInitialForm] = useState<IForm>({
    email: {
      text: user?.email,
      isValid: true,
    },
    phoneNumber: {
      text: user?.phone?.phone || '',
      isValid: true,
    },
    firstName: {
      text: user?.name.first,
      isValid: true,
    },
    lastName: {
      text: user?.name.last,
      isValid: true,
    },
  });

  const [accessLevel, setAccessLevel] = useState<IAccessLevel[]>(securityRoles);
  const [oldAccessLevel, setOldAccessLevel] = useState<IAccessLevel[]>(
    securityRoles,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  useEffect(() => {
    if (params?.id && params?.id !== user.id) {
      dispatch(getUserAccount({ id: params.id }));
      dispatch(getSecurityRoles());
    }
  }, []);

  useEffect(() => {
    const roles = securityRoles.map((role: IAccessLevel) => {
      let hasRole = false;
      if (user.roles) {
        if (
          !(role.name === 'Student' && user.roles.student?.id) &&
          !(role.name === 'Teacher' && user.roles.teacher?.id) &&
          !(role.name === 'Staff' && user.roles.staff?.id) &&
          !(role.name === 'Bus Driver' && user.roles.staff?.id) &&
          !(role.name === 'Contact' && user.roles.contact?.id) &&
          !(role.name === 'District Admin' && user.roles.districtAdmin?.id)
        ) {
          hasRole = false;
        } else {
          hasRole = true;
        }
      }

      return {
        ...role,
        isActive: hasRole,
      };
    });
    setOldAccessLevel(roles);
    setAccessLevel(roles);
  }, [securityRoles, user]);

  useEffect(() => {
    setInitialForm({
      email: {
        text: user?.email,
        isValid: true,
      },
      phoneNumber: {
        text: user?.phone?.phone || '',
        isValid: true,
      },
      firstName: {
        text: user?.name.first,
        isValid: true,
      },
      lastName: {
        text: user?.name.last,
        isValid: true,
      },
    });
  }, [user]);

  const { form, handleInputChange, isValidForm } = useForm(
    yupEditUserFormSchema,
    initialForm,
  );

  const onFormSubmit = async () => {
    console.log({ isValidForm, form });

    if (isValidForm && user) {
      if (user.id) {
        await dispatch(
          updateUserAccountRole({
            userAccountId: user.id,
            oldAccessRoles: oldAccessLevel,
            newAccessRoles: accessLevel,
          }),
        );
      }
      dispatch(
        updateUserAccount({
          id: user.id,
          email: form.email.text,
          name: {
            first: form.firstName.text,
            last: form.lastName.text,
          },
          isActive: user.isActive,
          phone: {
            phone: form.phoneNumber.text,
            phoneTypeId,
          },
        }),
      );
    }

    // if (!isValidForm && user.id) {
    //   dispatch(
    //     updateUserOrganizationsSecurityRoles({
    //       id: user.id,
    //       organizationSecurityRoles: accessLevel,
    //     }),
    //   );
    // }
  };

  const onForgotPasswordClick = async () => {
    if (user?.email) {
      await dispatch(forgotPassword({ email: user.email }));
    }
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <button onClick={() => history.push('/school/organization/users')}>
            <BackIcon />
          </button>
          <Title>Edit</Title>
        </TitleWrapper>
        <Button onClick={onFormSubmit}>Save updates</Button>
      </Header>
      <UserProfile>
        <LogoWrapper>
          <ProfileImg src={avatar} alt="avatar" />
          <UploadBtn>
            <UploadIcon />
          </UploadBtn>
        </LogoWrapper>
        <div>
          <ProfileName>
            {user?.name.first} {user?.name.last}
          </ProfileName>
          <ProfileCompany></ProfileCompany>
        </div>
      </UserProfile>
      {!isUserLoading || !isSecurityRolesLoading ? (
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
            <InputTitle>User ID</InputTitle>
            <Input
              type="text"
              value={user?.id}
              onChange={() => undefined}
              disabled
            />
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
            <InputTitle>Email</InputTitle>
            <Input
              type="text"
              value={form?.email?.text || ''}
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
                fontSize: '16px',
                lineHeight: '19px',
                color: '#233948',
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
          setIsUserCreated(false);
        }}
        onConfirm={() => {
          setIsUserCreated(false);
        }}
        prompt="You’ve successfully udpdated the user"
        confirmLabel="Ok"
      />

      <ForgotPassword onClick={onForgotPasswordClick}>
        <LockIcon />
        Change Password
      </ForgotPassword>
    </Container>
  );
};

export default UserEditor;
