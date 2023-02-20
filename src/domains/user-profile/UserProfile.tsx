import React, { useState } from 'react';
import {
  Container,
  HeadTitle,
  Title,
  PageContent,
  ProfileContainer,
  ImageContainer,
  UserInfo,
  UserName,
  OrgName,
  BottomTextContainer,
  BottomText,
} from './UserProfileStyles';
import { useTranslation } from 'react-i18next';
import Button from './components/buttons/CustomButton';
import UploadButton from './components/buttons/UploadButton';
import ProfileForm from './components/form/ProfileForm';
import lock_icon from './assets/icons/lock-icon.svg';
import Test_user from './assets/icons/test-user.svg';
import CustomModal from './components/modals/CustomModal';
const UserProfile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line
  const [profile, setProfile] = useState<any>(Test_user);

  const { t } = useTranslation();
  const title = t('Profile');
  const tsave = t('Save updates');
  const tUserName = t('Shawn Carter');
  const tOrgName = t('Safer Management, Inc.');
  const tChangePassword = t('Change Password');
  const tEditPhotoText = t('Edit Photo');
  const tEditPhotoModalSubTitle = t("Let's update your profile!");

  const onSave = () => {
    console.log('call');
  };

  const handleProfileClick = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <HeadTitle>
        <Title>{title}</Title>
        <Button onClick={onSave}>{tsave}</Button>
      </HeadTitle>

      <PageContent>
        <ProfileContainer>
          <ImageContainer>
            <img src={profile} alt="profile-image" />
            <UploadButton onClick={handleProfileClick} />
          </ImageContainer>
          <UserInfo>
            <UserName>{tUserName}</UserName>
            <OrgName>{tOrgName}</OrgName>
          </UserInfo>
        </ProfileContainer>

        <ProfileForm />
        <BottomTextContainer>
          <img src={lock_icon} alt="change-password" />
          <BottomText>{tChangePassword}</BottomText>
        </BottomTextContainer>
      </PageContent>
      <CustomModal
        title={tEditPhotoText}
        subTitle={tEditPhotoModalSubTitle}
        show={showModal}
        setShow={setShowModal}
        setProfile={setProfile}
      />
    </Container>
  );
};

export default UserProfile;
