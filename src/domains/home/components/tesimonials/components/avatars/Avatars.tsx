import React from 'react';
import {
  AvatarContainer,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from './AvatarsStyles';
import blank from '../../assets/avatars/blank.png';
// import person1 from '../../assets/avatars/person1.png';
// import person2 from '../../assets/avatars/person2.png';
// import person3 from '../../assets/avatars/person3.png';
// import person4 from '../../assets/avatars/person4.png';
// import person5 from '../../assets/avatars/person5.png';
// import person6 from '../../assets/avatars/person6.png';

const Avatars: React.FC = () => {
  return (
    <AvatarContainer>
      <Avatar1 src={blank} />
      <Avatar2 src={blank} />
      <Avatar3 src={blank} />
      <Avatar4 src={blank} />
      <Avatar5 src={blank} />
      <Avatar6 src={blank} />
    </AvatarContainer>
  );
};

export default Avatars;
