import React, { useState, useEffect } from 'react';
import {
  Container,
  Sidebar,
  BottomContainer,
  InnerSidebar,
} from './NavigationStyles';
import ContentBox from './components/content-box/ContentBox';
import LogoMenu from './components/logo-menu/LogoMenu';
import NavPanel from './components/nav-panel/NavPanel';
import ProfileLink from './components/profile-link/ProfileLink';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  launchNavigation,
  setCurrentSchoolId,
} from './state/NavigationActions';

interface Props {
  children: React.ReactChild[] | React.ReactChild;
}

const Navigation: React.FC<Props> = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  const [logoMenuIsOpen, setLogoMenuIsOpen] = useState<boolean>(false);

  const { schools, currentSchoolId } = useAppSelector(
    ({ navigation }) => navigation,
  );

  const handleSchoolClick = (id: string) => dispatch(setCurrentSchoolId(id));

  useEffect(() => {
    dispatch(launchNavigation());
  }, []);

  return (
    <Container>
      <Sidebar>
        <InnerSidebar>
          <LogoMenu
            schools={schools}
            isOpen={logoMenuIsOpen}
            setIsOpen={setLogoMenuIsOpen}
            currentSchoolId={currentSchoolId}
            handleSchoolClick={handleSchoolClick}
          />
          <NavPanel logoMenuIsOpen={logoMenuIsOpen} />
          <BottomContainer>
            <ProfileLink />
          </BottomContainer>
        </InnerSidebar>
      </Sidebar>
      <ContentBox>{children}</ContentBox>
    </Container>
  );
};

export default Navigation;
