import React from 'react';
import styled from 'styled-components';

const IconWarapper = styled.span`
  position: absolute;
  left: 15px;
  top: 18px;
`;

const SearchIcon: React.FC = () => (
  <IconWarapper>
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.503556"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.486 7.494C13.486 10.799 10.798 13.486 7.494 13.486C4.19 13.486 1.501 10.799 1.501 7.494C1.501 4.19 4.19 1.501 7.494 1.501C10.798 1.501 13.486 4.19 13.486 7.494ZM16.78 15.719L13.296 12.233C14.387 10.899 14.989 9.219 14.989 7.494C14.989 3.362 11.627 0 7.494 0C3.361 0 0 3.362 0 7.494C0 11.627 3.361 14.989 7.494 14.989C9.218 14.989 10.899 14.388 12.233 13.296L15.718 16.78C15.86 16.922 16.049 17.001 16.249 17.001C16.449 17.001 16.638 16.922 16.78 16.78C16.922 16.639 17 16.45 17 16.249C17 16.049 16.922 15.86 16.78 15.719Z"
        fill="#233948"
      />
    </svg>
  </IconWarapper>
);

export default SearchIcon;
