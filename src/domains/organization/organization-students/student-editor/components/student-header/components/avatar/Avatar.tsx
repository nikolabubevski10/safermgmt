import React from 'react';
import { AvatarImg } from './AvatarStyles';
import mockAvatar from './assets/mockAvatar.jpg';

const Avatar: React.FC = () => {
  return <AvatarImg src={mockAvatar} />;
};

export default Avatar;
