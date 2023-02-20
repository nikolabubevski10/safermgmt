import React from 'react';
import { Container } from './UploadButtonStyles';
import Upload_Icon from '../../assets/icons/upload-icon.svg';

interface Props {
  onClick: () => void;
}

const UploadButton: React.FC<Props> = (props: Props) => {
  const { onClick } = props;

  return (
    <Container onClick={onClick}>
      <img src={Upload_Icon} alt="upload-profile" />
    </Container>
  );
};

export default UploadButton;
