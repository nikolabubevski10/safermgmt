import React, { useState, useEffect } from 'react';
import {
  Background,
  BigText,
  Border,
  Container,
  SmallText,
} from './LogoMenuStyles';
import S from './components/s/S';
import Schools from './components/schools/Schools';
import { ISchool } from '../../state/types';

interface Props {
  schools: ISchool[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentSchoolId: string | null;
  handleSchoolClick: (id: string) => void;
}

const transitionDurationInSec = 0.3;

const LogoMenu: React.FC<Props> = ({
  schools,
  isOpen,
  setIsOpen,
  currentSchoolId,
  handleSchoolClick,
}: Props) => {
  const [bottomClip, setBottomClip] = useState<number>(200);
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (schools.length === 1) return;
    const buttonElem = e.target as HTMLButtonElement;
    handleSchoolClick(buttonElem.value);
    setIsOpen(false);
  };

  // delay z-index change until fully closed
  useEffect(() => {
    if (isOpen) return setIsOnTop(isOpen);
    setTimeout(() => {
      setIsOnTop(isOpen);
    }, transitionDurationInSec * 1000);
  }, [isOpen]);

  return (
    <Container isOnTop={isOnTop}>
      <Background
        bottomClip={bottomClip}
        transitionDurationInSec={transitionDurationInSec}
      >
        <S />
        <BigText>Safer</BigText>
        <SmallText>Management</SmallText>
        <Border />
        <Schools
          setBottomClip={setBottomClip}
          schools={schools}
          isOpen={isOpen}
          currentSchoolId={currentSchoolId}
          toggleMenu={toggleMenu}
          handleSchoolClick={onClick}
        />
      </Background>
    </Container>
  );
};

export default LogoMenu;
