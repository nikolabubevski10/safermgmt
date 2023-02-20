import React, { useState } from 'react';
import Bump from './components/bump/Bump';
import {
  Container,
  Svg,
  OuterOptionsBox,
  InnerOptionsBox,
} from './OptionsButtonStyles';
import DeleteButton from './components/delete-button/DeleteButton';
import EditButton from './components/edit-button/EditButton';

interface Props {
  editClick: React.MouseEventHandler;
  deleteClick: () => void;
}

const OptionsButton: React.FC<Props> = ({ editClick, deleteClick }: Props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Svg
        isHovering={isHovering}
        viewBox="0 0 6 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" />
        <circle cx="3" cy="25" r="3" />
        <circle cx="3" cy="14" r="3" />
      </Svg>
      <OuterOptionsBox isHovering={isHovering}>
        <Bump />
        <InnerOptionsBox>
          <EditButton onClick={editClick} />
          <DeleteButton onClick={deleteClick} />
        </InnerOptionsBox>
      </OuterOptionsBox>
    </Container>
  );
};

export default OptionsButton;
