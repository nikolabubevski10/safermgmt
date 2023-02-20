import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';

import Spinner from '../../../shared/spinner/Spinner';
import { IEmployee } from '../../../organization-users/types';
import { useAppSelector } from '../../../../../state/hooks';
import { IForm } from '../../../../../hooks/useForm';
import Button from '../../../organization-users/components/Button/Button';
import useForm from '../../../../../hooks/useForm';
import yupEditUserFormSchema from './schemas/yupEditUserFormSchema';
import { forgotPassword } from '../../../../auth/AuthActions';
import { getEmployee } from '../../../organization-users/OrganizationUsersActions';

import {
  Container,
  Title,
  Header,
} from '../../../organization-users/OrganizationUsersStyles';
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
} from './EmployeeEditorStyles';

import BackIcon from '../../../organization-users/assets/back-icon';
import LockIcon from '../../../organization-users/assets/lock-icon';
import avatar from '../../../organization-users/assets/mockAvatar.jpg';
import UploadIcon from '../../../organization-users/assets/upload-icon';
import { Theme } from '../../../../../assets/styles';

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
  const employee: IEmployee | null = useAppSelector(
    ({ organizationUsers }) => organizationUsers.employee,
  );
  const isEmployeeLoading: boolean = useAppSelector(
    ({ organizationUsers }) => organizationUsers.isEmployeeLoading,
  );

  const [initialForm, setInitialForm] = useState<IForm>({
    email: {
      text: employee?.emailAddress?.[0].emailAddress,
      isValid: true,
    },
    phoneNumber: {
      text: employee?.phoneNumber?.[0].phoneNumber,
      isValid: true,
    },
    firstName: {
      text: employee?.firstName,
      isValid: true,
    },
    lastName: {
      text: employee?.lastName,
      isValid: true,
    },
  });

  useEffect(() => {
    if (params?.id && params?.id !== employee.id) {
      dispatch(getEmployee({ id: parseInt(params.id, 10) }));
    }
  }, []);

  useEffect(() => {
    setInitialForm({
      email: {
        text: employee?.emailAddress?.[0].emailAddress,
        isValid: true,
      },
      phoneNumber: {
        text: employee?.phoneNumber?.[0].phoneNumber,
        isValid: true,
      },
      firstName: {
        text: employee?.firstName,
        isValid: true,
      },
      lastName: {
        text: employee?.lastName,
        isValid: true,
      },
    });
  }, [employee]);

  const { form, handleInputChange, isValidForm } = useForm(
    yupEditUserFormSchema,
    initialForm,
  );

  const onFormSubmit = () => {
    if (isValidForm && employee) {
      // TODO: add update employee mutation
    }
  };

  const onForgotPasswordClick = async () => {
    if (employee?.emailAddress?.[0].emailAddress) {
      await dispatch(
        forgotPassword({ email: employee?.emailAddress?.[0].emailAddress }),
      );
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
            {employee?.firstName} {employee?.lastName}
          </ProfileName>
          <ProfileCompany></ProfileCompany>
        </div>
      </UserProfile>
      {!isEmployeeLoading ? (
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
            <InputTitle>Staff ID</InputTitle>
            <Input
              type="text"
              value={employee?.id}
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
            <InputTitle>Phone Number</InputTitle>
            <PhoneInput
              specialLabel=""
              country={'us'}
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
        </FormData>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}

      <ForgotPassword onClick={onForgotPasswordClick}>
        <LockIcon />
        Change Password
      </ForgotPassword>
    </Container>
  );
};

export default UserEditor;
