import React from 'react';
import {
  Container,
  ProfileImg,
  LogoWrapper,
  ProfileName,
  ProfileId,
  Description,
} from './StudentCartStyles';

import avatar from '../../assets/logo.png';

interface IStudentCartProps {
  name?: string;
  id?: string;
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
}

const StudentCart: React.FC<IStudentCartProps> = ({
  name,
  id,
  onClick,
}: IStudentCartProps) => {
  return (
    <Container onClick={onClick}>
      <LogoWrapper>
        <ProfileImg src={avatar} alt="avatar" />
      </LogoWrapper>
      <Description>
        <ProfileName>{name}</ProfileName>
        <ProfileId>{id}</ProfileId>
      </Description>
    </Container>
  );
};

export default StudentCart;
