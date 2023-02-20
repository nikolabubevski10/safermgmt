import React from 'react';

import { ContainerA } from './ClearButtonStyles';

interface Props {
  onClick: () => void;
}

const ClearButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <ContainerA onClick={onClick}>
      <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.497173"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8038 0.147052C16.0974 -0.0708027 16.5141 -0.0465967 16.7803 0.21967C17.0732 0.512563 17.0732 0.987437 16.7803 1.28033L9.56066 8.5L16.7803 15.7197C17.0732 16.0126 17.0732 16.4874 16.7803 16.7803C16.5141 17.0466 16.0974 17.0708 15.8038 16.8529L15.7197 16.7803L8.5 9.56066L1.28033 16.7803L1.19621 16.8529C0.902601 17.0708 0.485936 17.0466 0.21967 16.7803C-0.0732233 16.4874 -0.0732233 16.0126 0.21967 15.7197L7.43934 8.5L0.21967 1.28033C-0.0732227 0.987437 -0.0732227 0.512563 0.21967 0.21967C0.485937 -0.0465967 0.902601 -0.0708027 1.19621 0.147052L1.28033 0.21967L8.5 7.43934L15.7197 0.21967L15.8038 0.147052Z"
          fill="#233948"
        />
      </svg>
    </ContainerA>
  );
};

export default ClearButton;
