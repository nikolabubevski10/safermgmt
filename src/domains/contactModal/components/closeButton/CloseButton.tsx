import React from 'react';
import { Svg } from './CloseButtonStyles';

interface Props {
  onClick: () => void;
  isMessageSent: boolean;
}

const CloseButton: React.FC<Props> = ({ onClick, isMessageSent }: Props) => {
  return (
    <Svg
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      isMessageSent={isMessageSent}
    >
      <path d="M20.0607 0.93934C20.6099 1.48851 20.6442 2.35758 20.1636 2.94674L20.0607 3.06066L12.62 10.5L20.0607 17.9393C20.6465 18.5251 20.6465 19.4749 20.0607 20.0607C19.5115 20.6098 18.6425 20.6442 18.0533 20.1636L17.9393 20.0607L10.5 12.621L3.06068 20.0607C2.47489 20.6464 1.52513 20.6464 0.93934 20.0607C0.390165 19.5115 0.355846 18.6424 0.836374 18.0533L0.93934 17.9393L8.37904 10.5L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934C1.48852 0.390165 2.35756 0.355842 2.94673 0.83637L3.06068 0.93934L10.5 8.379L17.9393 0.93934C18.5251 0.353553 19.4749 0.353553 20.0607 0.93934Z" />
    </Svg>
  );
};

export default CloseButton;
