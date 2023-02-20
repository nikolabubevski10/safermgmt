import React, { useState } from 'react';
import {
  BottomInner,
  Container,
  Divider,
  ExitIconContainer,
  FakeAvatar,
  Label,
  LogoutText,
  ProfileLinkText,
  TopInner,
} from './ProfileLinkStyles';
const logoutText = 'Log Out';
const notifications = 'Notifications';
const profile = 'Profile';
const profileText = 'My Profile';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../../../globals';
import ExitIcon from './components/exit-icon/ExitIcon';
import Triangle from './components/triangle/Triangle';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../auth/AuthActions';
import { useAppDispatch } from '../../../../state/hooks';

const ProfileLink: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const tProfileText = t(profileText);
  const tLogout = t(logoutText);
  const tProfile = t(profile);
  const tNotifications = t(notifications);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleProfileLinkClick = () => {
    setIsOpen(false);
    history.push(PATHS.profile);
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    dispatch(logout());
  };

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <Container isOpen={isOpen}>
      <TopInner>
        <FakeAvatar />
        <Label onClick={toggleIsOpen}>{tProfileText}</Label>
        <Triangle isActive={isOpen} down={isOpen} onClick={toggleIsOpen} />
      </TopInner>
      <BottomInner isOpen={isOpen}>
        <ProfileLinkText onClick={handleProfileLinkClick}>
          {tProfile}
        </ProfileLinkText>
        <ProfileLinkText>{tNotifications}</ProfileLinkText>
        <Divider />
        <ExitIconContainer onClick={handleLogoutClick}>
          <ExitIcon />
          <LogoutText>{tLogout}</LogoutText>
        </ExitIconContainer>
      </BottomInner>
    </Container>
  );
};

export default ProfileLink;
